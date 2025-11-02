<script context="module">
  export const title =
    'Kennisbijeenkomst Historische kaarten vergelijken met Allmaps'
  export const subtitle = 'Datawerkplaats Overijssel'
  export const date = Date.parse('16 October 2025')
</script>

<script lang="ts">
  import Slide from '$lib/components/Slide.svelte'
  import Title from '$lib/components/Title.svelte'
  import MapMonster from '$lib/components/MapMonster.svelte'
  import MapThumbnails from '$lib/components/MapThumbnails.svelte'
  import ManyMapMonsters from '$lib/components/ManyMapMonsters.svelte'
  import WarpedMap from '$lib/components/WarpedMap.svelte'
  import FlyTo from '$lib/components/FlyTo.svelte'
  import LargeTextShadow from '$lib/components/LargeTextShadow.svelte'
  import XYZ from '$lib/components/XYZ.svelte'
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Title>
  <h3 class="text-white">
    Kennisbijeenkomst Historische kaarten vergelijken met Allmaps
  </h3>
</Title>

<Slide
  ><p class="max-w-2/3">
    <span class="font-bold">Hallo, ik ben Bert Spaan!</span>
    <span class="fragment">Ik heb een uur de tijd.</span>
    <span class="fragment font-bold">Wat ga ik vertellen?</span>
    <span class="fragment">Iets over mezelf.</span>
    <span class="fragment font-bold">Waarom Allmaps?</span>
    <span class="fragment">Wat is IIIF?</span>
    <span class="fragment font-bold">Méér over Allmaps.</span>
    <span class="fragment">Hoe vind ik kaarten?</span>
    <span class="fragment font-bold">En dan?</span>
    <span class="fragment">Vragen? Zelf proberen?</span>
  </p>
</Slide>

<Slide>Mijn leven in kaarten:</Slide>

