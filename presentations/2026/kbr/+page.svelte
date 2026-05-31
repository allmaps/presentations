<script context="module">
  export const title = 'KBR & IIIF Maps'
  export const subtitle = 'Koninklijke Bibliotheek van België'
  export const date = Date.parse('28 April 2026')
</script>

<script lang="ts">
  import Slide from '$lib/components/Slide.svelte'
  import Title from '$lib/components/Title.svelte'
  import MapMonster from '$lib/components/MapMonster.svelte'
  import MapThumbnails from '$lib/components/MapThumbnails.svelte'
  import Pin from '$lib/components/Pin.svelte'
  import LargeTextShadow from '$lib/components/LargeTextShadow.svelte'
  import MapSlide from '$lib/components/MapSlide.svelte'
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Title>
  <!-- Defined white style because tailwind class text-white is overwritten by reveal -->
  <h3 class="text-white">KBR & IIIF Maps</h3>
  <br />
  <h2 class="text-3xl text-white">New research & outreach opportunities</h2>
</Title>

<Slide preload>
  <h1 class="mb-10 w-full text-7xl font-bold tracking-tight">About IIIF</h1>

  <div class="grid w-full items-baseline">
    <div class="text-4xl font-semibold">
      API for sharing high-definition images
    </div>
    <br />
    <div class="text-4xl font-semibold">
      Developped by a consortium of institutions
    </div>
    <br />
    <div class="text-4xl font-semibold">Image API and Presentation API</div>
  </div>
</Slide>

