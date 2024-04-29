<script lang="ts">
  import StarField from "$lib/StarField.svelte";
</script>

<div class="fixed inset-0">
  <StarField></StarField>
</div>
<main class="overflow-x-hidden isolate">
  <slot />
</main>

<style>
  :global(html) {
    @apply scrollbar-thin scrollbar-thumb-base-200 hover:scrollbar-thumb-primary scrollbar-track-transparent;
    font-family: "DM Sans Variable", sans-serif;
  }
</style>
