<script lang="ts">
  export let url: string;
  export let reversed: boolean = false;
</script>

<div
  data-aos="fade-right"
  class="flex flex-col gap-5 {reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}"
>
  <div class="flex-1"><slot name="image" /></div>
  <div class="my-auto flex-1">
    <h3 class="font-normal text-5xl lg:text-9xl mb-5"><slot name="title" /></h3>
    <div class="prose lg:prose-xl">
      <p><slot name="body" /></p>
      <a href={url}>Source</a>
    </div>
  </div>
</div>
