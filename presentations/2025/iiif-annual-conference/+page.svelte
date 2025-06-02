<script context="module">
  export const title = 'IIIF Annual Conference 2025 - Teaching with Allmaps'
  export const date = Date.parse('4 June 2025')
</script>

<script lang="ts">
  import Slide from '$lib/components/Slide.svelte'
  import Title from '$lib/components/Title.svelte'
  import MapMonster from '$lib/components/MapMonster.svelte'
  import ManyMapMonsters from '$lib/components/ManyMapMonsters.svelte'
  import WarpedMap from '$lib/components/WarpedMap.svelte'
  import XYZ from '$lib/components/XYZ.svelte'
  import FlyTo from '$lib/components/FlyTo.svelte'
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Title>
  <h3 class="text-white">Teaching with Allmaps</h3>
</Title>

<!-- @todo add introduction slide -->

<section class="section-stretch">
  <img
    alt="Berlage Curriculum Structure"
    loading="lazy"
    src="/images/iiif-annual-conference-2025/berlage-curriculum-structure.jpg"
  />
  <div>
    <p class="text-2xl">
      Curriculum Structure of the postmaster’s program<br />
      The Berlage Center for Advanced Studies in Architecture and Urban Design<br
      />
      Delft University of Technology
    </p>
  </div>
</section>

<section class="section-stretch">
  <img
    alt="Berlage Curriculum Structure"
    loading="lazy"
    src="/images/iiif-annual-conference-2025/berlage-curriculum-structure-term-1.jpg"
  />
  <div>
    <p class="text-2xl">
      Curriculum Structure of the postmaster’s program<br />
      The Berlage Center for Advanced Studies in Architecture and Urban Design<br
      />
      Delft University of Technology
    </p>
  </div>
  <div class="absolute top-0 left-0 w-full h-full text-left text-3xl">
    <div class="flex items-end h-full px-24 py-12">
      <MapMonster mood="happy" color="pink">
        <p class="p-4 max-w-xl">
          Collaboration with Allmaps for<br />Project NL (term 1)
        </p>
      </MapMonster>
    </div>
  </div>
</section>

<section class="section-horizontal text-2xl">
  <div>
    <img
      alt="Part I: Documentation"
      loading="lazy"
      src="/images/iiif-annual-conference-2025/pt-1-documentation.jpg"
    />
    <p class="p-4">
      Part I: Documentation<br />
      <span class="fragment text-orange">
        Georeferencing maps and analysing them</span
      >
    </p>
  </div>
  <div>
    <img
      alt="Part II: Argumentation"
      loading="lazy"
      src="/images/iiif-annual-conference-2025/pt-2-argumentation.jpg"
    />
    <p class="p-4">
      Part II: Argumentation<br />
      <span class="fragment text-orange"
        >New drawings expressing a position about the site</span
      >
    </p>
  </div>
  <div>
    <img
      alt="Part III: Installation"
      loading="lazy"
      src="/images/iiif-annual-conference-2025/pt-3-installation.jpg"
    />
    <p class="p-4">
      Part III: Installation<br />
      <span class="fragment text-orange">
        Presentation in an exhibition, publication and digital app</span
      >
    </p>
  </div>
</section>

<section class="section-horizontal text-2xl">
  <div>
    <img
      alt="Workshop 2022"
      loading="lazy"
      src="/images/iiif-annual-conference-2025/workshop-2022.jpg"
    />
    <p class="p-4">
      River Atlas (2022-23)<br />
      <span class="text-orange">
        TU Delft Library<br />Vrije Universiteit Amsterdam</span
      >
    </p>
  </div>
  <div class="fragment">
    <img
      alt="Workshop 2023"
      loading="lazy"
      src="/images/iiif-annual-conference-2025/workshop-2023.jpg"
    />
    <p class="p-4">
      City Atlas (2023-24)<br />
      <span class="text-orange">
        Stadsarchief Amsterdam<br />Allard Pierson</span
      >
    </p>
  </div>
  <div class="fragment">
    <img
      alt="Workshop 2024"
      loading="lazy"
      src="/images/iiif-annual-conference-2025/workshop-2024.jpg"
    />
    <p class="p-4">
      Coast Atlas (2024-25)<br />
      <span class="text-orange"
        >National Archives<br />Stadsarchief Rotterdam</span
      >
    </p>
  </div>
