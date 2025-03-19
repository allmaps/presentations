<script context="module">
  export const title = 'Amsterdam 750'
  export const date = Date.parse('30 Jan 2023')
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
  <h1>Digitale Nolli kaart<br />van Amsterdam</h1>
  <p>Jules Schoonman & Bert Spaan (Allmaps)</p>
</section>

<!-- Gio. Battista Nolli, Nuova Topografia Di Roma (1748) -->

<section>
  <iframe
    class="r-stretch"
    data-src="https://dev.viewer.allmaps.org/?url=https://annotations.allmaps.org/manifests/b20d4820f496b7b1"
    data-preload
  />
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
  />
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
  <iframe
    class="r-stretch"
    data-src="https://editor.allmaps.org/#/collection?url=https%3A%2F%2Fdlc.services%2Fiiif-resource%2F7%2Fstring1string2string3%2Fkalktekeningen%2FAA270974&image=8abf7a2d29bc7c0a"
    data-preload
  />
  <p class="credit">Allmaps Editor</p>
</section>

<section>
  <iframe
    class="r-stretch"
    data-src="https://dev.viewer.allmaps.org/?url=https://raw.githubusercontent.com/allmaps/presentations/main/building-data-23-11-2022/annotations/delft_campus_nolli.json"
    data-preload
  />
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
    data-src="https://dev.viewer.allmaps.org/#?image=c5afae58774fdf95&map=a4d1e32e854e7198&type=annotation&data=data:text/x-url,https%3A%2F%2Fannotations.allmaps.org%2Fimages%2Fc5afae58774fdf95"
    data-preload
  />
  <p class="credit">
    Oost-Indisch huis<br />
    <a
      href="https://archief.amsterdam/beeldbank/detail/3c4189b7-3a6a-8506-e413-63fcbec8ab22"
      >Stadsarchief Amsterdam</a
    >
  </p>
</section>

<section>
  <iframe
    class="r-stretch"
    data-src="https://dev.viewer.allmaps.org/?url=https%3A%2F%2Fraw.githubusercontent.com%2Fallmaps%2Fpresentations%2Fmain%2Famsterdam-750-30-01-2023%2Fannotations%2Fdam.json"
    data-preload
  />
  <p class="credit">
    <a
      href="https://archief.amsterdam/beeldbank/detail/5e458a3e-ec19-6aa6-0c9b-2a397d9bd957"
      >Paleis op de Dam</a
    >,
    <a
      href="https://archief.amsterdam/beeldbank/detail/677a0b01-003c-4d0b-ccc4-6926946690ce"
      >Nieuwe Kerk</a
    >,
    <a
      href="https://archief.amsterdam/beeldbank/detail/9cd141b5-7371-9a00-85d8-a791f4f246dd"
      >Industria</a
    >
    en
    <a
      href="https://archief.amsterdam/beeldbank/detail/bf0dc40e-bcce-90d9-b187-077ce11ea759"
      >Koopmansbeurs</a
    ><br />
    Stadsarchief Amsterdam
  </p>
</section>

<section>
  <h4>Tentoongesteld in Amsterdam</h4>
  <iframe
    class="r-stretch"
    data-src="https://dev.viewer.allmaps.org/#?image=ab78ce1823b12a70&map=05afa80948cb6c42&type=annotation&data=data:text/x-url,https%3A%2F%2Fannotations.allmaps.org%2Fimages%2Fab78ce1823b12a70"
    data-preload
  />
  <p class="credit">
    Wereld-Tentoonstelling van het Hôtel- en Reiswezen (1894)<br />
    <a
      href="https://archief.amsterdam/beeldbank/detail/3fec8c89-450d-9020-ff29-d750707d7350"
      >Collectie Atlas Kok, Stadsarchief Amsterdam</a
    >
  </p>
</section>

<!-- <section>
        <h3>Tentoongesteld in Amsterdam</h3>
        <iframe class="r-stretch"
          data-src="https://dev.viewer.allmaps.org/#?image=68de70a052a69a4a&map=5ec9c61f1dd1a3f9&type=annotation&data=data:text/x-url,https%3A%2F%2Fannotations.allmaps.org%2Fimages%2F68de70a052a69a4a"
          data-preload></iframe>
        <p class="credit">
          Internationale Koloniale en Uitvoerhandel Tentoonstelling (1883)<br>
          <a href="https://archief.amsterdam/beeldbank/detail/a9da63fc-c297-851a-106e-79840568dbcd">Collectie Atlas Kok, Stadsarchief Amsterdam</a>
        </p>
      </section> -->

<section>
  <h4>Tentoongesteld in Amsterdam</h4>
  <iframe
    class="r-stretch"
    data-src="https://dev.viewer.allmaps.org/#?image=876aa41368d3c589&map=b83e737fb6dae838&type=annotation&data=data:text/x-url,https%3A%2F%2Fannotations.allmaps.org%2Fimages%2F876aa41368d3c589"
    data-preload
  />
  <p class="credit">
    Internationale Koloniale en Uitvoerhandel Tentoonstelling (1883)<br />
    <a
      href="https://archief.amsterdam/beeldbank/detail/a64e646d-d832-cdf1-8211-bd9d1eacf780"
      >Collectie Atlas Kok, Stadsarchief Amsterdam</a
    >
  </p>
</section>

