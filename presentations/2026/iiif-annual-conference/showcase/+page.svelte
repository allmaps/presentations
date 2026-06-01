<script context="module">
  export const title = 'Showcase'
  export const subtitle = 'IIIF Annual Conference'
  export const date = Date.parse('1 June 2026')
</script>

<script lang="ts">
  import { pink, green } from '@allmaps/tailwind'
  import Slide from '$lib/components/Slide.svelte'
  import Title from '$lib/components/Title.svelte'
  import MapMonster from '$lib/components/MapMonster.svelte'
  import MapThumbnails from '$lib/components/MapThumbnails.svelte'
  import Pin from '$lib/components/Pin.svelte'
  import LargeTextShadow from '$lib/components/LargeTextShadow.svelte'
  import MapSlide from '$lib/components/MapSlide.svelte'
  import createExplainer from '$lib/shared/explainer'
  import { getExploreLayers, maskLayerIds } from '$lib/shared/explore'
  import { DEFAULT_COLORS } from '$lib/shared/constants'
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Title>
  <!-- Defined white style because tailwind class text-white is overwritten by reveal -->
  <h2 class="text-white text-6xl font-bold mb-4" style="color: white">
    Allmaps
  </h2>
  <p class="text-white text-4xl font-light">IIIF Showcase</p>
</Title>

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

<!--
Eerdere Aantekeningen Bert:
Nog zoeken:
Vliegveld op zeeburgereiland
https://here.allmaps.org/maps/97780ee1dda139c4?position=52.3670%2C4.9473
Sloten
Deze waarschijnlijk NIET gebruiken:
Oudemanhuispoort
https://viewer.allmaps.org/?url=https://annotations.allmaps.org/images/05bae50958015724
Amsterdam 1200
https://viewer.allmaps.org/?url=https://annotations.allmaps.org/images/f74a9c322b2463f9
-->

<Slide preload>
  <h2 class="font-light text-2xl">Contents</h2>
  <div class="grid grid-rows-4 gap-4 text-xl font-bold">
    <div class="bg-pink/5 p-4 md:p-8 rounded-xl">Why Allmaps?</div>
    <div class="bg-blue/10 p-4 md:p-8 rounded-xl">How does Allmaps work?</div>
    <div class="bg-green/10 p-4 md:p-8 rounded-xl">
      What can you do with Allmaps?
    </div>
    <div class="bg-yellow/10 p-4 md:p-8 rounded-xl">
      How is the project organized?
    </div>
  </div>
</Slide>

<Slide preload>
  <p>
    Allmaps is an open source ecosystem for <br />
    curating, georeferencing and exploring IIIF maps
  </p>
  <p class="fragment font-light text-2xl">
    The project was founded in 2021 by independent creative technologist {@render bert()}
    Bert Spaan<br />and digital curator {@render jules()}
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

<Slide>
  <MapThumbnails>
    <strong>Millions of digitized maps</strong> are available through IIIF, from
    institutions around the world
  </MapThumbnails>
</Slide>

<Slide preload>
  <h2 class="font-medium">The goals of the Allmaps project:</h2>

  <div class="max-w-4xl">
    <span class="fragment text-pink">
      Make <em>all</em> digitized maps more easy to find and use
    </span>
    <span class="fragment"
      >● <span class="text-orange"
        >make these maps searchable by location in accessible web interfaces</span
      ></span
    >
    <span class="fragment"
      >● <span class="text-green"
        >publish all georeference data as open data</span
      ></span
    >
    <span class="fragment"
      >● <span class="text-blue">close the gap between GIS and GLAM</span></span
    >
  </div>
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
    })
  ]}
></MapSlide>

<Slide preload>
  <p class="mb-8">
    Allmaps uses <strong>Georeference Annotations</strong><br />an
    <a class="underline" href="https://iiif.io/api/extension/georef/">
      official extension</a
    > to the IIIF Presentation API
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

