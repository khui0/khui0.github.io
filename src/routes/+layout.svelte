<main>
  <slot />
</main>

<style>
  :global(html) {
    @apply scrollbar-thin scrollbar-thumb-base-200 hover:scrollbar-thumb-primary scrollbar-track-transparent;
    font-family: "DM Sans Variable", sans-serif;
  }
</style>
