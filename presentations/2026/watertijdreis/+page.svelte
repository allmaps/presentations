<script module>
  export const title = 'Watertijdreis'
  export const subtitle =
    'Digital Tools to Investigate New Histories of Technology & Environment @ 4TU'
  export const date = Date.parse('9 July 2026')
</script>

<script lang="ts">
  import Slide from '$lib/components/Slide.svelte'
  import Title from '$lib/components/Title.svelte'
  import MapSlide from '$lib/components/MapSlide.svelte'
  import ManyMapMonsters from '$lib/components/ManyMapMonsters.svelte'
  import createExplainer from '$lib/shared/explainer'
  import MapThumbnails from '$lib/components/MapThumbnails.svelte'
  import MapMonster from '$lib/components/MapMonster.svelte'
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Title>
  <h3 class="text-white">Watertijdreis</h3>
  <h5 class="!text-white text-xl pt-4">
    Digital Tools to Investigate New Histories of Technology &amp; Environment @
    4TU<br /><br /><br />
  </h5>
</Title>

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
  <MapThumbnails>
    Countless maps have been digitized by archives, libraries, and museums
    around the world.
    <div
      class="fragment absolute top-0 left-0 w-full h-full text-left text-3xl"
    >
      <div class="flex items-end h-full px-24 py-12">
        <MapMonster mood="happy" color="pink">
          <p class="p-4 max-w-xl">
            Often available as open data<br />thanks to the
            <span class="italic"
              >International Image Interoperability Framework</span
            > (IIIF)
          </p>
        </MapMonster>
      </div>
    </div>
  </MapThumbnails>
</Slide>

<MapSlide
  duration={4000}
  chapters={[
    ...createExplainer({
      annotationUrl:
        'https://annotations.allmaps.org/maps/e9aa6ec10276bf65@d2d0044d129ea2d5',
      caption: 'Van Berckenrodekaart (Allard Pierson)',
      homepage: 'https://hdl.handle.net/11245/3.39844',
      tpsLocation: { center: [4.897004, 52.3691733], zoom: 16, duration: 5000 }
    }),
    {
      warpedMaps: {
        caption: 'Bedrijfstelling, 31 December 1930',
        url: 'https://annotations.allmaps.org/images/4fc2bd0be60c4384'
      }
    },
    {
      warpedMaps: {
        caption: 'Overijssel door Nicolaas ten Have',
        url: 'https://annotations.allmaps.org/images/c533d73fdeba82ca'
      }
    },
    {
      warpedMaps: {
        caption:
          'Geographische Land Kaart Van Alle Compangnies Landen Ten Oosten en Westen van Samarang',
        url: 'https://annotations.allmaps.org/maps/6c9ee5c955f7bde1'
      }
    },
    {
      warpedMaps: {
        useBearing: true,
        caption:
          'Geographische Land Kaart Van Alle Compangnies Landen Ten Oosten en Westen van Samarang',
        url: 'https://annotations.allmaps.org/maps/6c9ee5c955f7bde1'
      }
    }
  ]}
/>

<Slide preload>
  <p class="mb-8">Georeference Annotation</p>
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
</Slide>

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

<section class="section-stretch">
  <!-- https://www.nationaalarchief.nl/sites/default/files/afbeeldingen/toegangen/bladwijzer-bonnebladen.jpg -->
  <p>Dutch map series using Bonne projection</p>
  <img
    alt="Sheet index 19th century topographical map series"
    loading="lazy"
    src="/images/iiif-annual-conference-2024/geomatics-sheet-index-2.svg"
  />
</section>

<section>
  <!-- TMK Blad 25: Amsterdam -->
  <!-- https://dlc.services/iiif-img/7/4/6587b0b3-3090-451b-973b-0f1f997c7101/full/1000,/0/default.jpg -->
  <p>Tracing rims</p>
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

