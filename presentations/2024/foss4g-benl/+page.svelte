<script module>
  export const title = 'FOSS4G BE+NL 2024'
  export const date = Date.parse('26 Sept 2024')
</script>

<script lang="ts">
  import Slide from '$lib/components/Slide.svelte'
  import Title from '$lib/components/Title.svelte'
  import MapMonster from '$lib/components/MapMonster.svelte'
  import ManyMapMonsters from '$lib/components/ManyMapMonsters.svelte'
  import MapThumbnails from '$lib/components/MapThumbnails.svelte'

  // TODO: make!!!
  let slideSeconds = $state(0)
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Title>
  <!-- Defined white style because tailwind class text-white is overwritten by reveal -->
  <h2 class="text-white" style="color: white">Allmaps</h2>
  <p class="text-white r-fit-text">FOSS4G BE+NL 2024</p>
</Title>

<Title dark={false}>
  <h2>Allmaps</h2>
  <p>Open source tools for curating, georeferencing and exploring IIIF maps</p>
  <div
    class="fragment absolute top-0 left-0 w-full h-full bg-white/70 text-left text-4xl"
  >
    <div class="flex items-end h-full px-24 py-12">
      <MapMonster mood="neutral" color="green">
        <p class="p-4 max-w-xl">IIIF maps?</p>
      </MapMonster>
    </div>
  </div>
  <div class="fragment absolute top-0 left-0 w-full h-full text-left text-4xl">
    <div class="flex items-end h-full px-24 py-12">
      <MapMonster mood="happy" color="pink">
        <p class="p-4 max-w-xl">
          International<br />Image<br />Interoperability<br />Framework!
        </p>
      </MapMonster>
    </div>
  </div>
  <div class="fragment absolute top-0 left-0 w-full h-full text-left text-4xl">
    <div class="flex items-end h-full px-24 py-12">
      <MapMonster mood="neutral" color="green">
        <p class="p-4 max-w-xl">
          International<br />Image<br />Interoperability<br />Framework?
        </p>
      </MapMonster>
    </div>
  </div>
  <div class="fragment absolute top-0 left-0 w-full h-full text-left text-4xl">
    <div class="flex items-end h-full px-24 py-12">
      <MapMonster mood="happy" color="pink">
        <ul class="px-12 py-4 max-w-xl space-y-8">
          <li>
            <strong>Open standards</strong> for sharing images and metadata
          </li>
          <li>Used by <strong>archives</strong>, libraries and museums</li>
          <li>
            Images of paintings, books, ... and <strong>maps</strong>!
          </li>
          <li>
            Serving high resolution images using <strong>tiles</strong> in
            different <strong>zoom levels</strong>
          </li>
        </ul>
      </MapMonster>
    </div>
  </div>
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
    data-src="https://cursor.allmaps.org/?url=https%3A%2F%2Fannotations.allmaps.org%2Fimages%2F5afc515e4d10fd95"
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
  <img
    loading="lazy"
    alt="WebGL Triangles"
    src="/images/foss4g-benl-2024/lowercountries_{slideSeconds % 4 < 2
      ? 'tps'
      : 'triangles'}.png"
  />
  <!-- https://dev.viewer.allmaps.org/?url=https%3A%2F%2Fannotations.allmaps.org%2Fimages%2F5afc515e4d10fd95 -->
</section>

