<script module>
  export const title = 'Soduco Bnf'
  export const date = Date.parse('6 Nov 2023')
</script>

<script lang="ts">
  import Title from '$lib/components/Title.svelte'
  import MapMonster from '$lib/components/MapMonster.svelte'
  import Slide from '$lib/components/Slide.svelte'
  import ManyMapMonsters from '$lib/components/ManyMapMonsters.svelte'
  import MapThumbnails from '$lib/components/MapThumbnails.svelte'

  import './style.css'
</script>

<Title>
  <h2 class="text-white">Georeferencing with Allmaps<br />and IIIF</h2>
  <p class="text-white r-fit-text">SODUCO-BNF seminar 2023</p>
</Title>

<Title dark={false}>
  <h1>Allmaps</h1>
  <p>Open source tools for curating, georeferencing and exploring IIIF maps</p>
  <div
    class="fragment absolute top-0 left-0 w-full h-full bg-white/70 text-left"
  >
    <div class="flex items-end h-full px-24 py-12">
      <MapMonster mood="happy" color="pink">
        <p class="p-4 strong max-w-xl">
          Allmaps works with any map that is available with the standards of the
          International Image Interoperability Framework
        </p>
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

<section class="section-horizontal section-stretch">
  <p>
    Allmaps is centered around the <strong>Georeference Extension</strong> published
    by the IIIF Consortium.
  </p>
  <a href="https://iiif.io/news/2023/05/15/georef-extension-published/">
    <img
      loading="lazy"
      alt="Georeference Annotation"
      src="/images/iiif-annual-conference-2023/georeference-annotation.jpg"
    />
  </a>
</section>

<section>
  <p>
    <strong>Georeference Annotation</strong>: a Web Annotation that contains all
    <br /> the required data to georeference a IIIF image:
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
            //   resource coordinates and corresponding geospatial coordinates
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

<Slide>
  {#snippet children({ active })}
    <MapThumbnails {active}>
      Using Georeference Annotations and IIIF, we can now georeference, warp and
      overlay <strong>millions of digitized maps</strong> from institutions around
      the world
    </MapThumbnails>
  {/snippet}
</Slide>

<section>
  <ol class="list-decimal px-40 space-y-8 text-4xl">
    <li>
      Georeference any IIIF map with <strong>Allmaps Editor</strong>. Allmaps
      Editor produces Georeference Annotations
    </li>
    <li>
      These annotations can be stored using <strong>Allmaps API</strong>. But
      you can also store them somewhere else, even locally
    </li>
    <li>
      <strong>Allmaps Viewer</strong> reads Georeference Annotations and can warp
      and overlay IIIF maps in the browser, using WebGL
    </li>
    <li>
      Integrate into your applications by using the plugins for <strong
        >OpenLayers</strong
      >
      and
      <strong>Leaflet</strong>. Or use the proxy server for XYZ map tiles, or
      the Allmaps CLI to generate GeoTIFFs
    </li>
  </ol>
</section>
<Slide>
  {#snippet children({ active })}
    <ManyMapMonsters {active}>Some new features:</ManyMapMonsters>
  {/snippet}
</Slide>

<section>
  <!-- https://observablehq.com/@allmaps/leaflet-plugin -->
  <!-- Plan général de l'Exposition universelle de 1889 -->
  <!-- https://archive.org/details/plangeneraldelex00unse -->
  <!-- https://annotations.allmaps.org/images/7e491a36c6e3de09 -->
  <p>Leaflet Plugin</p>
  <img
    alt="Map of LMEC"
    loading="lazy"
    src="/images/soduco-bnf-seminar-2023/leaflet-plugin.png"
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
  <p>Command Line Interface (CLI)</p>
  <img
    alt="Allmaps CLI"
    loading="lazy"
    src="/images/soduco-bnf-seminar-2023/allmaps-cli.png"
  />
</section>

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

<Slide>
  {#snippet children({ active })}
    <ManyMapMonsters {active}>Future plans:</ManyMapMonsters>
  {/snippet}
</Slide>

<section>
  <p>Distortion analysis</p>
  <div
    class="grid grid-cols-2 *:min-w-0 *:min-h-0 gap-4 items-center place-items-center"
  >
    <img
      alt="Table of Parisian atlasses"
      loading="lazy"
      src="/images/soduco-bnf-seminar-2023/distortion/old_map_displacementVectors.png"
    />
    <img
      alt="Sheet of atlas"
      loading="lazy"
      src="/images/soduco-bnf-seminar-2023/distortion/old_map_2Omega_scalebar.png"
    />
    <img
      alt="Trade directory"
      loading="lazy"
      src="/images/soduco-bnf-seminar-2023/distortion/old_map_distortionGrid.png"
    />
    <img
      alt="Comparison between trade directories"
      loading="lazy"
      src="/images/soduco-bnf-seminar-2023/distortion/old_map_log2sigma_scalebar.png"
    />
  </div>
</section>

<section>
  <!-- Student work of Geomatics students -->
  <!-- Faculty of Architecture and the Built Environment, TU Delft -->
  <!-- Map series of the Dutch National Archives -->
  <p>Automatic georeferencing</p>
  <img
    alt="Matching between different series of the TMK"
    loading="lazy"
    src="/images/soduco-bnf-seminar-2023/geor-student-work.png"
  />
</section>

<section class="section-horizontal section-stretch section-no-logo">
  <div>
    <p>Thanks!</p>
    <p>
      See <a class="underline" href="https://allmaps.org">allmaps.org</a> and
      <a class="underline" href="https://github.com/allmaps"
        >github.com/allmaps</a
      >
      for more details about Allmaps
    </p>
  </div>
  <video
    muted
    data-loop
    data-autoplay
    data-src="/video/iiif-annual-conference-2023/allmaps-website.webm"
  />

  <div
    class="fragment absolute bottom-0 right-0 w-1/2 h-full text-left bg-white/70 flex items-end px-24 py-12"
  >
    <MapMonster mood="excited" color="purple">
      <div class="max-w-md p-4">
        <p class="text-left">This presentation:</p>
        <a href="https://presentations.allmaps.org/soduco-bnf-seminar-2023">
          <img
            class="w-full"
            alt="QR code that links to these slides"
            src="/images/soduco-bnf-seminar-2023/qr-code.svg"
          /></a
        >
      </div>
    </MapMonster>
  </div>
</section>
