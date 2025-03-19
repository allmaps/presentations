<script lang="ts">
  import type { Snippet } from 'svelte'

  import { onMount } from 'svelte'
  interface Props {
    children?: Snippet<[{ active: boolean }]>
  }

  let { children }: Props = $props()

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

<section bind:this={container}>
  {@render children?.({ active })}
</section>
