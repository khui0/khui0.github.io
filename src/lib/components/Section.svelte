<script lang="ts">
  export let title: string;
  export let description: string;
  export let action: string;
  export let url: string;
  export let dark: boolean = false;
  export let more: boolean = false;

  import Modal from "./Modal.svelte";

  let modal: Modal;
</script>

<section
  class="flex flex-col items-center gap-5 p-10 mb-3 {dark
    ? 'bg-black text-accent-content'
    : 'bg-base-200'}"
>
  <slot></slot>
  <h2 class="text-4xl font-bold">{title}</h2>
  <p class="text-lg">{description}</p>
  <div class="flex gap-4">
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
</section>

<Modal {title} bind:this={modal}>
  <article class="prose">
    <slot name="blurb"></slot>
  </article>
</Modal>