<MapSlide
  chapters={[
    {
      hideBasemap: true,
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/maps/c885f02932de4c78',
          options: {
            applyMask: false,
            transformationType: 'straight',
            internalProjection: { definition: 'EPSG:3857' },
            debugTiles: false
          },
          caption: `<i>Permalink:</i> <a href="https://uurl.kbr.be/bib/16308353">https://uurl.kbr.be/bib/16308353</a><br><i>IIIF Manifest:</i> <a href="https://iiif.kbr.be/manifest/v3/31400">https://iiif.kbr.be/manifest/v3/31400</a><br><i>By:</i> Moll, Herman<br><i>Title:</i> "To the right honourable John lord Sommers baron of Evesham in y[e] county of Worcester president of Her Majesty's most honourable Privy Council, this map of North America according to y[e] newest and most exact observations"<br><i>Published:</i> 1712`
        }
      ]
    },
    {
      hideBasemap: true,
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/maps/c885f02932de4c78',
          options: {
            applyMask: false,
            transformationType: 'straight',
            internalProjection: { definition: 'EPSG:3857' },
            debugTiles: true
          }
        }
      ]
    },
    {
      location: {
        zoom: 8,
        duration: 4000
      },
      hideBasemap: true,
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/maps/c885f02932de4c78',
          options: {
            applyMask: false,
            transformationType: 'straight',
            internalProjection: { definition: 'EPSG:3857' },
            debugTiles: true
          }
        }
      ]
    },
    {
      hideBasemap: true,
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/maps/c885f02932de4c78',
          options: {
            applyMask: false,
            transformationType: 'straight',
            internalProjection: { definition: 'EPSG:3857' },
            debugTiles: true
          }
        }
      ]
    },
    {
      hideBasemap: true,
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/maps/c885f02932de4c78',
          options: {
            applyMask: false,
            transformationType: 'straight',
            internalProjection: { definition: 'EPSG:3857' },
            debugTiles: false
          }
        }
      ]
    },
    {
      padding: 100,
      location: {
        duration: 4000
      },
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/maps/c885f02932de4c78',
          options: {
            applyMask: false,
            transformationType: 'straight',
            internalProjection: { definition: 'EPSG:3857' },
            debugTiles: false
          }
        }
      ]
    },
    {
      padding: 100,
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/maps/c885f02932de4c78',
          options: {
            applyMask: false,
            renderMask: true,
            transformationType: 'straight',
            internalProjection: { definition: 'EPSG:3857' },
            debugTiles: false
          }
        }
      ]
    },
    {
      location: {
        duration: 4000
      },
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/maps/c885f02932de4c78',
          options: {
            applyMask: true,
            transformationType: 'straight',
            internalProjection: { definition: 'EPSG:3857' },
            debugTiles: false
          }
        }
      ]
    },
    {
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/maps/c885f02932de4c78',
          options: {
            transformationType: 'straight',
            internalProjection: { definition: 'EPSG:3857' },
            removeColor: true,
            removeColorColor: '#e7d7bd',
            removeColorThreshold: 0.3,
            debugTiles: false
          }
        }
      ]
    },
    {
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/maps/c885f02932de4c78',
          options: {
            transformationType: 'straight',
            internalProjection: { definition: 'EPSG:3857' },
            removeColor: true,
            removeColorColor: '#e7d7bd',
            removeColorThreshold: 0.3,
            renderTransformedGcps: true,
            debugTiles: false
          }
        }
      ]
    },
    {
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/maps/c885f02932de4c78',
          options: {
            transformationType: 'straight',
            internalProjection: { definition: 'EPSG:3857' },
            removeColor: true,
            removeColorColor: '#e7d7bd',
            removeColorThreshold: 0.3,
            renderTransformedGcps: true,
            renderGcps: true,
            debugTiles: false
          }
        }
      ]
    },
    {
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/maps/c885f02932de4c78',
          options: {
            transformationType: 'straight',
            internalProjection: { definition: 'EPSG:3857' },
            removeColor: true,
            removeColorColor: '#e7d7bd',
            removeColorThreshold: 0.3,
            renderTransformedGcps: true,
            renderGcps: true,
            renderVectors: true,
            debugTiles: false
          }
        }
      ]
    },
    {
      location: {
        duration: 4000
      },
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/maps/c885f02932de4c78',
          options: {
            transformationType: 'polynomial',
            internalProjection: { definition: 'EPSG:3857' },
            removeColor: true,
            removeColorColor: '#e7d7bd',
            removeColorThreshold: 0.3,
            renderTransformedGcps: true,
            renderGcps: true,
            renderVectors: true,
            debugTiles: false
          }
        }
      ]
    },
    {
      location: {
        duration: 4000
      },
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/maps/c885f02932de4c78',
          options: {
            transformationType: 'polynomial',
            internalProjection: {
              name: 'EPSG:5637 - TUREF / LCC Europe',
              definition:
                '+proj=lcc +lat_1=35 +lat_2=65 +lat_0=52 +lon_0=10 +x_0=4000000 +y_0=2800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs'
            },
            removeColor: true,
            removeColorColor: '#e7d7bd',
            removeColorThreshold: 0.3,
            renderTransformedGcps: true,
            renderGcps: true,
            debugTiles: false
          }
        }
      ]
    },
    {
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/maps/c885f02932de4c78',
          options: {
            transformationType: 'polynomial',
            internalProjection: {
              name: 'EPSG:5637 - TUREF / LCC Europe',
              definition:
                '+proj=lcc +lat_1=35 +lat_2=65 +lat_0=52 +lon_0=10 +x_0=4000000 +y_0=2800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs'
            },
            removeColor: false,
            renderTransformedGcps: true,
            renderGcps: true,
            debugTiles: false
          }
        }
      ]
    },
    {
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/maps/c885f02932de4c78',
          options: {
            transformationType: 'polynomial',
            internalProjection: {
              name: 'EPSG:5637 - TUREF / LCC Europe',
              definition:
                '+proj=lcc +lat_1=35 +lat_2=65 +lat_0=52 +lon_0=10 +x_0=4000000 +y_0=2800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs'
            },
            removeColor: false,
            renderTransformedGcps: true,
            renderGcps: true,
            debugTiles: true,
            debugTriangles: false
          }
        }
      ]
    },
    {
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/maps/c885f02932de4c78',
          options: {
            transformationType: 'polynomial',
            internalProjection: {
              name: 'EPSG:5637 - TUREF / LCC Europe',
              definition:
                '+proj=lcc +lat_1=35 +lat_2=65 +lat_0=52 +lon_0=10 +x_0=4000000 +y_0=2800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs'
            },
            removeColor: false,
            renderTransformedGcps: true,
            renderGcps: true,
            debugTiles: false,
            debugTriangles: true
          }
        }
      ]
    },
    {
      location: {
        center: [3, 52],
        zoom: 6
      },
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/maps/c885f02932de4c78',
          options: {
            transformationType: 'polynomial',
            internalProjection: {
              name: 'EPSG:5637 - TUREF / LCC Europe',
              definition:
                '+proj=lcc +lat_1=35 +lat_2=65 +lat_0=52 +lon_0=10 +x_0=4000000 +y_0=2800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs'
            },
            removeColor: false,
            renderTransformedGcps: true,
            renderGcps: true,
            debugTiles: false,
            debugTriangles: false
          }
        }
      ]
    },
    {
      location: {
        center: [3, 52],
        zoom: 6
      },
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/maps/c885f02932de4c78',
          options: {
            transformationType: 'polynomial',
            internalProjection: {
              name: 'EPSG:5637 - TUREF / LCC Europe',
              definition:
                '+proj=lcc +lat_1=35 +lat_2=65 +lat_0=52 +lon_0=10 +x_0=4000000 +y_0=2800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs'
            },
            removeColor: true,
            removeColorColor: '#e7d7bd',
            removeColorThreshold: 0.3,
            renderTransformedGcps: true,
            renderGcps: true,
            debugTiles: false,
            debugTriangles: false
          }
        }
      ]
    },
    {
      location: {
        center: [0, 55],
        zoom: 5
      },
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/maps/c885f02932de4c78',
          options: {
            transformationType: 'polynomial',
            internalProjection: {
              name: 'EPSG:5637 - TUREF / LCC Europe',
              definition:
                '+proj=lcc +lat_1=35 +lat_2=65 +lat_0=52 +lon_0=10 +x_0=4000000 +y_0=2800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs'
            },
            removeColor: false,
            renderTransformedGcps: true,
            renderGcps: true,
            debugTiles: false,
            debugTriangles: false
          }
        }
      ]
    },
    {
      location: {
        duration: 4000
      },
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/images/d734eef02dbeabf2',
          options: {
            transformationType: 'polynomial',
            renderTransformedGcps: true,
            renderGcps: true,
            renderVectors: true,
            renderMask: true
          },
          caption: `<i>Permalink:</i> <a href="https://mdz-nbn-resolving.de/urn:nbn:de:bvb:12-bsb00108957-7">https://mdz-nbn-resolving.de/urn:nbn:de:bvb:12-bsb00108957-7</a><br><i>IIIF Manifest:</i> <a href="https://api.digitale-sammlungen.de/iiif/presentation/v2/bsb00108957/manifest">https://api.digitale-sammlungen.de/iiif/presentation/v2/bsb00108957/manifest</a><br><i>By:</i> Ortelius, Abraham<br><i>Title:</i> "Theatro De La Tierra Universal"<br><i>Published:</i> 1588`,
          useBounds: true
        },
        {
          url: 'https://annotations.allmaps.org/maps/c885f02932de4c78',
          options: {
            transformationType: 'polynomial',
            internalProjection: {
              name: 'EPSG:5637 - TUREF / LCC Europe',
              definition:
                '+proj=lcc +lat_1=35 +lat_2=65 +lat_0=52 +lon_0=10 +x_0=4000000 +y_0=2800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs'
            }
          }
        },
        {
          url: 'https://annotations.allmaps.org/maps/135dfd2d58dc26ec',
          options: {
            transformationType: 'polynomial',
            opacity: 0
          }
        }
      ]
    },
    // {
    // 	location: {
    // 		duration: 4000
    // 	},
    // 	warpedMaps: [
    // 		{
    // 			url: 'https://annotations.allmaps.org/images/d734eef02dbeabf2',
    // 			options: {
    // 				transformationType: 'thinPlateSpline',
    // 				renderTransformedGcps: true,
    // 				renderGcps: true,
    // 				renderVectors: true
    // 				renderMask: true
    // 			}
    // 		},
    // 		{
    // 			url: 'https://annotations.allmaps.org/maps/c885f02932de4c78',
    // 			options: {
    // 				transformationType: 'polynomial',
    // 				internalProjection: {
    // 					name: 'EPSG:5637 - TUREF / LCC Europe',
    // 					definition:
    // 						'+proj=lcc +lat_1=35 +lat_2=65 +lat_0=52 +lon_0=10 +x_0=4000000 +y_0=2800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs'
    // 				}
    // 			}
    // 		}
    // 	]
    // },
    {
      location: {
        duration: 4000
      },
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/maps/135dfd2d58dc26ec',
          options: {
            transformationType: 'polynomial',
            renderTransformedGcps: true,
            renderGcps: true,
            renderVectors: true,
            renderMask: true
          },
          caption: `<i>Permalink:</i> <a href="https://www.davidrumsey.com/luna/servlet/detail/RUMSEY~8~1~344467~90112435">https://www.davidrumsey.com/luna/servlet/detail/RUMSEY~8~1~344467~90112435</a><br><i>IIIF Manifest:</i> <a href="https://www.davidrumsey.com/luna/servlet/iiif/m/RUMSEY~8~1~344467~90112435/manifest">https://www.davidrumsey.com/luna/servlet/iiif/m/RUMSEY~8~1~344467~90112435/manifest</a><br><i>By:</i> Jollain, Gerhard<br><i>Title:</i> "L'Angleterre Novissima Descriptio Angliae Scotiae et Hiberniae"<br><i>Published:</i> 1650`,
          useBounds: true
        },
        {
          url: 'https://annotations.allmaps.org/maps/c885f02932de4c78',
          options: {
            transformationType: 'polynomial',
            internalProjection: {
              name: 'EPSG:5637 - TUREF / LCC Europe',
              definition:
                '+proj=lcc +lat_1=35 +lat_2=65 +lat_0=52 +lon_0=10 +x_0=4000000 +y_0=2800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs'
            }
          }
        }
      ]
    },
    {
      location: {
        duration: 4000
      },
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/maps/135dfd2d58dc26ec',
          options: {
            transformationType: 'thinPlateSpline',
            renderTransformedGcps: true,
            renderGcps: true,
            renderVectors: true,
            renderGrid: false,
            distortionMeasure: undefined,
            renderMask: true
          },
          useBounds: true
        },
        {
          url: 'https://annotations.allmaps.org/maps/c885f02932de4c78',
          options: {
            transformationType: 'polynomial',
            internalProjection: {
              name: 'EPSG:5637 - TUREF / LCC Europe',
              definition:
                '+proj=lcc +lat_1=35 +lat_2=65 +lat_0=52 +lon_0=10 +x_0=4000000 +y_0=2800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs'
            }
          }
        }
      ]
    },
    {
      location: {
        duration: 4000
      },
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/maps/135dfd2d58dc26ec',
          options: {
            transformationType: 'thinPlateSpline',
            renderTransformedGcps: true,
            renderGcps: true,
            renderVectors: true,
            renderGrid: true,
            distortionMeasure: 'log2sigma',
            renderMask: true
          },
          useBounds: true
        },
        {
          url: 'https://annotations.allmaps.org/maps/c885f02932de4c78',
          options: {
            transformationType: 'polynomial',
            internalProjection: {
              name: 'EPSG:5637 - TUREF / LCC Europe',
              definition:
                '+proj=lcc +lat_1=35 +lat_2=65 +lat_0=52 +lon_0=10 +x_0=4000000 +y_0=2800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs'
            }
          }
        }
      ]
    },
    {
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/images/fd42960171d74e7b',
          options: {
            transformationType: 'thinPlateSpline'
          }
        },
        {
          url: 'https://annotations.allmaps.org/maps/c885f02932de4c78',
          options: {
            transformationType: 'polynomial',
            internalProjection: {
              name: 'EPSG:5637 - TUREF / LCC Europe',
              definition:
                '+proj=lcc +lat_1=35 +lat_2=65 +lat_0=52 +lon_0=10 +x_0=4000000 +y_0=2800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs'
            }
          }
        }
      ]
    },
    {
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/images/fd42960171d74e7b',
          options: {
            transformationType: 'thinPlateSpline',
            renderTransformedGcps: true,
            renderGcps: true,
            renderVectors: true
          },
          useBounds: true
        },
        {
          url: 'https://annotations.allmaps.org/maps/c885f02932de4c78',
          options: {
            transformationType: 'polynomial',
            internalProjection: {
              name: 'EPSG:5637 - TUREF / LCC Europe',
              definition:
                '+proj=lcc +lat_1=35 +lat_2=65 +lat_0=52 +lon_0=10 +x_0=4000000 +y_0=2800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs'
            }
          }
        }
      ]
    }
  ]}
