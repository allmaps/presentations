<script context="module">
  export const title = 'Allmaps NACIS 2025'
  export const date = Date.parse('15 Oct 2025')
</script>

<script lang="ts">
  import Slide from '$lib/components/Slide.svelte'
  import Title from '$lib/components/Title.svelte'
  import ManyMapMonsters from '$lib/components/ManyMapMonsters.svelte'
  import MapMonster from '$lib/components/MapMonster.svelte'
  import MapThumbnails from '$lib/components/MapThumbnails.svelte'
  import WarpedMap from '$lib/components/WarpedMap.svelte'
  import FlyTo from '$lib/components/FlyTo.svelte'
  import XYZTiles from '$lib/components/XYZTiles.svelte'
  import Pin from '$lib/components/Pin.svelte'
  import LargeTextShadow from '$lib/components/LargeTextShadow.svelte'

  function randomElement(array: any[]): any {
    if (!array || array.length === 0) {
      return null
    }
    return array[Math.floor(Math.random() * array.length)]
  }
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Title>
  <h3 class="!text-white pb-4">How to use millions of historic maps</h3>
  <hr class="py-4" />

  <h5 class="!text-white text-xl">Presented by Ian Spangler for NACIS 2025</h5>

  <h5 class="!text-white text-xl">
    A project of Bert Spaan and Jules Schoonman
  </h5>
</Title>

<section class="section-stretch">
  <img
    alt="LMEC gallery entrance"
    src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Entrance%2C_Norman_B_Leventhal_Map_Center%2C_Boston_MA.jpg"
  />
</section>

<section class="section-stretch">
  <img
    alt="LMEC digital collections"
    src="/images/nacis-2025/lmec-collections.png"
  />
</section>

<section class="section-stretch">
  <img alt="LOC collections" src="/images/nacis-2025/loc-collections.png" />
</section>

<section class="section-stretch">
  <img
    alt="Rumsey collections"
    src="/images/nacis-2025/rumsey-collections.png"
  />
</section>

<section class="section-stretch">
  <img alt="AGSL collections" src="/images/nacis-2025/agsl-collections.png" />
</section>

<section>
  <h3>just these four collections hold over 200,000 maps</h3>
  <h3 class="!text-white">their digitization is a public good</h3>
  <h3 class="!text-white">so what should we do with them?</h3>
</section>

<section>
  <h3 class="!text-gray-200">
    just these four collections hold over 200,000 maps
  </h3>
  <h3>their digitization is a public good</h3>
  <h3 class="!text-white">so what should we do with them?</h3>
</section>

<section>
  <h3 class="!text-gray-200">
    just these four collections hold over 200,000 maps
  </h3>
  <h3 class="!text-gray-200">their digitization is a public good</h3>
  <h3>so what should we do with them?</h3>
</section>

