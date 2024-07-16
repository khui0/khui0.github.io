<script>
  import Panel from "$lib/components/Panel.svelte";
</script>

<div class="m-10">
  <h2 class="text-5xl mb-10" id="web-development">Web Development</h2>
  <div class="flex flex-col gap-5">
    <Panel url="https://github.com/khui0/virtual-clicker">
      <span slot="image">
        <enhanced:img
          src="$lib/assets/virtual-clicker.png"
          alt="Virtual Clicker"
          class="object-cover"
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
          class="object-cover"
        />
      </span>
      <span slot="title">Falcon Report Graphics</span>
      <span slot="body">
        A graphics creation suite for my school's media club, The Falcon Report. Used to
        semi-automate the creation of repetitive graphics each week. Built with SvelteKit + Tailwind
        CSS.
      </span>
    </Panel>
    <Panel url="https://github.com/khui0/bell-tracker">
      <span slot="image">
        <enhanced:img src="$lib/assets/bell-tracker.png" alt="Bell tracker" class="object-cover" />
      </span>
      <span slot="title">Bell Tracker</span>
      <span slot="body">
        Live progress bar for my school's bell. Can be used to keep track of the current period in
        the event of a delayed opening, remote learning, or for new students to learn the bell
        schedule. Built with Svelte + Tailwind CSS.
      </span>
    </Panel>
  </div>
  <p class="prose text-center mx-auto my-5">
    <a href="https://github.com/khui0">More web projects</a>
  </p>
</div>
