<script context="module">
  export const title = 'Datasprint Amsterdam Time Machine/Create Lab'
  export const date = Date.parse('20 November 2025')
</script>

<script lang="ts">
  import Slide from '$lib/components/Slide.svelte'
  import Title from '$lib/components/Title.svelte'
  import MapMonster from '$lib/components/MapMonster.svelte'
  import MapThumbnails from '$lib/components/MapThumbnails.svelte'
  import WarpedMap from '$lib/components/WarpedMap.svelte'
  import FlyTo from '$lib/components/FlyTo.svelte'
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Title>
  <h3 class="text-white">Datasprint Amsterdam Time Machine/Create Lab</h3>
  <h5 class="!text-white text-xl pt-4">
    Jules Schoonman (Allmaps, TU Delft Library)<br />
    Magriet Hoogvliet (Allard Pierson, UvA)
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
      annotationUrl="https://annotations.allmaps.org/maps/435ccc0ea633df34@3d263d75a9563b6a"
      caption="Allmaps maakt van een IIIF beeld..."
      transformationType="straight"
      hideMap={true}
    >
      <FlyTo
        annotationUrl="https://annotations.allmaps.org/maps/435ccc0ea633df34@3d263d75a9563b6a"
        transformationType="helmert"
        padding={200}
        caption="...een kaart!"
      />
    </WarpedMap>
  {/snippet}
</Slide>

<section>
  <p>Opgeslagen als <b>Georeference Annotations</b>!</p>
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
    data-src="https://here.allmaps.org/?position=4.8981663,52.3707822&geojson=https%3A%2F%2Famsterdamtimemachine.github.io%2Froutes%2F2025_geoweek.json"
    data-preload
  />
  <div
    class="fragment absolute bottom-0 right-0 w-[60%] text-left flex items-end px-24 py-12 drop-shadow-md z-20"
  >
    <MapMonster mood="excited" color="green">
      <div class="max-w-md p-4">
        <p class="text-left text-[0.6em]">
          Probeer zelf op<br />
          <b><a href="https://here.allmaps.org/">here.allmaps.org</a></b>
        </p>
      </div>
    </MapMonster>
  </div>
</section>

<Slide>
  {#snippet children({ active })}
    <WarpedMap
      {active}
      annotationUrl="https://annotations.allmaps.org/manifests/af012d4792961902"
      caption="Loman Atlas (1876)"
    >
      <FlyTo
        annotationUrl="https://sammeltassen.nl/iiif-manifests/allmaps/publieke-werken-1909.json"
        caption="Publieke Werken (1909)"
      />
      <FlyTo
        annotationUrl="https://sammeltassen.nl/iiif-manifests/allmaps/publieke-werken-1943.json"
        caption="Publieke Werken (1943)"
      />
      <FlyTo
        annotationUrl="https://sammeltassen.nl/iiif-manifests/allmaps/publieke-werken-1985.json"
        caption="Publieke Werken (1985)"
      />
    </WarpedMap>
  {/snippet}
</Slide>

<section class="section-stretch">
  <iframe
    title="Allmaps Editor"
    class="w-full h-full"
    data-src="https://editor.allmaps.org/images?url=https%3A%2F%2Famsterdamtimemachine.github.io%2Fpica-toegankelijke-kaartcollectie%2Fdata%2Fcollection_all.json"
    data-preload
  />
  <div
    class="fragment absolute bottom-0 right-0 w-[60%] text-left bg-white/70 flex items-end px-24 py-12 drop-shadow-md z-20"
  >
    <MapMonster mood="excited" color="pink">
      <div class="max-w-md p-4">
        <p class="text-left text-[0.6em] pb-4">Scan om te beginnen!</p>
        <a
          href="https://editor.allmaps.org/images?url=https%3A%2F%2Famsterdamtimemachine.github.io%2Fpica-toegankelijke-kaartcollectie%2Fdata%2Fcollection_all.json"
        >
          <img
            class="w-[80%]"
            alt="QR code that links to these slides"
            src="/images/datasprint-uva-2025/qrcode.svg"
          /></a
        >
      </div>
    </MapMonster>
  </div>
</section>
