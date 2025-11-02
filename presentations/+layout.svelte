<script lang="ts">
  import { onMount, onDestroy, tick } from 'svelte'
  import { fade } from 'svelte/transition'
  import { page } from '$app/stores'

  import Reveal, { type Api as RevealApi } from 'reveal.js'
  import revealConfig from './reveal.config.js'

  import { setRevealState } from '$lib/state/reveal.svelte.js'

  import logo from '$lib/shared/images/allmaps-logo.svg'

  import '@allmaps/ui/css/fonts.css'
  import 'reveal.js/dist/reveal.css'
  import '$lib/highlight-styles/atom-one-light.css'

  import './theme.css'
  import './app.css'

  import type { Snippet } from 'svelte'

  type Props = {
    children?: Snippet
  }

  let { children }: Props = $props()

  const revealState = setRevealState()

  let reveal: RevealApi | undefined

  const showIndex = $page.route.id === '/'

  function handleLogoClick(event: MouseEvent) {
    if (!reveal) {
      return
    }

    if (event.shiftKey) {
      reveal.prev()
    } else {
      reveal.next()
    }
  }

  onMount(async () => {
    if (!showIndex) {
      await tick()

      reveal = new Reveal(revealConfig)
      reveal.initialize()

      revealState.reveal = reveal

      reveal.on('ready', revealState.handleSlideChanged.bind(revealState))
      reveal.on(
        'slidechanged',
        revealState.handleSlideChanged.bind(revealState)
      )
      reveal.on(
        'fragmentshown',
        revealState.handleFragmentShown.bind(revealState)
      )
      reveal.on(
        'fragmenthidden',
        revealState.handleFragmentHidden.bind(revealState)
      )
    }
  })

  onDestroy(() => {
    if (!reveal) {
      return
    }

    reveal.off('ready', revealState.handleSlideChanged.bind(revealState))
    reveal.off('slidechanged', revealState.handleSlideChanged.bind(revealState))
    reveal.off(
      'fragmentshown',
      revealState.handleFragmentShown.bind(revealState)
    )
    reveal.off(
      'fragmenthidden',
      revealState.handleFragmentHidden.bind(revealState)
    )
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
  {#if revealState.displayLogo}
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
