<script lang="ts">
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import { setContext } from 'svelte';
  import { key } from '$lib/components/Header.ts';
  import type { HeaderContext } from '$lib/components/Header.ts';
  import Footer from '$lib/components/Footer.svelte';

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

<div class="max-w-[1500px] mx-auto">
  <slot />
</div>

<Footer />

<style lang="postcss">
  a {
    @apply underline;
  }
</style>
