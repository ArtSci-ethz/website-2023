<button class={$$props.class}><slot /></button>

<style lang="postcss">
  button {
    @apply border-2 border-gray-700 p-2 mx-2 hover:bg-gray-200 uppercase font-medium;
  }
</style>
