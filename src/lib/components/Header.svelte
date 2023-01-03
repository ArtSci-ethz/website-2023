<script lang="ts">
  import MenuLink from './MenuLink.svelte';
  import logo from '$lib/assets/logo_black.svg';
  import OffcanvasNav from '$lib/components/OffcanvasNav.svelte';
  import TiThMenu from 'svelte-icons/ti/TiThMenu.svelte';

  export let backgroundImage: string | undefined;
  export let text: string | undefined;

  let showOffcanvas = false;
</script>

<header
  class="w-full h-96 pb-12 bg-cover bg-left-bottom"
  style={backgroundImage ? `background-image: url(${backgroundImage});` : ''}
>
  <div class="common-width">
    <div class="flex flex-row justify-between">
      <!-- Logo -->
      <div>
        <a href="/"><img alt="The ArtSci logo" src={logo} /></a>
      </div>

      <!-- Menu -->
      <div class="hidden ml-8 w-8/12 md:flex flex-row justify-between items-end">
        <MenuLink href="/about" text="About" />
        <MenuLink href="/visit" text="Visit" />
        <MenuLink href="/participate" text="Participate" />
        <MenuLink href="/past" text="Past Exhibitions" />
        <MenuLink href="/join-and-give" text="Join & Give" />
      </div>

      <!-- Mobile off-canvas menu opener button -->
      <button
        on:click={() => {
          showOffcanvas = true;
        }}
        class="outline-none border-solid border border-gray-400 p-1 rounded-lg md:hidden w-8 h-8"
      >
        <TiThMenu />
      </button>
    </div>

    <!-- Text -->
    {#if text}
      <div class="mt-12 float-right mr-4 text-xl">
        {text}
      </div>
    {/if}
  </div>
</header>

<OffcanvasNav
  show={showOffcanvas}
  onClose={() => {
    showOffcanvas = false;
  }}
/>
