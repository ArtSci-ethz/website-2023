<script lang="ts">
  import '../app.css';
  import backgroundImage from '$lib/assets/bg-landing.png';
  import logo from '$lib/assets/logo_white.svg';
</script>

<div
  class="text-white text-xl md:text-5xl lg:text-7xl xl:text-[4vw] w-screen h-screen bg-cover bg-center flex flex-col items-center"
  style="background-image: url({backgroundImage});"
>
  <img alt="ArtSci logo" src={logo} class="max-h-[50vh] pt-[20vh] px-16" />
  <div class=" mt-16 mx-8">ArtSci – Coming in 2023</div>
  <div class="mt-16 self-end mr-8 md:mr-[10vw]"><a href="/about">Enter</a></div>
</div>

<style lang="postcss">
</style>
