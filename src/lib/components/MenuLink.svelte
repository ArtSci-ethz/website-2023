<script lang="ts">
  import { page } from "$app/stores";

  export let href: string;
  export let text: string;

  let isCurrent: boolean;

  page.subscribe(value => {
    isCurrent = $page.url.pathname === href;
  })
</script>

{#if isCurrent}
<a class="text-black font-bold" href={href}>{text}</a>
{:else}
<a class="text-slate-600" href={href}>{text}</a>  
{/if}