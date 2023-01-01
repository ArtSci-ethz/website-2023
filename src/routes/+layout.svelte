<script lang="ts">
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import { setContext } from 'svelte';
  import { key } from '$lib/components/Header.ts';
  import type { HeaderContext } from '$lib/components/Header.ts';

  let headerImage: string | undefined = undefined;
  let headerText: string | undefined = undefined;

  // Context
  const context: HeaderContext = {
    setHeaderImage: (newHeaderImage: string) => {
      headerImage = newHeaderImage;
    },
    setHeaderText: (newHeaderText: string) => {
      headerText = newHeaderText;
    }
  };
  setContext(key, context);
</script>

<!-- Header -->
<Header backgroundImage={headerImage} text={headerText} />

<slot />

<style lang="postcss">
  a {
    @apply underline;
  }
</style>