></MapSlide>

<Slide preload>
  <h1 class="mb-10 w-full text-7xl font-extrabold tracking-tight">
    Georeferencing IIIF Maps
  </h1>

  <div class="grid w-full grid-cols-[1fr_1fr] items-baseline gap-x-12 gap-y-10">
    <div class="text-4xl font-semibold">🔍 Find a IIIF Manifest</div>
    <div class="text-3xl text-gray-500 italic">
      On institution's permalink page
    </div>
    <div class="text-4xl font-semibold">👈 Georeference in Allmaps Editor</div>
    <div class="text-3xl text-gray-500 italic">Identify mask and GCPs</div>
    <div class="text-4xl font-semibold">🗺️ Use Georeference Annotation</div>
    <div class="text-3xl text-gray-500 italic">
      In Viewer, webmaps, storymap, GDAL, ...
    </div>
  </div>
</Slide>

<Slide preload>
  <h1 class="mb-10 w-full text-7xl font-extrabold tracking-tight">
    Georeference Annotation
  </h1>
  <h1 class="mb-10 w-full text-3xl">
    All info needed to georeference on device
  </h1>

  <pre class="javascript">
		<code data-line-numbers="12|17-20|24-28|30-33|35-49" data-trim data-noescape
      ><script type="text/template">
{
  "id": "https://annotations.allmaps.org/maps/c885f02932de4c78",
  "type": "Annotation",
  "@context": [
    "http://iiif.io/api/extension/georef/1/context.json",
    "http://iiif.io/api/presentation/3/context.json"
  ],
  "motivation": "georeferencing",
  "target": {
    "type": "SpecificResource",
    "source": {
      "id": "https://iiif-image-server.kbr.be/iiif/3/0000%2F0000%2F0056%2F0000_0000_0056_6750.tiff",
      "type": "ImageService3",
      "height": 10730,
      "width": 17546,
    },
    "selector": {
      "type": "SvgSelector",
      "value": "<svg width=\"17546\" height=\"10730\"><polygon points=\"1295,927 1281,9964 16278,9882 16306,904\" /></svg>"
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
    "resourceCrs": {
      "name": "EPSG:5637 - TUREF / LCC Europe",
      "definition": "+proj=lcc +lat_1=35 +lat_2=65 +lat_0=52 +lon_0=10 +x_0=4000000 +y_0=2800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"
    },
    "features": [
      {
        "type": "Feature",
        "properties": {
          "resourceCoords": [
            11408,
            8135
          ]
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.974005419759123,
            41.01030262959347
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "resourceCoords": [
            4665,
            9072
          ]
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -5.345541916582647,
            36.11186055878348
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "resourceCoords": [
            10693,
            3572
          ]
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            30.368511028812975,
            59.939271368013806
          ]
        }
      }
    ],
    "_allmaps": {
      "id": "https://annotations.allmaps.org/maps/c885f02932de4c78",
      "version": "https://annotations.allmaps.org/maps/c885f02932de4c78@7519056039e3b060",
      "image": {
        "id": "https://annotations.allmaps.org/images/b54a5a1afc96c9c5",
        "version": "https://annotations.allmaps.org/images/b54a5a1afc96c9c5@ab237a5c12dcac1e",
        "canvases": [
          {
            "id": "https://annotations.allmaps.org/canvases/94f2c06a771aabca",
            "manifests": [
              {
                "id": "https://annotations.allmaps.org/manifests/7f4fec9588a7e77a"
              }
            ]
          }
        ]
      },
      "scale": 0.002132,
      "area": 29745220479995.84
    }
  }
}
      </script></code
    >
  </pre>
