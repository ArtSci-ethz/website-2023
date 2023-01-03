<script lang="ts">
  import "react-image-gallery/styles/css/image-gallery.css";
  import ImageGallery from 'react-image-gallery';

  import img01 from '$lib/assets/artscights/1.-Santiago-Ramón-y-Cajal-Glial-cells-of-the-Cerebral-Cortex-of-a-Child.jpg';
  import img02 from '$lib/assets/artscights/2.-Fabian-Oefner-Millefiori.jpg';
  import img03 from '$lib/assets/artscights/3.-Kerry-Mitchell-Curosity.jpg';
  import img04 from '$lib/assets/artscights/4.-Klaus-Kemp-The-Diatomist.jpg';
  import img05 from '$lib/assets/artscights/5.Michael-Pinsky-Pollution-Pods.jpg';
  import img06 from '$lib/assets/artscights/6.-Jill-Pelto-Increasing-Forest-Fire-Activity.jpg';
  import img07 from '$lib/assets/artscights/7.John-Gerrad-Solar-Reserve.jpg';
  import img08 from '$lib/assets/artscights/8.-Rose-Lynn-Fisher-Topography-of-Tears.jpg';
  import img09 from '$lib/assets/artscights/9.-Lily-Simonson-Painting-in-the-Deep.jpg';
  import img10 from '$lib/assets/artscights/10.-Courtney-Mattison-Confluence-Our-Changing-Seas-V.jpg';
  import img11 from '$lib/assets/artscights/11.-Beata-Edyta-Mierzwa-The-Final-Cut-1.jpg';
  import img12 from '$lib/assets/artscights/12.-Dr-Greg-Dunn-Dr-Brian-Edwards-Self-Relfected.jpg';
  import img13 from '$lib/assets/artscights/13.-John-Malik-Phases-of-the-heart.jpg';
  import img14 from '$lib/assets/artscights/14.-Persijn-Broersen-and-Margit-Lukács-Shvayg-Mayn-Harts-2018-3D-print-PLA-full-HD-film-With-Hermann-Yablokoff-music-Berend-Dubbe-Gwendolyn-Thomas-arrangement-performance-and-Alec-Kopyt-vocals-.jpg';

  const images = [
    {
      original: img01,
      thumbnail: img01,
    },
    {
      original: img02,
      thumbnail: img02,
    },
    {
      original: img03,
      thumbnail: img03,
    },
    {
      original: img04,
      thumbnail: img04,
    },
    {
      original: img05,
      thumbnail: img05,
    },
    {
      original: img06,
      thumbnail: img06,
    },
    {
      original: img07,
      thumbnail: img07,
    },
    {
      original: img08,
      thumbnail: img08,
    },
    {
      original: img09,
      thumbnail: img09,
    },
    {
      original: img10,
      thumbnail: img10,
    },
    {
      original: img11,
      thumbnail: img11,
    },
    {
      original: img12,
      thumbnail: img12,
    },
    {
      original: img13,
      thumbnail: img13,
    },
    {
      original: img14,
      thumbnail: img14,
    },
  ];

  let showGallery = false;
  let currentIndex = 0;

</script>

<div class="grid grid-cols-3 gap-2">
  {#each images as image, i}
    <img src={image.original} on:click={() => {
      showGallery = true;
      currentIndex = i;
    }} />
  {/each}
</div>

{#if showGallery}
  <div class="w-full h-full fixed top-0 left-0 bg-black bg-opacity-80">
    <react:ImageGallery items={images} startIndex={currentIndex} onClick={() => showGallery = false}/>
  </div>
{/if}
