<script lang="ts">
  import logo from '$lib/assets/logo.svg';

  export let backgroundImage: string | undefined;
  export let text: string | undefined;
</script>

<header class="w-full relative">
  <!-- Background image -->
  <img class="bg" alt="Background" src={backgroundImage} />

  <!-- Logo -->
  <div class="absolute top-4 left-4">
    <img alt="The ArtSci logo" src={logo} />
  </div>

  <!-- Menu -->
  <div class="absolute top-4 right-4">
    <a href="/">Index</a>
    <a href="/about">About</a>
  </div>

  <!-- Text -->
  <div class="absolute top-24 right-12 text-xl">
    {text}
  </div>
</header>

<style>
  .bg {
    width: 100%;
    height: 300px;
  }
</style>
