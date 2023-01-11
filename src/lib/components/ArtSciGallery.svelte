<script lang="ts">
  import ImageGallery from '@react2svelte/image-gallery/ImageGallery.svelte';
  import FaHome from 'svelte-icons/fa/FaHome.svelte';

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
      description: 'Santiago Ramón y Cajal - Glial cells of the Cerebral Cortex of a Child',
      url: 'https://www.nytimes.com/2018/01/18/arts/design/brain-neuroscience-santiago-ramon-y-cajal-grey-gallery.html'
    },
    {
      original: img02,
      thumbnail: img02t,
      description: 'Fabian Oefner - Millefiori',
      url: 'https://fabianoefner.com/'
    },
    {
      original: img03,
      thumbnail: img03t,
      description: 'Kerry Mitchell - Curosity',
      url: 'http://www.kerrymitchellart.com/gallery30/curiosity.html'
    },
    {
      original: img04,
      thumbnail: img04t,
      description: 'Klaus Kemp - The Diatomist',
      url: 'https://vimeo.com/90160649'
    },
    {
      original: img05,
      thumbnail: img05t,
      description: 'Michael Pinsky - Pollution Pods',
      url: 'https://www.somersethouse.org.uk/whats-on/michael-pinsky-pollution-pods'
    },
    {
      original: img06,
      thumbnail: img06t,
      description: 'Jill Pelto - Increasing Forest Fire Activity',
      url: 'https://www.jillpelto.com/increasing-forest-fire-activity'
    },
    {
      original: img07,
      thumbnail: img07t,
      description: 'John Gerrad - Solar Reserve',
      url: 'http://www.johngerrard.net/solar-reserve.html'
    },
    {
      original: img08,
      thumbnail: img08t,
      description: 'Rose-Lynn Fisher - Topography of Tears',
      url: 'https://www.smithsonianmag.com/science-nature/the-microscopic-structures-of-dried-human-tears-180947766/#7pLRo8sO4kUDw3lQ.41'
    },
    {
      original: img09,
      thumbnail: img09t,
      description: 'Lily Simonson - Painting in the Deep',
      url: 'https://hmnh.harvard.edu/file/986586'
    },
    {
      original: img10,
      thumbnail: img10t,
      description: 'Courtney Mattison - Confluence (Our Changing Seas V)',
      url: 'https://courtneymattison.com/confluence/#itemId=5bc57d81e79c7018651d5fd2'
    },
    {
      original: img11,
      thumbnail: img11t,
      description: 'Beata Edyta Mierzwa - The Final Cut',
      url: 'http://www.beatascienceart.com/'
    },
    {
      original: img12,
      thumbnail: img12t,
      description: 'Dr Greg Dunn & Dr Brian Edwards - Self Reflected',
      url: 'https://www.youtube.com/watch?v=V5F7snIJ-is'
    },
    {
      original: img13,
      thumbnail: img13t,
      description: 'John Malik - Phases of the heart',
      url: 'https://pratt.duke.edu/about/news/heart-phase-image-takes-top-prize-2018-envisioning-invisible-contest'
    },
    {
      original: img14,
      thumbnail: img14t,
      description:
        'Persijn Broersen and Margit Lukács - Shvayg Mayn Harts, 2018 3D-print (PLA), full HD film',
      url: 'https://www.foam.org/events/persijn-broersen-margit-lukacs'
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
          <!-- The hover color is a color that is also present in the header image -->
          <div
            class="w-6 h-6 absolute right-2 bottom-2 text-white hover:text-[#a3ac8c]"
            on:click={(e) => e.stopPropagation()}
          >
            <a href={image.url} target="_blank"><FaHome /></a>
          </div>
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
