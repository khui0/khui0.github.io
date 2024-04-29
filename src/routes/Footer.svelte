<script lang="ts">
  import DeviconSvelte from "~icons/devicon/svelte";
  import DeviconTailwindcss from "~icons/devicon/tailwindcss";
  import DeviconTypescript from "~icons/devicon/typescript";
  import SimpleIconsGithub from "~icons/simple-icons/github";
  import SimpleIconsPrintables from "~icons/simple-icons/printables";
  import SimpleIconsThingiverse from "~icons/simple-icons/thingiverse";

  const version: string = import.meta.env.PACKAGE_VERSION;
</script>

<div class="m-10" data-aos="fade-right">
  <div class="prose mx-auto my-5 text-center">
    <p>This site is built with SvelteKit, Tailwind CSS, daisyUI, and TypeScript</p>
    <div class="grid grid-flow-col gap-3 justify-center text-3xl">
      <DeviconSvelte></DeviconSvelte>
      <DeviconTailwindcss></DeviconTailwindcss>
      <DeviconTypescript></DeviconTypescript>
    </div>
    <p>You can find more of my work here</p>
    <div class="grid grid-flow-col gap-3 justify-center text-3xl">
      <a href="https://github.com/khui0" aria-label="GitHub"
        ><SimpleIconsGithub></SimpleIconsGithub></a
      >
      <a href="https://www.printables.com/@kenny" aria-label="Printables"
        ><SimpleIconsPrintables></SimpleIconsPrintables></a
      >
      <a href="https://www.thingiverse.com/kennyhui/designs" aria-label="Thingiverse"
        ><SimpleIconsThingiverse></SimpleIconsThingiverse></a
      >
    </div>
    <p>{version}</p>
  </div>
</div>
