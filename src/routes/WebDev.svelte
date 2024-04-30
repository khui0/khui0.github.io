<script>
  import Panel from "$lib/Panel.svelte";
</script>

<div class="m-10">
  <h2 class="text-5xl" id="web-development">Web Development</h2>
  <p class="text-neutral-content my-5">Some of my work found on the World Wide Web</p>
  <div class="flex flex-col gap-5">
    <Panel url="https://github.com/khui0/virtual-clicker">
      <span slot="image">
        <enhanced:img
          src="$lib/assets/virtual-clicker.png"
          alt="Virtual Clicker"
          class="object-cover rounded-lg"
        />
      </span>
      <span slot="title">Virtual Clicker</span>
      <span slot="body">
        My school's student response system at room 233. Enables students to answer questions in
        real time. Includes 15+ themes, LaTeX input, and submission history. Written in vanilla JS,
        HTML, and CSS.
      </span>
    </Panel>
    <Panel url="https://github.com/khui0/fr-graphics">
      <span slot="image">
        <enhanced:img
          src="$lib/assets/fr-graphics.png"
          alt="Falcon Report Graphics"
          class="object-cover rounded-lg"
        />
      </span>
      <span slot="title">Falcon Report Graphics</span>
      <span slot="body">
        A graphics creation suite for my school's AV club, The Falcon Report. Customizable and
        consistent. Built with SvelteKit + Tailwind CSS.
      </span>
    </Panel>
    <Panel url="https://github.com/khui0/bell-tracker">
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
    </Panel>
  </div>
  <p class="prose text-center mx-auto my-5">
    <a href="https://github.com/khui0">More web projects</a>
  </p>
</div>
