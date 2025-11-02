<script lang="ts">
  import type { TransformationType } from '@allmaps/transform'
  import { onMount } from 'svelte'

  type Props = {
    annotationUrl: string
    transformationType?: TransformationType
    caption?: string
    padding?: number
    marker?: [number, number]
  }

  let { annotationUrl, transformationType, padding, caption, marker }: Props =
    $props()

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
                detail: {
                  annotationUrl,
                  transformationType,
                  padding,
                  caption,
                  active
                },
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
  data-transformation-type={transformationType}
  data-caption={caption}
  data-padding={padding}
></div>
