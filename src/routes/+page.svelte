<script>
  import StarField from "$lib/StarField.svelte";
  import DeviconSvelte from "~icons/devicon/svelte";
  import DeviconTailwindcss from "~icons/devicon/tailwindcss";
  import DeviconTypescript from "~icons/devicon/typescript";
  import SimpleIconsGithub from "~icons/simple-icons/github";
  import SimpleIconsPrintables from "~icons/simple-icons/printables";
  import SimpleIconsThingiverse from "~icons/simple-icons/thingiverse";
</script>

<svelte:head>
  <title>Kenny Hui</title>
</svelte:head>

<div class="hero min-h-screen bg-base-100 relative">
  <div class="absolute inset-0">
    <StarField></StarField>
  </div>
  <div class="hero-content text-center">
    <div class="max-w-xl">
      <h1
        class="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary to-secondary"
      >
        Kenny Hui
      </h1>
      <p class="py-6 text-neutral-content text-lg">
        Hi! I'm a high school student with a passion for coding and computers.
        Experienced in web development, and 3D printing.
      </p>
    </div>
  </div>
</div>

<div class="m-10">
  <h2 class="text-5xl" id="web-development">Web Development</h2>
  <p class="text-neutral-content my-5">
    Some of my work for the World Wide Web
  </p>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
    <enhanced:img
      src="$lib/assets/virtual-clicker.png"
      alt="Virtual Clicker"
      class="object-cover rounded-lg"
    />
    <div class="prose lg:prose-2xl my-auto">
      <h3 class="font-normal">Virtual Clicker</h3>
      <p>
        Room 233's student response system. Allows students to answer questions
        in real time. Includes 15+ themes, LaTeX input, and submission history.
        Written in vanilla JS, HTML, and CSS.
      </p>
      <a href="https://github.com/khui0/virtual-clicker">Source</a>
    </div>
    <div class="prose lg:prose-2xl my-auto">
      <h3 class="font-normal">Falcon Report Graphics</h3>
      <p>
        A collection of graphics generators for my school's AV club, The Falcon
        Report. Customizable and consistent. Built with SvelteKit, Tailwind CSS,
        and daisyUI.
      </p>
      <a href="https://github.com/khui0/fr-graphics">Source</a>
    </div>
    <enhanced:img
      src="$lib/assets/fr-graphics.png"
      alt="Falcon Report Graphics generator"
      class="object-cover rounded-lg"
    />
    <enhanced:img
      src="$lib/assets/bell-tracker.png"
      alt="Bell tracker"
      class="object-cover rounded-lg"
    />
    <div class="prose lg:prose-2xl my-auto">
      <h3 class="font-normal">Bell Tracker</h3>
      <p>
        Live progress bar for my school's bell. Allows you to easily keep track
        of the period and time left. Built with Svelte, Tailwind CSS, and
        daisyUI.
      </p>
      <a href="https://github.com/khui0/bell-tracker">Source</a>
    </div>
  </div>
  <p class="prose lg:prose-2xl text-center mx-auto my-5">
    <a href="https://github.com/khui0">More</a>
  </p>
</div>

<div class="m-10">
  <h2 class="text-5xl" id="3d-printing">3D Printing</h2>
  <p class="text-neutral-content my-5">
    3D models I've designed in Autodesk Fusion
  </p>
  <enhanced:img
    src="$lib/assets/mini-satsana.png"
    alt="mini Satsana fan duct"
    class="max-w-lg w-full mx-auto object-center"
  />
  <h3 class="font-normal text-5xl lg:text-9xl">mini Satsana</h3>
  <div class="stat px-0">
    <div class="stat-title">Downloads</div>
    <div class="stat-value">5,000+</div>
    <div class="stat-desc">
      Combined data from <a href="https://www.thingiverse.com/thing:5139196"
        >Thingiverse</a
      >
      and
      <a href="https://www.printables.com/model/201332">Printables</a>
    </div>
  </div>
  <div class="prose lg:prose-2xl">
    <p>
      Remix of the popular Satsana fan duct for Creality printers. Aims to
      reduce unnecessary weight and size while improving compatibility. It's
      compatible with the Ender-3/CR-10 (not the Ender-3 V2) and the Elegoo
      Neptune 2. Allows using either one or two 4010 blower fans and has
      mounting options for a BLTouch probe.
    </p>
    <a href="https://www.printables.com/model/201332">Download</a>
  </div>
  <enhanced:img
    src="$lib/assets/pico-wheel.png"
    alt="Pico wheel"
    class="max-w-lg w-full mx-auto object-center"
  />
  <h3 class="font-normal text-5xl lg:text-9xl text-right">Pico Wheel</h3>
  <div class="prose lg:prose-2xl ml-auto text-right">
    <p>
      Desk mounted sim racing wheel designed to be cheap to build. Uses a
      Raspberry Pi Pico and an AS5600 magnetic encoder. Has two paddles which
      can be binded to act as paddle shifters or pedals. Model is designed in
      Autodesk Fusion and the firmware is written in Arduino.
    </p>
    <a href="https://github.com/khui0/pico-wheel">Source</a>
  </div>
  <p class="prose lg:prose-2xl text-center mx-auto my-5">
    <a href="https://www.printables.com/@kenny">More</a>
  </p>
</div>

<div class="m-10">
  <enhanced:img
    src="$lib/assets/profile.png"
    alt="Profile picture"
    class="max-w-xs w-[50%] mx-auto object-center rounded-full"
  />
  <div class="prose lg:prose-xl mx-auto my-5 text-center">
    <p>
      This site is built with SvelteKit, Tailwind CSS, daisyUI, and TypeScript
    </p>
    <div class="grid grid-flow-col gap-3 justify-center text-3xl">
      <DeviconSvelte></DeviconSvelte>
      <DeviconTailwindcss></DeviconTailwindcss>
      <DeviconTypescript></DeviconTypescript>
    </div>
    <p>You can find more of my work here</p>
    <div class="grid grid-flow-col gap-3 justify-center text-3xl">
      <a href="https://github.com/khui0" class="w-fit"
        ><SimpleIconsGithub></SimpleIconsGithub></a
      >
      <a href="https://www.printables.com/@kenny" class="w-fit"
        ><SimpleIconsPrintables></SimpleIconsPrintables></a
      >
      <a href="https://www.thingiverse.com/kennyhui/designs" class="w-fit"
        ><SimpleIconsThingiverse></SimpleIconsThingiverse></a
      >
    </div>
  </div>
</div>
