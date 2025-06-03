<script context="module">
  export const title = 'The history and future of Allmaps'
  export const date = Date.parse('18 Nov 2024')
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
  <title>The history and future of Allmaps</title>
</svelte:head>

<!--
  Allmaps lead developer Bert Spaan gives background on the Allmaps story, including where and
  how applications in the Allmaps software ecosystem build upon the
  International Image Interoperability Framework (IIIF).
-->

<Title>
  <h1 class="text-white text-6xl mb-4 leading-tight">
    The <span class="text-yellow font-bold">history</span> and
    <span class="text-green font-bold">future</span> of
    <span class="text-pink font-bold">Allmaps</span>
  </h1>
</Title>

<Slide>
  {#snippet children({ active })}
    <XYZ
      {active}
      tileUrl={'https://rtiles.waag.org/services/buildings/tiles/{z}/{x}/{y}.png'}
      center={[4.6355, 52.3817]}
      zoom={12}
    />
  {/snippet}
</Slide>

<section class="section-stretch">
  <p>New York Public Library - NYPL Labs</p>
  <img
    alt="New York Public Library"
    loading="lazy"
    src="/images/allmaps-convening-boston/nypl.jpg"
  />
</section>

<section class="section-stretch">
  <video
    class="shadow-lg w-screen"
    muted
    data-loop
    data-autoplay
    data-src="/images/allmaps-convening-boston/fifth-avenue.mp4"
  ></video>
</section>

<section class="section-stretch">
  <img
    class="w-screen"
    alt="New York Public Library"
    loading="lazy"
    src="/images/allmaps-convening-boston/surveyor-640.gif"
  />
</section>

<Slide>
  {#snippet children({ active })}
    <WarpedMap
      {active}
      annotationUrl="https://annotations.allmaps.org/images/3f2cea6d5506bfd9"
    >
      <FlyTo
        annotationUrl="https://annotations.allmaps.org/images/11a1070a3fdfb78e"
      />
      <FlyTo
        annotationUrl="https://annotations.allmaps.org/images/ea443ffaabb121e2"
      />
      <FlyTo
        annotationUrl="https://annotations.allmaps.org/maps/51c6caacf5f1e4d5"
      />
      <FlyTo
        annotationUrl="https://annotations.allmaps.org/maps/28ed75ea7a785f32"
      />
    </WarpedMap>
  {/snippet}
</Slide>

<section>
  <p>Map Warper</p>
  <img
    alt="Map Warper"
    loading="lazy"
    src="/images/open-maps-meeting-2024/mapwarper-9464-crop.webp"
  />
</section>

<section>
  <p>Map Warper</p>
  <img
    alt="Map Warper"
    loading="lazy"
    src="/images/open-maps-meeting-2024/mapwarper-9464-rectify.webp"
  />
</section>

<section>
  <p>Map Warper</p>
  <img
    alt="Map Warper"
    loading="lazy"
    src="/images/open-maps-meeting-2024/mapwarper-9464-preview.webp"
  />
</section>

<section>
  <p>Map Warper</p>
  <img
    alt="Map Warper"
    loading="lazy"
    src="/images/open-maps-meeting-2024/mapwarper-layer-883.webp"
  />
</section>

<section>
  <p>Building Inspector</p>
  <video
    class="shadow-lg"
    muted
    data-loop
    data-autoplay
    data-src="/images/open-maps-meeting-2024/building-inspector.mp4"
  ></video>
</section>

<section>
  <p>City directories</p>
  <img
    alt="City directory"
    loading="lazy"
    src="/images/open-maps-meeting-2024/city-directory.jpg"
  />
</section>

<section>
  <p>City directories</p>
  <img
    alt="City directory"
    loading="lazy"
    src="/images/open-maps-meeting-2024/city-directory-ocr.png"
  />
</section>

<section>
  <p>Combining it all</p>
  <video
    class="shadow-lg"
    muted
    data-loop
    data-autoplay
    data-src="/images/open-maps-meeting-2024/lower-east-side-1854.mp4"
  ></video>
</section>

<section>
  <p>Taking it to the streets</p>
  <img
    alt="City directory"
    loading="lazy"
    src="/images/open-maps-meeting-2024/route-map-by-lori-richmond-large-cropped.jpg"
  />
</section>

<section>
  <p>Taking it to the streets</p>
  <img
    alt="City directory"
    loading="lazy"
    src="/images/open-maps-meeting-2024/dutch-farmhouses-of-brooklyn-DSCF8162.jpg"
  />
</section>

<section>
  <p>Taking it to the streets</p>
  <img
    alt="City directory"
    loading="lazy"
    src="/images/open-maps-meeting-2024/dutch-farmhouses-of-brooklyn-DSCF8169.jpg"
  />
</section>

<section>
  <p>Maps by Decade</p>
  <img
    alt="Map Warper"
    loading="lazy"
    src="/images/open-maps-meeting-2024/maps-by-decade-large.gif"
  />
</section>

<section>
  <p>After the NYPL:</p>
  <div class="max-w-6xl">
    <span class="fragment text-green">Moved back to the Netherlands</span>
    <span class="fragment"
      >● <span class="text-darkblue"
        >started collaboration with Jules Schoonman</span
      ></span
    >
    <span class="fragment"
      >● <span class="text-red"> NYPL shut Map Warper down</span>
    </span>
  </div>
  <p class="fragment">Lessons learned:</p>
  <div class="max-w-6xl">
    <span class="fragment text-pink"
      >Use IIIF <span class="font-thin"
        >(don't create derivative copies of images)</span
      ></span
    >
    <span class="fragment"
      >● <span class="text-green">browsers, not servers</span></span
    >
    <span class="fragment"
      >● <span class="text-orange">focus on open standards and open data</span
      ></span
    >
  </div>
</section>

<section>
  <p>
    Vanaf Het Hoogste Punt - exhibition about the first triangulation of the
    Netherlands
  </p>
  <div class="flex flex-row gap-8 *:min-w-0">
    <img
      alt="Allmaps CLI"
      loading="lazy"
      src="/images/allmaps-convening-boston/hoogste-punt-DSC4026.webp"
    />
    <img
      alt="Allmaps CLI"
      loading="lazy"
      src="/images/allmaps-convening-boston/hoogste-punt-DSC4018.webp"
    />
  </div>
</section>

<section class="section-stretch">
  <iframe
    allow="geolocation"
    title="Krayenhoff Animated"
    class="w-full h-full"
    data-src="https://bertspaan.nl/krayenhoff-animated/"
    data-preload
  ></iframe>
</section>

<section>
  <p>Amsterdam open data</p>
  <img
    alt="Allmaps CLI"
    loading="lazy"
    src="/images/allmaps-convening-boston/amsterdam-data.webp"
  />
</section>

<section>
  <div class="break-inside-avoid">
    <span class="text-darkblue">IIIF images</span> +
    <span class="text-orange">georeference metadata</span>
    =
    <span class="text-pink font-bold">Allmaps</span>
  </div>
</section>

<Slide>
  {#snippet children({ active })}
    <MapThumbnails {active}>
      <strong>Millions of digitized maps</strong> are available through IIIF, from
      institutions around the world
    </MapThumbnails>
  {/snippet}
</Slide>

<section>
  <p>Finding maps is not easy</p>
  <img
    alt="Rotterdam Junction"
    loading="lazy"
    src="/images/open-maps-meeting-2024/loc-rotterdam.webp"
  />
</section>

<section>
  <p>The goal of Allmaps:</p>

  <div class="max-w-6xl">
    <span class="fragment text-pink">
      make <em>all</em> digitized maps more easy to find and use
    </span>
    <span class="fragment"
      >● <span class="text-orange">make these maps searchable by location</span
      ></span
    >
    <span class="fragment"
      >● <span class="text-green"
        >publish all georeference data as open data</span
      ></span
    >
    <span class="fragment"
      >● <span class="text-blue"
        >and finally, combine all of this in a single user interface</span
      ></span
    >
  </div>
</section>

<section class="section-stretch">
  <iframe
    allow="geolocation"
    title="Allmaps Here"
    class="w-full h-full"
    data-src="https://dev.here.allmaps.org/"
    data-preload
  ></iframe>
</section>

<section>
  <p>Allmaps Explore <em>(very early prototype)</em></p>
  <video
    class="shadow-lg"
    muted
    data-loop
    data-autoplay
    data-src="/videos/iiif-annual-conference-2024/allmaps-explore.webm"
  ></video>
  <div class="space-y-6 text-3xl">
    <p>Filter by year, institution, collection, scale, etc.</p>
  </div>
</section>

<Slide>
  {#snippet children({ active })}
    <ManyMapMonsters {active}
      ><strong>Some (new) features</strong></ManyMapMonsters
    >
  {/snippet}
</Slide>

<section>
  <p>Visualizing the distortion of a georeferenced map</p>
  <img
    alt="Distortion of a georeferenced map"
    loading="lazy"
    src="/images/open-maps-meeting-2024/distortion.webp"
  />
</section>

<section>
  <p>Using Allmaps to create GeoTIFFs from Georeference Annotations</p>
  <img
    alt="Allmaps CLI"
    loading="lazy"
    src="/images/open-maps-meeting-2024/allmaps-cli-geotiffs-1.webp"
  />
</section>

<section>
  <p>Using Allmaps to create GeoTIFFs from Georeference Annotations</p>
  <img
    alt="Allmaps CLI"
    loading="lazy"
    src="/images/open-maps-meeting-2024/allmaps-cli-geotiffs-2.webp"
  />
</section>

<section>
  <p>Using Allmaps to create GeoTIFFs from Georeference Annotations</p>
  <img
    alt="Allmaps CLI"
    loading="lazy"
    src="/images/open-maps-meeting-2024/allmaps-cli-geotiffs-3.webp"
  />
</section>

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

        const transformer = new GcpTransformer(maps[0].gcps)

        const coordinates = transformer.transformToGeo([100, 100])
      </script></code
    ></pre>
</section>

<section class="section-stretch">
  <iframe
    title="Side by side"
    class="w-full h-full"
    data-src="https://cursors.allmaps.org"
    data-preload
  ></iframe>
</section>

<section>
  <p>Allmaps for education: City Atlas</p>
  <img
    alt="Allmaps CLI"
    loading="lazy"
    src="/images/allmaps-convening-boston/city-atlas.webp"
  />
</section>

<section>Let's end this presentation with some more maps:</section>

<Slide>
  {#snippet children({ active })}
    <WarpedMap
      {active}
      annotationUrl="https://annotations.allmaps.org/maps/6325db4998c7f13f"
    >
      <FlyTo
        annotationUrl="https://annotations.allmaps.org/maps/eaa990689f45a090"
      />
      <FlyTo
        annotationUrl="https://annotations.allmaps.org/manifests/a35b2badba5505ab"
      />
      <FlyTo
        annotationUrl="https://annotations.allmaps.org/manifests/64d6e35b64564692"
      />
      <FlyTo
        annotationUrl="https://annotations.allmaps.org/manifests/fc2c32dc51b145d8"
      />
      <FlyTo
        annotationUrl="https://raw.githubusercontent.com/bmmeijers/iiif-annotations/main/series/north_korea/20231123.json"
      />
    </WarpedMap>
  {/snippet}
</Slide>

<section>
  <p>
    Thanks! See <a href="https://allmaps.org" class="underline">allmaps.org</a> for
    more information.
  </p>
  <div class="absolute top-0 left-0 w-full h-full text-left text-4xl">
    <div class="flex items-end h-full px-24 py-12">
      <MapMonster mood="happy" color="pink">
        <p class="p-4 max-w-xl">It's fun!</p>
      </MapMonster>
    </div>
  </div>
</section>
