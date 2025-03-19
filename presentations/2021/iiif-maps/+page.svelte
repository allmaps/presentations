<script context="module">
  export const title = 'IIIF Maps'
  export const date = Date.parse('21 April 2021')
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
  <h1>
    <img
      width="200px"
      alt="Allmaps"
      src="https://raw.githubusercontent.com/allmaps/style/master/images/allmaps-logo.svg"
    />
    <span>Allmaps</span>
  </h1>
</section>

<section>
  <p>I'm Bert Spaan, I make maps and computer programs.</p>
  <p>I'm also a co-chair of the IIIF Maps TSG.</p>
</section>

<section>
  <div>
    Hundreds of thousands of maps are already available through IIIF, but it's
    not always easy to find the map you're looking for
  </div>
  <img width="900px" src="images/map-collections.png" />
</section>

<section data-background="images/nypl.jpg"></section>

<section>
  <img src="images/map-warper.gif" />
</section>

<!-- NYPL: two reasons to use maps
          1: for Space/Time
          2: for myself, to get to know the city -->

<section>
  <img src="images/maps-by-decade.gif" />
</section>

<!--
afterwards, amsterdam city archives and other institutions in the NL
some of them already georeferenced their maps, some hadn't
some used their own tools, some used payed services with yearly subscriptions
but because of different data formats, accessible in different ways. also images not iiif

now that more and more institutions are using iiif,
it's time for a standardized way to store and exchange map georeferencing metadata
and a way to georeference and view georeferenced maps, using just iiif (no gis)

so that, hopefully, finally, in a while, you can ask your computer:
show me a map, of this specific area, in this specific period.
-->

<section>
  <p>I'd love to ask my computer/some server/the internet:</p>
  <p>
    <strong
      >Show me maps of this specific area, in this specific time period!</strong
    >
  </p>
  <p>(From all libraries/archives/museums in the world)</p>
</section>

<section>
  <h1>
    <img
      width="200px"
      alt="Allmaps"
      src="https://raw.githubusercontent.com/allmaps/style/master/images/allmaps-logo.svg"
    />
    <span>Allmaps</span>
  </h1>
  <p>Open source tools for georeferencing &amp; exploring IIIF maps</p>
  <p>Allmaps works with any map collection that supports IIIF</p>
  <p>All components are based on the upcoming IIIF maps extension</p>
</section>

<section>
  <p>
    Allmaps is a collaboration between Bert Spaan, Delft University of
    Technology Library and Leiden University Libraries.
  </p>

  <p>
    The first phase of Allmaps is partly funded by Delft University of
    Technology Library.
  </p>
</section>

<section>
  <p style="text-align: left;">Core parts:</p>
  <ul>
    <li>Open source, web-based georeferencing tools</li>
    <li>All annotations are published as open data</li>
    <li>No need for GIS servers or creating derivatives</li>
    <li>API for storing, searching and downloading georeference annotations</li>
    <li>In-browser WebGL warping and rendering of georeferenced maps</li>
    <li>Import existing georeferenced map collections</li>
    <li>Export to GDAL scripts, map tiles, other GIS formats</li>
    <li>News tools for exploring maps, across institutions</li>
  </ul>
</section>

<section>
  <a
    href="https://researchworks.oclc.org/iiif-explorer/manifest?url=https%3A%2F%2Fcdm21033.contentdm.oclc.org%2Fdigital%2Fiiif-info%2Fkrt%2F2891%2Fmanifest.json"
  >
    <img src="images/rotterdam-oclc.png" />
  </a>
</section>

<section>
  <a
    href="https://cdm21033.contentdm.oclc.org/iiif/info/krt/2891/manifest.json"
  >
    <img src="images/rotterdam-manifest.png" />
  </a>
</section>

<section>
  <a
    href="https://allmaps.org/editor/#/?url=https%3A%2F%2Fcdm21033.contentdm.oclc.org%2Fiiif%2Finfo%2Fkrt%2F2891%2Fmanifest.json&image=RmcWxzt3rvEst7Wu"
  >
    <img src="images/rotterdam-editor.png" />
  </a>
</section>

<section>
  <a
    href="https://allmaps.org/editor/#/mask?url=https%3A%2F%2Fcdm21033.contentdm.oclc.org%2Fiiif%2Finfo%2Fkrt%2F2891%2Fmanifest.json&image=RmcWxzt3rvEst7Wu"
  >
    <img src="images/rotterdam-mask.png" />
  </a>
</section>

<section>
  <a
    href="https://allmaps.org/editor/#/georeference?url=https%3A%2F%2Fcdm21033.contentdm.oclc.org%2Fiiif%2Finfo%2Fkrt%2F2891%2Fmanifest.json&image=RmcWxzt3rvEst7Wu"
  >
    <img src="images/rotterdam-georeference.png" />
  </a>
</section>