<MapSlide
  duration={4000}
  chapters={[
    ...createExplainer({
      annotationUrl:
        'https://annotations.allmaps.org/images/b085c303e152501a@dc35e8b938c47cbb',
      caption: 'Waterstaatskaart Blad Eindhoven Zuidoost (1878, Editie 1)',
      homepage:
        'https://watertijdreis.nl/?c=51.420_5.602&zoom=9.91&blad=b085c303e152501a',
      includeTps: false
    }),
    {
      warpedMaps: {
        url: 'https://annotations.allmaps.org/images/fa3c77cbbb7323bc@7d67a32fe3a6c015',
        caption: 'Eindhoven Zuidoost (1925, Editie 2)'
      }
    },
    {
      warpedMaps: {
        url: 'https://annotations.allmaps.org/images/8659318f3ff65ee6@5f4abb4c2cd3a87e',
        caption: 'Eindhoven Oost (1963, Editie 3)'
      }
    },
    {
      warpedMaps: {
        url: 'https://annotations.allmaps.org/images/de91e629477f80ec@99c8dafb9e9e7ace',
        caption: 'Eindhoven Oost (1976, Editie 4)'
      }
    },
    {
      warpedMaps: {
        url: 'https://annotations.allmaps.org/images/871fdd9184af0d60@b1d143f43ad607cf',
        caption: 'Eindhoven Oost (1987, Editie 5)'
      }
    },
    {
      // caption: 'Waterstaatskaart',
      warpedMaps: {
        url: 'https://raw.githubusercontent.com/tu-delft-heritage/watertijdreis-data/refs/heads/main/content/annotations/09-1874-456827-georef.json'
      }
    },
    {
      // caption: 'Waterstaatskaart',
      warpedMaps: {
        url: 'https://raw.githubusercontent.com/tu-delft-heritage/watertijdreis-data/refs/heads/main/content/annotations/09-1874-456827-georef.json',
        options: {
          renderMask: true
        }
      }
    },
    {
      // caption: 'Waterstaatskaart',
      warpedMaps: {
        url: 'https://raw.githubusercontent.com/tu-delft-heritage/watertijdreis-data/refs/heads/main/content/annotations/09-1874-456827-georef.json',
        options: {
          // renderMask: true,
          renderGcps: true
        }
      }
    }
  ]}
></MapSlide>

<section class="section-horizontal section-stretch grid-cols-[45%_1fr]">
  <div class="space-y-8 text-left">
    <h2 class="text-6xl leading-tight">Watertijdreis</h2>
    <p class="text-2xl pb-4 leading-tight">
      The application provides access to almost a thousand sheets of the Water
      Management Map of the Netherlands, published between 1865 and 1992.
    </p>
    <p class="text-2xl leading-tight">
      Instead of treating the maps as isolated scans, it lets users move between
      a map interface, individual sheets and the underlying source data.
    </p>
  </div>
  <a class="h-full w-full" href="https://watertijdreis.nl/">
    <img
      class="image-cover rounded-lg shadow-lg"
      alt="Watertijdreis application interface"
      loading="lazy"
      src="/images/ara-flagis/watertijdreis.png"
    />
  </a>
</section>

<Slide>
  <div class="max-w-6xl space-y-10 text-left">
    <h2 class="text-6xl leading-tight">
      Collaboration between heritage, research and education
    </h2>
    <div class="grid grid-cols-3 gap-8 text-2xl leading-tight">
      <div class="space-y-4">
        <div class="text-5xl text-pink">1</div>
        <p>
          Allmaps and the Geomatics MSc at TU Delft explored georeferencing
          workflows in 2022
        </p>
      </div>
      <div class="space-y-4">
        <div class="text-5xl text-orange">2</div>
        <p>
          The Cultural Heritage Agency and STOWA commissioned a public interface
          for the Water Management Map
        </p>
      </div>
      <div class="space-y-4">
        <div class="text-5xl text-green">3</div>
        <p>
          The prototype matured into a reusable data pipeline and a public
          application
        </p>
      </div>
    </div>
  </div>