</Slide>

<Slide preload>
  <h1 class="mb-10 w-full text-7xl font-bold tracking-tight">
    Allmaps principles
  </h1>

  <div class="grid w-full grid-cols-[1fr_1fr] items-baseline gap-x-12 gap-y-10">
    <div class="text-4xl font-semibold">🏛️ Funded by institutions</div>
    <div class="text-3xl text-gray-500 italic">
      Ad hoc + through IIIF Consortium
    </div>
    <div class="text-4xl font-semibold">🗃️ Open Data stays open</div>
    <div class="text-3xl text-gray-500 italic">
      Reuse single source, link open data
    </div>
    <div class="text-4xl font-semibold">👐 Open Source you can host</div>
    <div class="text-3xl text-gray-500 italic">No vendor lock-in</div>
    <div class="text-4xl font-semibold">📲 Images processed on device</div>
    <div class="text-3xl text-gray-500 italic">
      No reliance on Allmaps servers
    </div>
  </div>
</Slide>

<Slide preload>
  <h1 class="mb-0 w-full text-7xl font-bold tracking-tight">
    KBR and IIIF Maps
  </h1>
  <span class="mb-10 w-full text-3xl">Research & outreach possibilities?</span>

  <div class="grid w-full grid-cols-[1fr_1fr] items-baseline gap-x-12 gap-y-10">
    <div class="text-4xl font-semibold">Georeferencing (entire?) map</div>
    <div class="text-3xl text-gray-500 italic">Automation? Crowdsourcing?</div>
    <div class="text-4xl font-semibold">Studying historical maps</div>
    <div class="text-3xl text-gray-500 italic">Distortion measures?</div>
    <div class="text-4xl font-semibold">Linking other data</div>
    <div class="text-3xl text-gray-500 italic">Gazetteer?</div>
    <div class="text-4xl font-semibold">Use in outreach</div>
    <div class="text-3xl text-gray-500 italic">
      Storytelling? Dedicated website?
    </div>
  </div>
</Slide>
