<script context="module">
  export const title = 'Towards a IIIF Maps Commons'
  export const subtitle = 'IIIF Annual Conference'
  export const date = Date.parse('2 June 2026')
</script>

<script lang="ts">
  import { pink, green } from '@allmaps/tailwind'
  import { DEFAULT_COLORS } from '$lib/shared/constants'
  import Slide from '$lib/components/Slide.svelte'
  import Title from '$lib/components/Title.svelte'
  import MapMonster from '$lib/components/MapMonster.svelte'
  import MapThumbnails from '$lib/components/MapThumbnails.svelte'
  import Pin from '$lib/components/Pin.svelte'
  import LargeTextShadow from '$lib/components/LargeTextShadow.svelte'
  import MapSlide from '$lib/components/MapSlide.svelte'
  import { getExploreLayers, maskLayerIds } from '$lib/shared/explore'
</script>

{#snippet face(src: string, color: string, name: string)}
  <img
    width="24"
    class="relative inline-block rounded-full -top-[2%] size-[1.5em] border-4"
    style:border-color={color}
    {src}
    alt={name}
  />
{/snippet}

{#snippet bert()}
  {@render face(
    '/images/iiif-community-call-2025/bert.jpg',
    pink,
    'Bert Spaan'
  )}
{/snippet}

{#snippet jules()}
  {@render face(
    '/images/iiif-community-call-2025/jules.jpg',
    green,
    'Jules Schoonman'
  )}
{/snippet}

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Title>
  <!-- Defined white style because tailwind class text-white is overwritten by reveal -->
  <h2 class="text-white text-5xl mb-8">
    Towards a<br /> <span class="font-bold">IIIF Maps Commons</span>
  </h2>
  <p class="text-white text-3xl">
    Presenting the <br /><span class="font-bold"
      >Allmaps - IIIF Partnership</span
    >
  </p>
</Title>

<!--
  BERT:
    leiden, vliegen, kaarten laten zien
    verschillende instellingen
    flipboek: laat de kaarten uit kaart zien achter elkaar,
    we hebben dit flopboek echt gemaakt: camera
    gemaakt met kaarten van deze en deze instellingen
    dit kan van alle plekken in de wereld
    we hebben meer instellingen nodig! zsgt het monster op de slide
    En dan het monster onthullen!

JULES:
  partnership:
    principles, met voorpagina van partnership-pdf/website
    lijst met partners, screenshot console
    roadmap
  explore!

-->

<!--
## Erfgoed Leiden en Omstreken
https://sammeltassen.nl/iiif-manifests/elo/grachtenboek.json
https://sammeltassen.nl/iiif-manifests/elo/straetbouc.json
Kadaster:
https://sammeltassen.nl/iiif-manifests/elo/PV_PV403.json
Sloppen:
https://www.erfgoedleiden.nl/collecties/beeldmateriaal/zoeken-in-beeldmateriaal/detail/a86d25e8-26bc-11e3-84b0-3cd92befe4f8/media/e786173c-1706-403f-a4b3-3a7302bd4956
Meerdere bladen:
https://www.erfgoedleiden.nl/collecties/beeldmateriaal/zoeken-in-beeldmateriaal/detail/a8702900-26bc-11e3-a5dd-3cd92befe4f8/media/08e8fc0d-96ea-4e83-bef2-d35796615df3

## Buskruitramp
https://id.rijksmuseum.nl/200314694
https://sammeltassen--76ecf0c6276711f086ff569c3dd06744.web.val.run/200548636
Wedstrijdplattegrond Herbouw
https://id.rijksmuseum.nl/200548851

## Burcht van Leiden
Centrum Burgt [4.492428816867406,52.15899314207719]
https://here.allmaps.org/?position=52.15899,4.49242
https://annotations.allmaps.org/maps/18db05c7aa4e7554
Voorkant Flipboek
https://annotations.allmaps.org/maps/d66aeed38a9e80e5

## Hoogheemraadschap van Rijnland
https://www.erfgoedleiden.nl/collecties/beeldmateriaal/zoeken-in-beeldmateriaal/detail/a84699be-26bc-11e3-85c2-3cd92befe4f8/media/bde13425-9c11-43ef-a7f1-dd34a86eccca
https://www.rijnland.net/over-rijnland/archieven-en-erfgoed/onderzoeksgids/handreiking-voor-cartografisch-onderzoek/de-overzichtskaart-van-1615/
https://sammeltassen-rijks.web.val.run/200738930 (Rijksmuseum)
-->

<Slide preload>
  <p>
    Allmaps is an open source ecosystem for <br />
    curating, georeferencing and exploring IIIF maps
  </p>
  <p class="fragment font-light text-4xl max-w-4xl">
    The project was founded in 2021 by independent creative technologist {@render bert()}
    Bert Spaan and digital curator {@render jules()}
    Jules Schoonman, TU Delft Library
  </p>

  <div class="fragment absolute top-0 left-0 w-full h-full text-left text-3xl">
    <div class="flex items-end h-full px-24 py-12">
      <MapMonster mood="happy" color="pink">
        <p class="p-4 max-w-xl">
          Allmaps runs in the browser, no need for complicated GIS
          infrastructure
        </p>
      </MapMonster>
    </div>
  </div>
</Slide>

<Slide
  ><p>
    Three years ago, we published the <strong>Georeference Annotation</strong>
    specification.
  </p>
  <p>
    These web annotations are an
    <a class="underline" href="https://iiif.io/api/extension/georef/"
      >official extension</a
    > to the IIIF Presentation API.
  </p></Slide
>

<Slide preload>
  <p class="mb-8">
    Allmaps doesn't store any image derivatives; just georeference data.
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
</Slide>

<Slide>
  <MapThumbnails>
    Since then, <strong>tens of thousands</strong> of IIIF maps have been georeferenced
    with Allmaps. We publish all this georeference data as open data!
  </MapThumbnails>
</Slide>

<MapSlide
  duration={4000}
  sources={{
    conference_locations: {
      type: 'geojson',
      data: '/geojson/iiif-annual-conference-2026/conference-locations.geojson'
    }
  }}
  layers={[
    {
      id: 'conference_locations',
      type: 'symbol',
      source: 'conference_locations',
      layout: {
        'icon-image': '/images/iiif-annual-conference-2026/iiif-logo-small.png'
      },
      paint: {
        'icon-opacity': 0
      }
    }
  ]}
  chapters={[
    {
      location: {
        center: [4.492428816867406, 52.15899314207719],
        zoom: 18
      },
      hideBasemap: true,
      warpedMaps: {
        url: 'https://annotations.allmaps.org/maps/18db05c7aa4e7554',
        useBearing: true,
        caption: 'Gemeente Leyden in 9 sectien',
        options: {
          applyMask: false,
          transformationType: 'helmert'
        }
      }
    },
    {
      hideBasemap: true,
      warpedMaps: {
        url: 'https://annotations.allmaps.org/maps/18db05c7aa4e7554',
        useBearing: true,
        caption: 'Gemeente Leyden in 9 sectien',
        options: {
          applyMask: false,
          transformationType: 'helmert'
        }
      }
    },
    {
      hideBasemap: true,
      warpedMaps: {
        url: 'https://annotations.allmaps.org/maps/18db05c7aa4e7554',
        useBearing: true,
        caption: 'Gemeente Leyden in 9 sectien',
        options: {
          applyMask: false,
          transformationType: 'helmert',
          renderMask: true
        }
      }
    },
    {
      hideBasemap: true,
      warpedMaps: {
        url: 'https://annotations.allmaps.org/maps/18db05c7aa4e7554',
        useBearing: true,
        options: {
          applyMask: false,
          transformationType: 'helmert',
          renderMask: true,
          renderGcps: true
        }
      }
    },
    {
      padding: 200,
      warpedMaps: {
        url: 'https://annotations.allmaps.org/maps/18db05c7aa4e7554',
        caption: 'Gemeente Leyden in 9 sectien',
        options: {
          applyMask: true,
          transformationType: 'polynomial',
          renderGcps: true
        }
      }
    },
    {
      padding: 80,
      warpedMaps: {
        url: 'https://annotations.allmaps.org/manifests/83deea6a606be0dc',
        caption: 'Gemeente Leyden in 9 sectien'
      },
      layers: {
        layer: 'conference_locations',
        opacity: 0,
        duration: 4000
      }
    },
    {
      location: {
        center: [4.4887014, 52.1630747],
        zoom: 18
      },
      layers: {
        layer: 'conference_locations',
        opacity: 0.8,
        duration: 4000
      },
      padding: 80,
      warpedMaps: {
        url: 'https://annotations.allmaps.org/manifests/83deea6a606be0dc',
        caption: 'Gemeente Leyden in 9 sectien'
      }
    },
    {
      padding: 60,
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/maps/6a74aa1b0a1cd30f@6eed53e93a15ae63',
          caption: 'Nieuwe kaart der stad Leyden',
          useBearing: true,
          homepage: 'http://hdl.handle.net/1887.1/item:3276606'
        }
      ]
    },
    {
      padding: 0,
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/manifests/4a787453a585eef5',
          caption: 'Straetbouc (1588-1597)',
          homepage:
            'https://www.erfgoedleiden.nl/collecties/beeldmateriaal/zoeken-in-beeldmateriaal/detail/ca138c78-26bc-11e3-b15a-3cd92befe4f8/media/d70845bd-bf8c-44a7-ab2d-f96ccdaf10d2',
          // useBearing: true,
          useBounds: true
        }
      ]
    },
    {
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/maps/ad8314a0cbad9987',
          caption: 'Kwaliteitskaart (zeer globale verkenning, juli 1958)',
          useBearing: true
        }
      ]
    },
    {
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/maps/a033a0f8f3a5a8a1',
          caption:
            'Plattegrond der stad Leyden, volgens opneming in den jare 1825',
          useBearing: true
        }
      ]
    },

    {
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/maps/b68f883f977e8b1f',
          caption: 'Ansichtkaart',
          useBearing: true
        }
      ]
    },
    {
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/maps/7bdf1f12f4eb3b6d',
          caption: 'Ontsettinge der stad Leyden',
          useBearing: true,
          options: {
            transformationType: 'helmert'
          }
        }
      ]
    },
    {
      location: {
        center: [4.5909, 52.2085],
        zoom: 12
      },
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/maps/626083255d22bf06',
          caption: "Carte De Hollande Et D'utrecht",
          useBearing: false
        }
      ]
    },
    {
      location: {
        center: [4.5909, 52.2085],
        zoom: 12
      },
      warpedMaps: [
        {
          url: ' https://annotations.allmaps.org/maps/d821bea12c059bd0',
          caption:
            'Het Hoogreemraadschap van Rijnland en het Haarlemmermeer met de werken tot Droogmaking',
          useBearing: false
        }
      ]
    },
    {
      location: {
        center: [4.6433, 52.2569],
        zoom: 11.5
      },
      warpedMaps: [
        {
          url: 'https://sammeltassen.nl/iiif-manifests/allmaps/bonnebladen-dans-1.json',
          caption: '',
          useBearing: false
        }
      ]
    },

    {
      location: {
        center: [4.6828, 52.2968],
        zoom: 11
      },
      warpedMaps: [
        {
          url: 'https://sammeltassen.nl/iiif-manifests/allmaps/top25-1.json',
          caption: '',
          useBearing: false
        }
      ]
    },

    {
      hideBasemap: true,
      warpedMaps: [
        {
          url: 'https://gist.githubusercontent.com/sammeltassen/fa3dbfaf4dfa800e00824478c4bd1928/raw/79b2a1a9e864238c988278899555812dd90390f7/nl-railway-map-polynomial.json',
          caption: 'Spoorkaart van Nederland',
          useBearing: true,
          options: {
            transformationType: 'helmert'
          }
        }
      ]
    },
    {
      hideBasemap: false,
      warpedMaps: [
        {
          url: 'https://gist.githubusercontent.com/sammeltassen/fa3dbfaf4dfa800e00824478c4bd1928/raw/79b2a1a9e864238c988278899555812dd90390f7/nl-railway-map-polynomial.json',
          caption: 'Spoorkaart van Nederland',
          useBearing: false,
          options: {
            transformationType: 'thinPlateSpline'
          }
        }
      ]
    }
  ]}
