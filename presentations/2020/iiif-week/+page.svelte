<script context="module">
  export const title = 'IIIF Week 2020'
  export const date = Date.parse('June 2 2020')
</script>

<script lang="ts">
  import Slide from '$lib/components/Slide.svelte'
  import Title from '$lib/components/Title.svelte'
  import MapMonster from '$lib/components/MapMonster.svelte'
  import ManyMapMonsters from '$lib/components/ManyMapMonsters.svelte'
  import MapThumbnails from '$lib/components/MapThumbnails.svelte'
  import WarpedMap from '$lib/components/WarpedMap.svelte'
  import FlyTo from '$lib/components/FlyTo.svelte'
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<section>
  <h1>IIIF + Georeferenced maps</h1>
</section>

<section>
  <p>
    <span class="emoji wiggle">👋🏻</span>Hello, I’m
    <a href="https://bertspaan.nl">Bert Spaan</a>. I’m a freelance map developer
    and cartographer, based in the Netherlands. A few years ago, I spent two
    years working on the New York Public Library’s
    <a href="http://spacetime.nypl.org/">NYC Space/Time Directory</a>.
  </p>
</section>

<section>
  The New York Public Library: crowd-sourced map georeferencing with <a
    href="http://maps.nypl.org/warper">Map Warper</a
  >.
</section>

<section>
  <img src="/images/iiif-week/map-warper.gif" />
</section>

<!-- <section data-background="images/map-warper.gif"></section> -->

<section>
  <a href="http://spacetime.nypl.org/">NYC Space/Time Directory</a>:
  georeferenced maps as a base layer for an online historical atlas of New York
  City.
</section>

<section>
  <img src="/images/iiif-week/building-inspector.png" />
</section>

<section>
  <img src="/images/iiif-week/maps-by-decade.gif" />
</section>

<section>
  <p>
    The NYPL in 2017: no IIIF… many of its digital humanities tools are
    difficult to reuse.
  </p>
</section>

<section>
  2020: still, most tools to georeference maps are either old, complicated to
  install and use, proprietary or institution-specific.
</section>

<section>
  <a href="https://geo4libcamp.org/2020/schedule">Geo4Lib 2020</a>: towards a
  prototype for an open source, web-based, map georeferencer based on IIIF and
  Web Annotations.
</section>

<section>
  <img width="100%" src="/images/iiif-week/iiif-maps-simple.svg" />
</section>

<section>
  <img src="/images/iiif-week/prototype.png" />
</section>

<section>
  <pre>
<code class="language-js"
      >{JSON.stringify(
        {
          '@id':
            'https://bertspaan.nl/iiifmaps?url=https%3A%2F%2Fpurl.stanford.edu%2Fvg994wz9415%2Fiiif%2Fmanifest',
          type: 'AnnotationPage',
          '@context': [
            'http://geojson.org/geojson-ld/geojson-context.jsonld',
            'http://iiif.io/api/presentation/3/context.json'
          ],
          items: [
            {
              type: 'Annotation',
              motivation: 'georeference-ground-control-points',
              target: 'https://purl.stanford.edu/vg994wz9415/iiif/manifest',
              body: {
                type: 'FeatureCollection',
                features: [
                  {
                    type: 'Feature',
                    properties: { pixel: [2781, 5894] },
                    geometry: {
                      type: 'Point',
                      coordinates: [-122.165331, 37.441916]
                    }
                  },
                  {
                    type: 'Feature',
                    properties: { pixel: [3743, 1071] },
                    geometry: {
                      type: 'Point',
                      coordinates: [-122.143032, 37.457037]
                    }
                  },
                  {
                    type: 'Feature',
                    properties: { pixel: [8476, 6134] },
                    geometry: {
                      type: 'Point',
                      coordinates: [-122.139804, 37.424006]
                    }
                  }
                ]
              }
            },
            {
              type: 'Annotation',
              motivation: 'georeference-pixel-mask',
              target: {
                source: 'https://purl.stanford.edu/vg994wz9415/iiif/manifest',
                selector: {
                  type: 'SvgSelector',
                  value:
                    '&lt;svg width=&quot;11091&quot; height=&quot;9607&quot;&gt;&lt;polygon points=&quot;684,697 744,8963 10386,8903 10356,610 684,697&quot; /&gt;&lt;/svg&gt;'
                }
              },
              body: [
                [684, 697],
                [744, 8963],
                [10386, 8903],
                [10356, 610],
                [684, 697]
              ]
            },
            {
              type: 'Annotation',
              motivation: 'georeference-geo-mask',
              target: {
                source: 'https://purl.stanford.edu/vg994wz9415/iiif/manifest',
                selector: {
                  type: 'SvgSelector',
                  value:
                    '&lt;svg width=&quot;11091&quot; height=&quot;9607&quot;&gt;&lt;polygon points=&quot;684,697 744,8963 10386,8903 10356,610 684,697&quot; /&gt;&lt;/svg&gt;'
                }
              },
              body: {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'Polygon',
                  coordinates: [
                    [
                      [-122.155837, 37.467572],
                      [-122.186129, 37.436551],
                      [-122.141185, 37.407968],
                      [-122.110654, 37.438999],
                      [-122.155832, 37.467571]
                    ]
                  ]
                }
              }
            }
          ]
        },
        null,
        2
      )}
          </code></pre>
</section>

<section>
  <img src="/images/iiif-week/geojson.png" />
</section>

<section>
  <p>
    IIIF + Web Annotations for georeferenced maps means open source tools and
    map data for the web. No more map viewers and georeferencing tools made for
    just one institution!
  </p>
</section>

<section>
  <p>
    Thanks! View this presentation again at <a
      href="https://bertspaan.nl/iiif-week-2020/#/"
      >bertspaan.nl/iiif-week-2020</a
    >
    or send me an email:
    <a href="mailto:hello@bertspaan.nl">hello@bertspaan.nl</a>.
  </p>
  <p>
    Now to Bryan for more details about annotating IIIF images with geospatial
    data!
  </p>
</section>
