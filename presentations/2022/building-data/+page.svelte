<script context="module">
  export const title = 'Building Data'
  // Building Data: Architecture, Memory, and New Imaginaries: Proceedings of the 9th Annual Conference of the Jaap Bakema Study Centre
  //   Building Data: Architecture, Memory and New Imaginaries: 9th Annual Bakema Conference 2022 - Faculty of Architecture and the Built Environment, TU Delft and Het Nieuwe Instituut, Rotterdam, Rotterdam, Netherlands
  // Duration: 23 Nov 2022 → 24 Nov 2022
  export const date = Date.parse('23 Nov 2022')
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

<section
  class="title"
  data-background="../assets/images/masks.svg"
  data-background-color="#101656"
  data-background-size="120%"
>
  <img
    width="200px"
    alt="Allmaps"
    src="https://raw.githubusercontent.com/allmaps/style/master/images/allmaps-logo-inverted.svg"
  />
  <h1>Georeferencing<br />Building Plans</h1>
  <p>Revisiting Nolli Maps in the Digital Age</p>
  <p>Jules Schoonman, TU Delft Library</p>
</section>

<!-- Gio. Battista Nolli, Nuova Topografia Di Roma (1748) -->

<section>
  <iframe
    class="r-stretch"
    data-src="https://dev.viewer.allmaps.org/?url=https://annotations.allmaps.org/manifests/b20d4820f496b7b1"
    data-preload
  ></iframe>
  <p class="credit">
    Giambattista Nolli, Pianta Grande di Roma (1748)<br />
    <a href="https://www.davidrumsey.com/luna/servlet/s/21xb00"
      >David Rumsey Map Collection</a
    >
  </p>
</section>

<section>
  <img
    width="900px"
    alt="Le piante maggiori di Roma dei sec. XVI e XVII: riprodotte in fototipia"
    src="https://digi.ub.uni-heidelberg.de/iiif/2/piante_roma_bd1%3Az_ab.jpg/pct:2,7,90,83/2000,/90/default.jpg"
  />
  <p class="credit">
    Leonardo Bufalini, Roma (1551)<br />
    <a href="https://doi.org/10.11588/diglit.25719"
      >Heidelberg University Library</a
    >
  </p>
</section>

<section>
  <iframe
    class="r-stretch"
    data-src="https://dev.viewer.allmaps.org/?url=https://annotations.allmaps.org/images/9f888622a47479cc"
    data-preload
  ></iframe>
  <p class="credit">
    Giovanni Battista Piranesi, Pianta dell'antico Foro Romano (Le Antichità
    Romane, 1800-1809)<br />
    <a href="https://lib.ugent.be/catalog/rug01:001493078/items/NA"
      >Ghent University Library</a
    >
  </p>
</section>

<section>
  <img width="900px" alt="Collage City" src="images/collage_city_01.jpg" />
  <p class="credit">
    Colin Rowe and Fred Koetter, Collage City (Cambridge: MIT Press, 1978)<br />
  </p>
</section>

<section>
  <img width="900px" alt="Collage City" src="images/collage_city_02.jpg" />
  <p class="credit">
    Colin Rowe and Fred Koetter, Collage City (Cambridge: MIT Press, 1978)<br />
  </p>
</section>

<section>
  <img width="900px" alt="Collage City" src="images/collage_city_03.jpg" />
  <p class="credit">
    Colin Rowe and Fred Koetter, Collage City (Cambridge: MIT Press, 1978)<br />
  </p>
</section>

<!-- <section>
    <img
    width="900px"
    alt="Collage City"
    src="images/collage_city_04.jpg"
  />
    <p class="credit">
    Colin Rowe and Fred Koetter, Collage City (Cambridge: MIT Press, 1978)<br>
    </p>
</section> -->

<section>
  <iframe
    class="r-stretch"
    data-src="https://web.stanford.edu/group/spatialhistory/nolli/index.html"
    data-preload
  ></iframe>
  <p class="credit">
    <a href="https://web.stanford.edu/group/spatialhistory/nolli/index.html"
      >Interactive Nolli Map Website 2.0</a
    > (published Jan 2021)
  </p>
</section>

<section>
  <iframe class="r-stretch" data-src="https://iiif.io" data-preload></iframe>
  <p class="credit">International Image Interoperability Framework (IIIF)</p>
</section>

<section>
  <iframe
    class="r-stretch"
    data-src="https://iiif.io/api/image/3.0/#41-region"
    data-preload
  ></iframe>
  <p class="credit">IIIF Image API 3.0</p>
</section>

<section>
  <iframe
    class="r-stretch"
    data-src="https://iiif.io/api/presentation/3.0/#21-defined-types"
    data-preload
  ></iframe>
  <p class="credit">IIIF Presentation API 3.0</p>
</section>

<section>
  <iframe
    width="900px"
    height="700px"
    data-src="https://observablehq.com/embed/@bertspaan/map-tiles-to-iiif-tiles?cell=*"
    data-preload
  ></iframe>
  <p class="credit">
    <a
      href="https://observablehq.com/@bertspaan/map-tiles-to-iiif-tiles?collection=@bertspaan/allmaps"
      >From map tiles to IIIF tiles</a
    > (Observable Notebook)
  </p>
