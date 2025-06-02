<script context="module">
  export const title =
    'Unlocking the richness of digitized map series with IIIF and Allmaps'
  export const date = Date.parse('4 June 2024')
</script>

<script lang="ts">
  import Slide from '$lib/components/Slide.svelte'
  import Title from '$lib/components/Title.svelte'
  import MapMonster from '$lib/components/MapMonster.svelte'
  import ManyMapMonsters from '$lib/components/ManyMapMonsters.svelte'

  import './style.css'
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Title>
  <h3 class="text-white">
    Unlocking the richness of digitized map series with IIIF and Allmaps
  </h3>
</Title>

<section class="section-stretch">
  <p>What do we mean by map series?</p>
  <img
    alt="Maps on four IIIF Canvasses that can be turned into one singe map"
    class="pb-20"
    loading="lazy"
    src="/images/iiif-annual-conference-2024/map-series-explainer.svg"
  />
</section>

<section class="section-horizontal section-stretch">
  <!-- https://lccn.loc.gov/15015560 -->
  <!-- https://www.loc.gov/item/15015560/manifest.json -->
  <div>
    <p>MacAdam's Road Atlas</p>
    <span class="font-light">Library of Congress</span>
  </div>
  <img
    alt="MacAdam's road atlases at Library of Congress"
    loading="lazy"
    src="/images/iiif-annual-conference-2024/loc-road-atlas.png"
  />
</section>

<section class="section-stretch">
  <!-- https://tile.loc.gov/image-services/iiif/public:gdcmassbookdig:macadamsroadatla00unse:macadamsroadatla00unse_0002/full/pct:100.0/270/default.jpg -->
  <p>Index sheet or key map</p>
  <img
    alt="Key map of MacAdam's Road Atlas"
    loading="lazy"
    src="/images/iiif-annual-conference-2024/loc-road-atlas-key-map.jpg"
  />
</section>

<section class="section-horizontal section-stretch">
  <img
    alt="Boston sheets laid out on a canvas"
    loading="lazy"
    src="/images/iiif-annual-conference-2024/loc-road-atlas-boston-layout.svg"
  />
  <p>
    Option 1<br /><span class="font-light">Laying out sheets on a canvas</span>
  </p>
</section>

<section>
  <!-- https://www.loc.gov/item/15015560/manifest.json -->
  <!-- https://annotations.allmaps.org/manifests/b4c1fb44d37fe502 -->
  <p>
    Option 2<br /><span class="font-light">Georeferencing using Allmaps</span>
  </p>
  <div class="flex flex-row w-full *:min-w-0">
    <img
      alt="Single sheet in Allmaps Editor"
      loading="lazy"
      src="/images/iiif-annual-conference-2024/loc-road-map-allmaps-editor.png"
    />
    <img
      alt="All sheets in Allmaps Viewer"
      loading="lazy"
      src="/images/iiif-annual-conference-2024/loc-road-map-allmaps-viewer.png"
    />
  </div>
</section>

<section class="section-stretch">
  <p>
    Can we automate this process?<br /><span class="font-light"
      >Dutch National Archives</span
    >
  </p>
  <img
    alt="Visit to the depot of the National Archives with students of the Geomatics Master of the Faculty of Architecture and the Built Environment"
    loading="lazy"
    src="/images/iiif-annual-conference-2024/na-visit-depot.jpg"
  />
</section>

<section>
  <!-- https://www.nationaalarchief.nl/onderzoeken/archief/4.TOPO/invnr/%40A~A7~A7.1 -->
  <!-- https://www.nationaalarchief.nl/onderzoeken/archief/4.TOPO/invnr/10.107/file/NL-HaNA_4.TOPO_10.107_R -->
  <p>Thousands of sheets, but hard to access</p>
  <div class="flex flex-row h-full *:min-w-0">
    <img
      alt="Inventory published by the National Archives"
      loading="lazy"
      src="/images/iiif-annual-conference-2024/na-topo4-inv.png"
    />
    <img
      alt="Single sheet opened in Viewer"
      loading="lazy"
      src="/images/iiif-annual-conference-2024/na-topo4-sheet.png"
    />
  </div>
</section>

<section class="section-stretch">
  <!-- https://www.nationaalarchief.nl/sites/default/files/afbeeldingen/toegangen/bladwijzer-bonnebladen.jpg -->
  <p>Sheet index topographical map series</p>
  <img
    alt="Sheet index 19th century topographical map series"
    loading="lazy"
    src="/images/iiif-annual-conference-2024/na-bladwijzer-tmk.jpg"
  />
</section>

<section>
  <!-- TMK Blad 25: Amsterdam -->
  <!-- https://dlc.services/iiif-img/7/4/6587b0b3-3090-451b-973b-0f1f997c7101/full/1000,/0/default.jpg -->
  <p>Corner coordinates</p>
  <img
    alt="TMK Sheet 25 (Amsterdam)"
    loading="lazy"
    src="/images/iiif-annual-conference-2024/tmk-sheet-25.jpg"
  />
