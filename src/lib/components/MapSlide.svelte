<script lang="ts">
  import { onMount, onDestroy } from 'svelte'
  import WarpedMap from './WarpedMap.svelte'
  import MapMonster from './MapMonster.svelte'
  import { getValueAsArray } from '$lib/shared/functions'
  import type { MapViewProps } from '$lib/types/warped-map'

  type Props = {
    views: MapViewProps | MapViewProps[]
  }

  let { views }: Props = $props()

  const viewsArray = getValueAsArray(views)

  let active = $state(false)
  let index: number | undefined = $state(undefined)

  let container: HTMLElement
  let observer: MutationObserver

  let currentCaption = $derived(index ? viewsArray[index]?.caption : undefined)

  onMount(() => {
    observer = new MutationObserver(() => {
      active = container.classList.contains('present')
      if (container.dataset.fragment) {
        index = Number(container.dataset.fragment) + 1
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

<section bind:this={container}>
  {#if active && index !== undefined}
    <WarpedMap views={viewsArray} {index} />
  {/if}
  {#if viewsArray.length > 1}
    {#each viewsArray.slice(1)}
      <div class="hidden fragment"></div>
    {/each}
  {/if}
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
</section>