<MapSlide
  duration={4000}
  sources={{
    conference_locations: {
      type: 'geojson',
      data: '/geojson/iiif-annual-conference-2026/conference-locations.geojson'
    },
    tolhuistuin: {
      type: 'geojson',
      data: '/geojson/iiif-annual-conference-2026/tolhuistuin.geojson'
    },
    masks: {
      type: 'vector',
      url: 'pmtiles://https://files.allmaps.org/maps.pmtiles',
      maxzoom: 14
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
    },
    {
      id: 'tolhuistuin-fill',
      type: 'fill',
      source: 'tolhuistuin',
      paint: {
        'fill-color': DEFAULT_COLORS.orange.fill,
        'fill-opacity': 0
      }
    },
    {
      id: 'tolhuistuin-stroke',
      type: 'line',
      source: 'tolhuistuin',
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
  chapters={[
    {
      hideBasemap: true,
      warpedMaps: {
        url: 'https://annotations.allmaps.org/maps/b3872b1138d6830f',
        caption: 'Galgenveld (Stadsarchief)',
        useBearing: true,
        options: {
          transformationType: 'helmert'
        }
      }
    },
    // {
    //   hideBasemap: false,
    //   warpedMaps: [
    //     {
    //       caption: 'Het Watergraafs of Diemermeer',
    //       useBearing: true,
    //       url: 'https://annotations.allmaps.org/maps/8e571cf62c255d54@d526e9b963f79ef0'
    //     }
    //   ]
    // },
    {
      hideBasemap: true,
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/images/7936d9f015e49c54',
          caption: 'Loman Atlas (City Archive)',
          useBearing: true,
          useBounds: true,
          options: {
            applyMask: false,
            renderMask: false,
            renderGcps: false,
            transformationType: 'helmert'
          }
        },
        {
          url: 'https://annotations.allmaps.org/maps/b3872b1138d6830f',
          caption: 'Galgenveld (Stadsarchief)',
          options: {
            transformationType: 'helmert',
            visible: false
          }
        }
      ]
    },
    {
      padding: 200,
      warpedMaps: {
        url: 'https://annotations.allmaps.org/images/7936d9f015e49c54',
        caption: 'Loman Atlas (City Archive)'
      }
    },
    {
      caption: 'Works for multiple map sheets!',
      warpedMaps: {
        url: 'https://annotations.allmaps.org/manifests/af012d4792961902',
        caption: 'Loman Atlas (City Archive)',
        options: {
          transformationType: 'polynomial',
          renderMask: false,
          removeColor: false,
          renderGcps: false
        }
      }
    },
    {
      caption: 'Works for multiple map sheets!',
      warpedMaps: {
        url: 'https://annotations.allmaps.org/manifests/af012d4792961902',
        caption: 'Loman Atlas (City Archive)',
        options: {
          transformationType: 'polynomial',
          removeColor: false,
          renderMask: true,
          renderMaskSize: 4,
          saturation: 1
        }
      }
    },
    {
      location: {
        zoom: 17,
        center: [4.899895, 52.359702]
      },
      warpedMaps: {
        url: 'https://annotations.allmaps.org/manifests/af012d4792961902',
        caption: 'Loman Atlas (City Archive)',
        options: {
          transformationType: 'polynomial',
          renderMask: false,
          removeColor: true,
          removeColorColor: '#EEDECA',
          removeColorThreshold: 0.2,
          saturation: 0
        }
      }
    },
    {
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/maps/4e838295a6f98db5',
          caption: 'Plattegrond van het Paleis voor Volksvlijt (Rijksmuseum)',
          useBounds: true,
          options: {
            renderGcps: true
          }
        },
        {
          url: 'https://annotations.allmaps.org/manifests/af012d4792961902',
          caption: 'Loman Atlas (City Archive)',
          options: {
            transformationType: 'polynomial',
            renderMask: false,
            removeColor: true,
            removeColorColor: '#EEDECA',
            removeColorThreshold: 0.2,
            saturation: 0
          }
        }
      ]
    },
    {
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/images/91418b2b2ddc304f ',
          caption:
            'Plattegrond van de Internationale Tentoonstelling van Tuinbouw (Rijksmuseum)'
        },
        {
          url: 'https://annotations.allmaps.org/maps/4e838295a6f98db5',
          caption: 'Plattegrond van het Paleis voor Volksvlijt (Rijksmuseum)',
          useBounds: true,
          options: {
            renderGcps: false
          }
        },
        {
          url: 'https://annotations.allmaps.org/manifests/af012d4792961902',
          caption: 'Loman Atlas (City Archive)',
          options: {
            transformationType: 'polynomial',
            renderMask: false,
            removeColor: true,
            removeColorColor: '#EEDECA',
            removeColorThreshold: 0.2,
            saturation: 0
          }
        }
      ]
    },
    {
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/maps/fedf952c51cb5d1a',
          caption: 'Plattegrond van het Paleis voor Volksvlijt (Rijksmuseum)',
          useBounds: true
        }
      ]
    },
    {
      hideBasemap: false,
      warpedMaps: {
        caption:
          'Officieel Plan der Internationale Koloniale Tentoonstelling (City Archive)',
        useBearing: true,
        url: 'https://annotations.allmaps.org/maps/410c02766b8b14d5@cb41d7ce5c1cefe7',
        options: {
          applyMask: true,
          transformationType: 'polynomial',
          removeColor: false
        }
      }
    },
    {
      hideBasemap: false,
      warpedMaps: [
        {
          caption:
            'Lijnen der Amsterdamsche Tram Omnibus-Maatschappij (City Archive)',
          useBearing: true,
          url: 'https://annotations.allmaps.org/maps/d45be887a1641291@333de2b0663c4257',
          options: {
            removeColor: false
          }
        }
      ]
    },
    {
      hideBasemap: false,
      warpedMaps: [
        {
          caption:
            'Ontwerp eener Verbindingslijn van de Spoorwegen te Amsterdam (City Archive)',
          useBearing: true,
          url: 'https://annotations.allmaps.org/maps/ef8a0d3ccd0d32ab@5f5ac163231178ff',
          options: {
            applyMask: true,
            removeColor: false
          }
        }
      ]
    },
    {
      hideBasemap: false,
      warpedMaps: [
        {
          caption:
            'Plan Van Niftrik tot uitbreiding van Amsterdam (City Archive)',
          useBearing: true,
          url: 'https://annotations.allmaps.org/maps/d3d62a3963e87919@bf264681b87dfeae',
          options: {
            applyMask: true,
            removeColor: false
          }
        }
      ]
    },
    {
      hideBasemap: false,
      warpedMaps: [
        {
          caption:
            'Plan Van Niftrik tot uitbreiding van Amsterdam (City Archive)',
          useBearing: true,
          url: 'https://annotations.allmaps.org/maps/d3d62a3963e87919@bf264681b87dfeae',
          options: {
            applyMask: true,
            removeColor: true,
            removeColorColor: '#ECDFC4',
            removeColorThreshold: 0.2
          }
        }
      ]
    },
    {
      caption: 'Not just for old maps!',
      warpedMaps: {
        url: 'https://cityatlas.theberlage.nl/data/03-argumentation/01-uilenburg/annotations/200uilenburg.json',
        caption: 'The Berlage City Atlas (TU Delft)'
      }
    },
    {
      warpedMaps: {
        caption: 'Kermis op de Nieuwmarkt (City Archive)',
        useBearing: true,
        url: 'https://annotations.allmaps.org/images/bf6b564efcca3978',
        options: {
          applyMask: false,
          removeColor: false,
          transformationType: 'helmert'
        }
      }
    },
    {
      warpedMaps: {
        caption: 'Kermis op de Nieuwmarkt (City Archive)',
        useBearing: true,
        url: 'https://annotations.allmaps.org/images/bf6b564efcca3978',
        options: {
          applyMask: true,
          transformationType: 'polynomial',
          removeColor: true,
          removeColorColor: '#91908A',
          removeColorThreshold: 0.2
        }
      }
    },
    {
      hideBasemap: false,
      warpedMaps: [
        {
          caption: 'Stadsdeel Zuidoost (City Archive)',
          useBearing: true,
          url: 'https://annotations.allmaps.org/maps/49cef0f152f5e26b@3c8174894e4382e5',
          options: {
            removeColor: false
          }
        }
      ]
    },
    {
      hideBasemap: false,
      location: {
        center: [4.9804, 52.3166],
        zoom: 15
      },
      warpedMaps: [
        {
          caption: 'Stadsdeel Zuidoost (City Archive)',
          // useBearing: true,
          url: 'https://annotations.allmaps.org/maps/49cef0f152f5e26b@3c8174894e4382e5',
          options: {
            removeColor: true,
            removeColorColor: '#B7D17F',
            removeColorThreshold: 0.2
          }
        }
      ]
    },
    {
      hideBasemap: false,
      warpedMaps: [
        {
          caption:
            'Uitbreidingsplan van de Gemeente Watergraafsmeer (City Archive)',
          useBearing: true,
          url: 'https://annotations.allmaps.org/maps/8403065303f57c32@26536be2d169d544',
          options: {
            applyMask: true,
            removeColor: false
          }
        }
      ]
    },
    {
      hideBasemap: false,
      warpedMaps: [
        {
          caption: 'Plan Havenwerken te Amsterdam (City Archive)',
          useBearing: true,
          url: 'https://annotations.allmaps.org/maps/ebd85babaaabc34d@70b4bd5b7b5117cb',
          options: {
            applyMask: true,
            removeColor: false
          }
        }
      ]
    },
    {
      hideBasemap: false,
      warpedMaps: [
        {
          caption: 'Uitbreiding van Amsterdam (City Archive)',
          useBearing: true,
          url: 'https://annotations.allmaps.org/maps/1260a5102188c1b4@13b7dc87cce0b1af',
          options: {
            applyMask: true,
            removeColor: false
          }
        }
      ]
    },
    {
      hideBasemap: false,
      warpedMaps: [
        {
          caption:
            'Uitlegging der Stad Amsterdam aan de IJ-zijde met een brug over het IJ (City Archive)',
          useBearing: true,
          url: 'https://annotations.allmaps.org/maps/4f04559e2fc4d4f1@648323ff2bf61c1d',
          options: {
            applyMask: true,
            removeColor: false
          }
        }
      ]
    },
    {
      hideBasemap: false,
      warpedMaps: [
        {
          caption: 'Amsterdam Uitgelegen aan de IJ-zijde (City Archive)',
          useBearing: true,
          url: 'https://annotations.allmaps.org/maps/fc1b4c981beba120@8b5697db7b406081',
          options: {
            applyMask: true,
            removeColor: false
          }
        }
      ]
    },
    {
      hideBasemap: false,
      warpedMaps: [
        {
          caption: 'Ontwerp van een brug over het IJ (City Archive)',
          useBearing: true,
          url: 'https://annotations.allmaps.org/maps/71628683c7e65a64@4784e6a3f5467075',
          options: {
            applyMask: true,
            removeColor: false
          }
        }
      ],
      layers: [
        {
          layer: 'tolhuistuin-fill',
          opacity: 0
        },
        {
          layer: 'tolhuistuin-stroke',
          opacity: 0
        }
      ]
    },
    {
      location: {
        center: [4.903313633324896, 52.38319823430248],
        zoom: 18
      },
      warpedMaps: [
        {
          caption: 'Ontwerp van een brug over het IJ (City Archive)',
          useBearing: true,
          url: 'https://annotations.allmaps.org/maps/71628683c7e65a64@4784e6a3f5467075',
          options: {
            applyMask: true,
            removeColor: false
          }
        }
      ],
      layers: [
        ...maskLayerIds.map((layer) => ({
          layer,
          visibility: 'none' as const
        })),
        {
          layer: 'tolhuistuin-fill',
          opacity: 1
        },
        {
          layer: 'tolhuistuin-stroke',
          opacity: 1
        }
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
    }
  ]}
></MapSlide>

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
        'text-ignore-placement': true
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
        'icon-ignore-placement': true
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
        'text-ignore-placement': false
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
        'icon-ignore-placement': true
      },
      paint: {
        'icon-opacity': 1
      }
    }
  ]}
  chapters={{
    caption: 'Innovators, Supporters, and Contributors',
    location: {
      center: [-48.715718, 45.0214871513297],
      zoom: 2
    }
  }}
></MapSlide>

<Slide horizontal preload>
  <div class="grid content-center">
    <p>
      Thanks! See <a href="https://allmaps.org" class="underline">allmaps.org</a
      > for more information.
    </p>
  </div>
  <video
    class="shadow-lg"
    muted
    data-loop
    data-autoplay
    data-src="/videos/iiif-annual-conference-2024/open-data-homepage.webm"
  ></video>
</Slide>
