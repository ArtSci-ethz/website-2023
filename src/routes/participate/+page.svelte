<script lang="ts">
  import { getContext } from 'svelte';
  import { key } from '$lib/components/Header.ts';
  import type { HeaderContext } from '$lib/components/Header.ts';
  import backgroundImage from '$lib/assets/bg-header-participate.png';

  const headerContext: HeaderContext = getContext(key);
  headerContext.setHeaderImage(backgroundImage);
  headerContext.setHeaderText(
    'Submit your artwork to be exhibited in the ArtSci 2023 - Submissions will open soon!'
  );
</script>

<div class="text-3xl text-center my-16">Coming soon...</div>
