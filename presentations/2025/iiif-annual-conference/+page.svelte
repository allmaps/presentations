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
      <span class="text-orange">Feature request</span>
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
  />
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
  />
  <p class="p-4 text-3xl">
    <span class="text-orange">Coast Atlas</span>
    Defense Line documentation
  </p>
</section>

<section>
  <pre class="markdown">
		<code
      data-line-numbers="2-6|7-21|8,17|22-24|25-32|34-39"
      data-trim
      data-noescape
      ><script type="text/template">
        ---
        meta:
          heading: Dune Landscape
        viewer:
          bbox: [4.156968,52.027832,4.173742,52.035224]
          rotation: 0
        allmaps:
          - filename: dl-map-8-M.json
            label: 	Cadastral map
            removeBackground:
              color: "#ffffff"
              threshold: 43
              hardness: 70
            attribution:
              name:  Cultural Heritage Image Database
              url: https://beeldbank.cultureelerfgoed.nl/rce-mediabank/detail/a76e9f7e-94d7-11e5-b204-37a940b03e23/media/188e14bd-0cfc-ddff-a573-62a8a4570f60?mode=detail&view=horizontal&rows=1&page=1&fq%5B%5D=search_s_entity_name:%22Kadastrale%20kaarten%22&fq%5B%5D=search_s_monuments_monument_province:%22Zuid-Holland%22&fq%5B%5D=search_s_monuments_monument_county:%22Monster%22&sort=order_s_objectnummer%20asc&filterAction
          - filename: dl-map-8.json
            label: 	Bonnekaart b458_1934
            attribution:
              name: TU Delft Library
              url: https://www.tudelft.nl/en/library/collections/map-room/map-collection/historical-maps/bonne-maps-1865-1930
        geojson:
          - filename: dl-8.geojson
            label: Route
        legend:
          - label: Road
            stroke: '#E8B500'
            stroke-opacity: 1
          - label: Neighborhood
            stroke: '#C9C9C9'
            stroke-opacity: 1
        ---

        # The Walking Village

        Historically, the coastal defenses of the Netherlands were the weakest at the level of Ter Heijde. In some places, the entire defense consisted of just one row of dunes. For this reason, the coastal village has been continually eroded by storms over the past centuries. Four times, in 1470, 1530, 1546 and 1570, this village was destroyed by the waves.

        Usually, the houses threatened by the sea were demolished and rebuilt further inland. As the village was always moving, people sometimes called it the walking village. People have tried to counteract coastal erosion in all sorts of ways but this only really succeeded after stone dams were built in the sea in the nineteenth century.
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

<!-- @todo add slide about printing -->

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

<!-- @todo add final slide with student names-->

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
