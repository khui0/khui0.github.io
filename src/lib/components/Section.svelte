<script lang="ts">
  export let title: string;
  export let description: string;
  export let action: string;
  export let url: string;
  export let tag: string = "";
  export let dark: boolean = false;
  export let more: boolean = false;
  export let flipped: boolean = false;

  import Modal from "./Modal.svelte";

  let modal: Modal;
</script>

<section
  class="flex flex-col items-center gap-4 relative {dark
    ? 'bg-black text-accent-content'
    : 'bg-base-200'}"
>
  {#if !flipped}
    <slot></slot>
  {/if}
  <h2 class="text-4xl font-bold" class:pt-10={flipped}>{title}</h2>
  <p class="text-lg">{description}</p>
  <div class="flex gap-4" class:pb-10={!flipped}>
    <button
      class="btn btn-accent rounded-full px-6"
      class:hidden={!more}
      aria-label="{action} {title}"
      on:click={modal.show}
    >
      Learn more
    </button>
    <a
      href={url}
      class="btn btn-accent rounded-full px-6"
      aria-label="{action} {title}"
      class:btn-outline={more}
    >
      {action}
    </a>
  </div>
  {#if flipped}
    <slot></slot>
  {/if}
  {#if tag !== ""}
    <span class="badge badge-primary absolute top-0 left-0 m-5 py-3" class:badge-outline={dark}>
      {tag}
    </span>
  {/if}
</section>

<Modal {title} bind:this={modal}>
  <article class="prose">
    <slot name="blurb"></slot>
  </article>
</Modal>
