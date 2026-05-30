import type maplibregl from 'maplibre-gl'
import { DEFAULT_COLORS } from './constants'

// https://github.com/mapbox/simplestyle-spec/tree/master/1.1.0
type SimpleStyleColorProperty = 'marker-color' | 'stroke' | 'fill'
type SimpleStyleNumberProperty =
  | 'stroke-opacity'
  | 'stroke-width'
  | 'fill-opacity'
type MapLibreExpression = maplibregl.ExpressionSpecification
type LayerSpecification = maplibregl.LayerSpecification

const SIMPLESTYLE_FALLBACKS = {
  markerColor: DEFAULT_COLORS.green.fill,
  markerRadius: {
    small: 6,
    medium: 8,
    large: 12
  },
  stroke: DEFAULT_COLORS.green.stroke,
  strokeOpacity: 1,
  strokeWidth: 8,
  circleStrokeWidth: 6,
  fill: DEFAULT_COLORS.green.fill,
  fillOpacity: 0.6
} as const

const getSimpleStyleColor = (
  property: SimpleStyleColorProperty,
  fallback: string
): MapLibreExpression => [
  'to-color',
  [
    'case',
    ['has', property],
    [
      'case',
      ['==', ['slice', ['to-string', ['get', property]], 0, 1], '#'],
      ['to-string', ['get', property]],
      ['concat', '#', ['to-string', ['get', property]]]
    ],
    fallback
  ],
  fallback
]

const getSimpleStyleNumber = (
  property: SimpleStyleNumberProperty,
  fallback: number,
  min: number,
  max?: number
): MapLibreExpression => {
  const value: MapLibreExpression = ['number', ['get', property], fallback]
  const rangeCheck: MapLibreExpression =
    max === undefined
      ? ['>=', value, min]
      : ['all', ['>=', value, min], ['<=', value, max]]

  return ['case', rangeCheck, value, fallback]
}

const getSimpleStyleMarkerRadius = (): MapLibreExpression => [
  'match',
  ['get', 'marker-size'],
  'small',
  SIMPLESTYLE_FALLBACKS.markerRadius.small,
  'large',
  SIMPLESTYLE_FALLBACKS.markerRadius.large,
  SIMPLESTYLE_FALLBACKS.markerRadius.medium
]

export const getGeoJsonLayers = (sourceId: string) => {
  return [
    {
      id: `user-${sourceId}-fill`,
      type: 'fill',
      source: sourceId,
      layout: {
        visibility: 'none'
      },
      paint: {
        'fill-color': getSimpleStyleColor('fill', SIMPLESTYLE_FALLBACKS.fill),
        'fill-opacity': getSimpleStyleNumber(
          'fill-opacity',
          SIMPLESTYLE_FALLBACKS.fillOpacity,
          0,
          1
        )
      },
      filter: ['==', '$type', 'Polygon']
    },
    {
      id: `user-${sourceId}-line`,
      type: 'line',
      source: sourceId,
      layout: {
        visibility: 'none',
        'line-join': 'round',
        'line-cap': 'round'
      },
      paint: {
        'line-color': getSimpleStyleColor(
          'stroke',
          SIMPLESTYLE_FALLBACKS.stroke
        ),
        'line-opacity': getSimpleStyleNumber(
          'stroke-opacity',
          SIMPLESTYLE_FALLBACKS.strokeOpacity,
          0,
          1
        ),
        'line-width': getSimpleStyleNumber(
          'stroke-width',
          SIMPLESTYLE_FALLBACKS.strokeWidth,
          0
        )
      },
      filter: ['in', '$type', 'LineString', 'Polygon']
    },
    {
      id: `user-${sourceId}-point-circle`,
      type: 'circle',
      source: sourceId,
      layout: {
        visibility: 'none'
      },
      paint: {
        'circle-radius': getSimpleStyleMarkerRadius(),
        'circle-color': getSimpleStyleColor(
          'marker-color',
          SIMPLESTYLE_FALLBACKS.markerColor
        ),
        'circle-opacity': getSimpleStyleNumber(
          'fill-opacity',
          SIMPLESTYLE_FALLBACKS.fillOpacity,
          0,
          1
        ),
        'circle-stroke-width': getSimpleStyleNumber(
          'stroke-width',
          SIMPLESTYLE_FALLBACKS.circleStrokeWidth,
          0
        ),
        'circle-stroke-color': getSimpleStyleColor(
          'stroke',
          SIMPLESTYLE_FALLBACKS.stroke
        )
      },
      filter: ['all', ['==', '$type', 'Point'], ['!has', 'icon-image']]
    },
    {
      id: `user-${sourceId}-point-symbol`,
      type: 'symbol',
      source: sourceId,
      layout: {
        visibility: 'none',
        'icon-image': ['get', 'icon-image']
      },
      filter: ['all', ['==', '$type', 'Point'], ['has', 'icon-image']]
    }
  ] satisfies LayerSpecification[]
}
