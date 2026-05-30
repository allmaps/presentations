<script lang="ts">
  import { onMount } from 'svelte'

  import maplibregl from 'maplibre-gl'
  import 'maplibre-gl/dist/maplibre-gl.css'
  import type { SourceSpecification, LayerSpecification } from 'maplibre-gl'

  import { WarpedMapLayer } from '@allmaps/maplibre'
  import { computeWarpedMapBearing } from '@allmaps/bearing'

  import { getAxisAlignedBboxAndCenter } from '$lib/shared/bounds'
  import { createFauxGeoreferencedMap } from '$lib/shared/image-annotation'
  import { getLayers, getStyleWithoutLayers } from '$lib/shared/basemap'
  import { getValueAsArray } from '$lib/shared/utils'
  import {
    DEFAULT_PADDING,
    DEFAULT_LIGHT_FLAVOR,
    DEFAULT_WARPED_MAP_OPTIONS,
    DEFAULT_LOCALE,
    DEFAULT_DURATION,
    DEFAULT_COLORS,
    DEFAULT_DARK_FLAVOR,
    LAYER_TYPES
  } from '$lib/shared/constants'

  import { bboxPolygon, featureCollection } from '@turf/turf'

  import type { WarpedMapProps, MapChapterProps } from '$lib/types/warped-map'

  type Props = {
    chapters: MapChapterProps[]
    index: number
    isDarkMode?: boolean
    duration?: number
    locale?: string
    sources?: {
      [key: string]: SourceSpecification
    }
    layers?: LayerSpecification[] | LayerSpecification
    highlight?: string
    showLabels?: boolean
  }

  let {
    chapters,
    index,
    isDarkMode,
    duration,
    locale,
    layers,
    sources,
    highlight,
    showLabels
  }: Props = $props()

  let start = true

  let currentChapter = $derived(chapters[index])
  let currentLocation = $derived(
    currentChapter.location ? currentChapter.location : {}
  )
  let currentWarpedMaps = $derived(
    currentChapter.warpedMaps
      ? getValueAsArray(currentChapter.warpedMaps)
      : undefined
  )
  let currentLayers = $derived(
    currentChapter.layers ? getValueAsArray(currentChapter.layers) : undefined
  )
  let currentImageSlide = $derived(
    currentWarpedMaps?.some((warpedMaps) => warpedMaps.type === 'Image') ||
      false
  )
  let currentHideBasemap = $derived(
    currentImageSlide || currentChapter.hideBasemap
  )
  let currentPadding = $derived(currentChapter.padding)

  let sprite = $derived(currentChapter.sprite)

  let map: maplibregl.Map
  let container: HTMLElement
  let mapLoaded = $state(false)
  let mapIdsByAnnotationUrl: Map<string, string[]> = new Map()
  let visibleMaps: string[] = new Array()
  let imagesAdded: Set<string> = new Set()
  let highlightedMaps: string[] = []
  let pmtilesProtocolLoaded = false

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

  async function loadAnnotations(chapters: MapChapterProps[]) {
    if (debug) {
      console.log('Loading warped maps...', chapters)
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

  function setWarpedMaps() {
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
        console.log('Setting current warped maps...', {
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
  }

  function highlightMaps() {
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
  }

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

  function setLocation() {
    if (mapLoaded && currentLocation && !currentWarpedMaps) {
      if (debug) {
        console.log('Animating to new location...', currentLocation)
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
  }

  async function loadPmtilesProtocol() {
    const { Protocol } = await import('pmtiles')
    const protocol = new Protocol()
    maplibregl.addProtocol('pmtiles', protocol.tile)
    pmtilesProtocolLoaded = true
  }

  function loadSources(sources: { [key: string]: SourceSpecification }) {
    if (debug) {
      console.log('Loading sources...', sources)
    }
    return Promise.all(
      Object.entries(sources).map(async ([id, source]) => {
        if (source.type === 'vector' && source.url?.startsWith('pmtiles://')) {
          if (!pmtilesProtocolLoaded) {
            await loadPmtilesProtocol()
          }
        }
        map.addSource(id, source)
      })
    )
  }

  function loadLayers(layers: LayerSpecification | LayerSpecification[]) {
    if (debug) {
      console.log('Loading layers...', layers)
    }
    getValueAsArray(layers)
      .map((layer) => ({
        ...layer,
        id: `user-${layer.id}`
      }))
      .reverse()
      .forEach((layer) => {
        const vectorTypes = ['symbol', 'circle', 'line', 'raster', 'fill']
        const moveToFront = vectorTypes.includes(layer.type)
        map.addLayer(layer, moveToFront ? undefined : 'warped-map-layer')
      })
  }

  function getLayerPaintType(id: string) {
    const layerType = map.getLayer(id)?.type
    if (layerType && layerType in LAYER_TYPES) {
      return LAYER_TYPES[layerType as keyof typeof LAYER_TYPES]
    }
  }

  function setLayersOpacity() {
    if (mapLoaded && currentLayers) {
      if (debug) {
        console.log('Setting current layers opacity...', currentLayers)
      }
      currentLayers.forEach((layer) => {
        const id = `user-${layer.layer}`
        if (layer.visibility) {
          map.setLayoutProperty(id, 'visibility', layer.visibility)
        }
        if (layer.opacity !== undefined) {
          const paintProps = getLayerPaintType(id)
          if (paintProps) {
            paintProps.forEach((prop) => {
              let options = {}
              if (layer.duration) {
                const transitionProp = `${prop}-transition`
                options = { duration: layer.duration }
                map.setPaintProperty(id, transitionProp, options)
              }
              map.setPaintProperty(id, prop, layer.opacity, options)
            })
          }
        }
      })
    }
  }

  function setBasemapVisiblity() {
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
  }

  function setBasemapOpacityTransition() {
    if (mapLoaded && start) {
      if (debug) {
        console.log('Setting basemap background-opacity-transition')
      }
      start = false
      map.setPaintProperty('foreground', 'background-opacity-transition', {
        duration: duration || DEFAULT_DURATION
      })
    }
  }

  $effect(setWarpedMaps)
  $effect(highlightMaps)
  $effect(setLayersOpacity)
  $effect(setBasemapVisiblity)
  $effect(setLocation)
  $effect(setBasemapOpacityTransition)

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

      if (sources && layers) {
        await loadSources(sources)
        loadLayers(layers)
      }

      await loadAnnotations(chapters)

      if (showLabels) {
        symbolLayers.forEach((layer) => map.addLayer(layer))
      }

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

    return () => {
      warpedMapLayer.clear()
      map.remove()
    }
  })
</script>

<svelte:window on:keydown={toggleVisibility} on:keyup={toggleVisibility} />

<div class="h-full w-full min-w-0 min-h-0" bind:this={container}></div>
