<script module>
  export const title = 'Allmaps'
  export const subtitle =
    'Studiemiddag Nederlands Centrum voor Geodesie en Geo-Informatica'
  export const date = Date.parse('14 April 2026')
</script>

<script lang="ts">
  import Title from '$lib/components/Title.svelte'
  import MapSlide from '$lib/components/MapSlide.svelte'
  import { DEFAULT_COLORS } from '$lib/shared/constants'
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Title>
  <h1 class="text-white" style="color: white">Allmaps</h1>
  <p class="text-white text-2xl">Studiemiddag historische geo-data NCG</p>
</Title>

<MapSlide
  sources={{
    spoorbaanhartlijn: {
      type: 'geojson',
      data: '/geojson/studiemiddag-ncg/spoorbaanhartlijn.geojson'
    }
  }}
  layers={{
    id: 'spoorbaanhartlijn',
    type: 'line',
    source: 'spoorbaanhartlijn',
    layout: {
      'line-join': 'round',
      'line-cap': 'round'
    },
    paint: {
      'line-color': DEFAULT_COLORS.green.stroke,
      'line-opacity': 0,
      'line-width': 8
    }
  }}
  chapters={[
    {
      warpedMaps: [
        {
          type: 'Image',
          url: 'https://dlc.services/iiif-img/v3/7/13/e27aee8f-889a-4c66-922b-474013e1a8e2',
          caption: 'Tentoonstelling Vanaf het Hoogste Punt (Panorama Mesdag)',
          homepage:
            'https://heritage.tudelft.nl/objects/a37607ea-c778-4332-9186-22b2c2a458dc'
        }
      ]
    },
    {
      location: {
        duration: 0
      },
      warpedMaps: [
        {
          url: 'https://raw.githubusercontent.com/bmmeijers/iiif-annotations/refs/heads/develop/series/kraijenhoff/dlcs/bladwijzer.json',
          caption: 'Bladwijzer Choro-topographische kaart (Vrije Universiteit)',
          options: {
            renderGcps: true
          }
        }
      ]
    },
    // {
    // 	freeze: true,
    // 	warpedMaps: [
    // 		{
    // 			url: 'https://raw.githubusercontent.com/bmmeijers/iiif-annotations/refs/heads/develop/series/kraijenhoff/dlcs/bladwijzer.json',
    // 			caption: 'Bladwijzer Choro-topographische kaart (Vrije Universiteit)',
    // 			options: {
    // 				renderGcps: true,
    // 				removeColor: true,
    // 				removeColorColor: '#fce9da',
    // 				removeColorThreshold: 0.3,
    // 				colorize: true,
    // 				colorizeColor: '#0000ff',
    // 				saturation: 0
    // 			}
    // 		}
    // 	]
    // },
    {
      location: {
        center: [5.372781, 52.15329],
        zoom: 11
      },
      hideBasemap: false,
      warpedMaps: [
        {
          url: 'https://raw.githubusercontent.com/bmmeijers/iiif-annotations/main/series/kraijenhoff/dlcs/latest.json',
          caption:
            'Choro-topographische kaart (Universiteitsbibliotheek Utrecht)'
        }
      ]
    },
    {
      location: {
        center: [5.372781, 52.15329],
        zoom: 11
      },
      hideBasemap: false,
      warpedMaps: [
        {
          url: 'https://raw.githubusercontent.com/bmmeijers/iiif-annotations/main/series/kraijenhoff/dlcs/latest.json',
          caption:
            'Choro-topographische kaart (Universiteitsbibliotheek Utrecht)'
        }
      ],
      layers: {
        layer: 'spoorbaanhartlijn',
        opacity: 1,
        duration: 4000
      }
    },
    {
      location: {
        center: [5.372781, 52.15329],
        zoom: 12
      },
      warpedMaps: [
        {
          url: 'https://sammeltassen.nl/iiif-manifests/allmaps/tmk-na-nettekeningen.json',
          caption: 'TMK (Nettekeningen, Nationaal Archief)'
        }
      ]
    },
    {
      location: {
        center: [5.372781, 52.15329],
        zoom: 13
      },
      warpedMaps: [
        {
          url: 'https://raw.githubusercontent.com/bmmeijers/iiif-annotations/main/series/tmk/20231124.json',
          caption: 'TMK (gedrukt, TU Delft)'
        }
      ]
    },
    {
      location: {
        center: [5.372781, 52.15329],
        zoom: 13
      },
      warpedMaps: [
        {
          url: 'https://raw.githubusercontent.com/bmmeijers/iiif-annotations/main/series/tmk/20231124.json',
          caption: 'TMK (gedrukt, TU Delft)',
          options: {
            removeColor: true,
            removeColorColor: '#faf0d1',
            removeColorThreshold: 0.3,
            colorize: true,
            colorizeColor: '#0000ff',
            opacity: 0.7
          }
        }
      ]
    },
    {
      location: {
        center: [5.372781, 52.15329],
        zoom: 14
      },
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/maps/26810e0f9911cff1@729e3460665e3431',
          caption: 'Bonneblad 428 (minuut, Nationaal Archief)'
        }
      ]
    },
    {
      warpedMaps: [
        {
          type: 'Image',
          url: 'https://service.archief.nl/iip/iipsrv?IIIF=61/1a/81/b6/3d/52/49/a1/86/a3/58/f7/dd/09/0d/95/d91bbf02-5b00-4d20-a149-f70d6f4daabf.jp2',
          caption: 'Bonneblad 428 (Achterkant minuut, Nationaal Archief)'
        }
      ]
    },
    // {
    // 	location: {
    // 		duration: 0
    // 	},
    // 	warpedMaps: [
    // 		{
    // 			url: 'https://annotations.allmaps.org/maps/aef01d5f163bca37',
    // 			caption: 'Amersfoort en omstreken (Universiteit Leiden)',
    // 			homepage: 'http://hdl.handle.net/1887.1/item:130313',
    // 			useBearing: true,
    // 			options: {
    // 				transformationType: 'helmert'
    // 			}
    // 		}
    // 	]
    // },
    {
      location: {
        duration: 0
      },
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/maps/72eec7d0508ffa18@a41d06a7f961e434',
          caption:
            "Kadastrale kaart van het westelijk deel van de gemeente Amersfoort uit het boekje 'Amersfoort en omstreken' (1915, Archief Eemland)",
          homepage:
            'https://www.archiefeemland.nl/bronnen/kaarten-en-ontwerptekeningen/detail/10e3b994-dc46-11df-a9e7-7590f0316edd/media/b6adb1bc-9ccf-0e9a-0a13-9ff52a8e5c42'
        }
      ]
    },
    {
      hideBasemap: true,
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/maps/72eec7d0508ffa18@a41d06a7f961e434',
          caption:
            "Kadastrale kaart van het westelijk deel van de gemeente Amersfoort uit het boekje 'Amersfoort en omstreken' (1915, Archief Eemland)",
          homepage:
            'https://www.archiefeemland.nl/bronnen/kaarten-en-ontwerptekeningen/detail/10e3b994-dc46-11df-a9e7-7590f0316edd/media/b6adb1bc-9ccf-0e9a-0a13-9ff52a8e5c42',
          useBearing: true,
          options: {
            transformationType: 'helmert',
            applyMask: false
          }
        }
      ]
    }
  ]}
></MapSlide>
