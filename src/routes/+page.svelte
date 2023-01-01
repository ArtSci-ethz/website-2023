<script lang="ts">
  import { getContext } from 'svelte';
  import { key } from '$lib/components/Header.ts';
  import type { HeaderContext } from '$lib/components/Header.ts';
  import backgroundImage from '$lib/assets/bg-header-visit.png';

  const headerContext: HeaderContext = getContext(key);
  headerContext.setHeaderImage(backgroundImage);
  headerContext.setHeaderText(
    'An exhibition celebrating the intersection of art and science through the artistic expression(s) and communication of science.'
  );
</script>

<h1>This is the index</h1>
<p>go look at the <a href="/about">about page</a>.</p>
