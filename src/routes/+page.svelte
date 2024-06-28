<script lang="ts">
  import Hero from "./Hero.svelte";
  import WebDev from "./WebDev.svelte";
  import Printing from "./Printing.svelte";
  import Footer from "./Footer.svelte";

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

<Hero {description}></Hero>
<WebDev></WebDev>
<Printing></Printing>
<Footer></Footer>