></MapSlide>

<Slide preload>
  <p><strong>IIIF + Allmaps =</strong></p>
  <ol class="space-y-8 p-8">
    <li>Millions of digitized maps, accessible in a standardized way</li>
    <li class="">Georeference them with Allmaps Editor</li>
    <li class="">Make IIIF images geospatial!</li>
    <li class="">Search, display, print, analyze, overlay, compare!</li>
  </ol>
</Slide>

<Slide stretch>
  <video
    class="rounded-xl shadow-xl"
    title="Leiden in 80 maps"
    src="/videos/iiif-annual-conference-2026/leiden-flipbook.webm"
    autoplay
    loop
    muted
    playsinline
  ></video>
</Slide>

<Slide stretch>
  <iframe
    class="rounded-xl shadow-xl"
    title="Leiden in 80 maps"
    src="https://video.allmaps.org/"
    allow="camera; microphone; display-capture; autoplay"
    width="100%"
    height="100%"
  ></iframe>
</Slide>

<Slide>
  <div>
    <span class="text-pink">4TU.ResearchData</span> ●
    <span class="text-green">Allard Pierson</span> ●
    <span class="text-blue">Bayerische Staatsbibliothek</span> ●
    <span class="text-orange">Bibliothèque nationale de France</span> ●
    <span class="text-red">David Rumsey Map Collection</span> ●
    <span class="text-purple">Erfgoed Leiden en Omstreken</span> ●
    <span class="text-pink">Leventhal Map & Education Center</span> ●
    <span class="text-green">Library of Congress</span> ●
    <span class="text-blue">Nationaal Archief</span> ●
    <span class="text-orange">Regionaal Archief Noord-Holland</span> ●
    <span class="text-red">Rijksmuseum</span> ●
    <span class="text-purple">Stanford Libraries</span> ●
    <span class="text-pink">TU Delft Library</span> ●
    <span class="text-green">Universitaire Bibliotheken Leiden</span> ●
    <span class="text-blue">Universitätsbibliothek Wien</span> ●
    <span class="text-orange">Universiteitsbibliotheek Utrecht</span> ●
    <span class="text-red">Universiteitsbibliotheek Vrije Universiteit</span> ●
    <span class="text-purple">University of Wisconsin-Milwaukee Libraries</span>
    ●
    <span class="text-pink">Utrecht University Library</span> ●
    <span class="text-green">Wageningen University & Research Library</span>
  </div>
  <div
    class="fragment absolute top-0 left-0 w-full h-full bg-white/70 text-left"
  >
    <div class="flex items-center justify-center h-full px-24 py-12">
      <MapMonster mood="happy" color="pink">
        <p class="p-4 strong max-w-xl">More maps! More institutions!</p>
      </MapMonster>
    </div>
  </div>
