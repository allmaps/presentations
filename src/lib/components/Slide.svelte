<script lang="ts">
  import { onMount, onDestroy, setContext } from 'svelte'

  type Props = {
    hideLogo?: boolean
    stretch?: boolean
    fullScreen?: boolean
    children?: any
    preload?: boolean
    horizontal?: boolean
  }

  let {
    hideLogo = false,
    preload = false,
    stretch = false,
    fullScreen = false,
    horizontal = false,
    children
  }: Props = $props()

  let container: HTMLElement
  let observer: MutationObserver

  let slideState = $state({
    active: false,
    index: 0
  })

  setContext('slide', slideState)

  onMount(() => {
    observer = new MutationObserver(() => {
      slideState.active = container.classList.contains('present')
      if (container.dataset.fragment) {
        slideState.index = Number(container.dataset.fragment) + 1
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

<section
  bind:this={container}
  class:section-no-logo={hideLogo}
  class:section-stretch={stretch}
  class:section-horizontal={horizontal}
  class:p-0={fullScreen}
>
  {#if slideState.active || preload}
    {@render children?.()}
  {/if}
</section>
