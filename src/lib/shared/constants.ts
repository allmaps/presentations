import type { MapLibreWarpedMapLayerOptions } from '@allmaps/maplibre'

export const DEFAULT_DURATION = 4000
export const DEFAULT_PADDING = 25
export const DEFAULT_LIGHT_FLAVOR = 'light'
export const DEFAULT_DARK_FLAVOR = 'black'
export const DEFAULT_LOCALE = 'en'

// https://github.com/allmaps/allmaps/blob/main/packages/render/src/shared/types.ts#L39
export const DEFAULT_WARPED_MAP_OPTIONS: Partial<MapLibreWarpedMapLayerOptions> =
  {
    applyMask: true,
    colorize: false,
    removeColor: false,
    saturation: 1,
    renderAppliableMask: false,
    renderFullMask: false,
    renderMask: false,
    renderGcps: false,
    renderTransformedGcps: false,
    renderVectors: false,
    renderGrid: false,
    transformationType: undefined,
    // Fix until undefined works
    distortionMeasure: ''
  }

export const DEFAULT_COLORS = {
  green: {
    stroke: '#64c18f',
    fill: '#c1e6d2'
  },
  purple: {
    stroke: '#c552b5',
    fill: '#e8bae1'
  },
  red: {
    stroke: '#fe5e60',
    fill: '#ffbfbf'
  },
  yellow: {
    stroke: '#ffc742',
    fill: '#ffe9b3'
  },
  orange: {
    stroke: '#ff7415',
    fill: '#ffc7a1'
  },
  pink: {
    stroke: '#ff56ba',
    fill: '#ffbbe3'
  },
  blue: {
    stroke: '#63d8e6',
    fill: '#c1eff5'
  }
}
