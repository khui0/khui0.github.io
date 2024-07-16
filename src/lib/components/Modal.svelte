<script lang="ts">
  let modal: HTMLDialogElement;

  import LucideX from "~icons/lucide/x";

  export function show() {
    modal.showModal();
  }

  export let title: string;
</script>

<dialog class="modal" bind:this={modal} on:close>
  <div class="modal-box rounded-3xl px-6 py-4">
    <form method="dialog">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-4 top-4" aria-label="Close">
        <LucideX></LucideX>
      </button>
    </form>
    <div class="flex flex-col gap-2">
      <h2 class="font-bold text-2xl self-start">{title}</h2>
      <slot></slot>
    </div>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
