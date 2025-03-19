<script context="module">
  export const title = 'Allmaps Curator'
  export const date = Date.parse('18 Nov 2024')
</script>

<script lang="ts">
  import Slide from '$lib/components/Slide.svelte'
  import Title from '$lib/components/Title.svelte'
  import WarpedMap from '$lib/components/WarpedMap.svelte'
  import FlyTo from '$lib/components/FlyTo.svelte'
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Title>
  <h1 class="text-white text-6xl mb-4">
    <span class="font-semibold">Allmaps</span> Curator
  </h1>
</Title>

<!-- https://bplmaps.notion.site/Detailed-schedules-13df8441f2ed8099815ec8bd32cc5e0d -->
<!-- Bert Spaan (Allmaps Developer), who will introduce some of the goals and
  features expected in a forthcoming app, Allmaps Curator -->

<section>
  <span
    >Currently, Allmaps only works for <span class="font-bold text-orange"
      >single IIIF resources</span
    > in</span
  >
  <span class="font-bold text-pink">existing collections</span>
</section>

<section>
  <p>Georeferencing a single image with Allmaps Editor</p>
  <img
    alt="Georeferencing a map of the Leiden Botanical Gardens"
    loading="lazy"
    src="/images/allmaps-convening-boston/editor-leiden.webp"
  />
</section>

<section>
  <p>Georeferencing multiple maps with Allmaps Editor</p>
  <img
    alt="Georeferencing maps of Holyoke, Massachusetts"
    loading="lazy"
    src="/images/allmaps-convening-boston/editor-holyoke.webp"
  />
</section>

<Slide>
  {#snippet children({ active })}
    <WarpedMap
      {active}
      annotationUrl="https://annotations.allmaps.org/images/f45387289ede9d49"
    >
      <FlyTo
        annotationUrl="https://annotations.allmaps.org/manifests/071c6ba31f9c88d4"
      />
      <FlyTo
        annotationUrl="https://raw.githubusercontent.com/bmmeijers/iiif-annotations/refs/heads/main/series/kraijenhoff/uu/latest.json"
      />
    </WarpedMap>
  {/snippet}
</Slide>

<!-- rely on instututiuons to create iiif manifests and collections -->
<!--  -->

<section>
  <p class="leading-relaxed">
    We need a way to collect IIIF maps from different sources, organize them and
    make sure they're properly georeferenced
  </p>
  <p class="fragment">
    <span class="font-bold text-pink">Allmaps Curator</span>: a tool for
    <span class="text-darkblue">creating and managing collections</span>
    of
    <span class="text-green">georeferenced IIIF maps</span>
  </p>
</section>

<section>What will it do?</section>

<section class="grid grid-cols-2 grid-rows-2 gap-4">
  <div
    class="bg-green w-full h-full place-content-center rounded-xl p-4 shadow-2xl"
  >
    Import and reorganize IIIF resources
  </div>
  <div
    class="fragment bg-pink w-full h-full place-content-center rounded-xl p-4 shadow-2xl"
  >
    Create crowdsourced georeferencing tasks
  </div>
  <div
    class="fragment bg-blue w-full h-full place-content-center rounded-xl p-4 shadow-2xl"
  >
    Keep track of progress and compare versions
  </div>
  <div
    class="fragment bg-yellow w-full h-full place-content-center rounded-xl p-4 shadow-2xl"
  >
    Export georeference data
  </div>
</section>

<section>For whom?</section>

<section class="grid grid-cols-2 grid-rows-2 gap-4">
  <div
    class="bg-green w-full h-full place-content-center rounded-xl p-4 shadow-2xl"
  >
    For map curators
  </div>
  <div
    class="fragment bg-pink w-full h-full place-content-center rounded-xl p-4 shadow-2xl"
  >
    For educators
  </div>
  <div
    class="fragment bg-blue w-full h-full place-content-center rounded-xl p-4 shadow-2xl"
  >
    For historians
  </div>
  <div
    class="fragment bg-yellow w-full h-full place-content-center rounded-xl p-4 shadow-2xl"
  >
    <p class="italic">And for everybody else who just likes maps</p>
  </div>
</section>

<section>
  <p>
    We will introduce <span class="font-bold text-pink">four</span> new concepts
    to Allmaps:
  </p>
</section>

<section class="grid grid-cols-2 grid-rows-2 gap-4">
  <div
    class="bg-green w-full h-full place-content-center rounded-xl p-4 shadow-2xl"
  >
    <p>Lists</p>
    <p class="font-light">
      A way to combine IIIF Images, Manifests and Collections — georeferenced as
      well as ungeoreferenced
    </p>
  </div>
  <div
    class="fragment bg-pink w-full h-full place-content-center rounded-xl p-4 shadow-2xl"
  >
    <p>Users</p>
    <p class="font-light">
      Users can log in to Allmaps, collect maps, create lists and keep track of
      their work
    </p>
  </div>
  <div
    class="fragment bg-blue w-full h-full place-content-center rounded-xl p-4 shadow-2xl"
  >
    <p>Organizations</p>
    <p class="font-light">
      Institutions get their own special account in Allmaps. Multiple users can
      be linked to a single organization
    </p>
  </div>
  <div
    class="fragment bg-yellow w-full h-full place-content-center rounded-xl p-4 shadow-2xl"
  >
    <p>Version control</p>
    <p class="font-light">
      Everyone can continue working on a map, all history is kept. Institutions
      can select the best version and link that version to their account
    </p>
  </div>
</section>

<section>
  <p>
    Some examples of how <span class="text-pink font-bold">lists</span> can be used:
  </p>
  <p class="underline">
    https://annotations.allmaps.org/orgs/lmec/lists/processing-place
  </p>
  <p class="fragment underline">
    https://annotations.allmaps.org/orgs/lmec/lists/capecod/tags/unfinished
  </p>
  <p class="fragment underline">
    https://annotations.allmaps.org/@bertspaan/lists/starred
  </p>
</section>

<section>
  <p class="underline">
    https://annotations.allmaps.org/@bertspaan/lists/boston-2024
  </p>
  <div class="flex flex-row gap-8 [&>*]:min-w-0">
    <img
      alt="Trip to Boston #1"
      loading="lazy"
      src="/images/allmaps-convening-boston/allmaps-here-boston-1.jpeg"
    />
    <img
      alt="Trip to Boston #2"
      loading="lazy"
      src="/images/allmaps-convening-boston/allmaps-here-boston-2.jpeg"
    />
    <img
      alt="Trip to Boston #3"
      loading="lazy"
      src="/images/allmaps-convening-boston/allmaps-here-boston-3.jpeg"
    />
    <img
      alt="Trip to Boston #4"
      loading="lazy"
      src="/images/allmaps-convening-boston/allmaps-here-boston-4.jpeg"
    />
    <img
      alt="Trip to Boston #5"
      loading="lazy"
      src="/images/allmaps-convening-boston/allmaps-here-boston-5.jpeg"
    />
  </div>
</section>

<section>
  <p>
    We are planning to release a first prototype <span
      class="text-pink font-bold">next year</span
    >!
  </p>
</section>
