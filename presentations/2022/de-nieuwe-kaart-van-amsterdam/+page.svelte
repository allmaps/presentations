<script context="module">
  export const title = 'De nieuwe kaart van Amsterdam'
  export const date = Date.parse('31 Oct 2022')
</script>

<script lang="ts">
  import Slide from '$lib/components/Slide.svelte'
  import Title from '$lib/components/Title.svelte'
  import MapMonster from '$lib/components/MapMonster.svelte'
  import ManyMapMonsters from '$lib/components/ManyMapMonsters.svelte'
  import MapThumbnails from '$lib/components/MapThumbnails.svelte'
  import WarpedMap from '$lib/components/WarpedMap.svelte'
  import FlyTo from '$lib/components/FlyTo.svelte'
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<section
  class="title"
  data-background="../assets/images/masks.svg"
  data-background-color="#101656"
  data-background-size="120%"
>
  <img
    width="200px"
    alt="Allmaps"
    src="https://raw.githubusercontent.com/allmaps/style/master/images/allmaps-logo-inverted.svg"
  />
  <h1>Allmaps</h1>
  <p>Open source tools voor <br />gedigitaliseerde cartografie</p>
</section>

<section>
  <div class="quote">
    <div>
      <img src="../assets/images/storms.jpg" />
    </div>
    <div>
      <blockquote>
        Een landkaart is gestolde nieuwsgierigheid en een historische landkaart
        vertelt het verhaal van tijden toen er nog veel meer nieuwsgierigheid
        was dan nu, omdat de wereld vele malen groter was dan nu. Wat het besef
        van elders doet ontluiken, is ons vermogen om de nauwkeurig uitgetekende
        nieuwsgierigheid na te reizen met onze wijsvinger.
        <br />
        <br />Ilja Leonard Pfeijffer
      </blockquote>
    </div>
  </div>
</section>

<section>
  <img src="https://allmaps.org/cards/allmaps-viewer.jpg" />
</section>

<section style="text-align: left">
  <p>Allmaps is een project van Bert Spaan en Jules Schoonman.</p>
  <p>We werken samen met:</p>
  <ul>
    <li>Universiteit Leiden</li>
    <li>Vrije Universiteit Amsterdam</li>
    <li>Boston Public Library</li>
    <li>OpenHistoricalMap</li>
    <li>Koninklijke Bibliotheek</li>
    <li>Universiteit Antwerpen</li>
  </ul>
</section>

<!-- <section data-background="../assets/images/haarlem.png"></section> -->

<section style="text-align: left">
  <p><strong>Het doel van Allmaps:</strong></p>
  <p>
    Zo veel mogelijk gedigitaliseerde kaarten toegankelijk en bruikbaar maken.
    Historische kaarten, kaarten van nu en kaarten van de toekomst.
  </p>
</section>
