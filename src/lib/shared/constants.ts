import type { MapLibreWarpedMapLayerOptions } from '@allmaps/maplibre'

export const DURATION = 4000
export const PADDING = 25
export const FLAVOR = 'light'
export const LOCALE = 'en'

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
