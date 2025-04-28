<script module>
  export const title = 'France Archives'
  export const date = Date.parse('27 Nov 2024')
</script>

<script lang="ts">
  import Title from '$lib/components/Title.svelte'
  import Slide from '$lib/components/Slide.svelte'
  import MapMonster from '$lib/components/MapMonster.svelte'
  import ManyMapMonsters from '$lib/components/ManyMapMonsters.svelte'
  import MapThumbnails from '$lib/components/MapThumbnails.svelte'
</script>

<svelte:head>
  <title>FranceArchives 2024</title>
</svelte:head>

<Title>
  <!-- Defined white style because tailwind class text-white is overwritten by reveal -->
  <h2 class="text-white" style="color: white">Allmaps</h2>
  <p class="text-white r-fit-text">FranceArchives 2024</p>
</Title>

<Title dark={false}>
  <h2>Allmaps</h2>
  <p>Open source tools for curating, georeferencing and exploring IIIF maps</p>
</Title>

<section>
  <video
    class="shadow-lg"
    muted
    data-loop
    data-autoplay
    data-src="/videos/iiif-annual-conference-2023/georeferencing-loc-venice.webm"
  />
</section>

<section>
  <p>
    <strong>Georeference Annotation:</strong>
    <br /> Web Annotation that contains <br />all data required to georeference
    a IIIF image
  </p>
  <pre class="javascript">
		<code data-line-numbers="1-115|17-23|24-28|39-50" data-trim data-noescape
      ><script type="text/template">
{
  "type": "AnnotationPage",
  "@context": [
    "http://www.w3.org/ns/anno.jsonld"
  ],
  "items": [
    {
      "@context": [
        "http://iiif.io/api/extension/georef/1/context.json",
        "http://iiif.io/api/presentation/3/context.json"
      ],
      "id": "https://annotations.allmaps.org/maps/26e384d4efabdb32",
      "type": "Annotation",
      "motivation": "georeferencing",
      "target": {
        "type": "SpecificResource",
        "source": {
          // Reference to a IIIF resource
          "@id": "https://cdm21033.contentdm.oclc.org/digital/iiif/krt/1022",
          "type": "ImageService2",
          "height": 4292,
          "width": 3493
        },
        "selector": {
          // Optional SVG Selector to select the cartographic part of an image
          "type": "SvgSelector",
          "value": "<svg><polygon points=\"196,3324 861,3323 856,4061 369,4057 370,3925 305,3852 191,3851\" /></svg>"
        }
      },
      "body": {
        "type": "FeatureCollection",
        "transformation": {
          "type": "polynomial",
          "options": {
            "order": 1
          }
        },
        "features": [
          {
            // A list of ground control points (GCPs):
            // resource coordinates and corresponding geospatial coordinates
            "type": "Feature",
            "properties": {
              "resourceCoords": [578, 3779]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [97.1805877, 3.2578402]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "resourceCoords": [349, 3855]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [95.7576865, 2.8399231]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "resourceCoords": [834, 3724]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [98.6704303, 3.5887634]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "resourceCoords": [396, 3629]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [96.1302895, 4.1471109]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "resourceCoords": [845, 4039]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [98.7838046, 1.7403690]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "resourceCoords": [252, 3345]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [95.3060364, 5.7804199]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "resourceCoords": [625, 3441]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [97.4831471, 5.2443204]
            }
          }
        ]
      }
    }
  ]
}
      </script></code
    >
  </pre>
  <div class="fragment absolute top-0 left-0 w-full h-full text-left text-3xl">
    <div class="flex items-end h-full px-24 py-12">
      <MapMonster mood="happy" color="purple">
        <p class="p-4">
          These annotations can be stored <strong>locally</strong> or served by
          a <strong>URL</strong>:
        </p>
        <p class="p-4">
          <code class="text-2xl"
            >https://annotations.allmaps.org/maps/26e384d4efabdb32</code
          >
        </p>
      </MapMonster>
    </div>
  </div>
</section>

<section class="section-horizontal section-stretch">
  <div class="space-y-4 text-4xl">
    <p>IIIF Consortium published the</p>
    <p>
      <strong>Georeference Extension</strong>
    </p>
    <p>to the IIIF API, specifying</p>
    <p>Georeference Annotations</p>
  </div>
  <a href="https://iiif.io/news/2023/05/15/georef-extension-published/">
    <img
      loading="lazy"
      alt="Georeference Annotation"
      src="/images/iiif-annual-conference-2023/georeference-annotation.jpg"
    />
  </a>
