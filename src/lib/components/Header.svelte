<script lang="ts">
  import logo from '$lib/assets/logo.svg';

  export let backgroundImage: string | undefined;
</script>

<header class="w-full">
  <!-- Logo -->
  <div>
    <img alt="The ArtSci logo" src={logo} />
  </div>

  <!-- Background image -->
  <div>
    <img class="bg" alt="The ArtSci logo" src={backgroundImage} />
  </div>

  <!-- Menu -->
  <div class="ml-auto">
    <a href="/">Index</a>
    <a href="/about">About</a>
  </div>
</header>

<style>
  .bg {
    width: 100%;
    height: 200px;
  }
</style>
