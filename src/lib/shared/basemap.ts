import { layers, namedFlavor } from '@protomaps/basemaps'
import type { Flavor } from '@protomaps/basemaps'

type DefaultFlavors = 'light' | 'dark' | 'white' | 'grayscale' | 'black'
type LayersOptions = {
  labelsOnly?: boolean
  lang?: string
}

const backgroundColors = {
  // light: '#cccccc',
  light: '#ffffff',
  dark: '#34373d',
  white: '#ffffff',
  grayscale: '#a3a3a3',
  black: '#2b2b2b'
}

// Except for background, layer source is 'protomaps' (including symbol layers)
// Layer type for labels is 'symbol'
export const getLayers = (
  flavor: DefaultFlavors = 'light',
  flavorOverrides?: Flavor,
  options?: LayersOptions
) => {
  const customFlavor = { ...namedFlavor(flavor), ...flavorOverrides }
  let styleLayers = layers('protomaps', customFlavor, options)
  return styleLayers
}

// https://maplibre.org/maplibre-style-spec/layers/
// https://docs.protomaps.com/basemaps/flavors
export const getStyleWithoutLayers = (flavor: DefaultFlavors = 'light') => {
  return {
    version: 8,
    glyphs:
      'https://protomaps.github.io/basemaps-assets/fonts/{fontstack}/{range}.pbf',
    sprite: `https://protomaps.github.io/basemaps-assets/sprites/v4/${flavor}`,
    sources: {
      protomaps: {
        attribution:
          '<a href="https://github.com/protomaps/basemaps">Protomaps</a> © <a href="https://openstreetmap.org">OpenStreetMap</a>',
        type: 'vector',
        url: 'https://api.protomaps.com/tiles/v4.json?key=ca7652ec836f269a',
        maxzoom: 15
      }
    },
    layers: [
      {
        id: 'foreground',
        type: 'background',
        paint: {
          'background-color': backgroundColors[flavor],
          'background-opacity': 1
          // 'background-opacity-transition': { duration: DURATION }
        }
      }
    ]
  } satisfies maplibregl.StyleSpecification
}
