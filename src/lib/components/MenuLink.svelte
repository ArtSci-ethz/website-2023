<script lang="ts">
  import { page } from "$app/stores";

  export let href: string;
  export let text: string;

  let currentClass: string;

  page.subscribe(value => {
    let isCurrent = $page.url.pathname === href;
    currentClass = isCurrent ? 'active' : 'inactive';
  })
</script>

<a href={href}>
  <div class="inline-block relative">
    <div class="{currentClass} w-full text-center absolute">{text}</div>
    <div class="font-bold text-transparent px-1">{text}</div>
  </div>
</a>

<style lang="postcss">
  .active {
    @apply text-black font-bold;
  }

  .inactive {
    @apply text-slate-600;
  }
</style>