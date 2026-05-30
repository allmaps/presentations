<script lang="ts">
  import { onDestroy, onMount } from 'svelte'

  import maplibregl from 'maplibre-gl'
  import 'maplibre-gl/dist/maplibre-gl.css'
  import type { SourceSpecification } from 'maplibre-gl'

  import { WarpedMapLayer } from '@allmaps/maplibre'
  import { computeWarpedMapBearing } from '@allmaps/bearing'

  import { getAxisAlignedBboxAndCenter } from '$lib/shared/bounds'
  import { createFauxGeoreferencedMap } from '$lib/shared/image-annotation'
  import { getLayers, getStyleWithoutLayers } from '$lib/shared/basemap'
  import { getValueAsArray } from '$lib/shared/functions'
  import {
    DEFAULT_PADDING,
    DEFAULT_LIGHT_FLAVOR,
    DEFAULT_WARPED_MAP_OPTIONS,
    DEFAULT_LOCALE,
    DEFAULT_DURATION,
    DEFAULT_COLORS,
    DEFAULT_DARK_FLAVOR
  } from '$lib/shared/constants'

  import { bboxPolygon, featureCollection } from '@turf/turf'

  import type { WarpedMapProps, MapViewProps } from '$lib/types/warped-map'
  import { getGeoJsonLayers } from '$lib/shared/geojson'

  type Props = {
    chapters: MapViewProps[]
    index: number
    isDarkMode?: boolean
    duration?: number
    locale?: string
    sources?: {
      [key: string]: SourceSpecification
    }
  }

  let { chapters, index, isDarkMode, duration, locale, sources }: Props =
    $props()
  let highlight = undefined

  let start = true
  let initialIndex = index
  $effect(() => {
    if (start && initialIndex !== index) {
      start = false
      map.setPaintProperty('foreground', 'background-opacity-transition', {
        duration: duration || DEFAULT_DURATION
      })
    }
  })

  let currentView = $derived(chapters[index])
  let currentLocation = $derived(
    currentView.location ? currentView.location : {}
  )
  let currentWarpedMaps = $derived.by(() => {
    const warpedMaps = currentView.warpedMaps
    if (warpedMaps) {
      const warpedMapsArr = getValueAsArray(warpedMaps)
      if (warpedMapsArr.length) {
        return warpedMapsArr
      }
    }
    return undefined
  })
  let currentImageSlide = $derived(
    currentWarpedMaps?.some((warpedMaps) => warpedMaps.type === 'Image') ||
      false
  )
  let currentHideBasemap = $derived(
    currentImageSlide || currentView.hideBasemap
  )
  let currentPadding = $derived(currentView.padding)
  let currentSources = $derived(
    currentView.sources ? Object.keys(currentView.sources) : []
  )

  let sprite = $derived(currentView.sprite)

  let map: maplibregl.Map
  let container: HTMLElement
  let mapLoaded = $state(false)
  let mapIdsByAnnotationUrl: Map<string, string[]> = new Map()
  let layerIdsBySourceId: Map<string, string[]> = new Map()
  let visibleMaps: string[] = new Array()
  let visibleLayers: string[] = new Array()
  let imagesAdded: Set<string> = new Set()

  // For debugging
  const debug = false
  const useVisibility = false

  // Initialize style and layers
  const flavor = isDarkMode ? DEFAULT_DARK_FLAVOR : DEFAULT_LIGHT_FLAVOR
  const styleWithoutLayers = getStyleWithoutLayers(flavor)
  const styleLayers = getLayers(flavor)
  const symbolLayers = getLayers(flavor, undefined, {
    lang: locale ? locale : DEFAULT_LOCALE,
    labelsOnly: true
  })
  const warpedMapLayer = new WarpedMapLayer(
    useVisibility ? { visible: false } : undefined
  )

  function toggleVisibility(event: KeyboardEvent) {
    if (event.repeat) return
    if (mapLoaded && event.code === 'Backquote') {
      const opacity = warpedMapLayer.getOpacity()
      if (opacity === 0) {
        warpedMapLayer.setOpacity(1)
      } else {
        warpedMapLayer.setOpacity(0)
      }
    }
  }

  const loadAnnotations = async (chapters: MapViewProps[]) => {
    if (debug) {
      console.log('Loading all warped maps...', chapters)
    }
    // Add maps
    const uniqueAnnotations = chapters
      .flatMap((i) => (i.warpedMaps ? i.warpedMaps : []))
      // Filter for unique URLs
      .reduce((acc: WarpedMapProps[], current) => {
        const annotationExists = acc.some(
          (annotation) => annotation.url === current.url
        )
        if (!annotationExists) {
          acc.push(current)
        }
        return acc
      }, [])
    if (uniqueAnnotations.length) {
      const promises = uniqueAnnotations.map((annotation) => {
        const url = annotation.url
        if (annotation.type === 'Image') {
          // Create a 'fake' annotation for the image, in order to add it to the map
          return createFauxGeoreferencedMap(url, {
            region: annotation.region,
            wiggle: annotation.wiggle
          })
            .then((georeferencedMap) =>
              warpedMapLayer.addGeoreferencedMap(
                georeferencedMap,
                useVisibility ? { visible: false } : { opacity: 0 }
              )
            )
            .then((id) => {
              if (id instanceof Error) {
                console.error('Failed to add georeferenced map for', url, id)
                mapIdsByAnnotationUrl.set(url, [])
              } else {
                mapIdsByAnnotationUrl.set(url, [id])
              }
            })
        } else {
          // Add the georeference annotation
          return warpedMapLayer
            .addGeoreferenceAnnotationByUrl(
              url,
              useVisibility ? { visible: false } : { opacity: 0 }
            )
            .then((ids) => {
              const stringIds = ids.filter(
                (i): i is string => typeof i === 'string'
              )
              const errors = ids.filter((i) => i instanceof Error)
              if (errors.length) {
                console.error(
                  'Failed to add georeferenced map for',
                  url,
                  errors
                )
              }
              mapIdsByAnnotationUrl.set(url, stringIds)
            })
        }
      })
      return Promise.all(promises)
    }
  }

  const loadSources = async (chapters: MapViewProps[]) => {
    if (debug) {
      console.log('Loading all sources...', chapters)
    }
    chapters
      .flatMap((i) => (i.sources ? Object.entries(i.sources) : []))
      .concat(sources ? Object.entries(sources) : [])
      // Filter for unique keys
      .reduce((acc: [string, maplibregl.SourceSpecification][], current) => {
        const [currentId, currentSource] = current
        const annotationExists = acc.some(([id]) => id === currentId)
        if (!annotationExists) {
          acc.push(current)
        }
        return acc
      }, [])
      .forEach(([id, source]) => {
        if (source.type !== 'geojson' && source.type !== 'raster') return
        map.addSource(id, source)
        if (source.type === 'geojson') {
          const layers = getGeoJsonLayers(id)
          layers.forEach((layer) => {
            map.addLayer(layer)
          })
          layerIdsBySourceId.set(
            id,
            layers.map((layer) => layer.id)
          )
        } else {
          const layerId = `user-${source}-layer`
          map.addLayer(
            {
              id: layerId,
              type: 'raster',
              source: id,
              layout: { visibility: 'none' }
            },
            'warped-map-layer'
          )
          layerIdsBySourceId.set(id, [layerId])
        }
      })
  }

  let highlightedMaps: string[] = []
  $effect(() => {
    if (mapLoaded && highlight) {
      if (debug) {
        console.log('Highlighting maps...', highlight)
      }
      const ids = mapIdsByAnnotationUrl.get(highlight)
      if (ids) {
        warpedMapLayer.setMapsOptions(ids, {
          renderAppliableMask: true
        })
        highlightedMaps = ids
      }
    } else if (mapLoaded) {
      warpedMapLayer.setMapsOptions(highlightedMaps, {
        renderAppliableMask: false
      })
    }
  })

  $effect(() => {
    if (mapLoaded && currentLocation && !currentWarpedMaps) {
      if (debug) {
        console.log('Flying to new location...', currentLocation)
      }
      const flyToOptions = {
        ...currentLocation
      }
      if (currentImageSlide || start) {
        flyToOptions.duration = 0
      } else if (!currentLocation.duration && duration) {
        flyToOptions.duration = duration
      }
      map.flyTo(flyToOptions)
    }
  })

  $effect(() => {
    const alwaysShow = [warpedMapLayer?.id, 'foreground']
    if (mapLoaded && currentHideBasemap) {
      if (debug) {
        console.log('Changing basemap visibility...', currentHideBasemap)
      }
      map.setPaintProperty('foreground', 'background-opacity', 1)

      for (const layer of map.getLayersOrder()) {
        if (!alwaysShow.includes(layer) && !layer.startsWith('user')) {
          map.setLayoutProperty(layer, 'visibility', 'none')
        }
      }
    } else if (mapLoaded) {
      map.setPaintProperty('foreground', 'background-opacity', 0)

      for (const layer of map.getLayersOrder()) {
        if (!alwaysShow.includes(layer) && !layer.startsWith('user')) {
          map.setLayoutProperty(layer, 'visibility', 'visible')
        }
      }
    }
  })

  $effect(() => {
    if (mapLoaded && currentWarpedMaps) {
      // Get all IDs
      const optionsByMapId = new Map()
      const newMapIds = new Array()
      currentWarpedMaps
        .slice()
        // For correct order
        .reverse()
        .forEach((annotation) => {
          const { url, options } = annotation
          const annotationIds = mapIdsByAnnotationUrl.get(url)
          if (annotationIds) {
            warpedMapLayer.bringMapsToFront(annotationIds)
            annotationIds.forEach((id: string) => {
              optionsByMapId.set(
                id,
                useVisibility
                  ? {
                      visible: true,
                      ...DEFAULT_WARPED_MAP_OPTIONS,
                      ...options
                    }
                  : {
                      opacity: 1,
                      ...DEFAULT_WARPED_MAP_OPTIONS,
                      ...options
                    }
              )
              if (!visibleMaps.includes(id)) {
                // No longer used!
                newMapIds.push(id)
              }
            })
          }
        })

      // Check which maps to hide and show
      // const mapsToShow = mapIds.filter((id) => !visibleMaps.includes(id))
      const mapsToHide = visibleMaps.filter((id) => !optionsByMapId.has(id))
      const mapIds = optionsByMapId.keys().toArray()

      mapsToHide.forEach((id) => {
        optionsByMapId.set(
          id,
          useVisibility
            ? { visible: false, ...DEFAULT_WARPED_MAP_OPTIONS }
            : {
                opacity: 0,
                ...DEFAULT_WARPED_MAP_OPTIONS
              }
        )
      })
      if (debug) {
        console.log('Processing current warped maps...', {
          currentWarpedMaps,
          optionsByMapId,
          visibleMaps
        })
      }
      // Animation not working correctly
      // const animate = init ? false : slideDuration === 0 ? false : true
      warpedMapLayer.setMapsOptionsByMapId(optionsByMapId)

      visibleMaps = mapIds

      let mapIdsForBounds = []
      const boundsFilter = currentWarpedMaps.filter(
        (annotation) => annotation.useBounds === true
      )
      if (boundsFilter.length) {
        boundsFilter.forEach(({ url }) => {
          const ids = mapIdsByAnnotationUrl.get(url)
          if (ids) {
            mapIdsForBounds.push(...ids)
          }
        })
      } else mapIdsForBounds = mapIds

      // Get bounds of visible maps
      let bounds = warpedMapLayer.getMapsBbox(mapIdsForBounds, {
        projection: { definition: 'EPSG:4326' }
      })
      // Get optional bearing for map
      let bearing = currentLocation.bearing || 0
      let center: maplibregl.LngLat | undefined

      const firstMapWithBearingProp = currentWarpedMaps.find(
        (annotation) => annotation.useBearing == true
      )
      if (firstMapWithBearingProp) {
        const warpedMapIds = mapIdsByAnnotationUrl.get(
          firstMapWithBearingProp.url
        )

        if (warpedMapIds?.length) {
          const warpedMap = warpedMapLayer.getWarpedMap(warpedMapIds[0])

          const geoMasks = mapIdsForBounds
            .map((id) => {
              const warpedMap = warpedMapLayer.getWarpedMap(id)
              if (warpedMap) {
                return warpedMap.geoMask
              }
            })
            .filter(Boolean)

          if (warpedMap) {
            const computedBearing = computeWarpedMapBearing(warpedMap)
            bearing = bearing + computedBearing
          }

          ;({ bounds, center } = getAxisAlignedBboxAndCenter(geoMasks, bearing))
        }
      }
      if (bounds && debug) {
        console.log('Updating bounds layer', bounds)
        const boundsSource = map.getSource('bounds') as maplibregl.GeoJSONSource
        const features = featureCollection([bboxPolygon(bounds)])
        if (boundsSource) {
          boundsSource.setData(features)
        }
      }
      if (bounds) {
        const camera = map.cameraForBounds(bounds, {
          padding:
            currentPadding !== undefined ? currentPadding : DEFAULT_PADDING
        })
        // Add optional center if bearing is used
        if (camera && center) {
          camera.center = center
        }
        const flyToOptions = {
          ...camera,
          // Apply manual overrides
          ...currentLocation,
          bearing: -bearing
        }
        if (currentImageSlide || start) {
          flyToOptions.duration = 0
        } else if (!currentLocation.duration && duration) {
          flyToOptions.duration = duration
        }
        map.flyTo(flyToOptions)
      }
    } else if (mapLoaded) {
      // Hide all maps
      warpedMapLayer.setMapsOptions(
        visibleMaps,
        useVisibility
          ? { visible: false }
          : {
              opacity: 0,
              renderPoints: false,
              renderLines: false
            }
      )
    }
  })

  $effect(() => {
    if (mapLoaded) {
      const alwaysVisible = sources ? Object.keys(sources) : []
      const currentVisibleLayers = alwaysVisible
        .concat(currentSources)
        .flatMap((sourceId) => layerIdsBySourceId.get(sourceId) || [])
      const layersToShow = currentVisibleLayers.filter(
        (layer) => !visibleLayers.includes(layer)
      )
      const layersToHide = visibleLayers.filter(
        (layer) => !currentVisibleLayers.includes(layer)
      )
      if (debug) {
        console.log('Processing current map sources...', {
          visibleLayers,
          currentSources,
          currentVisibleLayers,
          layersToShow,
          layersToHide
        })
      }
      layersToHide.forEach((layer) => {
        map.setLayoutProperty(layer, 'visibility', 'none')
      })
      layersToShow.forEach((layer) => {
        map.setLayoutProperty(layer, 'visibility', 'visible')
      })
      visibleLayers = currentVisibleLayers
    }
  })

  onMount(() => {
    map = new maplibregl.Map({
      container,
      style: styleWithoutLayers,
      maxPitch: 0,
      attributionControl: false,
      center: [0, 0],
      zoom: 14,
      bearingSnap: 0,
      keyboard: false
    })

    map.on('load', async () => {
      // Add layers
      styleLayers.forEach((layer) => map.addLayer(layer, 'foreground'))

      // @ts-expect-error
      map.addLayer(warpedMapLayer)

      // Load additional style sources and georeference annotations
      loadSources(chapters)
      await loadAnnotations(chapters)

      // symbolLayers.forEach((layer) => map.addLayer(layer))

      map.on('styleimagemissing', async (event) => {
        const id = event.id
        if (!imagesAdded.has(id)) {
          imagesAdded.add(id)
          const image = await map.loadImage(id)
          map.addImage(id, image.data)
        }
      })

      if (debug) {
        // Debug layer to show bounds
        map.addSource('bounds', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: []
          }
        })
        map.addLayer({
          id: `bounds-layer`,
          type: 'line',
          source: 'bounds',
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': DEFAULT_COLORS.blue.stroke,
            'line-width': 8
          }
        })
      }

      if (sprite) {
        // Load image sprite before rendering maps
        map.on('maptilesloadedfromsprites', () => {
          mapLoaded = true
        })
        const spriteJson = await fetch(`/sprites/${sprite.json}`).then((resp) =>
          resp.json()
        )
        await warpedMapLayer.addSprites(
          spriteJson,
          window.location.origin + `/sprites/${sprite.image}`,
          sprite.dimensions
        )
      } else {
        mapLoaded = true
      }
    })
  })

  onDestroy(() => {
    if (mapLoaded) {
      warpedMapLayer.clear()
      map.remove()
    }
  })
</script>

<svelte:window on:keydown={toggleVisibility} on:keyup={toggleVisibility} />

<div class="h-full w-full min-w-0 min-h-0" bind:this={container}></div>
