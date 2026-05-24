import {
  bbox,
  transformRotate,
  multiPolygon,
  bboxPolygon,
  center,
  getCoords
} from '@turf/turf'
import maplibregl from 'maplibre-gl'

type BBox = [number, number, number, number]
type Coord = [number, number]

export const getAxisAlignedBboxAndCenter = (geoMasks, bearing: number) => {
  // Use first mask coordinate as pivot
  const pivot: Coord = geoMasks[0][0]

  // Create a MultiPolygon from the masks
  const polygons = geoMasks.map((geoMask) => [geoMask.concat([geoMask[0]])])
  const multiPolygonFeature = multiPolygon(polygons)

  // Rotate this polygon, calculate bbox and center
  const rotatedPolygon = transformRotate(multiPolygonFeature, bearing, {
    pivot
  })
  const rotatedBbox = bbox(rotatedPolygon) as BBox
  const rotatedCenter = center(bboxPolygon(rotatedBbox))

  // Rotate back the center
  const viewportCenter = transformRotate(rotatedCenter, -bearing, { pivot })
  const viewportCenterCoord = getCoords(viewportCenter) as Coord

  // Return bbox and center coords
  return {
    bounds: rotatedBbox,
    center: new maplibregl.LngLat(...viewportCenterCoord)
  }
}
