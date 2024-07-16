<script lang="ts">
  import Section from "$lib/components/Section.svelte";
  const description: string =
    "Hi! I'm a student currently studying CS. Experienced in web development and 3D printing.";
</script>

<svelte:head>
  <title>Kenny Hui</title>
  <meta name="description" content={description} />
</svelte:head>

<!-- CONTENT -->
<!-- Flaggle -->
<Section
  title="Flaggle"
  description="The premiere flag guessing game"
  action="Play"
  url="https://kennyhui.dev/flaggle/"
>
  <enhanced:img src="$lib/assets/flaggle-icon-v1.svg" alt="Flaggle icon" class="w-32" />
</Section>
<!-- miniSatsana -->
<Section
  title="miniSatsana"
  description="Light as a feather"
  action="Download"
  url="https://www.printables.com/model/201332"
  dark
  more
>
  <enhanced:img
    src="$lib/assets/mini-satsana.png"
    alt="miniSatsana fan duct"
    class="object-contain max-h-96"
  />
  <span slot="blurb">
    <p>Over 14,000<sup>1</sup> downloads!</p>
    <p>
      Remix of the Satsana fan duct for Creality printers. The main goal was to reduce the size and
      weight, and therefore the time it takes to print. It's compatible with the Ender-3/CR-10 (not
      the Ender-3 V2) and the Elegoo Neptune 2. Supports using either single or double 4010 blower
      fans and has mounting options for a BLTouch probe.
    </p>
    <p><sup>1</sup>Combined data from Thingiverse and Printables</p>
  </span>
</Section>
