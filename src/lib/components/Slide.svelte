<script lang="ts">
  import { onMount, onDestroy, setContext } from 'svelte'

  type Props = {
    showLogo?: boolean
    children: any
    preload?: boolean
  }

  let { showLogo = true, preload = false, children }: Props = $props()

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

<section bind:this={container} class:section-no-logo={!showLogo}>
  {#if slideState.active || preload}
    {@render children?.()}
  {/if}
</section>
