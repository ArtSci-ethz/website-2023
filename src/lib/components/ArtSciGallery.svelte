<script lang="ts">
  import 'react-image-gallery/styles/css/image-gallery.css';
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
      description: 'Santiago Ramón y Cajal - Glial cells of the Cerebral Cortex of a Child'
    },
    {
      original: img02,
      thumbnail: img02,
      description: 'Fabian Oefner - Millefiori'
    },
    {
      original: img03,
      thumbnail: img03,
      description: 'Kerry Mitchell - Curosity'
    },
    {
      original: img04,
      thumbnail: img04,
      description: 'Klaus Kemp - The Diatomist'
    },
    {
      original: img05,
      thumbnail: img05,
      description: 'Michael Pinsky - Pollution Pods'
    },
    {
      original: img06,
      thumbnail: img06,
      description: 'Jill Pelto - Increasing Forest Fire Activity'
    },
    {
      original: img07,
      thumbnail: img07,
      description: 'John Gerrad - Solar Reserve'
    },
    {
      original: img08,
      thumbnail: img08,
      description: 'Rose-Lynn Fisher - Topography of Tears'
    },
    {
      original: img09,
      thumbnail: img09,
      description: 'Lily Simonson - Painting in the Deep'
    },
    {
      original: img10,
      thumbnail: img10,
      description: 'Courtney Mattison - Confluence (Our Changing Seas V)'
    },
    {
      original: img11,
      thumbnail: img11,
      description: 'Beata Edyta Mierzwa - The Final Cut'
    },
    {
      original: img12,
      thumbnail: img12,
      description: 'Dr Greg Dunn & Dr Brian Edwards - Self Reflected'
    },
    {
      original: img13,
      thumbnail: img13,
      description: 'John Malik - Phases of the heart'
    },
    {
      original: img14,
      thumbnail: img14,
      description:
        'Persijn Broersen and Margit Lukács - Shvayg Mayn Harts, 2018 3D-print (PLA), full HD film'
    }
  ];

  let showGallery = false;
  let currentIndex = 0;
</script>

<div class="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
  {#each images as image, i}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class="relative"
      on:click={() => {
        showGallery = true;
        currentIndex = i;
      }}
    >
      <img src={image.original} class="object-cover h-full w-full aspect-square" alt="blabla" />
      <div
        class="w-full h-full absolute top-0 left-0 z-10 opacity-0 hover:opacity-100 ease-in-out transition-opacity duration-700 flex flex-col"
      >
        <div class="flex-1" />
        <div class="bg-black opacity-80 p-4">
          <span class="opacity-100 text-white">
            {image.description}
          </span>
        </div>
      </div>
    </div>
  {/each}
</div>

{#if showGallery}
  <div class="w-full h-full fixed top-0 left-0 bg-black bg-opacity-80 z-20">
    <react:ImageGallery
      items={images}
      startIndex={currentIndex}
      onClick={() => (showGallery = false)}
      thumbnailHeight="200px"
    />
  </div>
{/if}

<style lang="postcss">
  :global(.image-gallery-thumbnail-image) {
    height: 60px;
    aspect-ratio: 1;
  }
  :global(.image-gallery-slides) {
    @apply flex flex-row flex-auto;
    height: calc(100vh - 80px);
  }
  :global(.image-gallery-slide) {
    width: 100vw;
  }
  :global(image-gallery-image) {
    width: unset;
    height: unset;
    margin: auto;
  }
</style>
