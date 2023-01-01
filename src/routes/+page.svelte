<script lang="ts">
  import { getContext } from 'svelte';
  import { key } from '$lib/components/Header.ts';
  import type { HeaderContext } from '$lib/components/Header.ts';
  import backgroundImage from '$lib/assets/bg-header-about.png';

  const headerContext: HeaderContext = getContext(key);
  headerContext.setHeaderImage(backgroundImage);
  headerContext.setHeaderText(
    'An exhibition celebrating the intersection of art and science through the artistic expression(s) and communication of science.'
  );
</script>

<!-- Section 1 -->
<div>
  <div>
    To scientists, surfaces are much more than what meets the eye. A surface is a boundary, the
    outermost layer of atoms, something made real by shadows, where light and electrons diffract, a
    biological membrane where enzymes catalyse life-sustaining reactions or the interactive
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
    outside of their comfort zone, the lab or lecture room and to seek the unusual. A place for the
    exchange of ideas, discoveries and beauty: where we challenge the way we think about art and
    science.
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
<div>
  ArtSci (“artsy”) started in 2018 as an idea that science should be accessible to all. At a time
  when our knowledge of the universe ranges from Higgs bosons to collisions of black holes, it is
  important to find creative ways to communicate the magic of new discoveries.
</div>

<!-- Section 3 -->
<div>
  <div>
    In pursuit of this, ArtSci celebrates the intersection of art and science through a two week
    exhibition held at ETH Zurich every spring. This festival is open to everyone — all that is
    needed is a piece (visual, auditory, multimedia, etc) that expresses science in an artistic way.
    It’s really up to the scientists, artists, and the audience, to explore these boundaries and we
    at ArtSci are excited to see what can be achieved in this chiasma of Art+Science.
  </div>
  <div>
    The first ArtSci exhibition: La Rencontre took place from 22nd April to 6th May 2018.The second
    ArtSci exhibition: Hémisphères will be held from 29th April to 10th May 2019. ArtSci is also a
    great opportunity to discover work from other disciplines and network with participants from
    different universities and regions of the world.
  </div>
</div>

<!-- Section: Get involved! -->
<div>
  <h2>Get involved</h2>
  <a href="/participate">Participate</a>
  <a href="/join-and-give">Sponsor</a>
</div>

<!-- Section: Team -->
<div>
  We are a team of multidisciplinary professions in science and art/design to bring ArtSci to life.
</div>

<!-- TODO: Team member profiles -->
