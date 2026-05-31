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
    opacity: 1,
    renderMask: false,
    renderFullMask: false,
    renderGcps: false,
    renderTransformedGcps: false,
    renderVectors: false,
    renderGrid: false,
    transformationType: undefined,
    distortionMeasure: undefined
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

// From https://github.com/digidem/maplibre-storymap/blob/main/demo/index.html
export const LAYER_TYPES = {
  fill: ['fill-opacity'],
  line: ['line-opacity'],
  circle: ['circle-opacity', 'circle-stroke-opacity'],
  symbol: ['icon-opacity', 'text-opacity'],
  raster: ['raster-opacity'],
  'fill-extrusion': ['fill-extrusion-opacity'],
  heatmap: ['heatmap-opacity']
}
