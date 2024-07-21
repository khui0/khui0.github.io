<script lang="ts">
  import SimpleIconsLinkedin from "~icons/simple-icons/linkedin";
  import SimpleIconsGithub from "~icons/simple-icons/github";
  import SimpleIconsPrintables from "~icons/simple-icons/printables";
  import SimpleIconsThingiverse from "~icons/simple-icons/thingiverse";

  const version: string = import.meta.env.PACKAGE_VERSION;
</script>

<footer class="bg-base-200 p-3 text-xs text-base-content/60">
  <div class="flex flex-col gap-2 mx-auto sm:w-[min(100%,1000px)]">
    <p>Version {version}</p>
    <div class="flex gap-1">
      <a href="https://www.linkedin.com/in/k-hui/" aria-label="LinkedIn">
        <SimpleIconsLinkedin></SimpleIconsLinkedin>
      </a>
      <a href="https://github.com/khui0" aria-label="GitHub"
        ><SimpleIconsGithub></SimpleIconsGithub></a
      >
      <a href="https://www.printables.com/@kenny" aria-label="Printables">
        <SimpleIconsPrintables></SimpleIconsPrintables>
      </a>
      <a href="https://www.thingiverse.com/kennyhui/designs" aria-label="Thingiverse">
        <SimpleIconsThingiverse></SimpleIconsThingiverse>
      </a>
    </div>
    <p>Copyright &copy; 2024 Kenny Hui. All rights reserved.</p>
  </div>
</footer>