<section>
  <h4>Gesloopt Amsterdam</h4>
  <iframe
    class="r-stretch"
    data-src="https://dev.viewer.allmaps.org/#?image=adc1589122e1c00c&map=28f6e6f130ccb26b&type=annotation&data=data:text/x-url,https%3A%2F%2Fannotations.allmaps.org%2Fimages%2Fadc1589122e1c00c"
    data-preload
  />
  <p class="credit">
    Paleis voor Volksvlijt<br />
    <a
      href="https://archief.amsterdam/beeldbank/detail/30ef34b0-1150-40f6-3bd1-1531cd771e16"
      >Collectie Atlas Dreesmann, Stadsarchief Amsterdam</a
    >
  </p>
</section>

<section>
  <h4>Gesloopt Amsterdam</h4>
  <iframe
    class="r-stretch"
    data-src="https://dev.viewer.allmaps.org/#?image=ec7afe220d2dc4f9&map=9d140e5984a60086&type=annotation&data=data:text/x-url,https%3A%2F%2Fannotations.allmaps.org%2Fimages%2Fec7afe220d2dc4f9"
    data-preload
  />
  <p class="credit">
    Overzicht van de bebouwing op de Handelskade van west naar oost<br />
    <a
      href="https://archief.amsterdam/beeldbank/detail/57a04358-045d-f247-096b-0026a9e6ed60"
      >Stadsarchief Amsterdam</a
    >
  </p>
</section>

<section>
  <img
    width="600px"
    alt="K.N.M.I Gebouw"
    src="https://dlc.services/thumbs/7/1/34cc2b8d-7737-42a6-ac76-ed2d903b9329/full/1024,/0/default.jpg"
  />
  <img
    width="488px"
    alt="K.N.M.I Gebouw"
    src="https://images.memorix.nl/ams/thumb/mediabank-horizontal/44b9b2fc-e2b2-cc55-0f91-064dece1e477.jpg"
  />
  <p class="credit">
    Meteorologisch Instituut<br />
    Foto:
    <a href="https://bertspaan.nl/rijksdriehoeksmeting/#14.31/52.37849/4.91717"
      >Kadastermuseum</a
    >, Plattegrond:
    <a
      href="https://archief.amsterdam/beeldbank/detail/86e4e9ba-fdc8-d161-f44a-a29b5fb058b8"
      >Stadsarchief Amsterdam</a
    >
  </p>
</section>

<section>
  <h4>Nooit gebouwd Amsterdam</h4>
  <iframe
    class="r-stretch"
    data-src="https://dev.viewer.allmaps.org/#?image=7811007c936505ae&map=20c884f1092b2da0&type=annotation&data=data:text/x-url,https%3A%2F%2Fannotations.allmaps.org%2Fimages%2F7811007c936505ae"
    data-preload
  />
  <p class="credit">
    Brug over het IJ<br />
    <a
      href="https://archief.amsterdam/beeldbank/detail/0294630f-eb0f-489e-1be9-885c02a9c522"
      >Stadsarchief Amsterdam</a
    >
  </p>
</section>

<section>
  <iframe
    class="r-stretch"
    data-src="https://dev.viewer.allmaps.org/?url=https://annotations.allmaps.org/images/74e022436ac90ec1"
    data-preload
  />
  <p class="credit">
    Rudolfo Lanciani, Forma Urbis Romae (1901)<br />
    <a href="https://www.davidrumsey.com/luna/servlet/s/4k9vm5"
      >David Rumsey Map Collection</a
    >
  </p>
</section>

<section>
  <h2 class="title">Haakjes</h2>
  <ul class="credit" style="width: 700px">
    <li>
      Beter toegankelijk maken van de collectie bouwarchieven van het
      Stadsarchief
    </li>
    <li>
      Samenwerking <a href="https://theberlage.nl"
        >Berlage Center for Advanced Studies</a
      >, TU Delft (Najaar 2023)
    </li>
    <li>
      Presentatie <a href="https://vaneesterenmuseum.nl/"
        >Van Eestereren Museum</a
      > (begin 2024)
    </li>
    <li>
      <a href="https://arxiv.org/abs/2203.16291">AmsterTime</a> dataset voor visuele
      plaatsherkenning (TU Delft & VU)
    </li>
    <li>
      Samenwerking <a
        href="https://www.tudelft.nl/bk/over-faculteit/afdelingen/architecture/organisatie/groepen/theory-of-architecture-and-digital-culture/research-publications"
        >AI Lab</a
      > voor het annoteren van plattegronden met behulp van ML (TU Delft)
    </li>
    <li>
      Samenwerking <a
        href="https://www.tudelft.nl/bk/over-faculteit/afdelingen/urbanism/organisatie/secties/urban-data-science"
        >Urban Data Science</a
      > (bijv. afstudeeronderzoek)
    </li>
  </ul>
</section>

<section>
  <img width="400px" alt="" src="images/amstertime/annotation_app.jpg" />
  <img width="400px" alt="" src="images/amstertime/gradcam_correct.jpg" /><br />
  <img width="400px" alt="" src="images/amstertime/data_locations_on_map.jpg" />
  <img width="400px" alt="" src="images/amstertime/tsne_small.jpg" />
  <p class="credit">
    Beelden <a href="https://arxiv.org/abs/2203.16291">AmsterTime</a>
  </p>
</section>

<section>
  <h1 class="title">
    <img
      width="200px"
      alt="Allmaps"
      src="https://raw.githubusercontent.com/allmaps/style/master/images/allmaps-logo.svg"
    />
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
        href="https://allmaps.org/presentations/amsterdam-750-30-01-2023/"
        >allmaps.org/presentations/amsterdam-750-30-01-2023</a
      >
    </li>
  </ul>
</section>
