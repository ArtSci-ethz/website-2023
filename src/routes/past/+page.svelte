<script lang="ts">
  import { getContext } from 'svelte';
  import { key } from '$lib/components/Header.ts';
  import type { HeaderContext } from '$lib/components/Header.ts';
  import backgroundImage from '$lib/assets/bg-header-past.png';

  const headerContext: HeaderContext = getContext(key);
  headerContext.setHeaderImage(backgroundImage);
  headerContext.setHeaderText(
    'ArtSci has presented 2 exhibitions in the past with countless artworks from all over the world.'
  );
</script>

<div>
  <h2>ArtSci 2019 – Hémisphères</h2>
  <div>
    A master of arts, a bachelor of sciences, independently undertaken in a studio or in a lab. The
    natural sciences have traditionally been kept apart from the arts, enclosed in a sterile space
    where anything missing a reference and a standard solution has no right to exist. And it is the
    same story in the artistic realm: how can a detailed display of an insect wing qualify as art,
    if it is simply a reproduction of what nature has created? No colour in my lab, no science on my
    palette.
  </div>
  <div>
    Like the phenolphthalein in acid-base titrations, we celebrate the colours in laboratories. Like
    the inspiration firing through neuronal synapses formulating an output on the canvas, we
    celebrate the science splatters on the palette. At ArtSci we celebrate the intersection of Art
    and Science.
  </div>
  <div>
    Hémisphères, the second edition in the ArtSci exhibition series, invites the viewer to cross the
    corpus callosum. Traveling from right to left and black to white creates matter that is anything
    but grey, matter that matters. Walk with us and leave the borders behind, rejoice in the
    primordial soup of what life has to offer and be inspired. ArtSci – Hémipshères presents
    artscience not from a country, but from both of the world’s hemispheres, waiting for you here at
    ETH.
  </div>
  <button>PAST SUBMISSIONS</button>
</div>

<div>
  <h2>ArtSci 2018 – La Rencontre</h2>
  <div>
    Where Art and Science meet – La Rencontre – was the inaugural exhibition of ArtSci. Newly
    founded in October 2017, ArtSci for the first time celebrated the art science interface at ETH
    Zürich in April 2018 with this two week exhibition. La Rencontre took place at the green floor
    at the ETH CHN building, showcasing the work of more than 35 art-scientists from Germany,
    Switzerland, France and the US. The exhibit was accompanied by a range of events, made possible
    thanks to our collaborators and supporters.
  </div>
  <div>
    Special thanks go to Chiara and the Art Science Collaborative for their awesome workshops, the
    Technorama museum Zürich for their hospitality and Miriam Martinovic and the Fine Art Collective
    for amazing support both with materials and leading a workshop in person. We also would like to
    thank Dr. Emily Scott and Christoff Kuefer for their intriguing talks and of course Peter and
    Urs from SOSETH, Gabrielle Attinger from D-USYS and Gazmed Halimi for their never-ending
    logistical support.
  </div>
  <div>
    We were overwhelmed by the amount of marvelous submissions received for La Rencontre. Please
    refer to our gallery to take a look at what ArtSci 2018 had to offer and be inspired – perhaps
    for your own submission, this year at ArtSci 2019 Hémisphères? Although ArtSci is no competition
    but a peaceful, egalitarian festival of what we call our passion, we would like to highlight
    three of La Rencontre’s submissions that were awarded a special prize from our partners at the
    Fine Art Collective and Boesner.
  </div>
  <button>PAST SUBMISSIONS</button>
</div>
