import type { MapChapterProps } from '$lib/types/warped-map'

const explainer = (annotationUrl: string, caption?: string) => {
  return [
    {
      caption: 'The IIIF Image',
      hideBasemap: true,
      warpedMaps: [
        {
          url: annotationUrl,
          caption,
          useBearing: true,
          options: {
            applyMask: false,
            transformationType: 'helmert'
          }
        }
      ]
    },
    {
      caption: 'Drawing the mask',
      hideBasemap: true,
      warpedMaps: [
        {
          url: annotationUrl,
          caption,
          useBearing: true,
          options: {
            applyMask: false,
            renderMask: true,
            transformationType: 'helmert'
          }
        }
      ]
    },
    {
      caption: 'Adding Ground Control Points',
      hideBasemap: true,
      warpedMaps: [
        {
          url: annotationUrl,
          caption,
          useBearing: true,
          options: {
            applyMask: false,
            renderMask: true,
            renderTransformedGcps: true,
            transformationType: 'helmert'
          }
        }
      ]
    },
    {
      caption: 'Overlaying on a map',
      padding: 200,
      warpedMaps: [
        {
          url: annotationUrl,
          caption,
          options: {
            applyMask: true,
            renderTransformedGcps: true,
            transformationType: 'polynomial'
          }
        }
      ]
    },
    {
      caption: 'Displaying vectors',
      padding: 25,
      warpedMaps: [
        {
          url: annotationUrl,
          caption,
          options: {
            applyMask: true,
            renderGcps: true,
            renderTransformedGcps: true,
            renderVectors: true,
            transformationType: 'polynomial'
          }
        }
      ]
    },
    {
      caption: 'Using Thin Plate Spline transformation',
      padding: 25,
      warpedMaps: [
        {
          url: annotationUrl,
          caption,
          options: {
            applyMask: true,
            renderGcps: true,
            renderTransformedGcps: true,
            renderVectors: true,
            transformationType: 'thinPlateSpline'
          }
        }
      ]
    }
  ] satisfies MapChapterProps[]
}

export default explainer
