<script lang="ts">
  import mapThumbnails from './map-thumbnails.json'

  export let active = true

  let mapThumbnailInterval: number | undefined
  let shuffledMapThumbnails = shuffle(mapThumbnails)
  let slicedMapThumbnails: string[] = []

  $: {
    if (active) {
      start()
    } else {
      reset()
    }
  }

  function start() {
    mapThumbnailInterval = setInterval(() => {
      slicedMapThumbnails = shuffledMapThumbnails.slice(
        0,
        Math.min(slicedMapThumbnails.length + 1, mapThumbnails.length)
      )
    }, 200)
  }

  function reset() {
    slicedMapThumbnails = []
    clearInterval(mapThumbnailInterval)
    mapThumbnailInterval = undefined
  }

  function shuffle<T>(array: readonly T[]): T[] {
    let arrayCopy: T[] = [...array]

    let currentIndex = array.length,
      randomIndex

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      ;[arrayCopy[currentIndex], arrayCopy[randomIndex]] = [
        arrayCopy[randomIndex],
        arrayCopy[currentIndex]
      ]
    }

    return arrayCopy
  }

  function randomFromInterval(min: number, max: number) {
    return Math.random() * (max - min) + min
  }

  function randomTransform() {
    const scale = randomFromInterval(0.8, 1.2)
    const rotate = randomFromInterval(-15, 15)
    const translateX = randomFromInterval(-15, 15)
    const translateY = randomFromInterval(-15, 15)

    return `scale(${scale}) rotate(${rotate}deg) translate(${translateX}px, ${translateY}px)`
  }
</script>

<section>
  {#if active}
    <div class="absolute top-0 left-0 w-full h-full">
      {#each slicedMapThumbnails as url, i (i)}
        <img
          class="absolute w-56"
          style:transform={randomTransform()}
          style:left={randomFromInterval(-200, window.innerWidth) + 'px'}
          style:top={randomFromInterval(-200, window.innerHeight) + 'px'}
          alt="Random map thumbnail"
          src={`/images/iiif-annual-conference-2023/map-thumbnails/${url}`}
        />
      {/each}
    </div>
    <div class="p-4 z-50 bg-white/80 rounded-lg max-w-3xl">
      <slot></slot>
    </div>
  {/if}
</section>
