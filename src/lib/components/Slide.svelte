<script lang="ts">
  import type { Snippet } from 'svelte'

  import { onMount } from 'svelte'

  type Props = {
    showLogo?: boolean
    children?: Snippet<[{ active: boolean }]>
  }

  let { children, showLogo = true }: Props = $props()

  let container: HTMLElement

  let active = $state(false)

  onMount(() => {
    new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.attributeName === 'class' &&
          mutation.target instanceof HTMLElement
        ) {
          const currentActive = mutation.target.classList.contains('present')
          if (currentActive !== active) {
            active = currentActive
          }
        }
      })
    }).observe(container, {
      attributes: true
    })
  })
</script>

<section bind:this={container} class={{ 'section-no-logo': !showLogo }}>
  {@render children?.({ active })}
</section>
