<script lang="ts">
  import { onMount } from 'svelte'
  import { page } from '$app/state'
  import { fade } from 'svelte/transition'

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

  let revealState = setRevealState()

  const showIndex = page.url.pathname === '/'

  function handleLogoClick(event: MouseEvent) {
    if (revealState.reveal) {
      if (event.shiftKey) {
        revealState.reveal.prev()
      } else {
        revealState.reveal.next()
      }
    }
  }

  onMount(() => {
    if (!showIndex) {
      revealState.initialize()
    }
    return revealState.destroy()
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