<Slide>
  {#snippet children({ active })}
    <!-- Prinsengrachtziekenhuis -->
    <WarpedMap
      {active}
      annotationUrl="https://annotations.allmaps.org/maps/8dfa7c0a36f7336a"
    >
      <!-- Bussum -->
      <FlyTo
        annotationUrl="https://annotations.allmaps.org/maps/58c73354b12a3d6e"
      />

      <!-- Eindhoven -->
      <FlyTo
        annotationUrl="https://annotations.allmaps.org/maps/620dad197a139f8e"
      />

      <!-- Utrecht -->
      <FlyTo
        annotationUrl="https://annotations.allmaps.org/maps/d9e617c92b987711"
      />

      <!-- Waag -->
      <FlyTo
        annotationUrl="https://annotations.allmaps.org/maps/cb06d48aecf12e48"
      />

      <!-- New York -->
      <FlyTo
        annotationUrl="https://annotations.allmaps.org/maps/0c082ba891b4fd93"
      />

      <!-- Hezingen -->
      <FlyTo
        annotationUrl="https://annotations.allmaps.org/maps/905deea1cb4dc5a3"
      />

      <!-- Oostenburg -->
      <FlyTo
        annotationUrl="https://annotations.allmaps.org/maps/8596ac3d0e4cba98"
      />

      <!-- Raalte -->
      <FlyTo
        annotationUrl="https://annotations.allmaps.org/maps/e0f9d3f27e6cbca7"
      />
    </WarpedMap>
  {/snippet}
</Slide>

<!-- ======================================================================================== -->
<!-- ==== Waag ============================================================================== -->
<!-- ======================================================================================== -->

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

<!-- ======================================================================================== -->
<!-- ==== NYPL ============================================================================== -->
<!-- ======================================================================================== -->

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
  <p>Alles samen</p>
  <video
    class="shadow-lg"
    muted
    data-loop
    data-autoplay
    data-src="/images/open-maps-meeting-2024/lower-east-side-1854.mp4"
  ></video>
</section>

<section>
  <p>Naar buiten toe</p>
  <img
    alt="City directory"
    loading="lazy"
    src="/images/open-maps-meeting-2024/route-map-by-lori-richmond-large-cropped.jpg"
  />
</section>

<section>
  <p>Naar buiten toe</p>
  <img
    alt="City directory"
    loading="lazy"
    src="/images/open-maps-meeting-2024/dutch-farmhouses-of-brooklyn-DSCF8162.jpg"
  />
</section>

<section>
  <p>Naar buiten toe</p>
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

<!-- ======================================================================================== -->
<!-- ==== Tentoonstelling Krayenhoff ======================================================== -->
<!-- ======================================================================================== -->

<section>
  <p>
    Vanaf Het Hoogste Punt - tentoonstelling over de eerste driehoeksmeting van
    Nederland
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

<section class="section-stretch">
  <iframe
    allow="geolocation"
    title="Krayenhoff Animated"
    class="w-full h-full"
    data-src="https://bertspaan.nl/rijksdriehoeksmeting/"
    data-preload
  ></iframe>
</section>

<!-- ======================================================================================== -->
<!-- ==== Gemeente Amsterdam ================================================================ -->
<!-- ======================================================================================== -->

<section>
  <p>Gemeente Amsterdam</p>
  <img
    alt="Map Warper"
    loading="lazy"
    src="/images/raalte/data-amsterdam-publieke-werken.webp"
  />
</section>

<!-- ======================================================================================== -->
<!-- ==== Allmaps =========================================================================== -->
<!-- ======================================================================================== -->

<Title>
  <div class="flex flex-col items-center gap-8">
    <h3 class="text-white font-bold text-6xl">Allmaps</h3>
    <h2 class="text-white text-4xl">
      Curating, georeferencing and exploring for IIIF maps
    </h2>
  </div>
</Title>

<section>
  <video
    class="shadow-lg"
    muted
    data-loop
    data-autoplay
    data-src="/videos/iiif-annual-conference-2023/georeferencing-loc-venice.webm"
  ></video>
</section>

<section class="section-stretch">
  <iframe
    title="Allmaps Viewer"
    class="w-full h-full"
    allow="geolocation"
    data-preload
    data-src="https://viewer.allmaps.org/?url=https%3A%2F%2Fannotations.allmaps.org%2Fimages%2Fbcc889fdea8ebb56&map=https%3A%2F%2Fannotations.allmaps.org%2Fmaps%2F64f1041659bbae02"
  ></iframe>
</section>

<Slide>
  Met Allmaps kun je kaarten georefereren en gegeorefereerde kaarten bekijken.
</Slide>

<Slide
  ><LargeTextShadow>MAAR<br />BESTAAT<br />DIT NIET AL?</LargeTextShadow></Slide
>

<Slide>
  <p>Allmaps is:</p>
  <ul>
    <li class="fragment">Open source</li>
    <li class="fragment">Open data</li>
    <li class="fragment">Open standaarden</li>
    <li class="fragment">Koppeling met bronbestand</li>
    <li class="fragment">Werkt met elke kaart die via IIIF beschikbaar is</li>
  </ul>
</Slide>

<section>
  <p>
    Een Georeference Annotation bevat alle data die nodig is om een
    IIIF-afbeelding te georefereren
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

<!-- ======================================================================================== -->
<!-- ==== IIIF ============================================================================== -->
<!-- ======================================================================================== -->

<Slide>
  {#snippet children({ active })}
    <MapThumbnails {active}>
      Via IIIF zijn er <strong
        >miljoenen<br />
        kaarten beschikbaar</strong
      ><br />
      via archieven, bibliotheken, musea en universiteiten over de hele wereld.
    </MapThumbnails>
  {/snippet}
</Slide>

<Slide>
  <div>IIIF Image API</div>
  <div>
    <img
      alt="IIIF API"
      loading="lazy"
      src="/images/raalte/iiif-image-api.webp"
    />
  </div>
</Slide>

<Slide>
  <div>IIIF Image API</div>
  <div>
    <img
      alt="IIIF API"
      loading="lazy"
      src="/images/raalte/iiif-image-api.webp"
    />
  </div>
</Slide>

<Slide>
  <div>Kaarten via IIIF: Tresoar</div>
  <div>
    <img
      alt="Tresoar"
      loading="lazy"
      src="/images/raalte/rumsey-overijssel.webp"
    />
  </div>
</Slide>

<Slide>
  <div>Kaarten via IIIF: UvA</div>
  <div>
    <img alt="UvA" loading="lazy" src="/images/raalte/uva-beeldbank.webp" />
  </div>
</Slide>

<Slide>
  <div>Kaarten via IIIF: David Rumsey Map Collection</div>
  <div>
    <img
      alt="David Rumsey"
      loading="lazy"
      src="/images/raalte/rumsey-overijssel.webp"
    />
  </div>
</Slide>

<Slide>
  <div>Kaarten via IIIF: BnF Gallica</div>
  <div>
    <img
      alt="David Rumsey"
      loading="lazy"
      src="/images/raalte/bnf-gallica-zwolle.webp"
    />
  </div>
</Slide>

<!-- ======================================================================================== -->
<!-- ==== Méér Allmaps ====================================================================== -->
<!-- ======================================================================================== -->

<Slide>
  <h1>Voor wie is Allmaps bedoeld:</h1>
  <ul>
    <li class="fragment">Historici</li>
    <li class="fragment">Curatoren</li>
    <li class="fragment">Onderwijs</li>
    <li class="fragment">Ontwikkelaars</li>
    <li class="fragment">Individuele gebruikers</li>
  </ul>
</Slide>

<Slide>
  <div>
    <p class="p-4 text-3xl">
      Kaart van Leeds van de National Library of Scotland in QGIS als XYZ-laag
      gegenereerd door Allmaps
    </p>
  </div>
  <div>
    <img
      alt="Map of Leeds from the National Library of Scotland in QGIS as an XYZ tile
      layer rendered by Allmaps"
      loading="lazy"
      src="/images/iiif-annual-conference-2025/qgis-xyz-leeds.webp"
    />
  </div>
</Slide>

<Slide>
  <div>
    <p class="p-4 text-3xl">SVG-export in Adobe Illustrator</p>
  </div>
  <div>
    <img
      alt="SVG export of Waterstaatskaart in Adobe Illustrator"
      loading="lazy"
      src="/images/iiif-annual-conference-2025/waterstaatskaart-svg-illustrator.webp"
    />
  </div>
</Slide>

<Slide>
  <div>
    <p class="p-4 text-3xl">
      Metro van Boston bovenop een kaart uit 1769, gemaakt door Garrett Dash
      Nelson
    </p>
  </div>
  <div>
    <img
      alt="Downtown Boston subway lines on top of a 1769 map"
      loading="lazy"
      src="/images/iiif-annual-conference-2025/lmec-garrett-downtown-subway-lines-1769-map.webp"
    />
  </div>
</Slide>

<Slide>
  <div>
    <a href="https://here.allmaps.org">
      <img
        alt="Allmaps here"
        loading="lazy"
        src="/images/iiif-annual-conference-2025/allmaps-here-leeds.webp"
      />
    </a>
  </div>
</Slide>

<Slide>
  <a
    href="https://here.allmaps.org/maps/435ccc0ea633df34?geojson=https%3A%2F%2Famsterdamtimemachine.github.io%2Froutes%2F2025_geoweek.json&position=4.90056,52.37051"
    >Met een GeoJSON-route</a
  >

  <div>
    <a
      href="https://here.allmaps.org/maps/435ccc0ea633df34?geojson=https%3A%2F%2Famsterdamtimemachine.github.io%2Froutes%2F2025_geoweek.json&position=4.90056,52.37051"
    >
      <img
        alt="Allmaps here with GeoJSON route"
        loading="lazy"
        src="/images/iiif-annual-conference-2025/allmaps-here-route.webp"
      />
    </a>
  </div>
</Slide>

<Slide>
  <div>
    <img
      alt="Allmaps here"
      loading="lazy"
      src="/images/iiif-annual-conference-2025/allmaps-here-slack.webp"
    />
  </div>
</Slide>

<Slide>
  <div>
    <img
      alt="Allmaps here"
      loading="lazy"
      src="/images/iiif-annual-conference-2025/allmaps-here-whatsapp.webp"
    />
  </div>
</Slide>

<Slide>
  <div>
    <img
      alt="Allmaps here"
      loading="lazy"
      src="/images/iiif-annual-conference-2025/allmaps-here-signal.webp"
    />
  </div>
</Slide>

<Slide>
  <div>
    <img
      alt="Allmaps here"
      loading="lazy"
      src="/images/iiif-annual-conference-2025/allmaps-here-bluesky.webp"
    />
  </div>
</Slide>

<section class="section-stretch">
  <iframe
    title="Allmaps Here"
    class="w-full h-full"
    allow="geolocation"
    data-preload
    data-src="https://here.allmaps.org"
  ></iframe>
</section>

<section class="section-stretch">
  <iframe
    title="Allmaps Latest"
    class="w-full h-full"
    allow="geolocation"
    data-preload
    data-src="https://latest.allmaps.org"
  ></iframe>
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
    Speel Allmaps Arcade hier: <a
      class="underline"
      href="https://arcade.allmaps.org">arcade.allmaps.org</a
    >
  </p>
</section>

<section>
  <p>Of kom naar Delft!</p>

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

<section>
  <p>Een kaart met álle kaarten</p>
  <video
    class="shadow-lg"
    muted
    data-loop
    data-autoplay
    data-src="/videos/iiif-annual-conference-2024/allmaps-explore.webm"
  ></video>
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

<Slide>
  {#snippet children({ active })}
    <h2 class="absolute top-2 px-4 py-1 shadow-md z-20 bg-white rounded-lg">
      Atlas Loman
    </h2>
    <WarpedMap
      {active}
      annotationUrl="https://annotations.allmaps.org/manifests/af012d4792961902"
    />
  {/snippet}
</Slide>

<!-- ======================================================================================== -->
<!-- ==== Zelf aan de slag ================================================================== -->
<!-- ======================================================================================== -->

<Slide>
  {#snippet children({ active })}
    <ManyMapMonsters {active}
      >Zelf aan de slag met <strong>Allmaps</strong> en
      <strong>IIIF</strong>!</ManyMapMonsters
    >
  {/snippet}
</Slide>

<Slide>
  <div>Op zoek naar IIIF-afbeeldingen met detektIIIF</div>
  <div>
    <img
      alt="detektIIIF"
      loading="lazy"
      src="/images/raalte/detekt-iiif.webp"
    />
  </div>
</Slide>

<section class="section-stretch">
  <iframe
    title="IIIF in Nederland"
    class="w-full h-full"
    data-preload
    data-src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRF_6rpePMJBwJskQHrKK-WYkqr3kqOsFQDLIVk2WtbJCJf5kQU_vsJy3SaFs2diQlPt2tx6CrvFibk/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
  ></iframe>
</section>

<Slide>
  <div>Nieuwe versie Allmaps Editor</div>
  <div>
    <img
      alt="Allmaps Editor"
      loading="lazy"
      src="/images/raalte/new-allmaps-editor.webp"
    />
  </div>
</Slide>

<Slide>
  <div>Plugins voor Leaflet/OpenLayers/MapLibre</div>
  <div>
    <img
      alt="Allmaps Editor"
      loading="lazy"
      src="/images/raalte/new-allmaps-editor-export-leaflet.webp"
    />
  </div>
</Slide>

<Slide>
  <p>Binnenkort:</p>
  <ul>
    <li class="fragment">Zelf kaartcollecties bijhouden en delen</li>
    <li class="fragment">Georefereren met crowdsourcing wordt eenvoudiger</li>
    <li class="fragment">Meer instellingen aangesloten bij Allmaps</li>
    <li class="fragment">Makkelijker om kaarten te embedden</li>
  </ul>
</Slide>

<section>
  <p>
    Dank jullie wel! Bekijk <a href="https://allmaps.org" class="underline"
      >allmaps.org</a
    >
    voor meer informatie. Begin met georefereren op
    <a href="https://editor.allmaps.org" class="underline">editor.allmaps.org</a
    >
  </p>
  <p class="fragment">(Nieuwe versie binnenkort beschikbaar!)</p>
  <div class="fragment absolute top-0 left-0 w-full h-full text-left text-4xl">
    <div class="flex items-end h-full px-24 py-12">
      <MapMonster mood="happy" color="pink">
        <p class="p-4 max-w-xl">
          Ik beantwoord graag jullie vragen, ook op hallo@bertspaan.nl!
        </p>
      </MapMonster>
    </div>
  </div>
</section>
