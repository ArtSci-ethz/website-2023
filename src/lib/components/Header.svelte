<script lang="ts">
  import MenuLink from './MenuLink.svelte';
  import logo from '$lib/assets/logo.svg';

  export let backgroundImage: string | undefined;
  export let text: string | undefined;
</script>

<header class="w-full h-96 p-12 bg-cover" style="background-image: url({backgroundImage});">
  <div class="common-width">
    <div class="flex flex-row justify-between">
      <!-- Logo -->
      <div>
        <img alt="The ArtSci logo" src={logo} />
      </div>

      <!-- Menu -->
      <div class="ml-8 w-8/12 flex flex-row justify-between items-end">
        <MenuLink href="/" text="About" />
        <MenuLink href="/visit" text="Visit" />
        <MenuLink href="/participate" text="Participate" />
        <MenuLink href="/past" text="Past Exhibitions" />
        <MenuLink href="/join-and-give" text="Join & Give" />
      </div>
    </div>

    <!-- Text -->
    <div class="mt-12 float-right mr-4 text-xl">
      {text}
    </div>
  </div>
</header>
