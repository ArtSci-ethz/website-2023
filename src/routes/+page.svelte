<script lang="ts">
  import ArrowRight from '$lib/components/ArrowRight.svelte';
  import { getContext } from 'svelte';
  import { key } from '$lib/components/Header.ts';
  import type { HeaderContext } from '$lib/components/Header.ts';
  import backgroundImage from '$lib/assets/bg-header-about.png';
  import chaoranImage from '$lib/assets/team-chaoran.png';
  import jooinImage from '$lib/assets/team-jooin.png';
  import linImage from '$lib/assets/team-lin.png';
  import paulineImage from '$lib/assets/team-pauline.png';
  import shwethaImage from '$lib/assets/team-shwetha.png';

  const headerContext: HeaderContext = getContext(key);
  headerContext.setHeaderImage(backgroundImage);
  headerContext.setHeaderText(
    'An exhibition celebrating the intersection of art and science through the artistic expression(s) and communication of science.'
  );

  // Team
  const members: {
    name: string;
    picture: string;
    description: string;
  }[] = [
    {
      name: 'Pauline Béziat',
      description: 'PhD Student, Inorganic Environmental Geochemistry',
      picture: paulineImage
    },
    {
      name: 'Shwetha Manohar',
      description: '',
      picture: shwethaImage
    },
    {
      name: 'Lin Boynton',
      description: 'PhD Student, Global Health Engineering',
      picture: linImage
    },
    {
      name: 'Chaoran Chen',
      description: 'PhD Student, Computational Evolution',
      picture: chaoranImage
    },
    {
      name: 'Jooin Shin',
      description: 'UX & Communication Designer',
      picture: jooinImage
    }
  ];
</script>

<!-- Section 1 -->
<div class="my-4">
  <div class="grid auto-rows-max gap-4 md:grid-cols-2 md:gap-12 lg:grid-cols-4">
    <div>
      To scientists, surfaces are much more than what meets the eye. A surface is a boundary, the
      outermost layer of atoms, something made real by shadows, where light and electrons diffract,
      a biological membrane where enzymes catalyse life-sustaining reactions or the interactive
      interface of a computer connecting us to the virtual world.
    </div>
    <div>
      ArtSci 2023 re-codes and re-thinks the significance of boundaries, inviting people to explore
      what defines a surface – and what lies beyond it. We are the embodiment of the Uncertainty
      Principle – never without science or art, but constantly striving to understand our position
      within both.
    </div>
    <div>
      With ETH as the nucleus, we want to facilitate the diffusion of new conversations, catalyse
      creative and critical thinking and illustrate your research. To get minds and eyes to step
      outside of their comfort zone, the lab or lecture room and to seek the unusual. A place for
      the exchange of ideas, discoveries and beauty: where we challenge the way we think about art
      and science.
    </div>
    <div>
      ArtSci 2023 provides a platform to put the magic boiling in the laboratories at ETH on display
      for everyone: the openness, the creativity and the curiosity of its members minds and of our
      institution. It provides a few motivated, interdisciplinary students the chance to share their
      vision with the scientific community and the general public in what has been one of science’s
      most significant places for over a century.
    </div>
  </div>

  <!-- Section 2 -->
  <div class="text-xl mt-8 lg:w-1/2 lg:pr-12">
    ArtSci (“artsy”) started in 2018 as an idea that science should be accessible to all. At a time
    when our knowledge of the universe ranges from Higgs bosons to collisions of black holes, it is
    important to find creative ways to communicate the magic of new discoveries.
  </div>

  <!-- Section 3 -->
  <div class="mt-8 grid auto-rows-max gap-4 md:grid-cols-2 md:gap-12 lg:w-1/2 lg:pl-12 lg:ml-auto">
    <div>
      In pursuit of this, ArtSci celebrates the intersection of art and science through a two week
      exhibition held at ETH Zurich every spring. This festival is open to everyone — all that is
      needed is a piece (visual, auditory, multimedia, etc) that expresses science in an artistic
      way. It’s really up to the scientists, artists, and the audience, to explore these boundaries
      and we at ArtSci are excited to see what can be achieved in this chiasma of Art+Science.
    </div>
    <div>
      <p>
        The first ArtSci exhibition: La Rencontre took place from 22nd April to 6th May 2018.The
        second ArtSci exhibition: Hémisphères will be held from 29th April to 10th May 2019.
      </p>
      <p class="mt-4">
        ArtSci is also a great opportunity to discover work from other disciplines and network with
        participants from different universities and regions of the world.
      </p>
    </div>
  </div>

  <!-- Section: Get involved! -->
  <div class="mt-8 sm:flex sm:flex-row sm:items-center">
    <h2 class="font-bold text-3xl sm:font-normal mb-4 sm:m-0">Get involved</h2>
    <div class="hidden sm:block sm:flex-1 px-8">
      <ArrowRight />
    </div>
    <a href="/participate"><button>Participate</button></a>
    <a href="/join-and-give"><button>Sponsor</button></a>
  </div>

  <!-- Section: Team -->
  <div class="mt-8">
    <h2 class="font-bold text-3xl md:hidden">Team</h2>
    <div class="md:w-1/2 md:pr-12">
      We are a team of multidisciplinary professions in science and art/design to bring ArtSci to
      life.
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 md:w-3/4 md:pl-12 md:ml-auto place-items-stretch"
    >
      {#each members as member}
        <div>
          <img alt={member.name} src={member.picture} />
          <div class="font-bold">{member.name}</div>
          <div>{member.description}</div>
        </div>
      {/each}
    </div>
  </div>
</div>

<!-- TODO: Team member profiles -->
<style lang="postcss">
  button {
    @apply border-2 border-gray-700 p-2 mx-2;
  }
</style>
