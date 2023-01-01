<script lang="ts">
  import { getContext } from 'svelte';
  import { key } from '$lib/components/Header.ts';
  import type { HeaderContext } from '$lib/components/Header.ts';
  import backgroundImage from '$lib/assets/bg-header-join-and-give.png';

  const headerContext: HeaderContext = getContext(key);
  headerContext.setHeaderImage(backgroundImage);
  headerContext.setHeaderText(
    'Be part of making our exhibition come to life through partnership and sponsorship with ArtSci 2023.'
  );
</script>

<!-- Section 1 -->
<div>
  Partners and sponsors provide crucial support at all stages of the process, making it possible for
  the organization and realization of a two week exhibition at ETH Zurich, complete with workshops,
  talks and festivities.
</div>

<!-- Section 2 -->
<div>
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
<div>
  <h2>Download Brochure</h2>
  <button>Download</button>
</div>

<!-- Contact -->
<div>
  <h2>Contact Us</h2>
  <div>Write to us at: artsci.ethz@gmail.com</div>
  <div>Or ring us at: +49-17663440401</div>
</div>

<!-- Sponsors -->
<div>
  <h2>Our Sponsors</h2>
  <!-- TODO: logos -->
</div>
