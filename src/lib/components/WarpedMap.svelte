<script lang="ts">
  import { onDestroy, onMount } from 'svelte'

  import maplibregl from 'maplibre-gl'
  import 'maplibre-gl/dist/maplibre-gl.css'

  import { WarpedMapLayer } from '@allmaps/maplibre'
  import { computeWarpedMapBearing } from '@allmaps/bearing'

  import colors from '$lib/shared/colors'
  import { getAxisAlignedBboxAndCenter } from '$lib/shared/bounds'
  import { createFauxGeoreferencedMap } from '$lib/shared/image-annotation'
  import { getLayers, getStyleWithoutLayers } from '$lib/shared/basemap'
  import { getValueAsArray } from '$lib/shared/functions'
  import {
    PADDING,
    FLAVOR,
    DEFAULT_WARPED_MAP_OPTIONS,
    LOCALE,
    DURATION
  } from '$lib/shared/constants'

  import { bboxPolygon, featureCollection } from '@turf/turf'

  import type { WarpedMapProps, MapViewProps } from '$lib/types/warped-map'

  type Props = {
    views: MapViewProps[]
    index: number
  }

  let { views, index }: Props = $props()
  let highlight = undefined

  let start = true
  let transitionCount = 0
  $effect(() => {
    if (index) {
      transitionCount++
    }
    if (transitionCount > 1) {
      start = false
      map.setPaintProperty('foreground', 'background-opacity-transition', {
        duration: DURATION
      })
    }
  })

  let currentView = $derived(views[index])
  let currentLocation = $derived(
    currentView.location ? currentView.location : {}
  )
  let currentAnnotations = $derived.by(() => {
    const annotations = currentView.annotations
    if (annotations) {
      const annotationsArr = getValueAsArray(annotations)
      if (annotationsArr.length) {
        return annotationsArr
      }
    }
    return undefined
  })
  let currentImageSlide = $derived(
    currentAnnotations?.some((annotations) => annotations.type === 'Image') ||
      false
  )
  let currentHideBackground = $derived(
    currentImageSlide || currentView.hideBackground
  )
  let currentPadding = $derived(currentView.padding)
  let currentSources = $derived(currentView.sources)

  let sprite = $derived(currentView.sprite)

  let map: maplibregl.Map
  let container: HTMLElement
  let mapLoaded = $state(false)
  let mapIdsByAnnotationUrl = new Map()
  let visibleMaps: string[] = new Array()
  let visibleLayers: Set<string> = new Set()

  // For debugging
  const debug = false
  const useVisibility = false

  // Initialize style and layers
  const styleWithoutLayers = getStyleWithoutLayers(FLAVOR)
  const styleLayers = getLayers(FLAVOR)
  const symbolLayers = getLayers(FLAVOR, undefined, {
    lang: LOCALE,
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

  const loadAnnotations = async (maps: MapViewProps[]) => {
    // Add maps
    const uniqueAnnotations = maps
      .map((i) => i.annotations)
      .flatMap((annotations) => (annotations ? annotations : []))
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
              mapIdsByAnnotationUrl.set(url, [id])
            })
        } else {
          // Add the georeference annotation
          return warpedMapLayer
            .addGeoreferenceAnnotationByUrl(
              url,
              useVisibility ? { visible: false } : { opacity: 0 }
            )
            .then((ids) => {
              mapIdsByAnnotationUrl.set(url, ids)
            })
        }
      })
      return Promise.all(promises)
    }
  }

  let highlightedMaps: string[] = []
  $effect(() => {
    if (mapLoaded && highlight) {
      const ids = mapIdsByAnnotationUrl.get(highlight)
      warpedMapLayer.setMapsOptions(ids, {
        renderAppliableMask: true
      })
      highlightedMaps = ids
    } else if (mapLoaded) {
      warpedMapLayer.setMapsOptions(highlightedMaps, {
        renderAppliableMask: false
      })
    }
  })

  $effect(() => {
    if (mapLoaded) {
      const sourceIds = currentSources ? Object.keys(currentSources) : []
      visibleLayers.forEach((id) => {
        if (!sourceIds.includes(id)) {
          map.removeLayer(id)
          visibleLayers.delete(id)
        }
      })
      if (currentSources) {
        Object.entries(currentSources).forEach(([id, source]) => {
          // Currently only supporting raster and geojson layers
          const layerType =
            source.type === 'raster'
              ? 'raster'
              : source.type === 'geojson'
                ? 'line'
                : undefined
          if (!map.getSource(id)) {
            map.addSource(id, source)
          }
          if (layerType && !visibleLayers.has(id)) {
            const layerOptions: maplibregl.LayerSpecification = {
              id,
              type: layerType,
              source: id
            }
            if (layerType === 'line') {
              layerOptions.layout = {
                'line-join': 'round',
                'line-cap': 'round'
              }
              layerOptions.paint = {
                'line-color': colors.green.stroke,
                'line-width': 8
              }
            }
            map.addLayer(
              layerOptions,
              layerType === 'raster' ? 'warped-map-layer' : undefined
            )
          }
          visibleLayers.add(id)
        })
      }
    }
  })

  $effect(() => {
    if (mapLoaded && currentLocation && !currentAnnotations) {
      const flyToOptions = {
        ...currentLocation
      }
      if (currentImageSlide || start) {
        flyToOptions.duration = 0
      }
      map.flyTo(flyToOptions)
    }
  })

  $effect(() => {
    const alwaysShow = [warpedMapLayer?.id, 'foreground']
    if (mapLoaded && currentHideBackground) {
      map.setPaintProperty('foreground', 'background-opacity', 1)

      for (const layer of map.getLayersOrder()) {
        if (!alwaysShow.includes(layer)) {
          map.setLayoutProperty(layer, 'visibility', 'none')
        }
      }
    } else if (mapLoaded) {
      map.setPaintProperty('foreground', 'background-opacity', 0)

      for (const layer of map.getLayersOrder()) {
        if (!alwaysShow.includes(layer)) {
          map.setLayoutProperty(layer, 'visibility', 'visible')
        }
      }
    }
  })

  $effect(() => {
    if (mapLoaded && currentAnnotations) {
      // Get all IDs
      const optionsByMapId = new Map()
      const newMapIds = new Array()
      currentAnnotations
        .slice()
        // For correct order
        .reverse()
        .forEach((annotation) => {
          const { url, options } = annotation
          const annotationIds = mapIdsByAnnotationUrl.get(url)
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
      // Animation not working correctly
      // const animate = init ? false : slideDuration === 0 ? false : true
      warpedMapLayer.setMapsOptionsByMapId(optionsByMapId)

      visibleMaps = mapIds

      let mapIdsForBounds = []
      const boundsFilter = currentAnnotations.filter(
        (annotation) => annotation.useBounds === true
      )
      if (boundsFilter.length) {
        boundsFilter.forEach(({ url }) => {
          const ids = mapIdsByAnnotationUrl.get(url)
          mapIdsForBounds.push(...ids)
        })
      } else mapIdsForBounds = mapIds

      // Get bounds of visible maps
      let bounds = warpedMapLayer.getMapsBbox(mapIdsForBounds, {
        projection: { definition: 'EPSG:4326' }
      })
      // Get optional bearing for map
      let bearing = 0
      let center: maplibregl.LngLat | undefined

      const firstMapWithBearingProp = currentAnnotations.find(
        (annotation) => annotation.useBearing == true
      )
      if (firstMapWithBearingProp) {
        const warpedMapIds = mapIdsByAnnotationUrl.get(
          firstMapWithBearingProp.url
        )
        const warpedMap = warpedMapLayer.getWarpedMap(warpedMapIds[0])

        const geoMasks = mapIds
          .map((id) => {
            const warpedMap = warpedMapLayer.getWarpedMap(id)
            if (warpedMap) {
              return warpedMap.geoMask
            }
          })
          .filter(Boolean)

        if (warpedMap) {
          bearing = computeWarpedMapBearing(warpedMap)
        }

        ;({ bounds, center } = getAxisAlignedBboxAndCenter(geoMasks, bearing))
      }
      if (bounds && debug) {
        const boundsSource = map.getSource('bounds') as maplibregl.GeoJSONSource
        const features = featureCollection([bboxPolygon(bounds)])
        if (boundsSource) {
          boundsSource.setData(features)
        }
      }
      if (bounds) {
        if (currentLocation.bearing) {
          // This can be useful if original map is rotated
          bearing = bearing + currentLocation.bearing
        }
        const camera = map.cameraForBounds(bounds, {
          padding: currentPadding !== undefined ? currentPadding : PADDING
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
      await loadAnnotations(views)

      // symbolLayers.forEach((layer) => map.addLayer(layer))

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
            'line-color': colors.blue.stroke,
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
    warpedMapLayer.clear()
    map.remove()
  })
</script>

<svelte:window on:keydown={toggleVisibility} on:keyup={toggleVisibility} />

<div class="h-screen w-screen" bind:this={container}></div>
