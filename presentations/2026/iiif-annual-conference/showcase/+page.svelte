<script context="module">
  export const title = 'Showcase'
  export const subtitle = 'IIIF Annual Conference'
  export const date = Date.parse('1 June 2026')
</script>

<script lang="ts">
  import Slide from '$lib/components/Slide.svelte'
  import Title from '$lib/components/Title.svelte'
  import MapMonster from '$lib/components/MapMonster.svelte'
  import MapThumbnails from '$lib/components/MapThumbnails.svelte'
  import Pin from '$lib/components/Pin.svelte'
  import LargeTextShadow from '$lib/components/LargeTextShadow.svelte'
  import { mapToResourceMaskSvgPolygon } from '@allmaps/stdlib'
  import MapSlide from '$lib/components/MapSlide.svelte'
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Title>
  <!-- Defined white style because tailwind class text-white is overwritten by reveal -->
  <h2 class="text-white" style="color: white">Allmaps</h2>
  <p class="text-white text-xl">IIIF Showcase</p>
</Title>

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

<MapSlide
  options={{ duration: 4000 }}
  views={[
    {
      hideBasemap: true,
      annotations: [
        {
          caption: 'Kermis op de Nieuwmarkt',
          useBearing: true,
          url: 'https://annotations.allmaps.org/images/bf6b564efcca3978',
          options: {
            applyMask: false,
            removeColor: false,
            transformationType: 'helmert'
          }
        }
      ]
    },
    {
      hideBasemap: false,
      annotations: [
        {
          caption: 'Kermis op de Nieuwmarkt',
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
      ]
    },
    {
      hideBasemap: false,
      annotations: [
        {
          caption: 'Officieel Plan der Tentoonstelling',
          useBearing: true,
          url: 'https://annotations.allmaps.org/maps/410c02766b8b14d5@cb41d7ce5c1cefe7',
          options: {
            applyMask: true,
            transformationType: 'polynomial',
            removeColor: false
          }
        }
      ]
    },
    {
      hideBasemap: false,
      annotations: [
        {
          caption: 'Balthasar Florisz van Berckenrode',
          useBearing: true,
          url: 'https://annotations.allmaps.org/maps/435ccc0ea633df34@490148243d067653'
        }
      ]
    },
    {
      hideBasemap: false,
      annotations: [
        {
          caption: 'Het Watergraafs of Diemermeer',
          useBearing: true,
          url: 'https://annotations.allmaps.org/maps/8e571cf62c255d54@d526e9b963f79ef0'
        }
      ]
    },
    {
      hideBasemap: false,
      annotations: [
        {
          caption: 'Stadsdeel Zuidoost',
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
      annotations: [
        {
          caption: 'Stadsdeel Zuidoost',
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
      annotations: [
        {
          caption: 'Lijnen der Amsterdamsche Tram Omnibus-Maatschappij',
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
      annotations: [
        {
          caption: 'Plan tot uitbreiding van Amsterdam (Van Niftrik)',
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
      annotations: [
        {
          caption: 'Plan tot uitbreiding van Amsterdam (Van Niftrik)',
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
      hideBasemap: false,
      annotations: [
        {
          caption:
            'Ontwerp eener Verbindingslijn van de Spoorwegen te Amsterdam',
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
      annotations: [
        {
          caption: 'Uitbreidingsplan van de Gemeente Watergraafsmeer',
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
      annotations: [
        {
          caption: 'Plan Havenwerken te Amsterdam',
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
      annotations: [
        {
          caption: 'Uitbreiding van Amsterdam',
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
      annotations: [
        {
          caption:
            'Uitlegging der Stad Amsterdam aan de IJ-zijde met een brug over het IJ',
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
      annotations: [
        {
          caption:
            'Amsterdam Uitgelegen aan de IJ-zijde, Ontwerp van JSON. Galman',
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
      annotations: [
        {
          caption: 'Ontwerp van een brug over het IJ',
          useBearing: true,
          url: 'https://annotations.allmaps.org/maps/71628683c7e65a64@4784e6a3f5467075',
          options: {
            applyMask: true,
            removeColor: false
          }
        }
      ]
    }
  ]}
></MapSlide>

<MapSlide
  views={[
    {
      hideBasemap: false,
      annotations: [
        {
          caption: 'AmsterdamREALTIME',
          // useBearing: true,
          url: 'https://annotations.allmaps.org/maps/94f5fd271764fa21@f90e3745ea365664',
          options: {
            applyMask: true,
            transformationType: 'polynomial',
            removeColor: false
          }
        }
      ]
    },
    {
      hideBasemap: false,
      annotations: [
        {
          caption: 'AmsterdamREALTIME (opacity)',
          // useBearing: true,
          url: 'https://annotations.allmaps.org/maps/94f5fd271764fa21@f90e3745ea365664',
          options: {
            applyMask: true,
            transformationType: 'polynomial',
            opacity: 0.5,
            removeColor: false
          }
        }
      ]
    },
    {
      hideBasemap: false,
      // padding: -200,
      annotations: [
        {
          caption: 'AmsterdamREALTIME (No background',
          // useBearing: true,
          url: 'https://annotations.allmaps.org/maps/94f5fd271764fa21@f90e3745ea365664',
          options: {
            applyMask: true,
            transformationType: 'polynomial',
            opacity: 1,
            removeColor: true,
            removeColorColor: '#000',
            removeColorThreshold: 0.2
          }
        }
      ]
    }
  ]}
></MapSlide>
