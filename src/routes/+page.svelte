<script>
  import StarField from "$lib/StarField.svelte";
  import DeviconSvelte from "~icons/devicon/svelte";
  import DeviconTailwindcss from "~icons/devicon/tailwindcss";
  import DeviconTypescript from "~icons/devicon/typescript";
  import SimpleIconsGithub from "~icons/simple-icons/github";
  import SimpleIconsPrintables from "~icons/simple-icons/printables";
  import SimpleIconsThingiverse from "~icons/simple-icons/thingiverse";

  import WebDevPanel from "$lib/WebDevPanel.svelte";

  import { onMount } from "svelte";
  import AOS from "aos";

  onMount(() => {
    AOS.init();
  });
</script>

<svelte:head>
  <title>Kenny Hui</title>
  <meta
    name="description"
    content="Hi! I'm a high school student with a passion for programming and computers. Experienced in web development and 3D printing."
  />
</svelte:head>

<div class="hero min-h-screen bg-base-100 relative">
  <div class="absolute inset-0">
    <StarField></StarField>
  </div>
  <div class="hero-content text-center">
    <div class="max-w-xl">
      <h1
        class="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-primary to-secondary drop-shadow-glow"
      >
        Kenny Hui
      </h1>
      <p class="py-6 text-neutral-content">
        Hi! I'm a high school student with a passion for programming and computers. Experienced in
        web development and 3D printing.
      </p>
    </div>
  </div>
</div>

<div class="m-10">
  <h2 class="text-5xl" id="web-development">Web Development</h2>
  <p class="text-neutral-content my-5">Some of my work found on the World Wide Web</p>
  <div class="flex flex-col gap-5">
    <WebDevPanel url="https://github.com/khui0/virtual-clicker">
      <span slot="image">
        <enhanced:img
          src="$lib/assets/virtual-clicker.png"
          alt="Virtual Clicker"
          class="object-cover rounded-lg"
        />
      </span>
      <span slot="title">Virtual Clicker</span>
      <span slot="body">
        Room 233's student response system. Allows students to answer questions in real time.
        Includes 15+ themes, LaTeX input, and submission history. Written in vanilla JS, HTML, and
        CSS.
      </span>
    </WebDevPanel>
    <WebDevPanel url="https://github.com/khui0/fr-graphics" reversed>
      <span slot="image">
        <enhanced:img
          src="$lib/assets/fr-graphics.png"
          alt="Falcon Report Graphics"
          class="object-cover rounded-lg"
        />
      </span>
      <span slot="title">Falcon Report Graphics</span>
      <span slot="body">
        A collection of graphics generators for my school's AV club, The Falcon Report. Customizable
        and consistent. Built with SvelteKit + Tailwind CSS.
      </span>
    </WebDevPanel>
    <WebDevPanel url="https://github.com/khui0/bell-tracker">
      <span slot="image">
        <enhanced:img
          src="$lib/assets/bell-tracker.png"
          alt="Bell tracker"
          class="object-cover rounded-lg"
        />
      </span>
      <span slot="title">Bell Tracker</span>
      <span slot="body">
        Live progress bar for my school's bell. Allows you to easily keep track of the period and
        time left. Built with Svelte + Tailwind CSS.
      </span>
    </WebDevPanel>
  </div>
  <p class="prose text-center mx-auto my-5">
    <a href="https://github.com/khui0">More web projects</a>
  </p>
</div>

<div class="m-10">
  <h2 class="text-5xl" id="3d-printing">3D Printing</h2>
  <p class="text-neutral-content my-5">3D models I've designed in Autodesk Fusion</p>
  <enhanced:img
    src="$lib/assets/mini-satsana.png"
    alt="mini Satsana fan duct"
    class="max-w-lg w-full mx-auto object-center mb-5"
  />
  <h3 data-aos="fade-right" class="font-normal text-5xl lg:text-9xl">mini Satsana</h3>
  <div data-aos="fade-right" class="stat px-0 mb-5">
    <div class="stat-title">Downloads</div>
    <div class="stat-value">5,000+</div>
    <div class="stat-desc">
      Combined data from <a href="https://www.thingiverse.com/thing:5139196">Thingiverse</a>
      and
      <a href="https://www.printables.com/model/201332">Printables</a>
    </div>
  </div>
  <div data-aos="fade-right" class="prose">
    <p>
      Remix of the popular Satsana fan duct for Creality printers. Aims to reduce unnecessary weight
      and size while improving compatibility. It's compatible with the Ender-3/CR-10 (not the
      Ender-3 V2) and the Elegoo Neptune 2. Allows using either one or two 4010 blower fans and has
      mounting options for a BLTouch probe. <a href="https://www.printables.com/model/201332"
        >Download</a
      >
    </p>
  </div>
  <enhanced:img
    src="$lib/assets/pico-wheel.png"
    alt="Pico wheel"
    class="max-w-lg w-full mx-auto object-center mb-5"
  />
  <h3 data-aos="fade-left" class="font-normal text-5xl lg:text-9xl lg:text-right mb-5">
    Pico Wheel
  </h3>
  <div data-aos="fade-left" class="prose ml-auto lg:text-right">
    <p>
      Desk mounted sim racing wheel designed to be cheap to build. Uses a Raspberry Pi Pico and an
      AS5600 magnetic encoder. Has two paddles which can be configured to act as paddle shifters or
      pedals. Model is designed in Autodesk Fusion and the firmware is written in Arduino. <a
        href="https://github.com/khui0/pico-wheel">Source</a
      >
    </p>
  </div>
  <p class="prose text-center mx-auto my-5">
    <a href="https://www.printables.com/@kenny">More 3D models</a>
  </p>
</div>

<div class="m-10">
  <enhanced:img
    src="$lib/assets/profile.png"
    alt="Profile"
    class="max-w-48 w-[50%] mx-auto object-center rounded-full"
  />
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
  </div>
</div>
