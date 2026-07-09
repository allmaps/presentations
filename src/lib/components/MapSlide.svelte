<script lang="ts">
  import { onMount, onDestroy } from 'svelte'
  import { fade } from 'svelte/transition'
  import WarpedMap from './WarpedMap.svelte'
  import MapMonster from './MapMonster.svelte'
  import { getValueAsArray } from '$lib/shared/utils'
  import type { MapChapterProps } from '$lib/types/warped-map'
  import type { LayerSpecification, SourceSpecification } from 'maplibre-gl'

  type Props = {
    chapters: MapChapterProps | MapChapterProps[]
    isDarkMode?: boolean
    duration?: number
    locale?: string
    showLabels?: boolean
    sources?: {
      [key: string]: SourceSpecification
    }
    layers?: LayerSpecification[] | LayerSpecification
  }

  let {
    chapters,
    isDarkMode,
    duration,
    locale,
    showLabels,
    layers,
    sources
  }: Props = $props()

  const chaptersArray = getValueAsArray(chapters)

  let active = $state(false)
  let index: number | undefined = $state(undefined)

  let container: HTMLElement
  let observer: MutationObserver

  let currentChapter = $derived(
    index !== undefined ? chaptersArray[index] : undefined
  )
  let currentChapterCaption = $derived(currentChapter?.caption)
  let currentWarpedMaps = $derived(
    currentChapter?.warpedMaps
      ? getValueAsArray(currentChapter.warpedMaps)
      : undefined
  )
  let currentWarpedMapsHaveCaptions = $derived(
    currentWarpedMaps
      ? currentWarpedMaps.some(
          (warpedMap) =>
            warpedMap.caption && !warpedMap?.options?.visible !== false
        )
      : undefined
  )

  onMount(() => {
    observer = new MutationObserver(() => {
      active = container.classList.contains('present')
      if (container.dataset.fragment) {
        index = Number(container.dataset.fragment) + 1
      } else {
        index = 0
      }
    })

    observer.observe(container, {
      attributes: true
    })
  })

  onDestroy(() => {
    observer.disconnect()
  })
</script>

<section class="section-stretch p-0" bind:this={container}>
  {#if active && index !== undefined}
    <WarpedMap
      chapters={chaptersArray}
      {index}
      {duration}
      {layers}
      {sources}
      {showLabels}
      {isDarkMode}
      {locale}
    />
  {/if}
  {#if chaptersArray.length > 1}
    {#each chaptersArray.slice(1)}
      <div class="hidden fragment"></div>
    {/each}
  {/if}
  {#if currentChapterCaption}
    <div
      class="pointer-events-none absolute top-0 left-0 w-full h-full text-left text-2xl"
      transition:fade
    >
      <div class="flex items-end h-full px-24 py-12">
        <MapMonster mood="excited" color="green">
          <p class="p-4 max-w-xl">
            {@html currentChapterCaption}
          </p>
        </MapMonster>
      </div>
    </div>
  {/if}
  {#if currentWarpedMapsHaveCaptions}
    <div
      class="absolute text-left max-w-full min-w-0 text-xl left-6 top-6 px-4 py-1 shadow-md z-20 bg-white rounded-lg"
      transition:fade
    >
      {#each currentWarpedMaps as warpedMap}
        {#if warpedMap.caption && warpedMap.options?.visible !== false}
          <p>
            ●
            {#if warpedMap.homepage}
              <a href={warpedMap.homepage}>{@html warpedMap.caption}</a>
            {:else}
              {@html warpedMap.caption}
            {/if}
          </p>
        {/if}
      {/each}
    </div>
  {/if}
</section>