</Slide>

<!-- <Slide preload>
  <LargeTextShadow>Allmaps!</LargeTextShadow
  ></Slide
> -->

<Slide preload hideLogo stretch>
  <iframe
    title="Side by side"
    class="w-full h-full"
    data-src="https://allmaps.org/iiif-partnership"
  ></iframe>
</Slide>

<Slide preload>
  <h2 class="font-medium">Partnership goals</h2>
  <div class="grid grid-cols-4 gap-4 text-xl font-light">
    <div class="bg-pink/5 p-4 md:p-8 rounded-xl">
      Support maintenance & further development of Allmaps as <span
        class="font-medium">open infrastructure</span
      >
    </div>
    <div class="bg-blue/10 p-4 md:p-8 rounded-xl">
      Introduce <span class="font-medium">institutional benefits</span> that ease
      integrations without limiting overall openness
    </div>
    <div class="bg-green/10 p-4 md:p-8 rounded-xl">
      Promote <span class="font-medium">IIIF Maps Commons</span> as a shared discovery
      layer for maps accross institutions
    </div>
    <div class="bg-yellow/10 p-4 md:p-8 rounded-xl">
      Implement a <span class="font-medium">governance structure</span> through the
      establishment of the Allmaps Advisory Board
    </div>
  </div>
