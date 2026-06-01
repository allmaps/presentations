import type { MapChapterProps } from '$lib/types/warped-map'

const explainer = (options: {
  annotationUrl: string
  caption?: string
  homepage: string
  tpsLocation?: MapChapterProps['location']
}) => {
  const { annotationUrl, caption, homepage, tpsLocation } = options
  return [
    {
      caption: 'IIIF Image',
      hideBasemap: true,
      warpedMaps: [
        {
          url: annotationUrl,
          caption,
          homepage,
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
          homepage,
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
          homepage,
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
      caption: 'Overlaying on a web map',
      padding: 200,
      warpedMaps: [
        {
          url: annotationUrl,
          caption,
          homepage,
          options: {
            applyMask: true,
            renderTransformedGcps: true,
            transformationType: 'polynomial'
          }
        }
      ]
    },
    {
      location: tpsLocation,
      caption: 'Analyzing map distortions',
      padding: 25,
      warpedMaps: [
        {
          url: annotationUrl,
          caption,
          homepage,
          options: {
            applyMask: true,
            renderGcps: true,
            renderTransformedGcps: true,
            renderVectors: true,
            renderVectorsColor: '#ffffff',
            transformationType: 'polynomial',
            opacity: 0.8
          }
        }
      ]
    },
    {
      location: tpsLocation,
      caption: 'A better fit?',
      padding: 25,
      warpedMaps: [
        {
          url: annotationUrl,
          caption,
          homepage,
          options: {
            applyMask: true,
            renderGcps: true,
            renderTransformedGcps: true,
            renderVectors: true,
            transformationType: 'thinPlateSpline',
            opacity: 0.8
          }
        }
      ]
    },
    {
      location: tpsLocation,
      caption: 'A better fit?',
      padding: 25,
      warpedMaps: [
        {
          url: annotationUrl,
          caption,
          homepage,
          options: {
            applyMask: true,
            renderGcps: true,
            renderTransformedGcps: true,
            renderVectors: true,
            transformationType: 'thinPlateSpline',
            opacity: 1
          }
        }
      ]
    }
  ] satisfies MapChapterProps[]
}

export default explainer