<Slide>
  {#snippet children({ active })}
    <ManyMapMonsters {active}>Some cool features</ManyMapMonsters>
  {/snippet}
</Slide>

<section>
  <p>Background removal</p>
  <img
    alt="Map with background"
    class={slideSeconds % 4 < 2 ? '' : 'hidden'}
    loading="lazy"
    src="images/iiif-annual-conference-2023/tps/lowercountries_affine.png"
  />
  <img
    alt="Map without background"
    class={slideSeconds % 4 < 2 ? 'hidden' : ''}
    loading="lazy"
    src="images/iiif-annual-conference-2023/tps/lowercountries_affine_removebackground.png"
  />
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

<section>
  <div class="mb-12">
    <p>Use Allmaps JavaScript modules in your project</p>
  </div>
  <pre class="javascript">
      <code data-line-numbers="" data-trim data-noescape
      ><script type="text/template">
        import { parseAnnotation } from '@allmaps/annotation'
        import { GcpTransformer } from '@allmaps/transform'

        const annotationUrl =
          'https://annotations.allmaps.org/images/e861bd9af6573765'
        const annotation = await fetch(annotationUrl).then((response) =>
          response.json()
        )
        const maps = parseAnnotation(annotation)

        const transformer = new GcpTransformer(maps[0].gcps)

        const coordinates = transformer.transformToGeo([100, 100])
      </script></code
    ></pre>
  <div class="space-y-6 mt-12 text-3xl text-gray-500">
    <p>
      Transform geometries using <code>@allmaps/transform</code>
    </p>
  </div>
</section>

<section>
  <!-- Generate bash scripts to create geotiffs -->
  <p>Allmaps CLI as an alternative to GDAL</p>
  <img
    alt="Allmaps CLI"
    loading="lazy"
    src="/images/foss4g-benl-2024/cli-transform.png"
  />
  <div class="space-y-6 text-3xl text-gray-500">
    <p>
      Transform coordinates <br />
      similar to <code>gdaltransform</code>
    </p>
  </div>
</section>

<section class="">
  <p>Georeferencing 1832 cadaster maps of Baarle</p>
  <iframe
    title="Baarle in Editor"
    class="h-[80vh]"
    frameborder="0"
    src="https://editor.allmaps.org/#/collection?url=https://sammeltassen.nl/iiif-manifests/rce/minuutplan-baarle@v2.json"
  ></iframe>
</section>

<section class="">
  <!-- Entire notebook: https://observablehq.com/embed/@allmaps/baarle@1230?cell=* -->
  <p>Understanding the border's quirks</p>
  <iframe
    title="Observable notebook Baarle"
    class="h-[80vh]"
    frameborder="0"
    src="https://observablehq.com/embed/@allmaps/baarle?cells=container"
  ></iframe>
</section>

<section>
  <!--
    Mention:
    - Sharing this because our fails are beautiful and part of the way there for everybody
    - Nod to team at Mapbox (while still FOSS) who shared the 'bad maps' they accidentally made
    - For all the FOSS projects Allmaps uses under the hood, you can't build tools like this without standing on the shoulders of giants that came before you
  -->
  <p class="p-8">Accidental shader art</p>
  <div class="grid grid-rows-2 grid-cols-3 gap-10 text-left p-4 text-3xl">
    {#each [1, 2, 3, 4, 5, 6] as index}
      <img
        alt="Bad map"
        loading="lazy"
        src="/images/foss4g-benl-2024/badmap_{index}.png"
      />
    {/each}
  </div>
</section>

<section>
  <a href="https://openmapsmeeting.nl/">
    <img
      alt="QR code that links to these slides"
      src="/images/foss4g-benl-2024/openmapsmeeting_2024.jpg"
    /></a
  >
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
    <p class="text-3xl text-gray-500 p-10">
      <a class="underline" href="https://observablehq.com/@allmaps/baarle"
        >observablehq.com/@allmaps/baarle</a
      ><br />
      <a class="underline" href="https://openmapsmeeting.nl/"
        >openmapsmeeting.nl</a
      >
    </p>
    <div
      class="fragment absolute bottom-0 right-0 w-1/2 h-full text-left flex items-end px-24 py-12"
    >
      <MapMonster mood="excited" color="purple">
        <div class="max-w-md p-4">
          <p class="text-left">This presentation:</p>
          <a href="https://presentations.allmaps.org/foss4g-benl-2024">
            <img
              class="w-96"
              alt="QR code that links to these slides"
              src="/images/foss4g-benl-2024/qr-code.svg"
            /></a
          >
        </div>
      </MapMonster>
    </div>
  </div>
</section>
