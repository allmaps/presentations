import { getCoords, rhumbDestination, point } from '@turf/turf'
import type { GeoreferencedMap } from '@allmaps/annotation'

const fetchJson = (url: string) => fetch(url).then((resp) => resp.json())

let wiggleAngle = 2.5

export const createFauxGeoreferencedMap = async (
  imageId: string,
  options: {
    bounds?: [number, number, number, number]
    region?: [number, number, number, number]
    center?: [number, number]
    bearing?: number
    wiggle?: boolean
  }
) => {
  let { region, bounds, center } = options
  // if (!bounds) {
  // 	bounds = [-0.1, -0.1, 0.1, 0.1]
  // }
  if (!center) {
    center = [0, 0]
  }
  const imageInfo = await fetchJson(`${imageId}/info.json`)
  const { width, height } = imageInfo
  let gcps
  let [resourceX, resourceY, resourceWidth, resourceHeight] = [
    0,
    0,
    width,
    height
  ]
  if (region) {
    ;[resourceX, resourceY, resourceWidth, resourceHeight] = region
  }
  const resourceMask = [
    [resourceX, resourceY],
    [resourceX + resourceWidth, resourceY],
    [resourceX + resourceWidth, resourceY + resourceHeight],
    [resourceX, resourceY + resourceHeight]
  ]
  if (bounds) {
    let [xMin, yMin, xMax, yMax] = bounds
    gcps = [
      {
        resource: [resourceX, resourceY + resourceHeight],
        geo: [xMin, yMin]
      },
      {
        resource: [resourceX + resourceWidth, resourceY],
        geo: [xMax, yMax]
      }
    ]
  } else {
    const landscape = resourceWidth > resourceHeight
    let bearing = landscape ? -90 : 0
    if (options.wiggle) {
      bearing = bearing + wiggleAngle
      wiggleAngle = wiggleAngle * -1
    }
    const centerX = Math.round(resourceX + resourceWidth / 2)
    const centerY = Math.round(resourceY + resourceHeight / 2)
    gcps = [
      {
        resource: [centerX, centerY],
        geo: center
      },
      {
        resource: landscape ? [resourceX, centerY] : [centerX, resourceY],
        geo: getCoords(rhumbDestination(point(center), 100, bearing))
      }
    ]
  }
  return {
    ['@context']: 'https://schemas.allmaps.org/map/2/context.json',
    id: imageId,
    type: 'GeoreferencedMap',
    resource: {
      id: imageId,
      width,
      height,
      type: 'ImageService3'
    },
    gcps,
    resourceMask,
    transformation: {
      type: 'helmert'
    }
  } satisfies GeoreferencedMap
}
