<script context="module">
  export const title = 'Watertijdreis'
  export const date = Date.parse('18 November 2025')
</script>

<script lang="ts">
  import Slide from '$lib/components/Slide.svelte'
  import Title from '$lib/components/Title.svelte'
  import MapMonster from '$lib/components/MapMonster.svelte'
  import MapThumbnails from '$lib/components/MapThumbnails.svelte'
  import WarpedMap from '$lib/components/WarpedMap.svelte'
  import FlyTo from '$lib/components/FlyTo.svelte'
  import XYZTiles from '$lib/components/XYZTiles.svelte'
  import Pin from '$lib/components/Pin.svelte'
  import LargeTextShadow from '$lib/components/LargeTextShadow.svelte'
  import ManyMapMonsters from '$lib/components/ManyMapMonsters.svelte'

  function randomElement(array: any[]): any {
    if (!array || array.length === 0) {
      return null
    }
    return array[Math.floor(Math.random() * array.length)]
  }
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Title>
  <h3 class="text-white">Watertijdreis</h3>
  <h5 class="!text-white text-xl pt-4">
    Jules Schoonman (Allmaps, TU Delft Library)<br />
    Martijn Meijers (TU Delft, GIS-technologie)<br />
    Josephine Spit & Gees Brouwer (De Geomaten)<br />
    ...
  </h5>
</Title>

<Title>
  <h3 class="text-white">Watertijdreis</h3>
  <h5 class="!text-white text-xl pt-4">
    ...<br />
    Rijksdienst voor het Cultureel Erfgoed<br />
    Stichting Toegepast Onderzoek Waterbeheer<br />
    Universiteitsbibliotheek Utrecht
  </h5>
</Title>

