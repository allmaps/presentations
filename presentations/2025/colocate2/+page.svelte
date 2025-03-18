<script context="module">
  export const title = 'Introduction to Allmaps - Colocate² @ Stanford'
  export const date = Date.parse('26 Feb 2025')
  export const location = 'Stanford, CA'
  export const coordinates = {
    type: 'Point',
    coordinates: [-122.16755, 37.42697]
  }
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

<Title>
  <h1 class="text-white text-6xl mb-4">Introduction to Allmaps</h1>
  <h2 class="text-white text-3xl mb-4">Colocate² @ Stanford</h2>
</Title>

<section>
  <p>
    Allmaps is an open source platform for <br />
    curating, georeferencing and exploring IIIF maps
  </p>

  <div class="fragment absolute top-0 left-0 w-full h-full text-left text-4xl">
    <div class="flex items-end h-full px-24 py-12">
      <MapMonster mood="happy" color="pink">
        <p class="p-4 max-w-xl">
          Allmaps runs in the browser, no need for complicated GIS
          infrastructure
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
    data-src="/videos/iiif-annual-conference-2023/georeferencing-loc-venice.webm"
  />
</section>

<section>
  <p>
    <strong>Georeference Annotation - an open standard</strong>
    <br /> A web annotation that contains <br />all data required to
    georeference a IIIF image
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
</section>

<section>
  <p>
    The <strong class="text-blue-500">history</strong> and
    <strong class="text-green-500">future</strong> of Allmaps
  </p>
</section>
<!--
<Slide let:active>
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
      annotationUrl="https://annotations.allmaps.org/maps/48da96d9296515a6"
    />
    <FlyTo
      annotationUrl="https://annotations.allmaps.org/maps/28ed75ea7a785f32"
    />
  </WarpedMap>
</Slide> -->

<section class="section-stretch">
  <p>New York Public Library - NYPL Labs</p>
  <img
    alt="New York Public Library"
    loading="lazy"
    src="/images/allmaps-convening-boston/nypl.jpg"
  />
</section>

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
  />
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
  />
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

<Slide let:active>
  <ManyMapMonsters {active}
    ><strong>Some (new) features</strong></ManyMapMonsters
  >
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

<section>
  <p>Projection support in Allmaps</p>
  <img
    alt="Projections"
    loading="lazy"
    src="/images/colocate2-2025/allmaps-projections-1.webp"
  />
</section>

<section>
  <p>Projection support in Allmaps</p>
  <img
    alt="Projections"
    loading="lazy"
    src="/images/colocate2-2025/allmaps-projections-2.webp"
  />
</section>

<section>
  <p>Projection support in Allmaps</p>
  <img
    alt="Projections"
    loading="lazy"
    src="/images/colocate2-2025/allmaps-projections-3.webp"
  />
</section>

<section class="section-stretch">
  <iframe
    title="Side by side"
    class="w-full h-full"
    data-src="https://cursors.allmaps.org/?url=https://annotations.allmaps.org/maps/8568d3e122117c6f"
    data-preload
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
      >● <span class="text-red">
        NYPL shuts Map Warper down <span class="font-thin"
          >(and most other tools, too)</span
        ></span
      ></span
    >
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

<Slide let:active>
  <MapThumbnails {active}>
    <strong>Millions of digitized maps</strong> are available through IIIF, from
    institutions around the world
  </MapThumbnails>
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
      >● <span>and finally, combine all of this in a single user interface</span
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
  />
</section>

<section>
  <p>Allmaps Explore <em>(very early prototype)</em></p>
  <video
    class="shadow-lg"
    muted
    data-loop
    data-autoplay
    data-src="/videos/iiif-annual-conference-2024/allmaps-explore.webm"
  />
  <div class="space-y-6 text-3xl">
    <p>Filter by year, institution, collection, scale, etc.</p>
  </div>
</section>

<section
  class="section-horizontal section-stretch section-no-logo grid-cols-[1fr_60%]"
>
  <div>
    <p>
      Open data section on <a class="underline" href="https://allmaps.org"
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
  />
</section>

<Slide let:active>
  <WarpedMap
    {active}
    annotationUrl="https://annotations.allmaps.org/maps/6325db4998c7f13f"
  >
    <FlyTo
      annotationUrl="https://annotations.allmaps.org/images/899328143b23dc0a"
    />
    <FlyTo
      annotationUrl="https://annotations.allmaps.org/manifests/a35b2badba5505ab"
    />
    <FlyTo
      annotationUrl="https://annotations.allmaps.org/manifests/071c6ba31f9c88d4"
    />
    <FlyTo
      annotationUrl="https://annotations.allmaps.org/manifests/fc2c32dc51b145d8"
    />
    <!-- <FlyTo
      annotationUrl="https://gist.githubusercontent.com/sammeltassen/cba1cce96299c7eb4d2fe3ad47a0d07f/raw/174d5f47d9835c111f9b0fb04b8ae0e21aebccb4/sf-aerial-views.json"
    /> -->
  </WarpedMap>
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
