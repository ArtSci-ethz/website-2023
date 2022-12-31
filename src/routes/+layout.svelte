<script>
  import '../app.css';
  import logo from '$lib/assets/logo.svg';
</script>
<!-- Header for all pages -->
<div class="flex flex-row m-4 items-center">
  <!-- Logo -->
  <img alt="The ArtSci logo" src="{logo}" />
  <!-- Menu -->
  <div class="ml-auto">
    <a href="/">Index</a>
    <a href="/about">About</a>
  </div>
</div>

<slot />

<style lang="postcss">
  a {
    @apply underline
  }
</style>
