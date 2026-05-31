<script context="module">
  export const title = 'Towards a IIIF Maps Commons'
  export const subtitle = 'IIIF Annual Conference'
  export const date = Date.parse('2 June 2026')
</script>

<script lang="ts">
  import Slide from '$lib/components/Slide.svelte'
  import Title from '$lib/components/Title.svelte'
  import MapMonster from '$lib/components/MapMonster.svelte'
  import MapThumbnails from '$lib/components/MapThumbnails.svelte'
  import Pin from '$lib/components/Pin.svelte'
  import LargeTextShadow from '$lib/components/LargeTextShadow.svelte'
  import MapSlide from '$lib/components/MapSlide.svelte'
  import { getExploreLayers, maskLayerIds } from '$lib/shared/explore'
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Title>
  <!-- Defined white style because tailwind class text-white is overwritten by reveal -->
  <h2 class="text-white" style="color: white">Towards a IIIF Maps Commons</h2>
  <p class="text-white text-xl">Presenting the Allmaps - IIIF Partnership</p>
</Title>

<!--
## Erfgoed Leiden en Omstreken
https://sammeltassen.nl/iiif-manifests/elo/grachtenboek.json
https://sammeltassen.nl/iiif-manifests/elo/straetbouc.json
Kadaster:
https://sammeltassen.nl/iiif-manifests/elo/PV_PV403.json
Sloppen:
https://www.erfgoedleiden.nl/collecties/beeldmateriaal/zoeken-in-beeldmateriaal/detail/a86d25e8-26bc-11e3-84b0-3cd92befe4f8/media/e786173c-1706-403f-a4b3-3a7302bd4956

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

<MapSlide
  duration={4000}
  sources={{
    conference_locations: {
      type: 'geojson',
      data: '/geojson/iiif-annual-conference-2026/conference-locations.geojson'
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
    ...getExploreLayers('none')
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
        url: 'https://annotations.allmaps.org/manifests/83deea6a606be0dc'
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
        url: 'https://annotations.allmaps.org/manifests/83deea6a606be0dc'
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
          url: 'https://annotations.allmaps.org/maps/37672d5c9b23bca5@4cad8ccd1996b94f',
          homepage:
            'https://www.erfgoedleiden.nl/collecties/beeldmateriaal/zoeken-in-beeldmateriaal/detail/ca138c78-26bc-11e3-b15a-3cd92befe4f8/media/d70845bd-bf8c-44a7-ab2d-f96ccdaf10d2',
          useBearing: true,
          useBounds: true
        },
        {
          url: 'https://annotations.allmaps.org/maps/8d600f869d79b7db',
          caption: 'Stratenboek',
          options: {
            transformationType: 'helmert',
            visible: false
          }
        }
      ]
    },
    {
      location: {
        bearing: 90
      },
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/maps/8d600f869d79b7db',
          caption: 'Stratenboek',
          useBounds: true,
          useBearing: true,
          options: {
            transformationType: 'helmert'
          }
        },
        {
          url: 'https://annotations.allmaps.org/maps/37672d5c9b23bca5@4cad8ccd1996b94f',
          homepage:
            'https://www.erfgoedleiden.nl/collecties/beeldmateriaal/zoeken-in-beeldmateriaal/detail/ca138c78-26bc-11e3-b15a-3cd92befe4f8/media/d70845bd-bf8c-44a7-ab2d-f96ccdaf10d2',
          caption: 'Lugduni Batavor. Leyden in Hollant'
        }
      ]
    },
    {
      location: {
        bearing: 90
      },
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/maps/8d600f869d79b7db',
          caption: 'Stratenboek',
          useBounds: true,
          useBearing: true,
          options: {
            transformationType: 'thinPlateSpline'
          }
        },
        {
          url: 'https://annotations.allmaps.org/maps/37672d5c9b23bca5@4cad8ccd1996b94f',
          homepage:
            'https://www.erfgoedleiden.nl/collecties/beeldmateriaal/zoeken-in-beeldmateriaal/detail/ca138c78-26bc-11e3-b15a-3cd92befe4f8/media/d70845bd-bf8c-44a7-ab2d-f96ccdaf10d2',
          caption: 'Lugduni Batavor. Leyden in Hollant'
        }
      ]
    },
    {
      warpedMaps: {
        url: 'https://annotations.allmaps.org/maps/e671f14b3ee110cd@aabc56ed3f9d2bfd',
        homepage: 'https://id.rijksmuseum.nl/200548636',
        caption: 'Plattegrond van de verwoestingen door de buskruitramp, 1807',
        useBearing: true
      }
    },
    {
      warpedMaps: [
        {
          url: 'https://annotations.allmaps.org/maps/82172b1fdbcd8c40@e8a555b5056c4886',
          caption:
            'Ioannes Dou, Chaertbouck van alle de Landen der Unyversiteyt binnen de Stadt Leyden [etc.]',
          useBearing: true
        }
      ]
    },
    {
      // location: {
      // 	center: [4.569164, 52.3022714],
      // 	zoom: 12
      // },
      warpedMaps: {
        url: 'https://annotations.allmaps.org/maps/85910a5bab900c3f@0c6e85b88adfb471',
        caption: 'Jan Jansz Dou en Steven van Broeckhuysen, Rijnland (1746)',
        useBearing: true,
        options: {
          removeColor: false,
          colorize: false,
          saturation: 1
        }
      },
      layers: maskLayerIds.map((layer) => ({
        layer,
        visibility: 'none'
      }))
    },
    {
      location: {
        center: [0, 0],
        zoom: 1,
        duration: 30000,
        bearing: 0
      },
      warpedMaps: {
        url: 'https://annotations.allmaps.org/maps/85910a5bab900c3f@0c6e85b88adfb471',
        caption: 'Jan Jansz Dou en Steven van Broeckhuysen, Rijnland (1746)',
        options: {
          removeColor: false,
          colorize: false,
          saturation: 1
        }
      },
      layers: maskLayerIds.map((layer) => ({
        layer,
        visibility: 'visible'
      }))
    }
  ]}
></MapSlide>
