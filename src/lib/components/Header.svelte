<script lang="ts">
  import logo from '$lib/assets/logo.svg';

  export let backgroundImage: string | undefined;
  export let text: string | undefined;
</script>

<header class="w-full h-80 p-4 bg-cover" style="background-image: url({backgroundImage});">
  <div class="flex flex-row justify-between">
    <!-- Logo -->
    <div>
      <img alt="The ArtSci logo" src={logo} />
    </div>

    <!-- Menu -->
    <div>
      <a href="/">About</a>
      <a href="/visit">Visit</a>
      <a href="/participate">Participate</a>
      <a href="/past">Past Exhibitions</a>
      <a href="/join-and-give">Join & Give</a>
    </div>
  </div>

  <!-- Text -->
  <div class="mt-12 float-right mr-4 text-xl">
    {text}
  </div>
</header>

<style>
  .bg {
    width: 100%;
    height: 300px;
  }
</style>
