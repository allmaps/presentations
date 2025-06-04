<script lang="ts">
  type Props = {
    allmapsId: string
    xFrom: number
    xCount?: number
    yFrom: number
    yCount?: number
    z: number
  }

  let { allmapsId, xFrom, xCount = 1, yFrom, yCount = 1, z }: Props = $props()

  function getTileUrl(xIndex: number, yIndex: number) {
    return `https://allmaps.xyz/${allmapsId}/${z}/${xFrom + xIndex}/${
      yFrom + yIndex
    }@2x.png`
  }

  function getOsmTileUrl(xIndex: number, yIndex: number) {
    return `https://tile.openstreetmap.org/${z}/${xFrom + xIndex}/${
      yFrom + yIndex
    }.png`
  }
</script>

<div
  class="grid gap-4"
  style:grid-template-columns={`repeat(${xCount}, 256px)`}
  style:grid-template-rows={`repeat(${yCount}, 256px)`}
>
  {#each Array.from({ length: yCount }) as _, yIndex}
    {#each Array.from({ length: xCount }) as _, xIndex}
      <div class="relative rounded-lg overflow-hidden">
        <img
          class="w-full absolute top-0"
          src={getOsmTileUrl(xIndex, yIndex)}
          alt={`OSM tile at x: ${xFrom + xIndex}, y: ${yFrom + yIndex}, z: ${z}`}
          width="265px"
        />
        <img
          class="w-full absolute top-0 cursor-pointer
            hover:opacity-0 transition-opacity duration-500"
          src={getTileUrl(xIndex, yIndex)}
          alt={`Tile at x: ${xFrom + xIndex}, y: ${yFrom + yIndex}, z: ${z}`}
          width="265px"
        />
      </div>
    {/each}
  {/each}
</div>
