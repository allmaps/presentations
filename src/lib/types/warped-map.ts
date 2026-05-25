import type { MapLibreWarpedMapLayerOptions } from '@allmaps/maplibre'
import type { SourceSpecification } from 'maplibre-gl'

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

export type MapViewProps = {
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
  sources?: {
    [key: string]: SourceSpecification
  }
  annotations?: WarpedMapProps[] | WarpedMapProps
}