</Slide>

<Slide preload>
  <p>Allmaps Supporters and Innovators in the new Allmaps Console</p>
  <img
    alt="Allmaps Supporters and Innovators in the new Allmaps Console"
    loading="lazy"
    src="/images/iiif-annual-conference-2026/allmaps-console.webp"
  />
</Slide>

<Slide preload>
  <p>Allmaps API Docs</p>
  <img
    alt="Allmaps API Docs"
    loading="lazy"
    src="/images/iiif-annual-conference-2026/api-docs.webp"
  />
</Slide>

<Slide preload>
  <h2 class="font-medium">Roadmap highlights</h2>
  <div class="grid grid-rows-2 grid-cols-2 gap-4 text-xl font-light">
    <div class="bg-pink/5 p-4 md:p-8 rounded-xl">
      <p class="font-medium">Allmaps Curator</p>
      <p>Create collections and manage crowdsourcing projects</p>
    </div>
    <div class="bg-blue/10 p-4 md:p-8 rounded-xl">
      <p class="font-medium">Allmaps Explore</p>
      <p>Discover and reuse IIIF maps accross institutions</p>
    </div>
    <div class="bg-blue/10 p-4 md:p-8 rounded-xl">
      <p class="font-medium">Narrative mapping template</p>
      <p>Create custom storymaps with Allmaps</p>
    </div>
    <div class="bg-green/10 p-4 md:p-8 rounded-xl">
      <p class="font-medium">More benefits</p>
      <p>More control over institutional collections in Allmaps</p>
    </div>
  </div>
