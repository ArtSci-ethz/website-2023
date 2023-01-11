<script lang="ts">
  import { getContext } from 'svelte';
  import { key } from '$lib/components/Header.ts';
  import type { HeaderContext } from '$lib/components/Header.ts';
  import backgroundImage from '$lib/assets/bg-header-join-and-give.png';
  import sponsorEthzImage from '$lib/assets/sponsor-ethz.png';
  import sponsorSosImage from '$lib/assets/sponsor-sos.png';
  import sponsorUsysImage from '$lib/assets/sponsor-usys.png';
  import ArrowRight from '$lib/components/ArrowRight.svelte';
  import Button from '$lib/components/Button.svelte';
  import ExternalLink from '$lib/components/ExternalLink.svelte';

  const headerContext: HeaderContext = getContext(key);
  headerContext.setHeaderImage(backgroundImage);
  headerContext.setHeaderText(
    'Be part of making our exhibition come to life through partnership and sponsorship with ArtSci 2023.'
  );
</script>

<svelte:head>
  <title>Join & Give | ArtSci</title>
</svelte:head>

<!-- Section 1 -->
<div class="text-xl mt-8 lg:w-1/2 lg:pr-12">
  Partners and sponsors provide crucial support at all stages of the process, making it possible for
  the organization and realization of a two week exhibition at ETH Zurich, complete with workshops,
  talks and festivities.
</div>

<!-- Section 2 -->
<div class="mt-8 grid auto-rows-max gap-4 md:grid-cols-2 md:gap-12 lg:w-1/2 lg:pl-12 lg:ml-auto">
  <div>
    ArtSci provides a platform for inquiry and exchange of science research: for everyone. They say
    a picture is worth a thousand words an we need your help in testing this theory with our annual
    art exhibition about science research.
  </div>
  <div>
    Increased marketing and engagement of students, faculty and the community is possible through
    generous contributions. In reward for such support, partners receive unique and exclusive
    opportunities to engage with the exhibition, ArtSci community and ETH Zurich.
  </div>
</div>

<!-- Brochure -->
<div class="block_with_arrow">
  <h2>Download Brochure</h2>
  <div class="block_with_arrow__arrow">
    <ArrowRight />
  </div>
  <div>
    <a href="/artsci_sponsorship_brochure.pdf"><Button class="w-56">Download</Button></a>
  </div>
</div>

<div class="flex mt-16 gap-16 flex-wrap">
  <!-- Contact -->
  <div class="flex gap-8 flex-wrap flex-1">
    <h2>Contact Us</h2>
    <div>
      <div>Write to us at: artsci.ethz@gmail.com</div>
      <div>Or ring us at: +49-17663440401</div>
    </div>
  </div>

  <!-- Sponsors -->
  <div class="flex flex-wrap flex-1 gap-8">
    <h2>Our Sponsors</h2>
    <div>
      <div>
        <ExternalLink href="https://ethz.ch/en.html"
          ><img alt="ETH Zurich" src={sponsorEthzImage} /></ExternalLink
        >
      </div>
      <div>
        <ExternalLink href="https://usys.ethz.ch/en/"
          ><img
            alt="Department of Environmental Systems Science (D-USYS), ETH Zurich"
            src={sponsorUsysImage}
          /></ExternalLink
        >
      </div>
      <div>
        <ExternalLink href="https://sos.ethz.ch/"
          ><img alt="SOSETH" src={sponsorSosImage} /></ExternalLink
        >
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  h2 {
    @apply font-bold text-3xl sm:font-normal lg:mr-48;
  }

  .block_with_arrow {
    @apply mt-8 md:flex md:flex-row md:items-center;
  }

  .block_with_arrow__arrow {
    @apply hidden md:block md:flex-1 px-8;
  }
</style>
