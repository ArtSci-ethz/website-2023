<script lang="ts">
  import { getContext } from 'svelte';
  import { key } from '$lib/components/Header.ts';
  import type { HeaderContext } from '$lib/components/Header.ts';
  import backgroundImage from '$lib/assets/bg-header-visit.png';

  const headerContext: HeaderContext = getContext(key);
  headerContext.setHeaderImage(backgroundImage);
  headerContext.setHeaderText(
    'ArtSci 2023 is expected to exhibit on the 5th of October - 25th of October, 2023. '
  );
</script>

<svelte:head>
  <title>Visit | ArtSci</title>
</svelte:head>

<h1>Exhibition location</h1>

<div>ETH CHN Universitätstrasse 16, 8006 Zürich</div>

<!-- TODO: Map -->