<Slide>
  {#snippet children({ active })}
    <ManyMapMonsters {active}>
      <div class="col-span-3 row-span-2 place-self-center">
        this is where<br /><strong>Allmaps</strong> comes in!
      </div>
    </ManyMapMonsters>
  {/snippet}
</Slide>

<section>
  <p>
    The core functionality of Allmaps is converting <br /> pixel coordinates to
    geospatial coordinates <br />(and vice versa)
  </p>
  <pre class="javascript">
		<code data-line-numbers="" data-trim data-noescape
      ><script type="text/template">
        import { parseAnnotation } from '@allmaps/annotation'
        import { GcpTransformer } from '@allmaps/transformer'

        const annotationUrl =
          'https://annotations.allmaps.org/maps/b3d87d457a7a5603'
        const response = await fetch(annotationUrl)
        const annotation = await response.json()

        const maps = parseAnnotation(annotation)
        const transformer = new GcpTransformer(maps[0].gcps)

        const coordinates = transformer.transformToGeo([100, 100])
      </script></code
    ></pre>
</section>

<section>
  <p>
    Commonly, we call this <strong>georeferencing</strong>
  </p>
</section>

<section class="section-horizontal section-stretch">
  <p>Usually, we turn to tools like QGIS or ArcGIS Pro to do it</p>
  <div class="grid gap-4">
    <img
      alt="qgis"
      src="https://i.ytimg.com/vi/XV62QEk0Cxg/maxresdefault.jpg"
    />
    <img
      alt="arcgis pro"
      src="https://community.esri.com/legacyfs/online/371570_pastedImage_1.png"
    />
  </div>
</section>

<section>
  <p>Even for seasoned users, these tools can be cumbersome</p>
</section>

<section class="section-stretch section-horizontal">
  <p>Allmaps makes it easier for anybody to get started georeferencing</p>
  <iframe title="allmaps" src="https://allmaps.org"></iframe>
</section>

<Slide>
  {#snippet children({ active })}
    <MapThumbnails {active}>
      Using Allmaps, we can now georeference, warp and overlay <strong
        >millions of digitized IIIF maps</strong
      > from institutions around the world
    </MapThumbnails>
  {/snippet}
</Slide>

<section>
  <p>with Allmaps, it's all about the annotation</p>
</section>

<section class="section-stretch">
  <iframe
    title="Side by side"
    class="w-full h-full"
    data-src="https://iiif.io/api/extension/georef/"
    data-preload
  />
</section>

<section>
  <pre class="json">
    <code data-line-numbers="" data-trim data-noescape>
      <script type="text/template">
        {
            "id": "https://annotations.allmaps.org/maps/b5ba4ba2cf5be63f",
            "type": "Annotation",
            "@context": [
                "http://iiif.io/api/extension/georef/1/context.json",
                "http://iiif.io/api/presentation/3/context.json"
            ],
            "created": "2025-10-14T21:49:41.048Z",
            "modified": "2025-10-14T21:49:41.048Z",
            "motivation": "georeferencing",
            "target": {
                "type": "SpecificResource",
                "source": {
                "id": "https://digital.library.louisville.edu//images/7b60d3f3-65c4-41bb-b8c6-e32aa6eee934%2Ffiles%2F6b86512a-8132-45ae-9439-efc0decbf535%2Ffcr:versions%2Fversion1",
                "type": "ImageService2",
                "height": 5523,
                "width": 5277,
                "partOf": [
                    {
                    "id": "https://digital.library.louisville.edu/concern//images/ulua_mendenhall_map__of_louisville_1906/manifest/canvas/7b60d3f3-65c4-41bb-b8c6-e32aa6eee934",
                    "type": "Canvas",
                    "label": {
                        "none": [
                        "MapofLouisville_1906.jpg"
                        ]
                    },
                    "partOf": [
                        {
                        "id": "https://digital.library.louisville.edu/concern//images/ulua_mendenhall_map__of_louisville_1906/manifest",
                        "type": "Manifest",
                        "label": {
                            "none": [
                            "Mendenhall's New Index Map of Greater Louisville Ky."
                            ]
                        }
                        }
                    ]
                    }
                ]
                },
                "selector": {
                "type": "SvgSelector",
                "value": "<svg width=\"5277\" height=\"5523\"><polygon points=\"0,0 0,5523 5277,5523 5277,0\" /></svg>"
                }
            },
            "body": {
                "type": "FeatureCollection",
                "transformation": {
                "type": "polynomial",
                "options": {
                    "order": 1
                }
                },
                "features": [
                {
                    "type": "Feature",
                    "properties": {
                    "resourceCoords": [
                        3301,
                        1770
                    ]
                    },
                    "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -85.7410891,
                        38.2605925
                    ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                    "resourceCoords": [
                        610,
                        2572
                    ]
                    },
                    "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -85.8326412,
                        38.2507243
                    ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                    "resourceCoords": [
                        2774,
                        3094
                    ]
                    },
                    "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -85.7614394,
                        38.2292547
                    ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                    "resourceCoords": [
                        3588,
                        723
                    ]
                    },
                    "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -85.7211003,
                        38.2894289
                    ]
                    }
                }
                ],
                "_allmaps": {
                "id": "https://annotations.allmaps.org/maps/b5ba4ba2cf5be63f",
                "version": "https://annotations.allmaps.org/maps/b5ba4ba2cf5be63f@cc031c39a8c72c86",
                "image": {
                    "id": "https://annotations.allmaps.org//images/22b070a3a3fe8560",
                    "version": "https://annotations.allmaps.org//images/22b070a3a3fe8560@a2391242eb019ee2",
                    "canvases": [
                    {
                        "id": "https://annotations.allmaps.org/canvases/0363d4d569ee0b96",
                        "manifests": [
                        {
                            "id": "https://annotations.allmaps.org/manifests/0f8101bde57bfb01"
                        }
                        ]
                    }
                    ]
                },
                "scale": 0.33578,
                "area": 258494837.57
                }
            }
        }
      </script></code
    ></pre>
</section>

<section>
  <p>they don't just stay inside Allmaps</p>
</section>

<section class="section-stretch">
  <iframe
    title="Side by side"
    class="w-full h-full"
    data-src="https://allmaps.org/#open-data"
    data-preload
  />
