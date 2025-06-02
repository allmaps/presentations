<script lang="ts">
  import type { Snippet } from 'svelte'

  import { onMount } from 'svelte'

  import maplibregl, { Map, LngLatBounds, addProtocol } from 'maplibre-gl'
  import { Protocol } from 'pmtiles'

  import { basemapStyle, addTerrain } from '@allmaps/basemap'
  import { WarpedMapLayer } from '@allmaps/maplibre'
  import { GcpTransformer } from '@allmaps/transform'
  import { parseAnnotation } from '@allmaps/annotation'
  import { fetchJson, computeBbox, combineBboxes } from '@allmaps/stdlib'

  import FlyTo from '$lib/components/FlyTo.svelte'

  import type { LngLatBoundsLike } from 'maplibre-gl'

  import MapMonster from '$lib/components/MapMonster.svelte'

  import 'maplibre-gl/dist/maplibre-gl.css'

  interface Props {
    annotationUrl: string
    caption?: string
    active?: boolean
    children?: Snippet
  }

  let { annotationUrl, caption, active = true, children }: Props = $props()

  let mounted = $state(false)
  let initialized = $state(false)

  let container: HTMLDivElement
  let map: Map
  let warpedMapLayer: WarpedMapLayer

  let annotationUrls = new Set()

  let currentAnnotationUrl = annotationUrl
  let currentCaption = $state(caption)

  async function boundsFromAnnotationUrl(
    annotationUrl: string
  ): Promise<LngLatBoundsLike | undefined> {
    const annotation = await fetchJson(annotationUrl)
    const maps = parseAnnotation(annotation)

    let bbox: [number, number, number, number] | undefined

    for (const map of maps) {
      const transformer = new GcpTransformer(map.gcps, map.transformation?.type)

      const polygon = transformer.transformToGeo(map.resourceMask)

      if (!bbox) {
        bbox = computeBbox(polygon)
      } else {
        bbox = combineBboxes(bbox, computeBbox(polygon))
      }
    }

    if (bbox) {
      return new LngLatBounds([bbox[0], bbox[1]], [bbox[2], bbox[3]])
    }
  }

  async function initializeMap() {
    const protocol = new Protocol()
    addProtocol('pmtiles', protocol.tile)

    const bounds = await boundsFromAnnotationUrl(annotationUrl)

    map = new Map({
      container,
      // @ts-expect-error incompatible MapLibre types
      style: basemapStyle('en'),
      maxPitch: 0,
      hash: false,
      keyboard: false,
      attributionControl: false,
      canvasContextAttributes: {
        preserveDrawingBuffer: true
      }
    })

    // @ts-expect-error incompatible MapLibre types
    addTerrain(map, maplibregl)

    if (bounds) {
      map.fitBounds(bounds, { padding: 25, animate: false })
    }

    map.on('load', async () => {
      warpedMapLayer = new WarpedMapLayer()

      // @ts-expect-error incompatible MapLibre types
      map.addLayer(warpedMapLayer)

      annotationUrls.add(currentAnnotationUrl)
      await warpedMapLayer.addGeoreferenceAnnotationByUrl(currentAnnotationUrl)
      initialized = true
    })
  }

  function removeMap() {
    warpedMapLayer.clear()
    map?.remove()
    initialized = false
    annotationUrls = new Set()
    currentAnnotationUrl = annotationUrl
    currentCaption = caption
  }

  async function flyTo(annotationUrl: string, caption: string) {
    if (annotationUrl === currentAnnotationUrl) {
      return
    }

    if (initialized) {
      if (!annotationUrls.has(annotationUrl)) {
        await warpedMapLayer.addGeoreferenceAnnotationByUrl(annotationUrl)
      }

      const bounds = await boundsFromAnnotationUrl(annotationUrl)

      if (bounds) {
        map.fitBounds(bounds, { padding: 25, animate: true })
      }

      annotationUrls.add(annotationUrl)

      currentAnnotationUrl = annotationUrl
      currentCaption = caption
    }
  }

  $effect(() => {
    if (mounted && active && !initialized) {
      initializeMap()
    } else if (mounted && !active && initialized) {
      setTimeout(() => removeMap(), 1000)
    }
  })

  onMount(() => {
    mounted = true

    container.addEventListener('flyTo', (event: Event) => {
      const customEvent = event as CustomEvent
      if (customEvent.detail.active) {
        flyTo(customEvent.detail.annotationUrl, customEvent.detail.caption)
      }
    })
  })
</script>

<div class="w-screen h-screen" bind:this={container}>
  <FlyTo {annotationUrl} />
  {@render children?.()}
</div>
{#if currentCaption}
  <div
    class="pointer-events-none absolute top-0 left-0 w-full h-full text-left text-2xl"
  >
    <div class="flex items-end h-full px-24 py-12">
      <MapMonster mood="excited" color="green">
        <p class="p-4 max-w-xl">
          {@html currentCaption}
        </p>
      </MapMonster>
    </div>
  </div>
{/if}