</section>

<section>
  <!-- TMK Blad 25: Amsterdam -->
  <!-- https://dlc.services/iiif-img/7/4/6587b0b3-3090-451b-973b-0f1f997c7101/full/1000,/0/default.jpg -->
  <p>Corner coordinates</p>
  <div class="flex flex-row gap-8 *:min-w-0">
    <img
      alt="Upper left corner"
      loading="lazy"
      src="/images/iiif-annual-conference-2024/tmk-25-upper-left.jpg"
    />
    <img
      alt="Upper right corner"
      loading="lazy"
      src="/images/iiif-annual-conference-2024/tmk-25-upper-right.jpg"
    />
  </div>
  <div class="flex flex-row gap-8 *:min-w-0">
    <img
      alt="Lower left corner"
      loading="lazy"
      src="/images/iiif-annual-conference-2024/tmk-25-lower-left.jpg"
    />
    <img
      alt="Lower right corner"
      loading="lazy"
      src="/images/iiif-annual-conference-2024/tmk-25-lower-right.jpg"
    />
  </div>
</section>

<section>
  <!-- https://observablehq.com/@d3/bonne -->
  <!-- Previous: Jochem Lesparre - Approximate transformation of geographic coordinates from Krayenhoff’s triangulation and coordinates in the Bonne projection used for historic map series of the Netherlands (2023)-->
  <p>Bonne projection to WGS84</p>
  <img
    alt="Bonne projection"
    loading="lazy"
    src="/images/iiif-annual-conference-2024/3d-bonne-projection.png"
  />
</section>

<section>
  <p>GeoJSON output</p>
  <img
    alt="PROJ Pipeline for converting Bonne coordinates to WGS84"
    loading="lazy"
    src="/images/iiif-annual-conference-2024/tmk-25-geojson.png"
  />
</section>

<section class="section-stretch">
  <!-- https://www.nationaalarchief.nl/sites/default/files/afbeeldingen/toegangen/bladwijzer-bonnebladen.jpg -->
  <p>Other series using the same projection</p>
  <img
    alt="Sheet index 19th century topographical map series"
    loading="lazy"
    src="/images/iiif-annual-conference-2024/geomatics-sheet-index-2.svg"
  />
</section>

<section>
  <!-- TMK Blad 25: Amsterdam -->
  <!-- https://dlc.services/iiif-img/7/4/6587b0b3-3090-451b-973b-0f1f997c7101/full/1000,/0/default.jpg -->
  <p>Recognizing corners</p>
  <img
    alt="Results of corner recognition algorithm"
    loading="lazy"
    src="/images/iiif-annual-conference-2024/geomatics-tmk-25-corner-recognition-img-embedded.svg"
  />
</section>

<section>
  <!-- Waterstaatskaart Blad 48 -->
  <!-- https://dlc.services/iiif-img/7/32/9976e341-14b7-492c-957e-b72251c441e3/full/4096,/0/default.jpg -->
  <p>Also for irregular sheets</p>
  <img
    alt="Results of corner recognition algorithm"
    loading="lazy"
    src="/images/iiif-annual-conference-2024/geomatics-wsk-48-corner-recognition-img-embedded.svg"
  />
</section>

<section>
  <p>Results in Allmaps Viewer</p>
  <div class="flex flex-row gap-8 *:min-w-0">
    <img
      alt="Results in Allmaps Viewer"
      loading="lazy"
      src="/images/iiif-annual-conference-2024/tmk-results.png"
    />
    <img
      alt="Results in Allmaps Viewer"
      loading="lazy"
      src="/images/iiif-annual-conference-2024/bonnebladen-results.png"
    />
  </div>
</section>

<section>
  <p>Does it work for other map series?</p>
  <img
    alt="Comment Glen Robson on Github"
    loading="lazy"
    src="/images/iiif-annual-conference-2024/north-korea-comment-glen.png"
  />
</section>

<section class="section-no-logo">
  <!-- https://viewer.allmaps.org/?url=https%3A%2F%2Fraw.githubusercontent.com%2Fbmmeijers%2Fiiif-annotations%2Fmain%2Fseries%2Fnorth_korea%2Fnorth_korea_annotation_page.json -->
  <p>
    308 maps of North Korea
    <span class="font-light">Stanford University Libraries</span>
  </p>
  <video
    class="shadow-lg"
    muted
    data-loop
    data-autoplay
    data-src="/videos/iiif-annual-conference-2024/stanford-north-korea-maps.mp4"
  ></video>
  <div
    class="fragment absolute bottom-0 right-0 w-1/2 h-full text-left text-2xl bg-white/0 flex items-end px-24 py-12"
  >
    <MapMonster mood="happy" color="green">
      <div class="max-w-md p-4">
        <p>
          <span class="font-light">Students</span> Eirini Tsipa, Giorgos
          Iliopoulos, Oliver Post & Rianne Aalders
          <span class="font-light">Tutors</span>
          Martijn Meijers, Edward Verbree.
          <span class="font-light">Thanks to</span> Jochem Lesparre, Gijs Boink
        </p>
      </div>
    </MapMonster>
  </div>
