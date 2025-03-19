<script context="module">
  export const title = 'IIIF & Maps @ Geo4lib'
  // Geo4LibCamp 2020 ????
  export const date = Date.parse('6 Feb 2020')
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
  <div class="grid">
    <div><h1>IIIF</h1></div>
    <div />
    <div />
    <div />

    <div />
    <div><h1>&amp;</h1></div>
    <div />
    <div />

    <div />
    <div />
    <div><h1>Maps</h1></div>
    <div />

    <div />
    <div />
    <div />
    <div />
  </div>
</section>

<section>
  <img alt="Hiking Big Sur" src="/images/geo4lib/big-sur.webp" />
</section>

<section>
  <img alt="Map Warper animation" src="/images/geo4lib/map-warper.gif" />
</section>

<section>
  <div class="grid">
    <div><strong>Goals:</strong></div>
    <div>Add geospatial metadata to IIIF manifest files</div>
    <div />
    <div />

    <div />
    <div>Ground control points for georectification</div>
    <div />
    <div />

    <div />
    <div>Polygon masks to separate cartographic portion of image</div>
    <div />
    <div />

    <div />
    <div />
    <div />
    <div />
  </div>
</section>

<section>
  <div class="grid">
    <div><strong>Examples:</strong></div>
    <div>
      <a href="http://spacetime.nypl.org/maps-by-decade/#/"
        >spacetime.nypl.org/maps-by-decade/</a
      >
    </div>
    <div />
    <div />

    <div />
    <div>
      <a href="https://bertspaan.nl/all-the-maps2/"
        >bertspaan.nl/all-the-maps2/</a
      >
    </div>
    <div />
    <div />

    <div />
    <div>
      <a href="https://bertspaan.nl/along-the-hudson/"
        >bertspaan.nl/along-the-hudson/</a
      >
    </div>
    <div />
    <div />

    <div />
    <div />
    <div />
    <div />
  </div>
</section>

<section>
  <div class="grid">
    <div><strong>2019 Wikimania Hackathon:</strong></div>
    <div>Matt Miller &amp; Bert Spaan</div>
    <div />
    <div />

    <div />
    <div>
      Draft JSON specification to store GCPs and masks within IIIF manifest
      file:
    </div>
    <div>
      <a href="https://github.com/bertspaan/georectify-json-spec"
        >github.com/bertspaan/georectify-json-spec</a
      >
    </div>
    <div />

    <div />
    <div>Web service to convert such a manifest file to GeoTIFF and tiles:</div>
    <div>
      <a href="https://github.com/bertspaan/georectify-service"
        >github.com/bertspaan/georectify-service</a
      >
    </div>
    <div />

    <div />
    <div />
    <div />
    <div />
  </div>
</section>

<section>
  <div class="grid">
    <div><strong>How?</strong></div>
    <div>
      Integrate data needed for map georectification into IIIF manifest files
    </div>
    <div />
    <div />

    <div />
    <div>
      Open source web app for crowdsourced IIIF map georectifying &amp; masking
    </div>
    <div>
      <a href="https://bertspaan.nl/iiifmaps/">bertspaan.nl/iiifmaps/</a>
    </div>
    <div />

    <div />
    <div>
      Web service for generation of GeoTIFF, WMS &amp; tiles from such a
      manifest file
    </div>
    <div />
    <div />

    <div />
    <div>IIIF proxy that adds GCPs and masks to manifest files</div>
    <div>
      <a
        href="https://iiifmaps.glitch.me/proxy?url=https://purl.stanford.edu/vg994wz9415/iiif/manifest"
        >https://iiifmaps.glitch.me/proxy?url=https://purl.stanford.edu/vg994wz9415/iiif/manifest</a
      >
    </div>
    <div />
  </div>
</section>