</Slide>

<Slide>
  <div class="max-w-6xl space-y-10 text-left">
    <div class="grid grid-cols-2 gap-12 text-3xl leading-tight">
      <div class="space-y-4">
        <h3 class="text-4xl text-darkblue">Topotijdreis</h3>
        <p>
          Makes two centuries of topographic maps visible as a continuous
          national time slider
        </p>
      </div>
      <div class="space-y-4">
        <h3 class="text-4xl text-green">Watertijdreis</h3>
        <p>
          Adds sheet-level access, source references and downloadable data for
          research and education
        </p>
      </div>
    </div>
  </div>
</Slide>

<Slide>
  <div class="max-w-6xl space-y-10 text-left">
    <div
      class="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-6 text-center"
    >
      <div class="self-start space-y-3 text-left">
        <h3 class="text-4xl text-darkblue">IIIF</h3>
        <p class="text-2xl leading-tight">
          Gives digitized maps stable web addresses and image services
        </p>
      </div>
      <div class="text-6xl text-gray">+</div>
      <div class="self-start space-y-3 text-left">
        <h3 class="text-4xl text-pink">Allmaps</h3>
        <p class="text-2xl leading-tight">
          Stores georeferencing as open annotations rather than closed files
        </p>
      </div>
      <div class="text-6xl text-gray">=</div>
      <div class="self-start space-y-3 text-left">
        <h3 class="text-4xl text-green">Reuse</h3>
        <p class="text-2xl leading-tight h-7">
          Researchers can inspect, cite, transform and build on the same data
        </p>
      </div>
    </div>
  </div>
</Slide>

<section class="section-stretch p-0">
  <iframe
    title="Watertijdreis"
    class="h-full w-full"
    data-src="https://watertijdreis.nl/"
  ></iframe>
</section>

<Slide>
  <div class="max-w-6xl space-y-10 text-left">
    <div
      class="grid italic grid-cols-2 gap-x-12 gap-y-8 text-3xl leading-tight"
    >
      <p class="text-darkblue">
        Compare how water boards, canals, dikes, polders and administrative
        boundaries appear across editions
      </p>
      <p class="text-pink">
        Link cartographic changes to institutions, policy shifts, engineering
        work and environmental pressures
      </p>
      <p class="text-green">
        Move from individual sheet interpretation to spatial and temporal
        patterns across the whole series
      </p>
      <p class="text-orange">
        Teach water management as a historical system rather than a static
        background to Dutch geography
      </p>
    </div>
  </div>
</Slide>

<Slide>
  <div class="max-w-6xl space-y-10 text-left">
    <h2 class="text-6xl leading-tight">
      The same methods can travel beyond the Netherlands
    </h2>
    <div class="grid grid-cols-3 gap-8 text-2xl leading-tight">
      <p class="text-darkblue">
        Delta works and drainage landscapes become comparable as technical and
        institutional histories
      </p>
      <p class="text-pink">
        Colonial and postcolonial archives can be connected without forcing them
        into one database
      </p>
      <p class="text-green">
        National map portals can become entry points into transnational
        histories of technology
      </p>
    </div>
  </div>
</Slide>

<Slide>
  <div class="max-w-6xl space-y-10 text-left">
    <h2 class="text-6xl leading-tight">Open questions</h2>
    <ul class="space-y-6 text-3xl pl-6 leading-tight">
      <li>
        Which source collections have the greatest potential for comparable
        digital work on technology and environment?
      </li>
      <li>
        Which research questions become possible only when sources are spatial,
        temporal and reusable?
      </li>
      <li>
        What technical, institutional and collaborative infrastructures can keep
        these datasets alive?
      </li>
    </ul>
  </div>
</Slide>

<Slide>
  <ManyMapMonsters>
    <div class="space-y-5">
      <p>Thank you!</p>
      <p class="font-light">watertijdreis.nl</p>
    </div>
  </ManyMapMonsters>
</Slide>
