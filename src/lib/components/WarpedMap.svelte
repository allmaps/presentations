<script lang="ts">
  import type { Snippet } from 'svelte'

  import { onMount } from 'svelte'

  import maplibregl, { Map, LngLatBounds, addProtocol } from 'maplibre-gl'
  import { Protocol } from 'pmtiles'

  import { basemapStyle, addTerrain } from '@allmaps/basemap'
  import { WarpedMapLayer } from '@allmaps/maplibre'
  import { GcpTransformer, type TransformationType } from '@allmaps/transform'
  import { parseAnnotation } from '@allmaps/annotation'
  import { fetchJson, computeBbox, combineBboxes } from '@allmaps/stdlib'

  import FlyTo from '$lib/components/FlyTo.svelte'

  import type { LngLatBoundsLike, StyleSpecification } from 'maplibre-gl'

  import MapMonster from '$lib/components/MapMonster.svelte'

  import 'maplibre-gl/dist/maplibre-gl.css'

  interface Props {
    annotationUrl: string
    caption?: string
    transformationType?: string
    active?: boolean
    hideMap?: boolean
    padding?: number
    children?: Snippet
  }

  const defaultPadding = 50

  let {
    annotationUrl,
    caption,
    transformationType,
    active = true,
    padding = defaultPadding,
    hideMap = false,
    children
  }: Props = $props()

  let mounted = $state(false)
  let initialized = $state(false)

  let container: HTMLDivElement
  let map: Map
  let warpedMapLayer: WarpedMapLayer

  let annotationUrls = new Set()

  const transformationTypes = [
    'straight',
    'helmert',
    'polynomial',
    'polynomial1',
    'polynomial2',
    'polynomial3',
    'projective',
    'thinPlateSpline'
  ]

  let currentAnnotationUrl = annotationUrl
  let currentTransformationType = (
    transformationType && transformationTypes.includes(transformationType)
      ? transformationType
      : 'polynomial'
  ) as TransformationType
  let currentCaption = $state(caption)

  async function boundsFromAnnotationUrl(
    annotationUrl: string,
    transformationType: TransformationType = 'polynomial'
  ): Promise<LngLatBoundsLike | undefined> {
    const annotation = await fetchJson(annotationUrl)
    const maps = parseAnnotation(annotation)

    let bbox: [number, number, number, number] | undefined

    for (const map of maps) {
      const differentHandedness =
        transformationType === 'straight' || transformationType === 'helmert'

      const transformer = new GcpTransformer(map.gcps, transformationType, {
        differentHandedness
      })

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

  const emptyBaseMapStyle: StyleSpecification = {
    ...basemapStyle('en'),
    layers: []
  }

  async function initializeMap() {
    const protocol = new Protocol()
    addProtocol('pmtiles', protocol.tile)

    const bounds = await boundsFromAnnotationUrl(
      annotationUrl,
      currentTransformationType
    )

    const style = hideMap ? emptyBaseMapStyle : basemapStyle('en')

    map = new Map({
      container,
      style,
      maxPitch: 0,
      hash: false,
      keyboard: false,
      attributionControl: false,
      canvasContextAttributes: {
        preserveDrawingBuffer: true
      }
    })

    if (!hideMap) {
      // @ts-expect-error incompatible MapLibre types
      addTerrain(map, maplibregl)
    }

    if (bounds) {
      map.fitBounds(bounds, { padding, animate: false })
    }

    map.on('load', async () => {
      warpedMapLayer = new WarpedMapLayer()

      // @ts-expect-error incompatible MapLibre types
      map.addLayer(warpedMapLayer)

      annotationUrls.add(currentAnnotationUrl)

      warpedMapLayer
        .addGeoreferenceAnnotationByUrl(currentAnnotationUrl)
        .then((ids) =>
          warpedMapLayer.setMapsTransformationType(
            ids,
            currentTransformationType
          )
        )

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

  async function flyTo(
    annotationUrl: string,
    transformationType: TransformationType,
    padding: number = defaultPadding,
    caption: string
  ) {
    if (annotationUrl === currentAnnotationUrl) {
      if (transformationType !== currentTransformationType) {
        if (transformationTypes.includes(transformationType)) {
          const mapIds = warpedMapLayer.getWarpedMapList().getMapIds()
          warpedMapLayer.setMapsTransformationType(mapIds, transformationType)
          const bounds = warpedMapLayer.getBounds()
          if (bounds) {
            map.fitBounds(bounds, { padding, animate: true })
          }
          currentTransformationType = transformationType
        }
      }
      if (hideMap) {
        // Show map again after first slide
        const { layers } = basemapStyle('en')
        layers.forEach((layer) => map.addLayer(layer, 'warped-map-layer'))
        hideMap = false
      }
      currentCaption = caption
      return
    }

    if (initialized) {
      if (!annotationUrls.has(annotationUrl)) {
        await warpedMapLayer.addGeoreferenceAnnotationByUrl(annotationUrl)
      }

      const bounds = await boundsFromAnnotationUrl(annotationUrl)

      if (bounds) {
        map.fitBounds(bounds, { padding, animate: true })
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
        const { annotationUrl, transformationType, padding, caption } =
          customEvent.detail
        flyTo(annotationUrl, transformationType, padding, caption)
      }
    })
  })
</script>

<div class="w-screen h-screen" bind:this={container}>
  <!-- <FlyTo {annotationUrl} /> -->
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