<section>
  <a href="https://annotations.allmaps.org/images/RmcWxzt3rvEst7Wu">
    <img src="images/rotterdam-annotation.png" />
  </a>
</section>

<section>
  <pre><code class="language-js"
      >{JSON.stringify(
        {
          type: 'Annotation',
          '@context': [
            'http://geojson.org/geojson-ld/geojson-context.jsonld',
            'http://iiif.io/api/presentation/3/context.json'
          ],
          motivation: 'georeference',
          target: {
            type: 'Image',
            source:
              'https://cdm21033.contentdm.oclc.org/digital/iiif/krt/2891/full/full/0/default.jpg',
            service: [
              {
                '@id':
                  'https://cdm21033.contentdm.oclc.org/digital/iiif/krt/2891',
                type: 'ImageService2',
                profile: 'http://iiif.io/api/image/2/level2.json'
              }
            ],
            selector: {
              type: 'SvgSelector',
              value:
                '<svg width="5965" height="2514"&#x3E;&#x3C;polygon points="59,84 44,2329 5932,2353 5920,103 59,84" /&#x3E;&#x3C;/svg&#x3E;'
            }
          },
          body: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                id: '3PxT6XD1hx7qMppe',
                properties: {
                  image: [5085, 782]
                },
                geometry: {
                  type: 'Point',
                  coordinates: [4.4885839, 51.9101828]
                }
              },
              {
                type: 'Feature',
                id: 'UhF5ACkLf4Unp1ah',
                properties: {
                  image: [5467, 1338]
                },
                geometry: {
                  type: 'Point',
                  coordinates: [4.5011785, 51.901595]
                }
              },
              {
                type: 'Feature',
                id: 'xBzgA9DqGWBSS3dX',
                properties: {
                  image: [2006, 374]
                },
                geometry: {
                  type: 'Point',
                  coordinates: [4.405981, 51.9091596]
                }
              }
            ]
          }
        },
        null,
        2
      )}
</code></pre>
</section>

<section>
  <a
    href="https://viewer.allmaps.org/#data=data%3Atext%2Fx-url%2Chttps%3A%2F%2Fannotations.allmaps.org%2Fimages%2FRmcWxzt3rvEst7Wu"
  >
    <img src="images/rotterdam-viewer.png" />
  </a>
</section>

<section>
  <a
    href="https://viewer.allmaps.org/#data=data%3Atext%2Fx-url%2Chttps%3A%2F%2Fannotations.allmaps.org%2Fimages%2FRmcWxzt3rvEst7Wu"
  >
    <img src="images/rotterdam-warp.png" />
  </a>
</section>

<section>
  <a
    href="https://allmaps.org/editor/#/mask?url=https%3A%2F%2Fwww.loc.gov%2Fitem%2F88695674%2Fmanifest.json&image=yT5Z6epJ7vi7BeLP"
  >
    <img src="images/chesapeake-mask.png" />
  </a>
</section>

<section>
  <a
    href="https://viewer.allmaps.org/#data=data:text/x-url,https%3A%2F%2Fraw.githubusercontent.com%2Fallmaps%2Flmec%2Fmaster%2Fannotation.json"
  >
    <img src="images/boston-viewer.png" />
  </a>
</section>

<section data-background="images/map-boundaries.png">
  <a href="https://observablehq.com/@bertspaan/map-boundaries">
    Map of all maps georeferenced with Allmaps
  </a>
</section>

<section>
  <a
    href="https://figgy.princeton.edu/concern/scanned_maps/f5b6e667-d863-4295-b8ba-69865c18cfa2/manifest"
  >
    <img src="images/brooklyn.png" />
  </a>
</section>

<!-- <section data-background="images/harold-fisk-plate-22-6.jpg">
          even non-iiif maps
        </section> -->
<!-- viewer missis -->

<section>
  <p style="text-align: left;">Soon:</p>
  <ul>
    <li>
      Finalize first version of IIIF annotation spec for georeferenced maps
    </li>
    <li>Improve rendering: improve transformation algorithms</li>
    <li>Improve viewer: overlay, opacity, edge detection</li>
    <li>
      Tools for exploring georeferenced map collections, across multiple
      institutions
    </li>
  </ul>
</section>

<section
  data-background="https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:2r36vc255/403,1204,4067,2281/4067,2281/0/default.jpg"
>
  <div style="background-color: rgba(255, 255, 255, 0.8); padding: 1em;">
    <h1>Thanks!</h1>
    <p>
      Visit <a href="https://allmaps.org">Allmaps</a> and start georeferencing!
    </p>
    <p>
      If you think Allmaps can be useful for your institution: I'm looking for
      funding to support the development of Allmaps.
    </p>
    <p>
      <a href="mailto:hello@bertspaan.nl">hello@bertspaan.nl</a> /
      <a href="https://twitter.com/bertspaan">@bertspaan</a>
    </p>
  </div>
</section>
