<script context="module">
  export const title = 'IIIF Community Call - Allmaps-IIIF Partnership'
  export const date = Date.parse('10 December 2025')
</script>

<script lang="ts">
  import { pink, green } from '@allmaps/tailwind'

  import Slide from '$lib/components/Slide.svelte'
  import Title from '$lib/components/Title.svelte'
  import MapMonster from '$lib/components/MapMonster.svelte'
  import MapThumbnails from '$lib/components/MapThumbnails.svelte'
  import Pin from '$lib/components/Pin.svelte'
  import LargeTextShadow from '$lib/components/LargeTextShadow.svelte'
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

{#snippet face(src: string, color: string, name: string)}
  <img
    width="24"
    class="relative inline-block rounded-full -top-[2%] size-[1.5em] border-4"
    style:border-color={color}
    {src}
    alt={name}
  />
{/snippet}

{#snippet bert()}
  {@render face(
    '/images/iiif-community-call-2025/bert.jpg',
    pink,
    'Bert Spaan'
  )}
{/snippet}

{#snippet jules()}
  {@render face(
    '/images/iiif-community-call-2025/jules.jpg',
    green,
    'Jules Schoonman'
  )}
{/snippet}

<Title>
  <h1 class="text-white">The Allmaps - IIIF Partnership</h1>
</Title>

<Slide>
  <p class="text-6xl">
    Allmaps is an open source project for curating, georeferencing and exploring
    IIIF maps
  </p>
  <p class="text-5xl">
    The project was founded in 2021 by <br />
    {@render bert()} Bert Spaan and {@render jules()}
    Jules Schoonman
  </p>
</Slide>

<Slide>
  <p>
    Two weeks ago, it was {@render jules()} Jules' birthday, and {@render bert()}
    Bert gave him a present.
  </p></Slide
>

<Slide>
  <video
    class="shadow-xl rounded-xl"
    loop
    muted
    data-loop
    data-autoplay
    data-src="/videos/iiif-community-call-2025/flipbook.mp4"
  ></video>
</Slide>

<Slide>
  <p><strong>What's needed to make this flipbook?</strong></p>
  <ol class="space-y-8">
    <li>Lots of digitized maps, accessible in a standardized way;</li>
    <li class="fragment">An easy way to georeference these maps;</li>
    <li class="fragment">And then find them by their location;</li>
    <li class="fragment">
      And finally, a way to render them in the same orientation and scale.
    </li>
  </ol>
</Slide>

<Slide>
  <p><strong>What's needed to make this flipbook?</strong></p>
  <ol class="space-y-8">
    <li class="font-bold text-pink">
      Lots of digitized maps, accessible in a standardized way;
    </li>
    <li class="opacity-10">An easy way to georeference these maps;</li>
    <li class="opacity-10">And then find them by their location;</li>
    <li class="opacity-10">
      And finally, a way to render them in the same orientation and scale.
    </li>
  </ol>
</Slide>

<Slide>
  {#snippet children({ active })}
    <MapThumbnails {active}>
      <strong>Millions of digitized maps are available through IIIF,</strong>
      <br />
      from institutions around the world
    </MapThumbnails>
  {/snippet}
</Slide>

<Slide>
  <p><strong>What's needed to make this flipbook?</strong></p>
  <ol class="space-y-8">
    <li>Lots of digitized maps, accessible in a standardized way;</li>
    <li class="font-bold text-pink">An easy way to georeference these maps;</li>
    <li class="opacity-10">And then find them by their location;</li>
    <li class="opacity-10">
      And finally, a way to render them in the same orientation and scale.
    </li>
  </ol>
</Slide>

<Slide>
  <a href="https://editor.allmaps.org"
    ><img
      alt="Allmaps Editor"
      loading="lazy"
      src="/images/iiif-community-call-2025/allmaps-editor-1.webp"
    /></a
  >
</Slide>

<Slide>
  <a href="https://editor.allmaps.org"
    ><img
      alt="Allmaps Editor"
      loading="lazy"
      src="/images/iiif-community-call-2025/allmaps-editor-2.webp"
    /></a
  >
</Slide>

<Slide>
  <a href="https://editor.allmaps.org"
    ><img
      alt="Allmaps Editor"
      loading="lazy"
      src="/images/iiif-community-call-2025/allmaps-editor-3.webp"
    /></a
  >
</Slide>

<Slide>
  <a href="https://editor.allmaps.org"
    ><img
      alt="Allmaps Editor"
      loading="lazy"
      src="/images/iiif-community-call-2025/allmaps-editor-4.webp"
    /></a
  >
</Slide>

<Slide>
  <p class="mb-8">
    Allmaps uses <strong>Georeference Annotations</strong>
    throughout its components. <br /> These web annotations are an
    <a class="underline" href="https://iiif.io/api/extension/georef/"
      >official extension</a
    ><br /> to the IIIF Presentation API.
  </p>
  <pre class="javascript">
		<code data-line-numbers="1-115|17-23|24-28|39-50" data-trim data-noescape
      ><script type="text/template">
{
  "type": "AnnotationPage",
  "@context": [
    "http://www.w3.org/ns/anno.jsonld"
  ],
  "items": [
    {
      "@context": [
        "http://iiif.io/api/extension/georef/1/context.json",
        "http://iiif.io/api/presentation/3/context.json"
      ],
      "id": "https://annotations.allmaps.org/maps/26e384d4efabdb32",
      "type": "Annotation",
      "motivation": "georeferencing",
      "target": {
        "type": "SpecificResource",
        "source": {
          // Reference to a IIIF resource
          "@id": "https://cdm21033.contentdm.oclc.org/digital/iiif/krt/1022",
          "type": "ImageService2",
          "height": 4292,
          "width": 3493
        },
        "selector": {
          // Optional SVG Selector to select the cartographic part of an image
          "type": "SvgSelector",
          "value": "<svg><polygon points=\"196,3324 861,3323 856,4061 369,4057 370,3925 305,3852 191,3851\" /></svg>"
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
            // A list of ground control points (GCPs):
            // resource coordinates and corresponding geospatial coordinates
            "type": "Feature",
            "properties": {
              "resourceCoords": [578, 3779]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [97.1805877, 3.2578402]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "resourceCoords": [349, 3855]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [95.7576865, 2.8399231]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "resourceCoords": [834, 3724]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [98.6704303, 3.5887634]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "resourceCoords": [396, 3629]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [96.1302895, 4.1471109]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "resourceCoords": [845, 4039]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [98.7838046, 1.7403690]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "resourceCoords": [252, 3345]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [95.3060364, 5.7804199]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "resourceCoords": [625, 3441]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [97.4831471, 5.2443204]
            }
          }
        ]
      }
    }
  ]
}
      </script></code
    >
  </pre>
</Slide>

<Slide>
  <a href="https://latest.allmaps.org"
    ><img
      alt="Allmaps Latest"
      loading="lazy"
      src="/images/iiif-community-call-2025/allmaps-latest.webp"
    /></a
  >
</Slide>

<Slide>
  <p><strong>What's needed to make this flipbook?</strong></p>
  <ol class="space-y-8">
    <li>Lots of digitized maps, accessible in a standardized way;</li>
    <li>An easy way to georeference these maps;</li>
    <li class="font-bold text-pink">And then find them by their location;</li>
    <li class="opacity-10">
      And finally, a way to render them in the same orientation and scale.
    </li>
  </ol>
</Slide>

<Slide>
  <p>
    Find maps by their geographic location <br />with the Allmaps Annotations
    API <Pin />
  </p>
  <a
    href="https://annotations.allmaps.org/maps?limit=5&intersects=52.35924,4.89964"
    ><img
      alt="Georeference Annotations by locations"
      loading="lazy"
      src="/images/iiif-community-call-2025/api-annotations.webp"
    /></a
  >
</Slide>

<Slide>
  <p>Or directly transform these annotations to GeoJSON</p>
  <a
    href="https://annotations.allmaps.org/maps.geojson?limit=5&intersects=52.35924,4.89964"
    ><img
      alt="Georeference Annotations by locations"
      loading="lazy"
      src="/images/iiif-community-call-2025/api-geojson.webp"
    /></a
  >
</Slide>

<Slide>
  <p>And view them in geojson.io</p>
  <img
    alt="Georeference Annotations by locations"
    loading="lazy"
    src="/images/iiif-annual-conference-2025/geo-query-geojson.webp"
  />
</Slide>

<Slide>
  <a href="https://here.allmaps.org"
    ><img
      alt="Allmaps Here"
      loading="lazy"
      src="/images/iiif-community-call-2025/allmaps-here-1.webp"
    /></a
  >
</Slide>

<Slide>
  <a href="https://here.allmaps.org"
    ><img
      alt="Allmaps Here"
      loading="lazy"
      src="/images/iiif-community-call-2025/allmaps-here-2.webp"
    /></a
  >
</Slide>

<Slide>
  <a href="https://here.allmaps.org"
    ><img
      alt="Allmaps Here"
      loading="lazy"
      src="/images/iiif-community-call-2025/allmaps-here-3.webp"
    /></a
  >
</Slide>

<Slide>
  <p><strong>What's needed to make this flipbook?</strong></p>
  <ol class="space-y-8">
    <li>Lots of digitized maps, accessible in a standardized way;</li>
    <li>An easy way to georeference these maps;</li>
    <li>And then find them by their location;</li>
    <li class="font-bold text-pink">
      And finally, a way to render them in the same orientation and scale.
    </li>
  </ol>
</Slide>

<Slide>
  <div class="mb-8">
    <p>Render to PNG with the Allmaps CanvasRenderer</p>
  </div>
  <pre class="javascript">
      <code data-line-numbers="" data-trim data-noescape
      ><script type="text/template">
        import { CanvasRenderer } from '@allmaps/render/canvas'

        const canvas = new OffscreenCanvas(1280, 920)
        const renderer = new CanvasRenderer(canvas)

        const annotationUrl =
          'https://annotations.allmaps.org/images/4af0fa9c8207b36c'
        const annotation = await fetch(annotationUrl).then((response) =>
          response.json()
        )

        await renderer.addGeoreferenceAnnotation(annotation)
        await renderer.render()
        const png = canvas.toDataURL('image/png')
      </script></code
    ></pre>
</Slide>

<Slide>
  <p>Render a complete atlas to SVG</p>
  <img
    alt="Allmaps Tile Server"
    loading="lazy"
    src="/images/iiif-annual-conference-2025/waterstaatskaart-svg-illustrator.webp"
  />
</Slide>

<Slide>
  <h2 class="font-bold">Allmaps Tile Server</h2>
  <p>
    A proxy server that turns Georeference Annotations into a XYZ tile layer
  </p>
  <img
    alt="Allmaps Tile Server"
    loading="lazy"
    src="/images/iiif-annual-conference-2025/qgis-xyz-leeds.webp"
  />
</Slide>

<Slide>
  <p><strong>What's needed to make this flipbook?</strong></p>
  <p>(And do many other things with your map collections)</p>
  <LargeTextShadow>You need <br /> Allmaps!</LargeTextShadow></Slide
>

<section class="section-stretch">
  <iframe
    title="Side by side"
    class="w-full h-full"
    data-src="https://allmaps.org/iiif-partnership"
  ></iframe>
</section>

<Slide showLogo={false}>
  <div></div>
  <div></div>
  <div></div>
  <p class="max-w-5xl">
    Thanks! See <a href="https://allmaps.org/iiif-partnership" class="underline"
      >allmaps.org/iiif-partnership</a
    > for more information about the Allmaps - IIIF partnership.
  </p>
  <div class="left-0 w-full text-left">
    <div class="flex items-end pt-24">
      <MapMonster mood="happy" color="pink">
        <p class="p-4 max-w-xl">
          Join us and help making all the world's maps more accessible!
        </p>
      </MapMonster>
    </div>
  </div>
</Slide>