</section>

<section>
  <p>load an annotation into <strong>Allmaps Viewer!</strong></p>
</section>

<section class="section-stretch">
  <iframe
    title="Side by side"
    class="w-full h-full"
    data-src="https://viewer.allmaps.org/?url=https://annotations.allmaps.org/maps/b5ba4ba2cf5be63f"
    data-preload
  />
</section>

<section>
  <p>... or make one with <strong>Allmaps Editor!</strong></p>
</section>

<section>
  <img
    class="absolute"
    alt="louisville map from LOC"
    src="/images/nacis-2025/louisville-map.png"
  />
</section>

<section>
  <img
    class="absolute"
    alt="louisville map from LOC"
    src="/images/nacis-2025/louisville-map.png"
  />
  <a
    class="absolute border-8 border-pink-300"
    href="https://www.loc.gov/item/79691615/"
    target="blank"
    ><img alt="manifest" src="/images/nacis-2025/manifest.png" /></a
  >
</section>

<section class="section-stretch !w-[65%]">
  <MapMonster mood="happy" color="green">
    <h1 class="!text-white">Allmaps for GIS</h1>
  </MapMonster>
</section>

<section>
  <img
    class="absolute"
    alt="louisville map from AGSL"
    src="/images/nacis-2025/louisville-agsl.png"
  />
</section>

<section>
  <img
    class="absolute"
    alt="louisville map from AGSL"
    src="/images/nacis-2025/louisville-agsl.png"
  />
  <a
    class="absolute border-8 border-pink-300"
    href="https://editor.allmaps.org/images?url=https%3A%2F%2Fcollections.lib.uwm.edu%2Fiiif%2Finfo%2Fagdm%2F21153%2Fmanifest.json"
    target="blank"
    ><img alt="manifest" src="/images/nacis-2025/agsl-manifest.png" /></a
  >
</section>

<section class="section-stretch">
  <iframe
    title="Side by side"
    class="w-full h-full"
    data-src="https://editor.allmaps.org/images?url=https%3A%2F%2Fcollections.lib.uwm.edu%2Fiiif%2Finfo%2Fagdm%2F21153%2Fmanifest.json"
    data-preload
  />
</section>

<section>
  <img
    class="absolute"
    alt="louisville map from AGSL"
    src="/images/nacis-2025/qgis.png"
  />
  <img
    class="absolute"
    alt="louisville map from AGSL"
    src="/images/nacis-2025/xyz.png"
  />
</section>

<section>
  <img
    class="absolute"
    alt="louisville map from AGSL"
    src="/images/nacis-2025/qgis.png"
  />
</section>

<section class="section-stretch !w-[65%]">
  <MapMonster mood="confused" color="pink">
    <h1 class="!text-white">Allmaps for Educators</h1>
  </MapMonster>
</section>

<section class="section-stretch">
  <iframe
    title="Side by side"
    class="w-full h-full"
    data-src="https://www.leventhalmap.org/articles/waltham-urban-atlas-essays/"
    data-preload
  />
</section>

<section>
  <blockquote class="twitter-tweet">
    <p lang="en" dir="ltr">
      Students of <a href="https://twitter.com/TheBerlage?ref_src=twsrc%5Etfw"
        >@TheBerlage</a
      >
      presented their City Atlas today in the Italian Room of the
      <a href="https://twitter.com/stadsarchief?ref_src=twsrc%5Etfw"
        >@stadsarchief</a
      >, followed by a discussion on the use of
      <a href="https://twitter.com/iiif_io?ref_src=twsrc%5Etfw">@iiif_io</a>.
      The digital atlas using Allmaps can be found here:
      <a href="https://t.co/i6HyuqlUFe">https://t.co/i6HyuqlUFe</a>
      <a href="https://t.co/KLOQiUHAI4">pic.twitter.com/KLOQiUHAI4</a>
    </p>
    &mdash; Jules Schoonman (@Sammeltassen)<a
      href="https://twitter.com/Sammeltassen/status/1760651024560259349?ref_src=twsrc%5Etfw"
      >February 22, 2024</a
    >
  </blockquote>
  <script
    async
    src="https://platform.twitter.com/widgets.js"
    charset="utf-8"
  ></script>
</section>

<section class="section-stretch">
  <iframe
    title="Side by side"
    class="w-full h-full"
    data-src="https://cityatlas.theberlage.nl/"
    data-preload
  />
</section>

<section class="section-stretch">
  <img src="/images/nacis-2025/city-atlas-gh.png" alt="city atlas gh" />