</Slide>

<MapSlide
  sources={{
    allmaps_partners: {
      type: 'geojson',
      data: '/geojson/iiif-annual-conference-2026/allmaps-partners.geojson',
      cluster: true,
      clusterMaxZoom: 3,
      clusterRadius: 32
    },
    conference_locations: {
      type: 'geojson',
      data: '/geojson/iiif-annual-conference-2026/conference-locations.geojson'
    },
    scheltema: {
      type: 'geojson',
      data: '/geojson/iiif-annual-conference-2026/scheltema-leiden.geojson'
    },
    masks: {
      type: 'vector',
      url: 'pmtiles://https://files.allmaps.org/maps.pmtiles',
      maxzoom: 14
    }
  }}
  layers={[
    {
      id: 'allmaps_partners-cluster-count',
      type: 'symbol',
      source: 'allmaps_partners',
      filter: ['has', 'point_count'],
      layout: {
        'text-field': ['get', 'point_count_abbreviated'],
        'text-font': ['Noto Sans Medium'],
        'text-size': 13,
        'text-allow-overlap': true,
        'text-ignore-placement': true,
        visibility: 'none'
      },
      paint: {
        'text-color': '#2b2b2b',
        'text-halo-color': '#ffffff',
        'text-halo-width': 2,
        'text-opacity': [
          'interpolate',
          ['linear'],
          ['zoom'],
          2,
          1,
          3.75,
          1,
          4,
          0
        ]
      }
    },
    {
      id: 'allmaps_partners-clusters',
      type: 'symbol',
      source: 'allmaps_partners',
      filter: ['has', 'point_count'],
      layout: {
        'icon-image': '/images/iiif-annual-conference-2026/cluster.png',
        'icon-size': 0.2,
        'icon-allow-overlap': true,
        'icon-ignore-placement': true,
        visibility: 'none'
      },
      paint: {
        'icon-opacity': [
          'interpolate',
          ['linear'],
          ['zoom'],
          2,
          1,
          3.75,
          1,
          4,
          0
        ]
      }
    },
    {
      id: 'allmaps_partners-labels',
      type: 'symbol',
      source: 'allmaps_partners',
      filter: ['!has', 'point_count'],
      layout: {
        'text-field': ['get', 'name'],
        'text-font': ['Noto Sans Medium'],
        'text-size': 16,
        'text-offset': [0, 1.5],
        'text-anchor': 'top',
        'text-allow-overlap': false,
        'text-ignore-placement': false,
        visibility: 'none'
      },
      paint: {
        'text-color': '#2b2b2b',
        'text-halo-color': '#ffffff',
        'text-halo-width': 2,
        'text-opacity': ['interpolate', ['linear'], ['zoom'], 3, 0, 4, 1]
      }
    },
    {
      id: 'allmaps_partners',
      type: 'symbol',
      source: 'allmaps_partners',
      filter: ['!has', 'point_count'],
      layout: {
        'icon-image': [
          'match',
          ['get', 'type'],
          'innovator',
          '/images/iiif-annual-conference-2026/innovator.png',
          'supporter',
          '/images/iiif-annual-conference-2026/supporter.png',
          'contributor',
          '/images/iiif-annual-conference-2026/contributor.png',
          '/images/iiif-annual-conference-2026/iiif-logo-small.png'
        ],
        'icon-size': 0.2,
        'icon-allow-overlap': true,
        'icon-ignore-placement': true,
        visibility: 'none'
      },
      paint: {
        'icon-opacity': 1
      }
    },
    {
      id: 'conference_locations',
      type: 'symbol',
      source: 'conference_locations',
      layout: {
        'icon-image': '/images/iiif-annual-conference-2026/iiif-logo-small.png'
      },
      paint: {
        'icon-opacity': 0
      }
    },
    {
      id: 'scheltema-fill',
      type: 'fill',
      source: 'scheltema',
      paint: {
        'fill-color': DEFAULT_COLORS.orange.fill,
        'fill-opacity': 0
      }
    },
    {
      id: 'scheltema-stroke',
      type: 'line',
      source: 'scheltema',
      layout: {
        'line-join': 'round',
        'line-cap': 'round'
      },
      paint: {
        'line-color': DEFAULT_COLORS.orange.stroke,
        'line-opacity': 0,
        'line-width': 8
      }
    },
    ...getExploreLayers('none')
  ]}
  duration={2000}
  chapters={[
    {
      caption: 'Innovators, Supporters, and Contributors',
      location: {
        center: [-48.715718, 45.0214871513297],
        zoom: 2
      },
      layers: [
        {
          layer: 'allmaps_partners-cluster-count',
          visibility: 'visible'
        },
        {
          layer: 'allmaps_partners-clusters',
          visibility: 'visible'
        },
        {
          layer: 'allmaps_partners-labels',
          visibility: 'visible'
        },
        {
          layer: 'allmaps_partners',
          visibility: 'visible'
        }
      ]
    },
    {
      location: {
        center: [-96.6250345, 36.8444821513297],
        zoom: 4
      }
    },
    {
      location: {
        center: [-79.4803285, 41.4234695],
        zoom: 5
      }
    },
    {
      location: {
        center: [10.3352735, 53.8314685],
        zoom: 4
      }
    },
    {
      location: {
        center: [0.6573449999999998, 51.7308615],
        zoom: 6
      }
    },
    {
      location: {
        center: [4.555542, 51.7089925],
        zoom: 7
      },
      layers: [
        {
          layer: 'scheltema-fill',
          opacity: 0
        },
        {
          layer: 'scheltema-stroke',
          opacity: 0
        },
        {
          layer: 'conference_locations',
          opacity: 0
        },
        {
          layer: 'allmaps_partners-cluster-count',
          visibility: 'visible'
        },
        {
          layer: 'allmaps_partners-clusters',
          visibility: 'visible'
        },
        {
          layer: 'allmaps_partners-labels',
          visibility: 'visible'
        },
        {
          layer: 'allmaps_partners',
          visibility: 'visible'
        }
      ]
    },
    {
      location: {
        center: [4.4887014, 52.1630747],
        zoom: 18,
        duration: 8000
      },
      warpedMaps: {
        url: 'https://annotations.allmaps.org/manifests/83deea6a606be0dc'
      },
      layers: [
        {
          layer: 'scheltema-fill',
          opacity: 1
        },
        {
          layer: 'scheltema-stroke',
          opacity: 1
        },
        {
          layer: 'conference_locations',
          opacity: 1
        },
        {
          layer: 'allmaps_partners-cluster-count',
          visibility: 'none'
        },
        {
          layer: 'allmaps_partners-clusters',
          visibility: 'none'
        },
        {
          layer: 'allmaps_partners-labels',
          visibility: 'none'
        },
        {
          layer: 'allmaps_partners',
          visibility: 'none'
        },
        ...maskLayerIds.map((layer) => ({
          layer,
          visibility: 'none' as const
        }))
      ]
    },
    {
      location: {
        center: [0, 0],
        zoom: 1,
        duration: 50000
      },
      layers: maskLayerIds.map((layer) => ({
        layer,
        visibility: 'visible' as const
      }))
    },
    {
      location: {
        center: [0, 0],
        zoom: 1
      },
      caption: `Thanks! Visit <a href="https://allmaps.org" class="underline">allmaps.org</a> for more information.`,
      layers: maskLayerIds.map((layer) => ({
        layer,
        visibility: 'visible' as const
      }))
    }
  ]}
></MapSlide>