</section>

<Slide>
  {#snippet children({ active })}
    <MapThumbnails {active}>
      Using Georeference Annotations <br />
      we can georeference, warp and overlay <br />
      <strong>millions of digitized IIIF maps</strong> <br />
      from institutions around the world
    </MapThumbnails>
  {/snippet}
</Slide>

<section>
  <!--
  Mention: compare with current toolchain:
  - You can currently georeference in QGIS
  - Steps of downloading and rehosting are omitted
  - Every app does something with Georeference Annotations: 'create, view, plugin, add, use'
  -->
  <p class="p-8">
    <strong>Allmaps is a toolbox</strong> <br />for working with Georeference
    Annotations
  </p>
  <div class="grid grid-cols-6 gap-10 text-left p-4 text-3xl">
    <div class="fragment col-span-2 font-bold" data-fragment-index="1">
      Allmaps Editor
    </div>
    <div class="fragment col-span-4" data-fragment-index="1">
      Georeference any IIIF map
    </div>
    <div class="fragment col-span-2 font-bold" data-fragment-index="2">
      Allmaps Viewer
    </div>
    <div class="fragment col-span-4" data-fragment-index="2">
      View georeferenced IIIF maps in browser
    </div>
    <div class="fragment col-span-2 font-bold" data-fragment-index="3">
      Allmaps OpenLayers <br />Allmaps Leaflet<br />Allmaps MapLibre
    </div>
    <div class="fragment col-span-4" data-fragment-index="3">
      Plugins for web mapping frameworks
    </div>
    <div class="fragment col-span-2 font-bold" data-fragment-index="4">
      Allmaps Tile Server
    </div>
    <div class="fragment col-span-4" data-fragment-index="4">
      Proxy server that turns Georeference Annotations <br />
      into XYZ tile layers
    </div>
    <div class="fragment col-span-2 font-bold" data-fragment-index="5">
      Allmaps CLI
    </div>
    <div class="fragment col-span-4" data-fragment-index="5">
      Command-line interface to transform coordinates, <br />
      generate GeoTIFFs and much more
    </div>
  </div>
  <div class="fragment absolute top-0 left-0 w-full h-full text-left">
    <div class="flex items-end h-full px-24 py-12">
      <MapMonster mood="happy" color="yellow">
        <p class="p-4 strong max-w-xl text-3xl">
          Meanwhile, <strong>Allmaps API</strong> keeps track of annotations
          created in Allmaps Editor, thus constructing a public database of
          <i>all maps</i>...
        </p></MapMonster
      >
    </div>
  </div>
</section>

<section class="section-horizontal section-stretch">
  <div class="space-y-10">
    <h4>Under the hood</h4>
    <ol class="space-y-6 text-3xl">
      <li>
        Build <strong>tranformation</strong>
        <code>image↔︎geo</code> from GCPs
      </li>
      <li>Find <strong>IIIF zoom-level & tiles</strong> for viewport</li>
      <li class="invisible">
        <strong>Triangulate</strong> mask in <code>image</code> space
      </li>
      <li class="invisible">
        <strong>Render triangles</strong> in <code>geo</code> space with WebGL
      </li>
    </ol>
  </div>
  <iframe
    title="Side by side"
    class="w-full h-full"
    data-fragment-index="1"
    data-src="https://cursor.allmaps.org/?url=https%3A%2F%2Fannotations.allmaps.org%2Fmaps%2F12a2ad54ed9fdd00"
    data-preload
  />
  <!-- https://dev.viewer.allmaps.org/?url=https%3A%2F%2Fannotations.allmaps.org%2Fimages%2F5afc515e4d10fd95 -->
</section>

<section class="section-horizontal section-stretch">
  <div class="space-y-10">
    <h4>Under the hood</h4>
    <ol class="space-y-6 text-3xl">
      <li>
        Build <strong>tranformation</strong>
        <code>image→geo</code> from GCPs
      </li>
      <li>Find <strong>IIIF zoom-level & tiles</strong> for viewport</li>
      <li>
        <strong>Triangulate</strong> mask in <code>image</code> space
      </li>
      <li>
        <strong>Render triangles</strong> in <code>geo</code> space with WebGL
      </li>
    </ol>
  </div>
  <!-- <img
    loading="lazy"
    alt="WebGL Triangles"
    src="/images/foss4g-benl-2024/lowercountries_{slideSeconds % 4 < 2
      ? 'tps'
      : 'triangles'}.png"
  /> -->
  <img
    loading="lazy"
    alt="WebGL Triangles"
    src="/images/foss4g-benl-2024/lowercountries_tps.png"
  />
  <!-- https://dev.viewer.allmaps.org/?url=https%3A%2F%2Fannotations.allmaps.org%2Fimages%2F5afc515e4d10fd95 -->
