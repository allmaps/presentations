<script lang="ts">
  import { onMount } from 'svelte'

  interface Props {
    annotationUrl: string
  }

  let { annotationUrl }: Props = $props()

  let container: HTMLDivElement
  let active = false

  onMount(() => {
    new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.attributeName === 'class' &&
          mutation.target instanceof HTMLElement
        ) {
          const currentActive =
            mutation.target.classList.contains('current-fragment')

          if (currentActive !== active) {
            active = currentActive
            container.dispatchEvent(
              new CustomEvent('flyTo', {
                detail: { annotationUrl, active },
                bubbles: true
              })
            )
          }
        }
      })
    }).observe(container, {
      attributes: true
    })
  })
</script>

<div
  class="fragment contents"
  bind:this={container}
  data-annotation-url={annotationUrl}
></div>