<Slide>
  {#snippet children({ active })}
    <MapThumbnails {active}>
      Talloze kaarten zijn gedigitaliseerd door archieven, bibliotheken en musea
      wereldwijd
      <div
        class="fragment absolute top-0 left-0 w-full h-full text-left text-3xl"
      >
        <div class="flex items-end h-full px-24 py-12">
          <MapMonster mood="happy" color="pink">
            <p class="p-4 max-w-xl">
              Vaak beschikbaar als open data dankzij het <b
                >International Image Interoperability Framework</b
              > (IIIF)
            </p>
          </MapMonster>
        </div>
      </div>
    </MapThumbnails>
  {/snippet}
</Slide>

<Slide>
  {#snippet children({ active })}
    <WarpedMap
      {active}
      annotationUrl="https://annotations.allmaps.org/images/112ec9cb81fd0850@9cac0b66003e7ce9"
      caption="Maar hoe maken we van een IIIF beeld..."
      transformationType="straight"
      hideMap={true}
      fullMask={true}
    >
      <FlyTo
        annotationUrl="https://annotations.allmaps.org/images/112ec9cb81fd0850@9cac0b66003e7ce9"
        transformationType="helmert"
        padding={200}
        caption="...een kaart?"
      />
    </WarpedMap>
  {/snippet}
</Slide>

<Slide>
  {#snippet children({ active })}
    <ManyMapMonsters {active}
      ><strong>Dat kan met Allmaps!</strong></ManyMapMonsters
    >
  {/snippet}
</Slide>

<section
  class="section-horizontal section-stretch section-no-logo grid-cols-[1fr_60%]"
>
  <p>Wellicht bekend van de Allmaps Arcade?</p>

  <div class="flex flex-row gap-8 [&>*]:min-w-0">
    <img
      alt="Allmaps Arcade cabinet #2"
      loading="lazy"
      src="/images/iiif-annual-conference-2024/arcade-cabinet-2.jpg"
    />
    <img
      alt="Allmaps Arcade cabinet #1"
      loading="lazy"
      src=" /images/iiif-annual-conference-2024/arcade-cabinet-1.jpg"
    />
  </div>
  <div
    class="fragment absolute bottom-0 right-0 w-[60%] text-left flex items-end px-24 py-12 drop-shadow-md"
  >
    <MapMonster mood="excited" color="pink">
      <div class="max-w-md p-4">
        <p class="text-left text-[0.6em]">
          Ook online via<br />
          <b><a href="https://arcade.allmaps.org/">arcade.allmaps.org</a></b>
        </p>
      </div>
    </MapMonster>
  </div>
</section>

<section>
  <p>Geen GeoTIFs maar <b>Georeference Annotations</b>!</p>
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
  <div
    class="fragment absolute bottom-0 right-0 w-[60%] text-left flex items-end px-24 py-12 drop-shadow-md"
  >
    <MapMonster mood="neutral" color="green">
      <div class="max-w-md p-4">
        <p class="text-left text-[0.6em]">
          Voor meer informatie<br />
          zie <b><a href="https://allmaps.org/">allmaps.org</a></b>
        </p>
      </div>
    </MapMonster>
  </div>
</section>

<section class="section-stretch">
  <iframe
    title="Allmaps Here"
    class="w-full h-full"
    data-src="https://here.allmaps.org/?position=5.303116,51.6889387"
    data-preload
  />
  <div
    class="fragment absolute bottom-0 right-0 w-[60%] text-left flex items-end px-24 py-12 drop-shadow-md"
  >
    <MapMonster mood="neutral" color="green">
      <div class="max-w-md p-4">
        <p class="text-left text-[0.6em]">
          Probeer zelf op<br />
          <b><a href="https://here.allmaps.org/">here.allmaps.org</a></b>
        </p>
      </div>
    </MapMonster>
  </div>
</section>

<section class="section-stretch">
  <p>Maar werkt het ook voor kaartseries?</p>
  <img
    alt="Maps on four IIIF Canvasses that can be turned into one singe map"
    class="pb-20"
    loading="lazy"
    src="/images/iiif-annual-conference-2024/map-series-explainer.svg"
  />
  <div
    class="fragment absolute bottom-0 right-0 w-[60%] text-left flex items-end px-24 py-12 drop-shadow-md"
  >
    <MapMonster mood="confused" color="pink">
      <div class="max-w-md p-4">
        <ul class="text-left text-[0.6em]">
          <li>Gebruikmakend van hoekpunten</li>
          <li>Toegang tot volledige kaartblad</li>
          <li>Dynamische mozaïeken</li>
        </ul>
      </div>
    </MapMonster>
  </div>
</section>

<Slide>
  {#snippet children({ active })}
    <h2 class="absolute top-2 px-4 py-1 shadow-md z-20 bg-white rounded-lg">
      Loman Atlas
    </h2>
    <WarpedMap
      {active}
      annotationUrl="https://annotations.allmaps.org/manifests/af012d4792961902"
    />
  {/snippet}
</Slide>

<section class="section-stretch">
  <p>Samenwerking met MSc Geomatics (TU Delft)</p>
  <img
    alt="Final presentation of the Geomatics Synthesis Project"
    loading="lazy"
    src="/images/iiif-annual-conference-2024/geomatics-presentation.jpg"
  />
</section>

<!-- ======================================================================================== -->
<!-- ==== Kaartseries ======================================================================= -->
<!-- ======================================================================================== -->

<Slide>
  {#snippet children({ active })}
    <h2 class="absolute top-2 px-4 py-1 shadow-md z-20 bg-white rounded-lg">
      Krayenhoff-kaart
    </h2>
    <WarpedMap
      {active}
      annotationUrl="https://raw.githubusercontent.com/bmmeijers/iiif-annotations/main/series/kraijenhoff/dlcs/latest.json"
    />
  {/snippet}
</Slide>

<Slide>
  {#snippet children({ active })}
    <h2 class="absolute top-2 px-4 py-1 shadow-md z-20 bg-white rounded-lg">
      Topografisch Militaire Kaart
    </h2>
    <WarpedMap
      {active}
      annotationUrl="https://raw.githubusercontent.com/bmmeijers/iiif-annotations/main/series/tmk/20231124.json"
    />
  {/snippet}
</Slide>

<Slide>
  {#snippet children({ active })}
    <h2 class="absolute top-2 px-4 py-1 shadow-md z-20 bg-white rounded-lg">
      Bonnebladen
    </h2>
    <WarpedMap
      {active}
      annotationUrl="https://sammeltassen.nl/iiif-manifests/allmaps/bonnebladen-dans-1.json"
    />
  {/snippet}
</Slide>

<Slide>
  {#snippet children({ active })}
    <h2 class="absolute top-2 px-4 py-1 shadow-md z-20 bg-white rounded-lg">
      Top 25
    </h2>
    <WarpedMap
      {active}
      annotationUrl="https://sammeltassen.nl/iiif-manifests/allmaps/top25-1.json"
    />
  {/snippet}
</Slide>

<Slide>
  {#snippet children({ active })}
    <h2 class="absolute top-2 px-4 py-1 shadow-md z-20 bg-white rounded-lg">
      Waterstaatskaart
    </h2>
    <WarpedMap
      {active}
      annotationUrl="https://raw.githubusercontent.com/tu-delft-heritage/watertijdreis-data/refs/heads/main/content/annotations/09-1874-456827-georef.json"
    />
  {/snippet}
</Slide>
