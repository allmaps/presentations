<script module>
  export const title = 'Introduction to Allmaps'
  export const subtitle = 'Netværk for historisk GIS og Geodata'
  export const date = Date.parse('13 March 2025')
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
  <title>{title} - {subtitle}</title>
</svelte:head>

<Title>
  <h1 class="text-white text-6xl mb-4">{title}</h1>
  <h2 class="text-white text-3xl mb-4">{subtitle}</h2>
</Title>

<Slide
  ><div>Allmaps: Curating, georeferencing and exploring for IIIF maps</div>
  <a href="https://allmaps.org">
    <img
      alt="Allmaps Homepage"
      src="/images/hist-429/allmaps-homepage.webp"
    /></a
  >
</Slide>

<Slide>
  <div>International Image Interoperability Framework - IIIF</div>
  <a href="https://iiif.io">
    <img alt="IIIF Homepage" src="/images/hist-429/iiif-homepage.webp" /></a
  >
</Slide>

<Slide
  >IIIF standardizes sharing high-res images and their metadata across
  institutions</Slide
>

<section class="section-stretch">
  <iframe
    title="AGSL: Denmark maps"
    class="w-full h-full"
    data-src="https://collections.lib.uwm.edu/digital/collection/agdm/search/searchterm/denmark"
    data-preload
></iframe>
</section>

