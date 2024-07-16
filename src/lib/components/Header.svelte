<script lang="ts">
  import NavItems from "./NavItems.svelte";

  import LucideMenu from "~icons/lucide/menu";
</script>

<header class="sticky top-0 z-10 navbar bg-base-100/75 backdrop-blur-md">
  <div class="flex-1">
    <a class="text-xl px-4 active:scale-95 transition-transform" href="/">kennyhui.dev</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1 hidden sm:flex">
      <NavItems></NavItems>
    </ul>
    <label for="sidebar" aria-label="open sidebar" class="btn btn-ghost btn-sm sm:hidden">
      <LucideMenu></LucideMenu>
    </label>
  </div>
</header>