</section>

<Slide>
  {#snippet children({ active })}
    <WarpedMap
      {active}
      annotationUrl="https://annotations.allmaps.org/manifests/752b29a50403371d"
      caption="River Map<br>First revision, series 2 (1873-1907)<br><i>Rijkswaterstaat</i>"
    >
      <FlyTo
        annotationUrl="https://annotations.allmaps.org/manifests/af012d4792961902"
        caption="Loman atlas of Amsterdam (1876)<br><i>Amsterdam City Archive</i>"
      />
      <FlyTo
        annotationUrl="https://annotations.allmaps.org/maps/35763f91a3ca51c5"
        caption="Algemeene Kaart van de<br>Duinen en Duingronden (1828)<br><i>Nationaal Archief</i>"
      />
    </WarpedMap>
  {/snippet}
</Slide>

<section class="section-horizontal text-2xl">
  <div>
    <img
      alt="Annotating maps in Placemark"
      loading="lazy"
      src="/images/iiif-annual-conference-2025/annotations-placemark-chao.jpg"
    />
    <p class="p-4">Annotating maps in Placemark...</p>
  </div>
  <div>
    <img
      alt="Annotating maps in Felt"
      loading="lazy"
      src="/images/iiif-annual-conference-2025/annotations-felt-yingxin.jpg"
    />
    <p class="p-4">...and Felt</p>
  </div>
  <div class="absolute fragment top-0 left-0 w-full h-full text-left text-3xl">
    <div class="flex items-end h-full px-24 py-12">
      <MapMonster mood="happy" color="pink">
        <p class="p-4 max-w-xl">
          The Allmaps Tile Server was used<br />to add historical maps
        </p>
      </MapMonster>
    </div>
  </div>
</section>

<section>
  <div>
    <img
      alt="Annotating maps in Placemark"
      loading="lazy"
      src="/images/iiif-annual-conference-2025/historical-reference-map.jpg"
    />
  </div>
  <div>
    <p class="p-4 text-3xl">
      <span class="text-orange">Feature request </span>
      Using a historical reference map
    </p>
  </div>
</section>

<section>
  <video
    class="shadow-lg"
    muted
    data-loop
    data-autoplay
    data-src="/videos/iiif-annual-conference-2025/documentation-slideshow-vijzelstraat.webm"
  ></video>
  <p class="p-4 text-3xl">
    <span class="text-orange">City Atlas</span>
    Vijzelstraat documentation
  </p>
</section>

<section>
  <video
    class="shadow-lg"
    muted
    data-loop
    data-autoplay
    data-src="/videos/iiif-annual-conference-2025/documentation-slideshow-defense-line.webm"
  ></video>
  <p class="p-4 text-3xl">
    <span class="text-orange">Coast Atlas</span>
    Defense Line documentation
  </p>
</section>

<section>
  <pre class="yml">
		<code data-line-numbers="2-6|7-18|19-24|25-31" data-trim data-noescape
      ><script type="text/template">
        ---
        meta: # Slide metadata
          heading: Subtitle # Slide heading
        viewer: # Viewer settings
          bbox: [4.651103, 51.78665, 4.768242, 51.832353] # Viewer bounding box
          rotation: 180 # Degrees
        allmaps: # List of maps
          - label: Map
            attribution: # Optional attribution
              name: Regionaal Archief Dordrecht
              url: https://www.regionaalarchiefdordrecht.nl
            annotation: annotation-01.json # Annotation filename
            opacity: 100 # 0-100
            removeBackground:
              color: '#f0dbbc' # Hex color code
              threshold: 20 # 0-100
              hardness: 20 # 0-100
            colorize: '#8c00ff' # Hex color code
        xyz:
          url: https://tile.openstreetmap.org/{z}/{x}/{y}.png # XZY url
          label: OpenStreetMap # Label for layer
        geojson:
          - filename: vector-01.geojson # Geojson filename
            label: Building outline # Optional label for vector
        legend: # Optional legend for geojson features
          - label: Building
            fill: #e30022 # Hex color code
            fill-opacity: 70 # 0-100
            stroke: #000000 # Hex color code
            stroke-opacity: 100 # 0-100
            circle: true # Use a circle
        ---
      </script></code
    >
  </pre>
  <p class="text-3xl">Slide encoding in markdown with frontmatter</p>
</section>

<section>
  <div>
    <img
      alt="Log of commits on GitHub"
      loading="lazy"
      src="/images/iiif-annual-conference-2025/github-log.jpg"
    />
  </div>
  <div>
    <p class="p-4 text-3xl">(Don't forget to squash commits...)</p>
  </div>
</section>

<section class="section-horizontal text-3xl">
  <div>
    <img
      alt="Collage of overview map"
      loading="lazy"
      src="/images/iiif-annual-conference-2025/overview-map-collage.jpg"
    />
    <p class="p-4">From physical collage...</p>
  </div>
  <div>
    <img
      alt="Render of overview map"
      loading="lazy"
      src="/images/iiif-annual-conference-2025/overview-map-render.jpg"
    />
    <p class="p-4">...to digital render...</p>
  </div>
  <div>
    <img
      alt="Print of overview map"
      loading="lazy"
      src="/images/iiif-annual-conference-2025/overview-map-print.jpg"
    />
    <p class="p-4">back to print!</p>
  </div>
</section>

<Slide>
  {#snippet children({ active })}
    <WarpedMap
      {active}
      annotationUrl="https://annotations.allmaps.org/maps/9ac18cbd99225ac6"
      caption="River Atlas<br><i>Fictional map of the Efteling in Rotterdam</i>"
    >
      <FlyTo
        annotationUrl="https://annotations.allmaps.org/images/e5c702e62b320f42"
        caption="River Atlas<br><i>Speculative River Map</i>"
      />
      <FlyTo
        annotationUrl="https://coastatlas.netlify.app/data/02-argumentation/02-seaside-buildings/allmaps/B4.json"
        caption="Coast Atlas<br><i>Seaside Buildings</i>"
      />
      <FlyTo
        annotationUrl="https://coastatlas.netlify.app/data/02-argumentation/01-an-engineered-landscape/allmaps/A4.json"
        caption="Coast Atlas<br><i>An Engineered Landscape</i>"
      />
      <FlyTo
        annotationUrl="https://cityatlas.theberlage.nl/data/03-argumentation/01-uilenburg/annotations/200uilenburg.json"
        caption="City Atlas<br><i>Uilenburg 1:200</i>"
      />
      <FlyTo
        annotationUrl="https://annotations.allmaps.org/images/cc0df207d98ed534"
        caption="City Atlas<br><i>Houthavens 1:200</i>"
      />
    </WarpedMap>
  {/snippet}
</Slide>

<section>
  <!-- @todo make this more visual -->
  <div>
    <img
      alt="Student drawing"
      loading="lazy"
      src="https://dlc.services/iiif-img/7/34/4ccf7bbb119a0db537fe96672084921f/full/2000,/0/default.jpg"
    />
  </div>
  <div>
    <p class="p-4 text-3xl">Multiple maps combined in a single image</p>
  </div>
</section>

<section class="section-horizontal text-2xl">
  <div>
    <img
      alt="Annotating maps in Placemark"
      loading="lazy"
      src="/images/iiif-annual-conference-2025/city-atlas-publication.jpg"
    />
    <p class="p-4">City Atlas publication...</p>
  </div>
  <div>
    <img
      alt="Annotating maps in Felt"
      loading="lazy"
      src="/images/iiif-annual-conference-2025/city-atlas-exhibition.jpg"
    />
    <p class="p-4">...exhibition...</p>
  </div>
  <div>
    <img
      alt="Annotating maps in Felt"
      loading="lazy"
      src="/images/iiif-annual-conference-2025/city-atlas-app.jpg"
    />
    <p class="p-4">...and application</p>
  </div>
</section>

<Slide>
  {#snippet children({ active })}
    <WarpedMap
      {active}
      annotationUrl="https://cityatlas.theberlage.nl/data/05-installation/00-slide/annotations/corridor.json"
      caption="City Atlas<br><i>Installation plan</i>"
    ></WarpedMap>
  {/snippet}
</Slide>

<section class="text-3xl">
  <div class="max-w-5xl">
    <p class="p-4">
      <span class="text-orange">River Atlas</span> Nicolaos Charalambous (CY) Chaomin
      Chen (CN) Sneha Gireesh (IN) Thomas Gkikas (GR) Ujal Gorchu (AZ) Eliott Moreau
      (FR) Ana Nuño De Buen (MX) Kelly Olinger (US) Maria Stergiou (GR) Lenneke Slangen
      (NL) Yuhe Tan (CN) Felix Verheyden (BE) Nien Heng Yang (TW) Han Yang (CN)
    </p>
    <p class="p-4">
      <span class="text-orange">City Atlas</span> Carlos von Bertrab (MX), Mohil
      Bhavsar (IN), Efi Chatzikonstantinou (GR), Evan Craig (US), Misha Frantsuzov
      (RU), Sara Gohberg (RU), Ivanna Gressani (AR), Nathalia Kuipers (BR), Ximeng
      Luo (CN), Andrea Ramos (MX), Lefkothea Spartioti (GR), Yi-an Tseng (TW)
    </p>
    <p class="p-4">
      <span class="text-orange">Coast Atlas</span> Imane Amzil (MA), Claire Demeyere
      (BE), Eleni Magnisli (GR), Britt De Schoenmakere (BE), Maria Gabriella Stabile
      (BR), Ravenna Westerhout (NL) and Yingxin Zhang (CN)
    </p>
    <p class="p-4">
      <span class="text-orange">Teaching team</span> Sanne van den Breemer, Juan
      Benavides, Benjamin Groothuijse, Alfons Hooikaas and Jules Schoonman.
    </p>
  </div>
</section>

<!-- Bert -->

<Slide>Everyone wants to find a map of their own house!</Slide>
<!-- Show maps of a few of my houses, with marker! -->

<Slide>
  {#snippet children({ active })}
    <WarpedMap
      {active}
      annotationUrl="https://annotations.allmaps.org/maps/275c2eaa1606caba"
    >
      <!-- TODO add marker! -->
      <FlyTo
        annotationUrl="https://annotations.allmaps.org/maps/b13851734072e204"
      />

      <FlyTo
        annotationUrl="https://annotations.allmaps.org/images/81a4dfe44aff986d"
      />

      <FlyTo
        annotationUrl="https://annotations.allmaps.org/maps/55cec090c863a1bc"
      />
    </WarpedMap>
  {/snippet}
</Slide>

<!-- Stationsplein Bussum https://annotations.allmaps.org/maps/5bddef1cbe5930bc -->
<!-- eindhovev: maps/620dad197a139f8e -->
<!-- Utrecht: https://annotations.allmaps.org/maps/d3107dde88ed6585 -->
<!-- Of luchtfoto: https://annotations.allmaps.org/maps/b13851734072e204 -->

<!-- Amsterdam: maps/435ccc0ea633df34 -->
<!-- Of: /maps/c1aec8f01932cd7f -->
<!-- Hezingen: https://annotations.allmaps.org/maps/55cec090c863a1bc -->
<!-- Greenpoint: https://annotations.allmaps.org/images/81a4dfe44aff986d -->
<!-- Oostenburg: maps/8596ac3d0e4cba98 -->

<!-- Millions of IIIF maps -->
<!-- 50,000 already georeferenced with Allmaps -->
<!-- the goal: georeference them all, and make them easy to find, by their geospatial location -->
<Slide
  >Important: Georeference Annotation. Allmaps doesn't store images, only GCPs</Slide
>
<Slide>Image data comes from IIIF server</Slide>

<!-- Georeferencing: transform pixel coordinates to geospatial coordinates -->
<!-- Place GCPs, math will do the rest -->
<!-- Show Allmaps transform code example -->
<!-- GeoJSON  -->
<!-- Cursors -->
<!-- Render to PNG or SVG -->
<!-- XYZ tile server -->
<!-- LMEC -->
<!-- Geospatial search, show API call -->
<!-- Allmaps Here -->
<!-- live demo?  -->
<!-- Met screenshot Signal, Slack, WhatsApp, etc. -->
<!-- Try it now!-->
