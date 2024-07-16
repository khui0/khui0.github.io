<script lang="ts">
  import Panel from "$lib/components/Panel.svelte";
</script>

<div class="m-10">
  <h2 class="text-5xl mb-10" id="3d-printing">3D Printing</h2>
  <div class="flex flex-col gap-5">
    <Panel url="https://www.printables.com/model/201332">
      <span slot="image">
        <enhanced:img
          src="$lib/assets/mini-satsana.png"
          alt="mini Satsana fan duct"
          class="object-cover"
        />
      </span>
      <span slot="title">mini Satsana</span>
      <span slot="details">
        <h4 class="m-0 text-4xl text-neutral-content">14,000+</h4>
        <p class="text-sm text-neutral-content">
          Downloads on <a href="https://www.thingiverse.com/thing:5139196">Thingiverse</a> and
          <a href="https://www.printables.com/model/201332">Printables</a>
        </p>
      </span>
      <span slot="body">
        Remix of the Satsana fan duct for Creality printers. The main goal was to reduce the size
        and weight, and therefore the time it takes to print. It's compatible with the Ender-3/CR-10
        (not the Ender-3 V2) and the Elegoo Neptune 2. Supports using either single or double 4010
        blower fans and has mounting options for a BLTouch probe.
      </span>
    </Panel>
    <Panel url="https://github.com/khui0/pico-wheel">
      <span slot="image">
        <enhanced:img src="$lib/assets/pico-wheel.png" alt="Pico wheel" class="object-cover" />
      </span>
      <span slot="title">Pico Wheel</span>
      <span slot="body">
        Sim racing wheel I designed when I wanted to play Assetto Corsa but didn't have a wheel.
        Input is handled by emulating a gamepad using a Raspberry Pi Pico and an AS5600 magnetic
        encoder. Two paddles on the rear can be configured as paddle shifters or pedals (or anything
        else). Designed in Autodesk Fusion and the firmware is written in Arduino.
      </span>
    </Panel>
  </div>
  <p class="prose text-center mx-auto my-5">
    <a href="https://www.printables.com/@kenny">More 3D models</a>
  </p>
</div>