</section>

<section>
  <iframe
    class="r-stretch"
    data-src="https://preview.iiif.io/api/georef/extension/georef/"
    data-preload
  ></iframe>
  <p class="credit">IIIF Georeferencing Extension (Draft)</p>
</section>

<section>
  <pre><code class="language-js"
      >{JSON.stringify(
        {
          '@context': [
            'http://iiif.io/api/extension/georef/1/context.json',
            'http://iiif.io/api/presentation/3/context.json'
          ],
          id: 'http://iiif.io/api/extension/georef/examples/3/specific-image-annotation.json',
          type: 'Annotation',
          motivation: 'georeferencing',
          target: {
            id: 'http://iiif.io/api/extension/georef/examples/3/specific-image.json',
            type: 'SpecificResource',
            source: {
              id: 'https://cdm21033.contentdm.oclc.org/digital/iiif/krt/2891/full/5965,2514/0/default.jpg',
              type: 'Image',
              format: 'image/jpeg',
              height: 2514,
              width: 5965,
              service: [
                {
                  '@id':
                    'https://cdm21033.contentdm.oclc.org/digital/iiif/krt/2891',
                  type: 'ImageService2'
                }
              ]
            },
            selector: {
              type: 'SvgSelector',
              value:
                '<svg width="5965" height="2514"><polygon points="59,84 44,2329 5932,2353 5920,103 " /></svg>'
            }
          },
          body: {
            id: 'http://iiif.io/api/extension/georef/examples/3/feature-collection.json',
            type: 'FeatureCollection',

            transformation: {
              type: 'polynomial',
              order: 0
            },
            features: [
              {
                type: 'Feature',
                properties: {
                  pixelCoords: [5085, 782]
                },
                geometry: {
                  type: 'Point',
                  coordinates: [4.4885839, 51.9101828]
                }
              },
              {
                type: 'Feature',
                properties: {
                  pixelCoords: [5467, 1338]
                },
                geometry: {
                  type: 'Point',
                  coordinates: [4.5011785, 51.901595]
                }
              },
              {
                type: 'Feature',
                properties: {
                  pixelCoords: [2006, 374]
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
  <p class="credit">Example Georef Annotation (Draft)</p>
</section>

<section>
  <iframe
    class="r-stretch"
    data-src="https://editor.allmaps.org/#/collection?url=https%3A%2F%2Fdlc.services%2Fiiif-resource%2F7%2Fstring1string2string3%2Fkalktekeningen%2FAA270974&image=8abf7a2d29bc7c0a"
    data-preload
  ></iframe>
  <p class="credit">Allmaps Editor</p>
</section>

<section>
  <iframe
    class="r-stretch"
    data-src="https://dev.viewer.allmaps.org/?url=https://raw.githubusercontent.com/allmaps/presentations/main/building-data-23-11-2022/annotations/delft_campus_nolli.json"
    data-preload
  ></iframe>
  <p class="credit">
    Georeferenced building plans of TU Delft Campus<br />
    <a href="https://heritage.tudelft.nl/en"
      >TU Delft Library, Special Collections</a
    >
  </p>
</section>

<section>
  <iframe
    class="r-stretch"
    data-src="https://dev.viewer.allmaps.org/?url=https://annotations.allmaps.org/images/74e022436ac90ec1"
    data-preload
  ></iframe>
  <p class="credit">
    Rudolfo Lanciani, Forma Urbis Romae (1901)<br />
    <a href="https://www.davidrumsey.com/luna/servlet/s/4k9vm5"
      >David Rumsey Map Collection</a
    >
  </p>
</section>

<section>
  <iframe
    class="r-stretch"
    data-src="https://dev.viewer.allmaps.org/?url=https://annotations.allmaps.org/images/40518cb781fba5a2"
    data-preload
  ></iframe>
  <p class="credit">
    Bonus slide: Henry Tucker, Great Britain. Ordnance Survey (1852)<br />
    <a href="https://www.davidrumsey.com/luna/servlet/s/67d8s8"
      >David Rumsey Map Collection</a
    >
  </p>
</section>

<section>
  <h1 class="title">
    <img
      width="200px"
      alt="Allmaps"
      src="https://raw.githubusercontent.com/allmaps/style/master/images/allmaps-logo.svg"
    />
    <span>Thank you</span>
  </h1>
  <ul class="credit" style="width: 700px">
    <li>
      Allmaps was founded in 2020 by Bert Spaan (freelance software engineer)
      and Jules Schoonman (TU Delft Library).
    </li>
    <li>
      Current development of the Allmaps Viewer is funded by Stichting Pica and
      carried out in collaboration with the Netwerk Digitaal Erfgoed (Dutch
      Digital Heritage Network) and Leiden University Libraries.
    </li>
    <li>
      More information about Allmaps: <a href="https://allmaps.org"
        >allmaps.org</a
      >
      & <a href="https://github.com/allmaps/">github.com/allmaps</a>
    </li>
    <li>
      This presentation: <a
        href="https://allmaps.org/presentations/building-data-23-11-2022/"
        >allmaps.org/presentations/building-data-23-11-2022</a
      >
    </li>
  </ul>
</section>
