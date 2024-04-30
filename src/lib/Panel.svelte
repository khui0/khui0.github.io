<script lang="ts">
  export let url: string;
  export let reversed: boolean = false;
</script>

<div
  data-aos={!reversed ? "fade-right" : "fade-left"}
  class="flex flex-col gap-5 {reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}"
>
  <div class="flex-1 aspect-video rounded-lg overflow-hidden"><slot name="image" /></div>
  <div class="my-auto flex-1">
    <h3 class="font-normal text-5xl mb-5"><slot name="title" /></h3>
    <div class="prose">
      <div><slot name="details"></slot></div>
      <p><slot name="body" /> <a href={url}>Source</a></p>
    </div>
  </div>
</div>
