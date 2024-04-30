<script lang="ts">
  import DeviconSvelte from "~icons/devicon/svelte";
  import DeviconTailwindcss from "~icons/devicon/tailwindcss";
  import DeviconTypescript from "~icons/devicon/typescript";
  import SimpleIconsLinkedin from "~icons/simple-icons/linkedin";
  import SimpleIconsGithub from "~icons/simple-icons/github";
  import SimpleIconsPrintables from "~icons/simple-icons/printables";
  import SimpleIconsThingiverse from "~icons/simple-icons/thingiverse";

  const version: string = import.meta.env.PACKAGE_VERSION;
</script>

<div class="m-10 prose mx-auto my-5 text-center">
  <div class="grid lg:grid-cols-2">
    <div>
      <p>Built with SvelteKit, Tailwind CSS, and TypeScript</p>
      <div class="grid grid-flow-col gap-3 justify-center text-3xl">
        <DeviconSvelte></DeviconSvelte>
        <DeviconTailwindcss></DeviconTailwindcss>
        <DeviconTypescript></DeviconTypescript>
      </div>
    </div>
    <div>
      <p>You can also find me here</p>
      <div class="grid grid-flow-col gap-3 justify-center text-3xl">
        <a href="https://www.linkedin.com/in/k-hui/" aria-label="LinkedIn"
          ><SimpleIconsLinkedin></SimpleIconsLinkedin></a
        >
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
    </div>
  </div>
  <p>{version}</p>
</div>
