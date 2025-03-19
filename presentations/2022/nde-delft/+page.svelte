<script context="module">
  export const title = 'Nieuwe versie Allmaps Viewer - Bijeenkomst NDE in Delft'
  export const date = Date.parse('01 Jan 2022')
</script>

<script lang="ts">
  import Title from '$lib/components/Title.svelte'
</script>

<svelte:head>
  <title>Nieuwe versie Allmaps Viewer</title>
</svelte:head>

<Title>
  <h1>Allmaps</h1>
  <p>Ontwikkeling nieuwe versie <br />Allmaps Viewer</p>
</Title>

<section>
  <img
    alt="Current version of Allmaps Viewer"
    src="https://allmaps.org/cards/allmaps-viewer.jpg"
  />
  <p>Huidige versie: één kaart tegelijk</p>
</section>

<section>
  <img
    alt="Atlas of West-Roxbury"
    src="/images/nde-delft-december-2022/west-roxbury.jpg"
  />
  <p>Van de kaarten weten we wáár in de wereld ze thuishoren</p>
</section>

<section>
  <img
    alt="Masks in QGIS"
    src="/images/nde-delft-december-2022/qgis-masks.jpg"
  />
  <p>Hoe presenteren we al deze kaarten op een overzichtelijke manier?</p>
</section>

<section>
  <img
    alt="Clustering: overlap"
    src="/images/nde-delft-december-2022/clustering/overlap.png"
  />
  <p>Kaarten tonen hetzelfde gebied</p>
</section>

<section>
  <img
    alt="Clustering: distance"
    src="/images/nde-delft-december-2022/clustering/distance.png"
  />
  <p>Grote onderlinge geografische afstand</p>
</section>

<section>
  <img
    alt="Clustering: scale"
    src="/images/nde-delft-december-2022/clustering/scale.png"
  />
  <p>Verschil in schaal</p>
</section>

<section>
  <img
    alt="Clustering: stitching"
    src="/images/nde-delft-december-2022/clustering/stitched.png"
  />
  <p>Verschillende afbeeldingen vormen één kaart</p>
</section>

<!-- Stadsarchief Amsterdam - Publieke Werken 1909 -->

<!-- <section>
  <iframe
    class="w-full"
    data-src="https://dev.viewer.allmaps.org/?url=https://raw.githubusercontent.com/allmaps/webgl2-preview/main/static/publieke-werken-1909.json"
    data-preload
  />
</section> -->

<!--
  From: https://github.com/tu-delft-library/rivierkaarten-iiif/tree/main/Output/georef
    https://raw.githubusercontent.com/tu-delft-library/rivierkaarten-iiif/main/Output/georef/georef_EERSTE_DRUK_1.json
    https://raw.githubusercontent.com/tu-delft-library/rivierkaarten-iiif/main/Output/georef/georef_EERSTE_DRUK_2.json
    https://raw.githubusercontent.com/tu-delft-library/rivierkaarten-iiif/main/Output/georef/georef_EERSTE_DRUK_3.json
    https://raw.githubusercontent.com/tu-delft-library/rivierkaarten-iiif/main/Output/georef/georef_EERSTE_DRUK_4.json
    https://raw.githubusercontent.com/tu-delft-library/rivierkaarten-iiif/main/Output/georef/georef_EERSTE_DRUK_5.json
    https://raw.githubusercontent.com/tu-delft-library/rivierkaarten-iiif/main/Output/georef/georef_EERSTE_DRUK_6.json
-->

<section class="section-stretch">
  <iframe
    title="Rivierkaarten"
    data-src="https://dev.viewer.allmaps.org/?url=https://raw.githubusercontent.com/allmaps/presentations/main/nde-delft-december-2022/annotations/rivierkaarten.json"
    data-preload
  />
</section>

<!--
  Pharus-Plan, polona.pl:
  https://polona.pl/iiif/item/NDU5Mzc0OTA/manifest.json
  https://polona.pl/iiif/item/NTU5NTE4OTg/manifest.json
  https://polona.pl/iiif/item/NTMxNTM3MjE/manifest.json
  https://polona.pl/iiif/item/MTM1MDg5NTM4/manifest.json
  https://polona.pl/iiif/item/MzI1ODMzNg/manifest.json
  https://polona.pl/iiif/item/MzE1ODUxNjg/manifest.json
  https://polona.pl/iiif/item/NTMxNTM3MjE/manifest.json
  https://polona.pl/iiif/item/MzI1MDczODY/manifest.json
  https://polona.pl/iiif/item/MzAzMTEyNTQ/manifest.json
  https://polona.pl/iiif/item/NDk4NDM5OTg/manifest.json
  -->

<section class="section-stretch">
  <iframe
    title="Pharus-Plan maps from polona.pl"
    data-src="https://dev.viewer.allmaps.org/?url=https://raw.githubusercontent.com/allmaps/presentations/main/nde-delft-december-2022/annotations/polona.json"
    data-preload
  />
</section>

<!-- Selectie VU-kaarten -->

<section class="section-stretch">
  <iframe
    title="Vrije Universiteit maps"
    data-src="https://dev.viewer.allmaps.org/?url=https://raw.githubusercontent.com/allmaps/presentations/main/nde-delft-december-2022/annotations/vu.json"
    data-preload
  />
</section>

<!-- Selectie Leiden -->

<section class="section-stretch">
  <iframe
    title="Leiden University maps"
    data-src="https://dev.viewer.allmaps.org/?url=https://raw.githubusercontent.com/allmaps/presentations/main/nde-delft-december-2022/annotations/leiden.json"
    data-preload
  />
</section>

<section>
  <img
    alt="Clustering: combined"
    src="/images/nde-delft-december-2022/clustering/combined.png"
  />
  <p>Hoe visualiseren we een collectie kaarten zoals hierboven?</p>
  <p>
    Kaarten groeperen die bij elkaar horen, gebruikers snel laten wisselen en
    laten vergelijken
  </p>
</section>