<Slide >
  {#snippet children({ active })}
    <MapThumbnails {active}>
      <strong>Millions of digitized maps</strong> are available through IIIF, from
      institutions around the world
    </MapThumbnails>
  {/snippet}
</Slide>

<!-- show danish map, iiif -->

<section>
  <p>Finding maps is not easy</p>
  <img
    alt="Rotterdam Junction, NY"
    loading="lazy"
    src="/images/open-maps-meeting-2024/loc-rotterdam.webp"
  />
</section>

<Slide>
  <span>How can we improve this?</span>
  <span class="font-bold text-green">Georeferencing!</span></Slide
>

<section>
  <p>Georeferencing with Allmaps</p>

  <div class="flex flex-row gap-8 [&>*]:min-w-0">
    <img
      alt="Georeferencing with Allmaps"
      loading="lazy"
      src="/images/geoforum.dk/allmaps-editor-1.webp"
    />
    <img
      alt="Georeferencing with Allmaps"
      loading="lazy"
      src="/images/geoforum.dk/allmaps-editor-2.webp"
    />
  </div>
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

<Slide
  ><span>IIIF + Georeference Annotations = </span><span
    class="font-bold text-pink">Allmaps</span
  ></Slide
>

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

<Slide>A brief history of Allmaps:</Slide>

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
  <p>Maps by Decade</p>
  <img
    alt="Map Warper"
    loading="lazy"
    src="/images/open-maps-meeting-2024/maps-by-decade-large.gif"
  />
</section>

<Slide >
  {#snippet children({ active })}
    <ManyMapMonsters {active}
      ><strong>What Allmaps can do</strong></ManyMapMonsters
    >
  {/snippet}
</Slide>

<Slide>
  <div>Georeferencing a map with Allmaps Editor</div>
  <video
    class="shadow-lg"
    muted
    data-loop
    data-autoplay
    data-src="/videos/iiif-annual-conference-2023/georeferencing-loc-venice.webm"
></video>
</Slide>

<!--
  Nuova pianta degli scavi di Pompei (1850)
  Leventhal Map Center at the Boston Public Library
  https://www.digitalcommonwealth.org/search/commonwealth:ht250938v
  https://collections.leventhalmap.org/search/commonwealth:ht250938v/manifest
  https://annotations.allmaps.org/manifests/c49a85fa4a1230ba
-->
<Slide>
  <div class="p-4">
    <p>Nuova pianta degli scavi di Pompei (1850)</p>
    <p class="font-light">
      Leventhal Map & Education Center at the Boston Public Library
    </p>
  </div>
  <img
    alt="Nuova pianta degli scavi di Pompei"
    class="image-cover"
    loading="lazy"
    src="/images/iiif-annual-conference-2023/lmec-nuova-pianta-degli-scavi-di-pompei-1850.jpg"
  />
</Slide>

<!--
  Plan de Pompeia (1890)
  Bibliothèque Nationale de France
  https://gallica.bnf.fr/ark:/12148/btv1b530297246.r=pompei?rk=236052;4
  https://gallica.bnf.fr/iiif/ark:/12148/btv1b530297246/f1/info.json
  https://annotations.allmaps.org/images/a2f8ff9579ddf337
-->
<Slide>
  <div class="p-4">
    <p>Plan de Pompeia (1890)</p>
    <p class="font-light">Bibliothèque Nationale de France</p>
  </div>
  <img
    alt="Plan de Pompeia"
    class="image-cover"
    loading="lazy"
    src="/images/iiif-annual-conference-2023/bnf-plan-de-pompeia-1890.jpg"
  />
</Slide>

<Slide>
  <a
    href="https://dev.viewer.allmaps.org/?url=https%3A%2F%2Fpresentations.allmaps.org%2Fannotations%2Fiiif-annual-conference-2023%2Fpompeii.json"
  >
    <img
      alt="Four maps of Pompeii, shown in Allmaps Viewer"
      loading="lazy"
      src="/images/iiif-annual-conference-2023/pompeii.jpg"
    />
  </a>
</Slide>

<!-- <section class="rainbow-background"> -->
<Slide>
  <a
    href="https://dev.viewer.allmaps.org/?url=https%3A%2F%2Fpresentations.allmaps.org%2Fannotations%2Fiiif-annual-conference-2023%2Fpompeii.json"
  >
    <img
      alt="Four maps of Pompeii, colorized with Allmaps Viewer"
      loading="lazy"
      src="/images/iiif-annual-conference-2023/pompeii-colorized.png"
    />
  </a>
</Slide>

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
    data-src="https://cursors.allmaps.org/?url=https://annotations.allmaps.org/maps/54ae7537d927568f"
    data-preload
></iframe>
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

<!-- <section>
  <p>Allmaps for education: City Atlas</p>
  <a href="https://cityatlas.theberlage.nl/">
    <img
      alt="City Atlas"
      loading="lazy"
      src="/images/allmaps-convening-boston/city-atlas.webp"
    /></a
  >
</section> -->

<Slide
  ><div>Allmaps Here</div>
  <a href="https://here.allmaps.org">
    <img alt="Allmaps Here" src="/images/hist-429/allmaps-here.webp" /></a
  >
</Slide>

<Slide >
  {#snippet children({ active })}
    <WarpedMap
      {active}
      annotationUrl="https://annotations.allmaps.org/maps/6325db4998c7f13f"
    >
      <FlyTo
        annotationUrl="https://annotations.allmaps.org/images/899328143b23dc0a"
      />

      <FlyTo
        annotationUrl="https://annotations.allmaps.org/images/9591a6ec92d0a977"
      />
      <FlyTo
        annotationUrl="https://annotations.allmaps.org/images/70cc691781ff504a"
      />
      <FlyTo
        annotationUrl="https://annotations.allmaps.org/images/d4338461602ebff8"
      />
      <FlyTo
        annotationUrl="https://annotations.allmaps.org/images/cb1f20a39a8d7439"
      />
      <FlyTo
        annotationUrl="https://annotations.allmaps.org/maps/d6e26a80608dccd2"
      />
      <FlyTo
        annotationUrl="https://annotations.allmaps.org/maps/dbe2fbebd07ee477"
      />
      <FlyTo
        annotationUrl="https://annotations.allmaps.org/images/38e7a057901b27db"
      />

      <FlyTo
        annotationUrl="https://annotations.allmaps.org/manifests/fc2c32dc51b145d8"
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