</section>

<section class="section-stretch !w-[65%]">
  <MapMonster mood="excited" color="orange">
    <h1 class="!text-white">Allmaps for Community</h1>
  </MapMonster>
</section>

<section class="section-stretch">
  <img
    class="h-4/5 rounded p-2 border-2 border-gray-200"
    src="/images/nacis-2025/jan-post.png"
    alt="jan trachet allmaps linkedin post"
  />
</section>

<section class="section-stretch">
  <img
    src="/images/nacis-2025/trachet-scientists.jpeg"
    alt="trachet mapathon"
  />
</section>

<section class="section-stretch">
  <img src="/images/nacis-2025/trachet-index.jpeg" alt="trachet mapathon" />
</section>

<section class="section-stretch">
  <img src="/images/nacis-2025/trachet-allmaps.jpeg" alt="trachet mapathon" />
</section>

<section class="section-stretch">
  <img
    src="/images/nacis-2025/trachet-allmaps-tile.jpeg"
    alt="trachet mapathon"
  />
</section>

<section>
  <p>interoperable data makes Allmaps crossovers possible</p>
  <a href="https://oldinsurancemaps.net/map/sanborn03204_018" target="blank"><img alt="oldinsurancemaps.net" src="/images/nacis-2025/oldinsurance.png"></a>
</section>

<section class="section-stretch !w-[65%]">
  <MapMonster mood="happy" color="blue">
    <h1 class="!text-white">Allmaps for Anywhere</h1>
  </MapMonster>
</section>

<section>
  <p>Here!</p>
  <a href="https://here.allmaps.org" target="blank"
    ><img src="/images/nacis-2025/here.png" alt="here" /></a
  >
</section>

<section>
  <p>... There?!</p>
  <a href="https://observablehq.com/d/47f259cec6c42178" target="blank"
    ><img src="/images/nacis-2025/there.png" alt="there" /></a
  >
</section>

<section>
  <p>Allmaps Annotation API supports geospatial queries</p>
  <code class="text-2xl"
    ><a
      href="https://annotations.allmaps.org/maps?intersects=38.25266,-85.75173"
      target="blank"
      >https://annotations.allmaps.org/maps?intersects=38.25266,-85.75173</a
    ></code
  >
  <img alt="Allmaps Here" loading="lazy" src="/images/nacis-2025/lex.png" />
</section>

<section>
  <p>reverse transforming spatial to pixel</p>
  <a
    href="https://observablehq.com/@allmaps/using-allmaps-to-draw-geojson-on-a-iiif-image"
    target="blank"
    ><img src="/images/nacis-2025/reverse-warp.png" alt="there" /></a
  >
</section>

<section class="section-stretch !w-[65%]">
  <MapMonster mood="excited" color="yellow">
    <h1 class="!text-white">Allmaps for Fun</h1>
  </MapMonster>
</section>

<section class="section-stretch">
  <video
    class="shadow-lg"
    muted
    data-loop
    data-autoplay
    data-src="/videos/iiif-annual-conference-2024/allmaps-arcade.webm"
  />
</section>

<section class="section-stretch">
  <p>
    play Allmaps Arcade on <a
      class="underline text-pink-300"
      href="https://arcade.allmaps.org">arcade.allmaps.org</a
    >...
  </p>
</section>

<section
  class="section-horizontal section-stretch section-no-logo grid-cols-[1fr_60%]"
>
  <p>... or go to Delft!</p>

  <div class="flex flex-row gap-8 [&>*]:min-w-0">
    <img
      alt="Allmaps Arcade cabinet #2"
      loading="lazy"
      src="/images/iiif-annual-conference-2024/arcade-cabinet-2.jpg"
    />
    <img
      alt="Allmaps Arcade cabinet #1"
      loading="lazy"
      src=" /images/iiif-annual-conference-2024/arcade-cabinet-1.jpg"
    />
  </div>
  <div
    class="fragment absolute bottom-0 right-0 w-[60%] text-left bg-white/70 flex items-end px-24 py-12 drop-shadow-md"
  >
    <MapMonster mood="excited" color="pink">
      <div class="max-w-md p-4">
        <p class="text-left text-[0.6em] pb-8">
          thanks! scan this QR code to view this presentation
        </p>
        <a href="https://presentations.allmaps.org/iiif-annual-conference-2024">
          <img
            class="w-[80%]"
            alt="QR code that links to these slides"
            src="/images/nacis-2025/qrcode-white.svg"
          /></a
        >
      </div>
    </MapMonster>
  </div>
</section>
