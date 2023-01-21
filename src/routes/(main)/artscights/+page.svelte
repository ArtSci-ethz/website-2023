<script lang="ts">
  import { getContext } from 'svelte';
  import { key } from '$lib/components/Header.ts';
  import type { HeaderContext } from '$lib/components/Header.ts';
  import backgroundImage from '$lib/assets/bg-header-visit.png';
  import ArtSciGallery from '$lib/components/ArtSciGallery.svelte';

  import type { list } from 'postcss';

  const headerContext: HeaderContext = getContext(key);
  headerContext.setHeaderImage(backgroundImage);
  headerContext.setHeaderText(
    'ArtSci is kicking off its’ movement of sharing art and making it easily accessible to the community of Art-Science lovers.'
  );
</script>

<svelte:head>
  <title>ArtScights | ArtSci</title>
</svelte:head>

<ArtSciGallery />
