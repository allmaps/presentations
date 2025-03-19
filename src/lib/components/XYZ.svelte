<script lang="ts">
  import type { Snippet } from 'svelte'

  import { onMount } from 'svelte'

  import { Map } from 'maplibre-gl'

  interface Props {
    active?: boolean
    tileUrl: string
    center: [number, number]
    zoom: number
    children?: Snippet
  }

  let { active = false, tileUrl, center, zoom, children }: Props = $props()

  let mounted = $state(false)

  let container: HTMLDivElement
  let map: Map

  async function initializeMap() {
    map = new Map({
      container,

      style: {
        version: 8,
        sources: {
          'raster-tiles': {
            type: 'raster',
            tiles: [tileUrl],
            tileSize: 256
          }
        },
        layers: [
          {
            id: 'simple-tiles',
            type: 'raster',
            source: 'raster-tiles',
            minzoom: 0,
            maxzoom: 22
          }
        ]
      },
      center,
      zoom,
      maxPitch: 0,
      hash: false,
      keyboard: false,
      attributionControl: false
    })
  }

  function removeMap() {
    map?.remove()
  }

  $effect(() => {
    if (mounted && active) {
      initializeMap()
    } else if (mounted && !active) {
      setTimeout(() => removeMap(), 1000)
    }
  })

  onMount(() => {
    mounted = true
  })
</script>

<div class="w-screen h-screen bg-[#000]" bind:this={container}>
  {@render children?.()}
</div>
