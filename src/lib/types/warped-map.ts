import type { MapLibreWarpedMapLayerOptions } from '@allmaps/maplibre'
import type { SourceSpecification, LayerSpecification } from 'maplibre-gl'

export type WarpedMapProps = {
  type?: 'Image'
  url: string
  caption?: string
  homepage?: string
  useBearing?: boolean
  useBounds?: boolean
  options?: Partial<MapLibreWarpedMapLayerOptions>
  region?: [number, number, number, number]
  wiggle?: boolean
}

export type MapLayerProps = {
  layer: string
  opacity?: number
  visibility?: 'visible' | 'none'
  duration?: number
}

export type MapChapterProps = {
  location?: {
    zoom?: number
    center?: [number, number]
    duration?: number
    bearing?: number
  }
  sprite?: {
    json: string
    image: string
    dimensions: [number, number]
  }
  caption?: string
  freeze?: boolean
  padding?: number
  hideBasemap?: boolean
  contain?: boolean
  warpedMaps?: WarpedMapProps[] | WarpedMapProps
  layers?: MapLayerProps[] | MapLayerProps
}
