<script lang="ts">
  import Section from "$lib/components/Section.svelte";
  import Grid from "$lib/components/Grid.svelte";

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
  <enhanced:img src="$lib/assets/flaggle-icon-v1.svg" alt="Flaggle icon" class="w-32 mt-10" />
</Section>
<Grid>
  <!-- mini Satsana -->
  <Section
    title="mini Satsana"
    description="Light as a feather"
    action="Download"
    url="https://www.printables.com/model/201332"
    dark
    more
    flipped
  >
    <enhanced:img
      src="$lib/assets/mini-satsana.png"
      alt="miniSatsana fan duct"
      class="object-contain max-h-96"
    />
    <span slot="blurb">
      <p>Over 14,000<sup>1</sup> downloads!</p>
      <p>
        Remix of the Satsana fan duct for Creality printers. The main goal was to reduce the size
        and weight, and therefore the time it takes to print. It's compatible with the Ender-3/CR-10
        (not the Ender-3 V2) and the Elegoo Neptune 2. Supports using either single or double 4010
        blower fans and has mounting options for a BLTouch probe.
      </p>
      <p><sup>1</sup>Combined data from Thingiverse and Printables</p>
    </span>
  </Section>
  <!-- Pico Wheel -->
  <Section
    title="Pico Wheel"
    description="Budget sim racing"
    action="Build"
    url="https://github.com/khui0/pico-wheel"
    dark
    more
    flipped
  >
    <enhanced:img
      src="$lib/assets/pico-wheel.png"
      alt="Pico wheel"
      class="object-contain max-h-96"
    />
    <span slot="blurb">
      <p>
        Low-cost steering wheel designed for PC sim racing. Input is handled using a Raspberry Pi
        Pico and an AS5600 magnetic encoder. The Pico then emulates a gamepad, with the wheel
        rotation mapped to one of the joysticks. The wheel has two paddles that can be configured as
        shifters, accelerator and brake, or anything else. The model is designed in Autodesk Fusion
        and the firmware is written in Arduino.
      </p>
    </span>
  </Section>
</Grid>
