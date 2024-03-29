<script>
  import StarField from "$lib/StarField.svelte";
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
      <p class="py-6 text-neutral-content">
        Hi! I'm a high school student with a passion for coding. Experienced in
        web development, and 3D printing.
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        facilis delectus doloremque fugiat dicta temporibus consequuntur
        perspiciatis ea ab quaerat minus ut fuga, numquam nihil, pariatur
        quibusdam! Quia, molestias sunt.
      </p>
    </div>
    <div class="prose lg:prose-2xl my-auto">
      <h3 class="font-normal">Falcon Report Graphics</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        facilis delectus doloremque fugiat dicta temporibus consequuntur
        perspiciatis ea ab quaerat minus ut fuga, numquam nihil, pariatur
        quibusdam! Quia, molestias sunt.
      </p>
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        facilis delectus doloremque fugiat dicta temporibus consequuntur
        perspiciatis ea ab quaerat minus ut fuga, numquam nihil, pariatur
        quibusdam! Quia, molestias sunt.
      </p>
    </div>
  </div>
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
  <p class="prose lg:prose-2xl">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad culpa minus ex
    eius, neque omnis impedit aperiam corporis deserunt numquam deleniti labore
    distinctio! Accusamus repudiandae modi quis totam ea provident!
  </p>
</div>
