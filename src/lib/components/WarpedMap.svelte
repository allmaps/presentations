<script lang="ts">
  import { onMount } from 'svelte'

  import maplibregl, { Map, addProtocol } from 'maplibre-gl'
  import { Protocol } from 'pmtiles'

  import { basemapStyle, addTerrain } from '@allmaps/basemap'
  import { WarpedMapLayer } from '@allmaps/maplibre'
  import { GcpTransformer } from '@allmaps/transform'
  import { parseAnnotation } from '@allmaps/annotation'
  import { fetchJson, computeBbox, combineBboxes } from '@allmaps/stdlib'

  import 'maplibre-gl/dist/maplibre-gl.css'

  export let annotationUrl: string
  export let active = true

  let mounted = false
  let initialized = false

  let container: HTMLDivElement
  let map: Map
  let warpedMapLayer: WarpedMapLayer

  let annoationUrls = new Set()

  let currentAnnotationUrl = annotationUrl

  async function boundsFromAnnotationUrl(annotationUrl: string) {
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

      computeBbox(polygon)
    }

    return bbox
  }

  async function initializeMap() {
    const protocol = new Protocol()
    addProtocol('pmtiles', protocol.tile)

    const bounds = await boundsFromAnnotationUrl(annotationUrl)

    map = new Map({
      container,
      style: basemapStyle(),
      maxPitch: 0,
      preserveDrawingBuffer: true,
      hash: false,
      keyboard: false,
      attributionControl: false
    })

    addTerrain(map, maplibregl)

    map.fitBounds(bounds, { padding: -350, animate: false })

    map.on('load', async () => {
      warpedMapLayer = new WarpedMapLayer()
      map.addLayer(warpedMapLayer)

      annoationUrls.add(currentAnnotationUrl)
      await warpedMapLayer.addGeoreferenceAnnotationByUrl(currentAnnotationUrl)
      initialized = true
    })
  }

  function removeMap() {
    warpedMapLayer.clear()
    map?.remove()
    initialized = false
    annoationUrls = new Set()
    currentAnnotationUrl = annotationUrl
  }

  async function flyTo(annotationUrl: string) {
    if (annotationUrl === currentAnnotationUrl) {
      return
    }

    if (initialized) {
      if (!annoationUrls.has(annotationUrl)) {
        await warpedMapLayer.addGeoreferenceAnnotationByUrl(annotationUrl)
      }

      const bounds = await boundsFromAnnotationUrl(annotationUrl)

      map.fitBounds(bounds, { padding: 25, animate: true })

      annoationUrls.add(annotationUrl)

      currentAnnotationUrl = annotationUrl
    }
  }

  $: {
    if (mounted && active && !initialized) {
      initializeMap()
    } else if (mounted && !active && initialized) {
      setTimeout(() => removeMap(), 1000)
    }
  }

  onMount(() => {
    mounted = true

    container.addEventListener('flyTo', (event: Event) => {
      const customEvent = event as CustomEvent
      if (customEvent.detail.active) {
        flyTo(customEvent.detail.annotationUrl)
      }

      // console.log(customEvent.detail)
    })

    // new MutationObserver((mutations) => {
    //   mutations.forEach((mutation) => {
    //     // console.log(mutation)
    //   })

    //   const element = container.querySelector(
    //     '.fragment.current-fragment'
    //   ) as HTMLElement
    //   if (element && element.dataset.annotationUrl) {
    //     flyTo(element.dataset.annotationUrl)
    //   } else if (active) {
    //     flyTo(annotationUrl)
    //     console.log('nee', active)
    //   }
    // }).observe(container, {
    //   attributes: true,
    //   subtree: true
    // })
  })
</script>

<div class="w-screen h-screen" bind:this={container}>
  <slot />
</div>
