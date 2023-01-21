<script>
  import ExternalLink from '$lib/components/ExternalLink.svelte';
  import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
</script>

<footer class="text-white mt-4 py-6 bg-[#6f735f]">
  <div class="common-width flex flex-row flex-wrap gap-4">
    <div>© ArtSci 2023</div>
    <div class="flex-1" />
    <div class="">
      Visit our <span class="social-media-btn"
        ><ExternalLink href="https://www.facebook.com/ArtSci.ETHZ/">Facebook</ExternalLink></span
      >
    </div>
    <div class="">
      Visit our <span class="social-media-btn"
        ><ExternalLink href="https://twitter.com/artsci_ethz">Twitter</ExternalLink></span
      >
    </div>
    <div class="">
      Visit our <span class="social-media-btn"
        ><ExternalLink href="https://www.instagram.com/artsci.ethz/">Instagram</ExternalLink></span
      >
    </div>
    <div class="w-6">
      <ExternalLink href="https://github.com/ArtSci-ethz"><FaGithub /></ExternalLink>
    </div>
  </div>
</footer>

<style lang="postcss">
  .social-media-btn {
    @apply font-bold underline;
  }
</style>