</section>

<section class="section-horizontal section-stretch">
  <!--
  Mention:
  - Reuse single source => Metadata conserved, Derivates of open images stay accessible
  - Warp on device => No backend needed, Much faster process,
  - Open data stays open => Acces via (API or) download dump, Improvable & reusable GCP data (e.g. distortions, transform)
  - FOSS tools you can host => No vendor lock-in, Packages you can use
  -->
  <img
    alt="Allmaps API Containedby"
    loading="lazy"
    src="/images/foss4g-benl-2024/open_data.png"
  />
  <div class="space-y-10">
    <h4>Principles</h4>
    <div class="space-y-4 text-3xl">
      <p>Reuse single source</p>
      <p>Process images on device</p>
      <p>Open data stays open</p>
      <p>FOSS tools you can host</p>
    </div>
  </div>
</section>

<Slide>
  {#snippet children({ active })}
    <ManyMapMonsters {active}>Some cool features</ManyMapMonsters>
  {/snippet}
</Slide>

<section>
  <!-- Plan de Paris avec indication exacte des Maisons et Monuments incendiées [sic], des Batteries et Barricades construites en Mai 1871 et numérotage des Bastions de l'Enceinte (1871) -->
  <!-- https://gallica.bnf.fr/ark:/12148/btv1b8494157x/f1.item.zoom -->
  <!-- https://annotations.allmaps.org/images/d1035e5f5d30a169 -->
  <p>Background Removal</p>
  <video
    muted
    data-loop
    data-autoplay
    data-src="/videos/soduco-bnf-seminar-2023/barricades-background-removal.mp4"
  />
</section>

<section>
  <!-- Verniquet Atlas -->
  <!-- https://soduco.geohistoricaldata.org/AllmapsAnnotations/ -->
  <!-- https://dataverse.harvard.edu/api/access/datafile/7002730 -->
  <p>Colorization</p>
  <video
    muted
    data-loop
    data-autoplay
    data-src="/videos/soduco-bnf-seminar-2023/verniquet-colorize.mp4"
  />
</section>

<section>
  <!-- Daguerre's diorama in  Architectonographie des théâtres de Paris (1821) -->
  <!-- https://gallica.bnf.fr/ark:/12148/bpt6k1526013d -->
  <!-- https://gallica.bnf.fr/iiif/ark:/12148/bpt6k1526013d/manifest.json -->
  <!-- https://annotations.allmaps.org/images/0cd4ee5d84dc9c65 -->
  <!-- Atlas Verniquet used as reference map -->
  <p>Custom Reference Map</p>
  <div class="flex flex-row w-full *:min-w-0">
    <img
      alt="Georeferencing the plan of the diorama in the Allmaps Editor"
      loading="lazy"
      src="/images/soduco-bnf-seminar-2023/diorama-editor.png"
    />
    <img
      alt="Viewing the plan of the diorama in the Allmaps Viewer"
      loading="lazy"
      src="/images/soduco-bnf-seminar-2023/diorama-viewer.png"
    />
  </div>
</section>

<section>
  <!-- https://observablehq.com/d/0b57d3b587542794 -->
  <p>Thin Plate Spline Transformation</p>
  <video
    muted
    data-loop
    data-autoplay
    data-src="/videos/soduco-bnf-seminar-2023/tps-metro-paris.mp4"
  />
</section>

<section>
  <!--
  Mention
  - Georeferencing using the coordinates of the corners
  - For the Bonne map, the Bonne projection has been implemented in Proj4JS and used directly
  -->
  <p>Map Series</p>
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
  <p>Towards an explorable database</p>

  <video
    class="shadow-lg"
    muted
    data-loop
    data-autoplay
    data-src="/videos/iiif-annual-conference-2024/allmaps-explore.webm"
  />
</section>

<section class="section-horizontal section-stretch">
  <iframe
    title="Allmaps Viewer"
    class="w-full h-full"
    data-fragment-index="1"
    data-src="https://dev.viewer.allmaps.org/?url=https%3A%2F%2Fannotations.allmaps.org%2Fmaps%2Fb84eeaabaa842fa4"
    data-preload
  />
</section>

<section class="section-horizontal section-stretch">
  <iframe
    title="Allmaps Viewer"
    class="w-full h-full"
    data-fragment-index="1"
    data-src="https://dev.viewer.allmaps.org/?url=https%3A%2F%2Fannotations.allmaps.org%2Fmaps%2Fcf4eb38cfd72a7e5"
    data-preload
  />
</section>

<section class="section-horizontal section-stretch">
  <iframe
    title="Allmaps Viewer"
    class="w-full h-full"
    data-fragment-index="1"
    data-src="https://dev.viewer.allmaps.org/?url=https%3A%2F%2Fannotations.allmaps.org%2Fmaps%2F13d5de6e70269314"
    data-preload
  />
</section>

<section class="section-horizontal section-stretch">
  <iframe
    title="Allmaps Viewer"
    class="w-full h-full"
    data-fragment-index="1"
    data-src="https://dev.viewer.allmaps.org/?url=https%3A%2F%2Fannotations.allmaps.org%2Fmaps%2Ff113f17cd646d4c6"
    data-preload
  />
</section>

<section class="section-horizontal section-stretch">
  <iframe
    title="Allmaps Viewer"
    class="w-full h-full"
    data-fragment-index="1"
    data-src="https://dev.viewer.allmaps.org/?url=https%3A%2F%2Fannotations.allmaps.org%2Fmaps%2Fb364a1fd6f97c466"
    data-preload
  />
</section>

<section class="section-horizontal section-stretch">
  <iframe
    title="Allmaps Viewer"
    class="w-full h-full"
    data-fragment-index="1"
    data-src="https://dev.viewer.allmaps.org/?url=https%3A%2F%2Fannotations.allmaps.org%2Fmaps%2Ff1434d4efbc1f61e"
    data-preload
  />
</section>

<section class="section-horizontal section-stretch">
  <iframe
    title="Allmaps Viewer"
    class="w-full h-full"
    data-fragment-index="1"
    data-src="https://dev.viewer.allmaps.org/?url=https%3A%2F%2Fannotations.allmaps.org%2Fmaps%2Febc46e17cddd5c79"
    data-preload
  />
</section>

<section class="section-horizontal section-stretch">
  <iframe
    title="Allmaps Viewer"
    class="w-full h-full"
    data-fragment-index="1"
    data-src="https://dev.viewer.allmaps.org/?url=https%3A%2F%2Fannotations.allmaps.org%2Fmaps%2F99e9a76cb7acfa5d"
    data-preload
  />
</section>

<section class="section-horizontal section-stretch">
  <iframe
    title="Allmaps Viewer"
    class="w-full h-full"
    data-fragment-index="1"
    data-src="https://dev.viewer.allmaps.org/?url=https%3A%2F%2Fannotations.allmaps.org%2Fmaps%2F7e4ec228b6d3e8f4"
    data-preload
  />
</section>

<section class="section-horizontal section-stretch">
  <iframe
    title="Allmaps Viewer"
    class="w-full h-full"
    data-fragment-index="1"
    data-src="https://dev.viewer.allmaps.org/?url=https%3A%2F%2Fannotations.allmaps.org%2Fmanifests%2Fa473b2e870064d6d"
    data-preload
  />
</section>

<section class="section-stretch">
  <video
    class="shadow-lg"
    muted
    data-loop
    data-autoplay
    data-src="/videos/iiif-annual-conference-2024/allmaps-arcade.webm"
  />
</section>

<section class="section-stretch">
  <p>
    Play Allmaps Arcade on <a
      class="underline"
      href="https://arcade.allmaps.org">arcade.allmaps.org</a
    >
  </p>
</section>

<section class="section-horizontal section-stretch section-no-logo">
  <div>
    <p class="p-6">Thanks!</p>
    <p class="text-4xl">
      <a class="underline" href="https://allmaps.org">allmaps.org</a>
      <br /><a class="underline" href="https://github.com/allmaps"
        >github.com/allmaps</a
      >
    </p>
  </div>
</section>
