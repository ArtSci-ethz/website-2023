<script lang="ts">
  import OffcanvasNavItem from '$lib/components/OffcanvasNavItem.svelte';

  export let show: boolean;
  export let onClose: () => void;
</script>

<!-- Gray and transparent layer -->
{#if show}
  <div class="h-full fixed bg-black bg-opacity-60 w-screen top-0 left-0 z-10" on:click={onClose} />
{/if}

<!-- The actual menu -->
<div
  class="h-full bg-white bg-opacity-100 fixed offcanvas-nav z-20 top-0 w-[80vw] transition-all duration-500 {show
    ? 'left-0'
    : 'left-[-100vw]'}"
>
  <div
    class="divide-y-2 divide-gray-300 divide-solid border-t-2 border-b-2 border-gray-300 border-solid"
  >
    <OffcanvasNavItem on:click={() => onClose()} href="/about" text="About" />
    <OffcanvasNavItem on:click={() => onClose()} href="/visit" text="Visit" />
    <OffcanvasNavItem on:click={() => onClose()} href="/participate" text="Participate" />
    <OffcanvasNavItem on:click={() => onClose()} href="/past" text="Past Exhibitions" />
    <OffcanvasNavItem on:click={() => onClose()} href="/join-and-give" text="Join & Give" />
  </div>
</div>
