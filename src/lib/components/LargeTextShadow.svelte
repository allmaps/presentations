<script lang="ts">
  import type { Snippet } from 'svelte'

  type Props = {
    children?: Snippet
  }

  let { children }: Props = $props()
</script>

<div class="text-[13rem] break-all font-bold animating-shadow">
  {@render children?.()}
</div>

<style>
  .animating-shadow {
    animation-duration: 800ms;
    animation-name: animating-shadow;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  @keyframes animating-shadow {
    0% {
      letter-spacing: 1px;
      text-shadow: 2px 2px 2px #ffef11;
    }
    100% {
      letter-spacing: 10px;
      text-shadow: 25px 25px 20px #ff00a6;
    }
  }
</style>
