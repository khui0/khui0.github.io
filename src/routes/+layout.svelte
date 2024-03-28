<main>
    <slot />
</main>

<style>
    :global(html) {
        @apply scrollbar scrollbar-thumb-base-200 hover:scrollbar-thumb-primary scrollbar-track-transparent;
        font-family: "DM Sans", sans-serif;
    }
</style>