</section>

<!-- ===================================================================================== -->
<!-- ===================================================================================== -->
<!-- == Bert ============================================================================= -->
<!-- ===================================================================================== -->
<!-- ===================================================================================== -->

<section>
  <p>
    The core functionality of Allmaps is converting <br /> pixel coordinates to
    geospatial coordinates <br />(and vice versa)
  </p>
  <pre class="javascript">
		<code data-line-numbers="" data-trim data-noescape
      ><script type="text/template">
        import { parseAnnotation } from '@allmaps/annotation'
        import { GcpTransformer } from '@allmaps/transformer'

        const annotationUrl =
          'https://annotations.allmaps.org/maps/b3d87d457a7a5603'
        const response = await fetch(annotationUrl)
        const annotation = await response.json()

        const maps = parseAnnotation(annotation)
        const transformer = new GcpTransformer(maps[0].gcps)

        const coordinates = transformer.transformToGeo([100, 100])
      </script></code
    ></pre>
</section>

<section class="section-stretch">
  <iframe
    title="Side by side"
    class="w-full h-full"
    data-src="https://cursor.allmaps.org"
    data-preload
  ></iframe>
</section>

<Slide>
  {#snippet children({ active })}
    <ManyMapMonsters {active}>
      Converting pixel coordinates to geospatial coordinates:
      <br /><strong>What else can we do with this?</strong>
    </ManyMapMonsters>
  {/snippet}
</Slide>

<section>
  <p>Allmaps Annotation API now supports GeoJSON</p>
  <code class="text-2xl"
    >https://annotations.allmaps.org/manifests/23379602e8187445.geojson</code
  >
  <div class="flex flex-row gap-8 *:min-w-0">
    <img
      alt="Atlas of the city of Lynn in Allmaps Viewer"
      loading="lazy"
      src="/images/iiif-annual-conference-2024/lynn-viewer.png"
    />
    <img
      alt="Masks of Atlas of the city of Lynn in QGIS"
      loading="lazy"
      src="/images/iiif-annual-conference-2024/lynn-qgis.png"
    />
  </div>
</section>

<section>
  <p>Allmaps Annotation API now supports geospatial queries</p>
  <code class="text-2xl"
    >https://annotations.allmaps.org/maps?intersects=34.06242,-118.44740</code
  >
  <img
    alt="Allmaps Here"
    loading="lazy"
    src="/images/iiif-annual-conference-2024/allmaps-here.png"
  />
</section>

<section>
  <p>Visualizing all georeferenced maps with vector tiles and Protomaps</p>

  <video
    class="shadow-lg"
    muted
    data-loop
    data-autoplay
    data-src="/videos/iiif-annual-conference-2024/allmaps-explore.webm"
  ></video>
</section>

<section class="section-stretch">
  <video
    class="shadow-lg"
    muted
    data-loop
    data-autoplay
    data-src="/videos/iiif-annual-conference-2024/allmaps-arcade.webm"
  ></video>
</section>

<section class="section-stretch">
  <p>
    Play Allmaps Arcade on <a
      class="underline"
      href="https://arcade.allmaps.org">arcade.allmaps.org</a
    >
  </p>
</section>

<section>
  <p>Or come to Delft!</p>

  <div class="flex flex-row gap-8 *:min-w-0">
    <img
      alt="Allmaps Arcade cabinet #2"
      loading="lazy"
      src="/images/iiif-annual-conference-2024/arcade-cabinet-2.jpg"
    />
    <img
      alt="Allmaps Arcade cabinet #1"
      loading="lazy"
      src="/images/iiif-annual-conference-2024/arcade-cabinet-1.jpg"
    />
  </div>
</section>

<section
  class="section-horizontal section-stretch section-no-logo grid-cols-[1fr_60%]"
>
  <div>
    <p>
      New open data section on <a class="underline" href="https://allmaps.org"
        >allmaps.org</a
      >!
    </p>
  </div>
  <video
    class="shadow-lg"
    muted
    data-loop
    data-autoplay
    data-src="/videos/iiif-annual-conference-2024/open-data-homepage.webm"
  ></video>

  <div
    class="fragment absolute bottom-0 right-0 w-[60%] h-full text-left bg-white/70 flex items-end px-24 py-12 drop-shadow-md"
  >
    <MapMonster mood="excited" color="pink">
      <div class="max-w-md p-4">
        <p class="text-left">
          Thanks! Scan this QR code to view this presentation:
        </p>
        <a href="https://presentations.allmaps.org/iiif-annual-conference-2024">
          <img
            class="w-full"
            alt="QR code that links to these slides"
            src="/images/iiif-annual-conference-2024/qr-code.svg"
          /></a
        >
      </div>
    </MapMonster>
  </div>
</section>
