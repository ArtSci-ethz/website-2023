<script>
  import ExternalLink from '$lib/components/ExternalLink.svelte';
  import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
</script>

<footer class="text-white mt-4 py-6 bg-[#6f735f]">
  <div class="common-width flex flex-row flex-wrap gap-4">
    <div>© ArtSci 2023</div>
    <div class="flex-1" />
    <div class="">
      Visit our <ExternalLink href="https://www.facebook.com/ArtSci.ETHZ/">Facebook</ExternalLink>
    </div>
    <div class="">
      Visit our <ExternalLink href="https://twitter.com/artsci_ethz">Twitter</ExternalLink>
    </div>
    <div class="">
      Visit our <ExternalLink href="https://www.instagram.com/artsci.ethz/">Instagram</ExternalLink>
    </div>
    <div class="w-6">
      <ExternalLink href="https://github.com/ArtSci-ethz"><FaGithub /></ExternalLink>
    </div>
  </div>
</footer>

<style lang="postcss">
  a {
    @apply font-bold underline;
  }
</style>
