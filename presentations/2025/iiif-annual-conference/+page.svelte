<script context="module">
  export const title = 'IIIF Annual Conference 2025 - Teaching with Allmaps'
  export const date = Date.parse('4 June 2025')
</script>

<script lang="ts">
  import Slide from '$lib/components/Slide.svelte'
  import Title from '$lib/components/Title.svelte'
  import MapMonster from '$lib/components/MapMonster.svelte'
  import ManyMapMonsters from '$lib/components/ManyMapMonsters.svelte'
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Title>
  <h3 class="text-white">Teaching with Allmaps</h3>
</Title>

<!-- Jules -->

<!-- Bert -->
<!--
  - Iedereen wil een kaart vinden van z'n eigen huis!
    - Show maps of a few of my houses, with marker?
    - How to find these maps? Link pixels on digitized maps with geospatial coordinates
  - Allmaps: georeferencing allows us to convert pixel coordinates to geospatial coordinates
    - GCPs
    - Interpolation, transformation algorithmms, with animation
    - Laat kaart zien met driehoek, drie GCPs, en dan fade van ene algoritme naar andere
  - Now we can warp maps and render them
    - WebGL, Canvas API, XYZ tiles, print
  - Allmaps Cursors
  - En voorbeeld LMEC, oude straten op kaart
  - Geospatial search!
  - Allmaps Here
    - Allmaps Here
    - Find maps based on your current location
    - Convert GPS location to pixel coordinates
    - Render preview image with canvas renderer on Cloudflare Workers
    - Met screenshot Signal, Slack, WhatsApp, etc.
    - Try it now!
  - En als ik nog tijd heb: projections?
 -->
