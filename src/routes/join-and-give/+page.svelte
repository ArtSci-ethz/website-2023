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

<h1>This is the Join & Give page</h1>

<p>Go back to the <a href="/">index</a></p>
.
