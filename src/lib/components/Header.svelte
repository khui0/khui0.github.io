<script lang="ts">
  import NavItems from "./NavItems.svelte";

  import LucideMenu from "~icons/lucide/menu";
</script>

<header class="sticky top-0 z-10 sm:p-3">
  <div
    class="flex items-center mx-auto sm:w-[min(100%,1000px)] bg-base-100/80 backdrop-blur-lg sm:rounded-box"
  >
    <div class="flex-1">
      <a class="font-thin text-xl px-4 active:scale-95 transition-transform" href="/">
        kennyhui.dev
      </a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-2 hidden sm:flex">
        <NavItems></NavItems>
      </ul>
      <label
        for="sidebar"
        aria-label="open sidebar"
        class="btn btn-ghost btn-sm mx-1 my-2 sm:hidden"
      >
        <LucideMenu></LucideMenu>
      </label>
    </div>
  </div>
</header>
