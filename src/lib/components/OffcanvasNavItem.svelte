<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let href: string;
  export let text: string;

  const dispatch = createEventDispatcher();
</script>

<a {href} on:click={() => dispatch('click')}>
  <div class="h-12 flex items-center">
    <div class="pl-4">{text}</div>
  </div>
</a>
