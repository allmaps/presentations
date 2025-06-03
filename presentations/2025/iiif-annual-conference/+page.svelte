<script context="module">
  export const title = 'IIIF Annual Conference 2025 - Teaching with Allmaps'
  export const date = Date.parse('4 June 2025')
</script>

<script lang="ts">
  import Slide from '$lib/components/Slide.svelte'
  import Title from '$lib/components/Title.svelte'
  import MapMonster from '$lib/components/MapMonster.svelte'
  import ManyMapMonsters from '$lib/components/ManyMapMonsters.svelte'
  import MapThumbnails from '$lib/components/MapThumbnails.svelte'
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

<Slide>
  {#snippet children({ active })}
    <WarpedMap
      {active}
      annotationUrl="https://annotations.allmaps.org/manifests/f068318457a7df6a"
      caption="From IIIF Image..."
      transformationType="straight"
      hideMap={true}
    >
      <FlyTo
        annotationUrl="https://annotations.allmaps.org/manifests/f068318457a7df6a"
        transformationType="thinPlateSpline"
        padding={200}
        caption="...to a map!"
      />
    </WarpedMap>
  {/snippet}
</Slide>

<section class="section-stretch">
  <img
    alt="River Atlas mid terms"
    loading="lazy"
    src="/images/iiif-annual-conference-2023/berlage/berlage-photo-mid-term.jpg"
  />
  <div>
    <p class="text-2xl">
      Collaboration with The Berlage Center for<br />Advanced Studies in
      Architecture and Urban Design
      <br />at Delft University of Technology
    </p>
  </div>
</section>

<section class="section-stretch">
  <img
    alt="Berlage Curriculum Structure"
    loading="lazy"
    src="/images/iiif-annual-conference-2025/berlage-curriculum-structure.jpg"
  />
  <div>
    <p class="text-3xl">Curriculum Structure of the postmaster’s program</p>
  </div>
</section>

<section class="section-stretch">
  <img
    alt="Berlage Curriculum Structure"
    loading="lazy"
    src="/images/iiif-annual-conference-2025/berlage-curriculum-structure-term-1.jpg"
  />
  <div>
    <p class="text-3xl">Curriculum Structure of the postmaster’s program</p>
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
    <p class="p-4">Part I: Documentation</p>
    <img
      alt="Part I: Documentation"
      loading="lazy"
      src="/images/iiif-annual-conference-2025/pt-1-documentation.jpg"
    />
    <p class="p-4 text-blue">
      Georeferencing maps and<br />analysing them
    </p>
  </div>
  <div class="fragment">
    <p class="p-4">Part II: Argumentation</p>
    <img
      alt="Part II: Argumentation"
      loading="lazy"
      src="/images/iiif-annual-conference-2025/pt-2-argumentation.jpg"
    />
    <p class="p-4 text-blue">
      New drawings expressing<br />a position about the site
    </p>
  </div>
  <div class="fragment">
    <p class="p-4">Part III: Installation</p>
    <img
      alt="Part III: Installation"
      loading="lazy"
      src="/images/iiif-annual-conference-2025/pt-3-installation.jpg"
    />
    <p class="p-4 text-blue">
      Presentation in an exhibition,<br />publication and digital app
    </p>
  </div>
</section>

<section class="section-horizontal text-2xl">
  <div>
    <p class="p-4">River Atlas (2022-23)</p>
    <img
      alt="Workshop 2022"
      loading="lazy"
      src="/images/iiif-annual-conference-2025/workshop-2022.jpg"
    />
    <p class="text-blue p-4">
      TU Delft Library<br />Vrije Universiteit Amsterdam
    </p>
  </div>
  <div>
    <p class="p-4">City Atlas (2023-24)</p>
    <img
      alt="Workshop 2023"
      loading="lazy"
      src="/images/iiif-annual-conference-2025/workshop-2023.jpg"
    />
    <p class="text-blue p-4">
      Stadsarchief Amsterdam<br />Allard Pierson
    </p>
  </div>
  <div>
    <p class="p-4">Coast Atlas (2024-25)</p>
    <img
      alt="Workshop 2024"
      loading="lazy"
      src="/images/iiif-annual-conference-2025/workshop-2024.jpg"
    />
    <p class="text-blue p-4">National Archives<br />Stadsarchief Rotterdam</p>
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

<section class="text-3xl">
  <div>
    <img
      alt="Annotating maps in Placemark"
      loading="lazy"
      src="/images/iiif-annual-conference-2025/annotations-placemark-chao.jpg"
    />
  </div>
  <div>
    <p class="p-4">Annotating maps with web-based GIS tools</p>
  </div>
  <div class="absolute fragment top-0 left-0 w-full h-full text-left text-3xl">
    <div class="flex items-end h-full px-24 py-12">
      <MapMonster mood="happy" color="pink">
        <p class="p-4 max-w-md">
          Allmaps Tile Server turns georeferenced maps into<br />XYZ tile layers
        </p>
      </MapMonster>
    </div>
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
    <span class="text-blue">City Atlas</span>
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
    <span class="text-blue">Coast Atlas</span>
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

<!-- <section>
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
</section> -->

<section>
  <div>
    <img
      alt=""
      loading="lazy"
      src="/images/iiif-annual-conference-2025/historical-reference-map.jpg"
    />
  </div>
  <div>
    <p class="p-4 text-3xl">
      <span class="text-blue">Feature requests </span>
      Using a historical reference map
    </p>
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

<section class="section-horizontal text-3xl">
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
      annotationUrl="https://annotations.allmaps.org/images/e5c702e62b320f42"
      caption="River Atlas<br><i>Speculative River Map</i>"
    >
      <FlyTo
        annotationUrl="https://coastatlas.netlify.app/data/02-argumentation/03-military-remnants/allmaps/C1.json"
        caption="Coast Atlas<br><i>A Rediscovered Shelter</i>"
        transformationType="helmert"
      />
      <FlyTo
        annotationUrl="https://cityatlas.theberlage.nl/data/03-argumentation/01-uilenburg/annotations/200uilenburg.json"
        caption="City Atlas<br><i>Uilenburg</i>"
      />
    </WarpedMap>
  {/snippet}
</Slide>

<!-- <section>
  <div>
    <img
      alt=""
      loading="lazy"
      src="https://dlc.services/iiif-img/7/34/4ccf7bbb119a0db537fe96672084921f/full/2000,/0/default.jpg"
    />
  </div>
  <div>
    <p class="p-4 text-3xl">Multiple maps combined in a single image</p>
  </div>
</section> -->

<section class="text-2xl text-left">
  <div class="max-w-5xl">
    <p class="py-4">
      <a href="https://riveratlas.theberlage.nl/">riveratlas.theberlage.nl</a>
    </p>
    <p class="text-blue">
      Nicolaos Charalambous (CY) Chaomin Chen (CN) Sneha Gireesh (IN) Thomas
      Gkikas (GR) Ujal Gorchu (AZ) Eliott Moreau (FR) Ana Nuño De Buen (MX)
      Kelly Olinger (US) Maria Stergiou (GR) Lenneke Slangen (NL) Yuhe Tan (CN)
      Felix Verheyden (BE) Nien Heng Yang (TW) Han Yang (CN)
    </p>
    <p class="py-4">
      <a href="https://cityatlas.theberlage.nl/">cityatlas.theberlage.nl</a>
    </p>
    <p class="text-blue">
      Carlos von Bertrab (MX), Mohil Bhavsar (IN), Efi Chatzikonstantinou (GR),
      Evan Craig (US), Misha Frantsuzov (RU), Sara Gohberg (RU), Ivanna Gressani
      (AR), Nathalia Kuipers (BR), Ximeng Luo (CN), Andrea Ramos (MX), Lefkothea
      Spartioti (GR), Yi-an Tseng (TW)
    </p>
    <p class="py-4">
      <a href="https://coastatlas.theberlage.nl/">coastatlas.theberlage.nl</a>
    </p>
    <p class="text-blue">
      Imane Amzil (MA), Claire Demeyere (BE), Eleni Magnisli (GR), Britt De
      Schoenmakere (BE), Maria Gabriella Stabile (BR), Ravenna Westerhout (NL),
      Yingxin Zhang (CN)
    </p>
    <p class="py-4">teaching team</p>
    <p class="text-blue">
      Sanne van den Breemer, Juan Benavides, Benjamin Groothuijse, Alfons
      Hooikaas, Jules Schoonman
    </p>
  </div>
</section>

<!-- Bert -->
<!-- goal allmaps: make maps discoverable -->
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

<Slide>
  {#snippet children({ active })}
    <MapThumbnails {active}>
      Using Georeference Annotations and IIIF, we can now georeference, warp and
      overlay <strong>millions of digitized maps</strong> from institutions around
      the world
    </MapThumbnails>
  {/snippet}
</Slide>

<Slide>50,000 already georeferenced with Allmaps</Slide>

<!-- 50,000 already georeferenced with Allmaps -->
<!-- the goal: georeference them all, and make them easy to find, by their geospatial location -->
<Slide>
  <!-- show with map monster! -->
  Important: Allmaps only stores Georeference Annotations. image data comes from
  IIIF servers</Slide
>

<!-- Georeferencing: transform pixel coordinates to geospatial coordinates -->
<!-- Place GCPs, math will do the rest -->
<!-- Show Allmaps transform code example -->

<section>
  <div class="mb-12">
    <p>Open source JavaScript modules</p>
  </div>
  <pre class="javascript">
      <code data-line-numbers="" data-trim data-noescape
      ><script type="text/template">
        import { parseAnnotation } from '@allmaps/annotation'
        import { GcpTransformer } from '@allmaps/transform'

        const annotationUrl =
          'https://annotations.allmaps.org/images/e861bd9af6573765'
        const response = await fetch(annotationUrl)
        const annotation = await response.json()

        const maps = parseAnnotation(annotation)
        const transformer = GcpTransformer.fromGeoreferencedMap(maps[0])

        const coordinates = transformer.transformToGeo([100, 100])
      </script></code
    ></pre>
</section>

<!-- GeoJSON  -->
<!-- Cursors -->

<section class="section-stretch">
  <iframe
    title="Side by side"
    class="w-full h-full"
    data-src="https://cursors.allmaps.org"
    data-preload
  ></iframe>
</section>

<!-- Render to PNG or SVG -->
<!-- XYZ tile server -->

<Slide>
  <div>
    <img
      alt="SVG export of Waterstaatskaart in Adobe Illustrator"
      loading="lazy"
      src="/images/iiif-annual-conference-2025/waterstaatskaart-svg-illustrator.webp"
    />
  </div>
  <div>
    <p class="p-4 text-3xl">
      SVG export of Waterstaatskaart generated by Allmaps in Adobe Illustrator
    </p>
  </div>
</Slide>

<Slide>
  <div>
    <img
      alt="Downtown Boston subway lines on top of a 1769 map"
      loading="lazy"
      src="/images/iiif-annual-conference-2025/lmec-garrett-downtown-subway-lines-1769-map.webp"
    />
  </div>
  <div>
    <p class="p-4 text-3xl">
      Downtown Boston subway lines on top of a 1769 map, made by Garrett Dash
      Nelson
    </p>
  </div>
</Slide>

<Slide>
  <a href="https://annotations.allmaps.org/maps?intersects=53.79627,-1.54030">
    https://annotations.allmaps.org/maps?intersects=53.79627,-1.54030</a
  >
  <!-- how does it work? -->
</Slide>

<!-- Geospatial search, show API call -->
<!-- https://annotations.allmaps.org/maps?intersects=53.79627,-1.54030 -->
<!-- Allmaps Here -->
<!-- live demo?  -->
<!-- Met screenshot Signal, Slack, WhatsApp, etc. -->
<!-- Try it now!-->
