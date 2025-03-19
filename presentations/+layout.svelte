<script lang="ts">
  import type { Snippet } from 'svelte'

  import { onMount, tick } from 'svelte'
  import { fade } from 'svelte/transition'
  import { page } from '$app/stores'

  import { reveal, currentSlide } from '$lib/shared/stores/reveal.js'

  import logo from '$lib/shared/images/allmaps-logo.svg'

  import '@allmaps/ui/css/fonts.css'
  import 'reveal.js/dist/reveal.css'
  import '$lib/highlight-styles/atom-one-light.css'

  import './theme.css'
  import './app.css'
  interface Props {
    children?: Snippet
  }

  let { children }: Props = $props()

  const showIndex = $page.route.id === '/'

  let displayLogo = $state(false)

  function handleLogoClick(event: MouseEvent) {
    if (event.shiftKey) {
      $reveal.prev()
    } else {
      $reveal.next()
    }
  }

  function handleSlideChanged(event: unknown) {
    if (event && typeof event === 'object' && 'currentSlide' in event) {
      $currentSlide = event.currentSlide as HTMLElement

      displayLogo = !$currentSlide?.classList.contains('section-no-logo')
    }
  }

  onMount(async () => {
    if (!showIndex) {
      const RevealModule = await import('reveal.js')
      const revealConfigModule = await import('./reveal.config.js')

      const Reveal = RevealModule.default
      const revealConfig = revealConfigModule.default

      await tick()
      $reveal = new Reveal(revealConfig)
      $reveal.initialize()

      $reveal.on('ready', handleSlideChanged)
      $reveal.on('slidechanged', handleSlideChanged)
    }
  })
</script>

{#if showIndex}
  {@render children?.()}
{:else}
  <div class="reveal">
    <div class="slides">
      {@render children?.()}
    </div>
  </div>
  {#if displayLogo}
    <div transition:fade|global class="absolute bottom-0 right-0 z-50 p-5">
      <div class="w-14">
        <button onclick={handleLogoClick}>
          <img
            class="w-full inline cursor-pointer"
            alt="Allmaps logo"
            src={logo}
          /></button
        >
      </div>
    </div>
  {/if}
{/if}
