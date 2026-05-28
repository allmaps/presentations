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
  import { DURATION } from '$lib/shared/constants'
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
  options={{ duration: 4000 }}
  views={[
    {
      location: {
        center: [4.492428816867406, 52.15899314207719],
        zoom: 18
      },
      hideBasemap: true,
      annotations: {
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
      annotations: {
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
      annotations: {
        url: 'https://annotations.allmaps.org/maps/18db05c7aa4e7554',
        useBearing: true,
        caption: 'Gemeente Leyden in 9 sectien',
        options: {
          applyMask: false,
          transformationType: 'helmert',
          renderAppliableMask: true
        }
      }
    },
    {
      hideBasemap: true,
      annotations: {
        url: 'https://annotations.allmaps.org/maps/18db05c7aa4e7554',
        useBearing: true,
        options: {
          applyMask: false,
          transformationType: 'helmert',
          renderAppliableMask: true,
          renderGcps: true
        }
      }
    },
    {
      padding: 200,
      annotations: {
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
      annotations: {
        url: 'https://annotations.allmaps.org/manifests/83deea6a606be0dc'
      }
    },
    {
      location: {
        center: [4.4887014, 52.1630747],
        zoom: 18
      },
      sources: {
        conference_locations: {
          type: 'geojson',
          data: '/geojson/iiif-annual-conference-2026/conference-locations.geojson'
        }
      },
      padding: 80,
      annotations: {
        url: 'https://annotations.allmaps.org/manifests/83deea6a606be0dc'
      }
    },
    {
      sources: {
        conference_locations: {
          type: 'geojson',
          data: '/geojson/iiif-annual-conference-2026/conference-locations.geojson'
        }
      },
      padding: 60,
      annotations: [
        {
          url: 'https://annotations.allmaps.org/maps/6a74aa1b0a1cd30f@6eed53e93a15ae63',
          caption: 'Nieuwe kaart der stad Leyden',
          useBearing: true,
          homepage: 'http://hdl.handle.net/1887.1/item:3276606'
        }
      ]
    },
    {
      sources: {
        conference_locations: {
          type: 'geojson',
          data: '/geojson/iiif-annual-conference-2026/conference-locations.geojson'
        }
      },
      annotations: [
        {
          useBearing: true,
          url: 'https://annotations.allmaps.org/maps/37672d5c9b23bca5@4cad8ccd1996b94f',
          homepage:
            'https://www.erfgoedleiden.nl/collecties/beeldmateriaal/zoeken-in-beeldmateriaal/detail/ca138c78-26bc-11e3-b15a-3cd92befe4f8/media/d70845bd-bf8c-44a7-ab2d-f96ccdaf10d2'
        },
        {
          url: 'https://annotations.allmaps.org/maps/8d600f869d79b7db',
          caption: 'Stratenboek',
          options: {
            transformationType: 'helmert',
            opacity: 0
          }
        }
      ]
    },
    {
      sources: {
        conference_locations: {
          type: 'geojson',
          data: '/geojson/iiif-annual-conference-2026/conference-locations.geojson'
        }
      },
      annotations: [
        {
          url: 'https://annotations.allmaps.org/maps/8d600f869d79b7db',
          caption: 'Stratenboek',
          useBounds: true,
          options: {
            transformationType: 'helmert'
          }
        },
        {
          useBearing: true,
          url: 'https://annotations.allmaps.org/maps/37672d5c9b23bca5@4cad8ccd1996b94f',
          homepage:
            'https://www.erfgoedleiden.nl/collecties/beeldmateriaal/zoeken-in-beeldmateriaal/detail/ca138c78-26bc-11e3-b15a-3cd92befe4f8/media/d70845bd-bf8c-44a7-ab2d-f96ccdaf10d2',
          caption: 'Lugduni Batavor. Leyden in Hollant'
        }
      ]
    },
    {
      sources: {
        conference_locations: {
          type: 'geojson',
          data: '/geojson/iiif-annual-conference-2026/conference-locations.geojson'
        }
      },
      annotations: [
        {
          url: 'https://annotations.allmaps.org/maps/8d600f869d79b7db',
          caption: 'Stratenboek',
          useBounds: true,
          options: {
            transformationType: 'thinPlateSpline'
          }
        },
        {
          useBearing: true,
          url: 'https://annotations.allmaps.org/maps/37672d5c9b23bca5@4cad8ccd1996b94f',
          homepage:
            'https://www.erfgoedleiden.nl/collecties/beeldmateriaal/zoeken-in-beeldmateriaal/detail/ca138c78-26bc-11e3-b15a-3cd92befe4f8/media/d70845bd-bf8c-44a7-ab2d-f96ccdaf10d2',
          caption: 'Lugduni Batavor. Leyden in Hollant'
        }
      ]
    },
    {
      annotations: {
        url: 'https://annotations.allmaps.org/maps/e671f14b3ee110cd@aabc56ed3f9d2bfd',
        homepage: 'https://id.rijksmuseum.nl/200548636',
        caption: 'Plattegrond van de verwoestingen door de buskruitramp, 1807'
      }
    },
    {
      annotations: [
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
      sources: {
        conference_locations: {
          type: 'geojson',
          data: '/geojson/iiif-annual-conference-2026/conference-locations.geojson'
        }
      },
      hideBasemap: true,
      annotations: [
        {
          url: 'https://annotations.allmaps.org/maps/85910a5bab900c3f@0c6e85b88adfb471',
          caption: 'Jan Jansz Dou en Steven van Broeckhuysen, Rijnland (1746)',
          useBearing: true,
          options: {
            // transformationType: 'helmert',
            // saturation: 1,
            removeColor: false,
            colorize: false,
            saturation: 1
          }
        }
      ]
    },
    {
      location: {
        center: [4.7621975, 52.3080392],
        zoom: 12
      },
      sources: {
        conference_locations: {
          type: 'geojson',
          data: '/geojson/iiif-annual-conference-2026/conference-locations.geojson'
        }
      },
      annotations: [
        {
          url: 'https://annotations.allmaps.org/maps/85910a5bab900c3f@0c6e85b88adfb471',
          caption: 'Jan Jansz Dou en Steven van Broeckhuysen, Rijnland (1746)',
          options: {
            removeColor: true,
            removeColorColor: '#D3D3D3',
            removeColorThreshold: 0.7,
            removeColorHardness: 0.2,
            saturation: 0
            // colorize: true
          }
        }
      ]
    }
  ]}
></MapSlide>
