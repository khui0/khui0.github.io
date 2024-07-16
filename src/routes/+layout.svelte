<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import NavItems from "$lib/components/NavItems.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<div class="drawer drawer-end">
  <input id="sidebar" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <Header></Header>
    <slot></slot>
    <Footer></Footer>
  </div>
  <div class="drawer-side z-20 sm:hidden">
    <label for="sidebar" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu bg-base-200 min-h-full w-60 p-4">
      <NavItems></NavItems>
    </ul>
  </div>
</div>
