<script lang="ts">
  import { onMount } from 'svelte'

  let container: HTMLElement

  let active = false

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
  <slot {active} />
</section>
