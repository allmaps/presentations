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

  import type { LngLatBoundsLike } from 'maplibre-gl'

  import 'maplibre-gl/dist/maplibre-gl.css'

  interface Props {
    annotationUrl: string
    active?: boolean
    children?: Snippet
  }

  let { annotationUrl, active = true, children }: Props = $props()

  let mounted = $state(false)
  let initialized = $state(false)

  let container: HTMLDivElement
  let map: Map
  let warpedMapLayer: WarpedMapLayer

  let annotationUrls = new Set()

  let currentAnnotationUrl = annotationUrl

  async function boundsFromAnnotationUrl(
    annotationUrl: string
  ): Promise<LngLatBoundsLike | undefined> {
    const annotation = await fetchJson(annotationUrl)
    const maps = parseAnnotation(annotation)

    let bbox: [number, number, number, number] | undefined

    for (const map of maps) {
      const transformer = new GcpTransformer(map.gcps)

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
      style: basemapStyle('en'),
      maxPitch: 0,
      hash: false,
      keyboard: false,
      attributionControl: false,
      canvasContextAttributes: {
        preserveDrawingBuffer: true
      }
    })

    addTerrain(map, maplibregl)

    if (bounds) {
      map.fitBounds(bounds, { padding: -350, animate: false })
    }

    map.on('load', async () => {
      warpedMapLayer = new WarpedMapLayer()
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
  }

  async function flyTo(annotationUrl: string) {
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
        flyTo(customEvent.detail.annotationUrl)
      }


    })

    // new MutationObserver((mutations) => {
    //   const element = container.querySelector(
    //     '.fragment.current-fragment'
    //   ) as HTMLElement
    //   if (element && element.dataset.annotationUrl) {
    //     flyTo(element.dataset.annotationUrl)
    //   } else if (active) {
    //     flyTo(annotationUrl)
    //   }
    // }).observe(container, {
    //   attributes: true,
    //   subtree: true
    // })
  })
</script>

<div class="w-screen h-screen" bind:this={container}>
  {@render children?.()}
</div>
