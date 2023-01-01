<script lang="ts">
  import { getContext } from 'svelte';
  import { key } from '$lib/components/Header.ts';
  import type { HeaderContext } from '$lib/components/Header.ts';
  import backgroundImage from '$lib/assets/bg-header-about.png';

  const headerContext: HeaderContext = getContext(key);
  headerContext.setHeaderImage(backgroundImage);
  headerContext.setHeaderText(
    'ArtSci 2023 is expected to exhibit on the 5th of October - 25th of October, 2023. '
  );
</script>

<h1>This is the about page</h1>

<p>Go back to the <a href="/">index</a></p>
.
