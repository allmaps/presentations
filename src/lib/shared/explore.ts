import type {
  ExpressionSpecification,
  FilterSpecification,
  LayerSpecification
} from 'maplibre-gl'

type MaskBand = {
  id: string
  layerId: string
  sourceLayer: string
  minzoom: number
  maxzoom: number
  fullMinzoom: number
  fullMaxzoom: number
  lineWidth: number
  lineOpacity: number
}

const maskBands = [
  {
    id: 'global',
    layerId: 'masks-global',
    sourceLayer: 'masks_global',
    minzoom: 0,
    maxzoom: 6,
    fullMinzoom: 0,
    fullMaxzoom: 5,
    lineWidth: 1.25,
    lineOpacity: 0.4
  },
  {
    id: 'continent',
    layerId: 'masks-continent',
    sourceLayer: 'masks_continent',
    minzoom: 2,
    maxzoom: 8,
    fullMinzoom: 3,
    fullMaxzoom: 7,
    lineWidth: 1.5,
    lineOpacity: 0.5
  },
  {
    id: 'country',
    layerId: 'masks-country',
    sourceLayer: 'masks_country',
    minzoom: 4,
    maxzoom: 10,
    fullMinzoom: 5,
    fullMaxzoom: 9,
    lineWidth: 1.75,
    lineOpacity: 0.6
  },
  {
    id: 'region',
    layerId: 'masks-region',
    sourceLayer: 'masks_region',
    minzoom: 6,
    maxzoom: 12,
    fullMinzoom: 7,
    fullMaxzoom: 11,
    lineWidth: 2,
    lineOpacity: 0.7
  },
  {
    id: 'city',
    layerId: 'masks-city',
    sourceLayer: 'masks_city',
    minzoom: 8,
    maxzoom: 18,
    fullMinzoom: 9,
    fullMaxzoom: 17,
    lineWidth: 2.5,
    lineOpacity: 0.8
  },
  {
    id: 'local',
    layerId: 'masks-local',
    sourceLayer: 'masks_local',
    minzoom: 10,
    maxzoom: 24,
    fullMinzoom: 11,
    fullMaxzoom: 24,
    lineWidth: 3,
    lineOpacity: 0.9
  }
] as const satisfies readonly MaskBand[]

export const maskLayerIds = maskBands.map((maskBand) => maskBand.layerId)

function getMaskOpacity(maskBand: MaskBand): ExpressionSpecification {
  const stops: unknown[] = ['interpolate', ['linear'], ['zoom']]

  if (maskBand.minzoom === 0) {
    stops.push(
      maskBand.minzoom,
      maskBand.lineOpacity,
      maskBand.fullMaxzoom,
      maskBand.lineOpacity
    )
  } else {
    stops.push(
      maskBand.minzoom,
      0,
      maskBand.fullMinzoom,
      maskBand.lineOpacity,
      maskBand.fullMaxzoom,
      maskBand.lineOpacity
    )
  }

  if (maskBand.fullMaxzoom < maskBand.maxzoom) {
    stops.push(maskBand.maxzoom, 0)
  }

  return stops as ExpressionSpecification
}

function getMaskFilter(): FilterSpecification {
  return ['!=', 'imageServiceDomain', 'iiif.nypl.org']
}

export const getExploreLayers = (visibility: 'visible' | 'none' = 'visible') =>
  maskBands.map((maskBand) => ({
    id: maskBand.layerId,
    type: 'line',
    source: 'masks',
    'source-layer': maskBand.sourceLayer,
    minzoom: maskBand.minzoom,
    maxzoom: maskBand.maxzoom,
    layout: {
      'line-join': 'round',
      'line-cap': 'round',
      visibility
    },
    paint: {
      'line-color': '#ff56ba',
      'line-width': maskBand.lineWidth,
      'line-opacity': getMaskOpacity(maskBand)
    },
    filter: getMaskFilter()
  })) satisfies LayerSpecification[]
