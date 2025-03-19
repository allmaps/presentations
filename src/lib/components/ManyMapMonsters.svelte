<script lang="ts">
  import type { Snippet } from 'svelte'

  import MapMonster from '$lib/components/MapMonster.svelte'

  interface Props {
    active?: boolean
    children?: Snippet
  }

  let { active = true, children }: Props = $props()

  let mapMonsterInterval: number | undefined
  let mapMonsterCounter = $state(0)

  const mapMonstersClass = 'w-28'

  const moods = ['happy', 'excited', 'neutral', 'sad'] as const

  const colors = [
    'green',
    'purple',
    'red',
    'yellow',
    'orange',
    'pink',
    'blue'
  ] as const

  function start() {
    mapMonsterInterval = setInterval(() => {
      mapMonsterCounter++
    }, 1000)
  }

  function reset() {
    mapMonsterCounter = 0
    clearInterval(mapMonsterInterval)
    mapMonsterInterval = undefined
  }

  function randomFromArray<T>(array: readonly T[]): T {
    return array[Math.floor(Math.random() * array.length)]
  }

  function randomFromInterval(min: number, max: number) {
    return Math.random() * (max - min) + min
  }

  function randomMood() {
    return randomFromArray(moods)
  }

  function randomColor() {
    return randomFromArray(colors)
  }

  function randomTransform() {
    const scale = randomFromInterval(0.8, 1.2)
    const rotate = randomFromInterval(-15, 15)
    const translateX = randomFromInterval(-15, 15)
    const translateY = randomFromInterval(-15, 15)

    return `scale(${scale}) rotate(${rotate}deg) translate(${translateX}px, ${translateY}px)`
  }

  $effect(() => {
    if (active) {
      start()
    } else {
      reset()
    }
  })
</script>

<section class="gap-2 grid-cols-7 grid-rows-5">
  {#each Array(9) as _, i (`${i}-${mapMonsterCounter}`)}
    <div class={mapMonstersClass} style:transform={randomTransform()}>
      <MapMonster
        mood={randomMood()}
        color={randomColor()}
        shape={Math.floor(randomFromInterval(0, 5))}
      />
    </div>
  {/each}
  <div class="col-span-3 row-span-2 place-self-center">
    {@render children?.()}
  </div>

  {#each Array(20) as _, i (`${i}-${mapMonsterCounter}`)}
    <div class={mapMonstersClass} style:transform={randomTransform()}>
      <MapMonster
        mood={randomMood()}
        color={randomColor()}
        shape={Math.floor(randomFromInterval(0, 5))}
      />
    </div>
  {/each}
</section>
