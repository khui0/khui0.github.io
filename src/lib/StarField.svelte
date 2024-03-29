<script lang="ts">
  import { onMount } from "svelte";

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;

  let centerX: number;
  let centerY: number;

  let width: number;

  let last: number;

  const STAR_COUNT: number = 500;

  const stars: Star[] = [];

  class Star {
    constructor() {
      this.#setup();
    }

    #setup() {
      this.x = random(-centerX, centerX);
      this.y = random(-centerY, centerY);
      this.maxRadius = random(1, 10) * (width / 1500);

      this.progress = random(1, width);
      this.speed = random(1, 5) * 5;
      this.width = width;

      this.opacity = 0;
      // Fade duration in ms
      this.fade = 500;
    }

    draw(deltaT: number) {
      if (!deltaT) return;

      // Reset values if star is out of frame
      if (this.progress > 0) {
        this.progress -= this.speed / deltaT;
      } else {
        this.#setup();
      }

      // Fade in star
      if (this.opacity < 1) {
        this.opacity += deltaT / this.fade;
        this.opacity = clamp(this.opacity, 0, 1);
      }

      // Map x and y to the ratio of position and progress
      const x = map(this.x / this.progress, 0, 1, 0, this.width);
      const y = map(this.y / this.progress, 0, 1, 0, this.width);

      // Inversely map radius to progress
      this.radius = clamp(
        map(this.progress, 0, this.width, this.maxRadius, 0),
        0,
        Infinity,
      );

      // Draw circle
      ctx.beginPath();
      ctx.arc(x, y, this.radius, 0, Math.PI * 2, false);
      ctx.closePath();
      ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
      ctx.fill();
    }
  }

  onMount(() => {
    ctx = canvas.getContext("2d");
    setup();
    window.requestAnimationFrame(update);
  });

  function setup() {
    for (let i = 0; i < STAR_COUNT; i++) {
      const star = new Star();
      stars.push(star);
    }
  }

  function update(timestamp: DOMHighResTimeStamp) {
    if (isVisible(canvas)) {
      resize(canvas);
      const deltaT: number = timestamp - last;
      last = timestamp;

      ctx.translate(centerX, centerY);
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.draw(deltaT);
      }
      ctx.translate(-centerX, -centerY);
    }

    window.requestAnimationFrame(update);
  }

  function resize(canvas: HTMLCanvasElement) {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    centerX = rect.width / 2;
    centerY = rect.height / 2;
    width = canvas.width;
  }

  function isVisible(element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect();
    return rect.bottom > 0;
  }

  function random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
  }

  function map(
    current: number,
    inMin: number,
    inMax: number,
    outMin: number,
    outMax: number,
  ): number {
    return ((current - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  }
</script>

<canvas bind:this={canvas} class="w-full h-full bg-black"></canvas>
