<script lang="ts">
  import { onMount } from "svelte";
  import AOS from "aos";

  onMount(() => {
    AOS.init();
  });

  const description: string =
    "Hi! I'm a student currently studying CS. Experienced in web development and 3D printing.";
</script>

<svelte:head>
  <title>Kenny Hui</title>
  <meta name="description" content={description} />
</svelte:head>

<!-- CONTENT -->