<script lang="ts">
  import ImageGallery from '@react2svelte/image-gallery/ImageGallery.svelte';

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
  import img01t from '$lib/assets/artscights/1_tn.jpg';
  import img02t from '$lib/assets/artscights/2_tn.jpg';
  import img03t from '$lib/assets/artscights/3_tn.jpg';
  import img04t from '$lib/assets/artscights/4_tn.jpg';
  import img05t from '$lib/assets/artscights/5_tn.jpg';
  import img06t from '$lib/assets/artscights/6_tn.jpg';
  import img07t from '$lib/assets/artscights/7_tn.jpg';
  import img08t from '$lib/assets/artscights/8_tn.jpg';
  import img09t from '$lib/assets/artscights/9_tn.jpg';
  import img10t from '$lib/assets/artscights/10_tn.jpg';
  import img11t from '$lib/assets/artscights/11_tn.jpg';
  import img12t from '$lib/assets/artscights/12_tn.jpg';
  import img13t from '$lib/assets/artscights/13_tn.jpg';
  import img14t from '$lib/assets/artscights/14_tn.jpg';

  const images = [
    {
      original: img01,
      thumbnail: img01t,
      description: 'Santiago Ramón y Cajal - Glial cells of the Cerebral Cortex of a Child'
    },
    {
      original: img02,
      thumbnail: img02t,
      description: 'Fabian Oefner - Millefiori'
    },
    {
      original: img03,
      thumbnail: img03t,
      description: 'Kerry Mitchell - Curosity'
    },
    {
      original: img04,
      thumbnail: img04t,
      description: 'Klaus Kemp - The Diatomist'
    },
    {
      original: img05,
      thumbnail: img05t,
      description: 'Michael Pinsky - Pollution Pods'
    },
    {
      original: img06,
      thumbnail: img06t,
      description: 'Jill Pelto - Increasing Forest Fire Activity'
    },
    {
      original: img07,
      thumbnail: img07t,
      description: 'John Gerrad - Solar Reserve'
    },
    {
      original: img08,
      thumbnail: img08t,
      description: 'Rose-Lynn Fisher - Topography of Tears'
    },
    {
      original: img09,
      thumbnail: img09t,
      description: 'Lily Simonson - Painting in the Deep'
    },
    {
      original: img10,
      thumbnail: img10t,
      description: 'Courtney Mattison - Confluence (Our Changing Seas V)'
    },
    {
      original: img11,
      thumbnail: img11t,
      description: 'Beata Edyta Mierzwa - The Final Cut'
    },
    {
      original: img12,
      thumbnail: img12t,
      description: 'Dr Greg Dunn & Dr Brian Edwards - Self Reflected'
    },
    {
      original: img13,
      thumbnail: img13t,
      description: 'John Malik - Phases of the heart'
    },
    {
      original: img14,
      thumbnail: img14t,
      description:
        'Persijn Broersen and Margit Lukács - Shvayg Mayn Harts, 2018 3D-print (PLA), full HD film'
    }
  ];

  let showGallery = false;
  let currentIndex = 0;
  let gallery: ImageGallery;
</script>

<div class="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
  {#each images as image, i}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class="relative cursor-pointer"
      on:click={() => {
        showGallery = true;
        currentIndex = i;
        // Ugly code to make sure that fullScreen() is only called after the gallery is mounted. It would be better
        // to move the gallery into another component that calls fullScreen() as soon as it has been mounted.
        setTimeout(() => gallery.fullScreen(), 50);
      }}
    >
      <img
        src={image.original}
        class="object-cover h-full w-full aspect-square"
        alt={image.description}
      />
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
  <div class="z-20 absolute">
    <ImageGallery
      bind:this={gallery}
      items={images}
      startIndex={currentIndex}
      useBrowserFullscreen={false}
      on:click={() => (showGallery = false)}
      on:screenchange={({ detail }) => (showGallery = detail.fullscreen)}
    />
  </div>
{/if}
