<script lang="ts">
  export let url: string;
  export let reversed: boolean = false;
</script>

<div class="flex flex-col gap-5 {reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}">
  <div class="flex-1"><slot name="image" /></div>
  <div class="prose lg:prose-2xl my-auto flex-1">
    <h3 class="font-normal"><slot name="title" /></h3>
    <p><slot name="body" /></p>
    <a href={url}>Source</a>
  </div>
</div>
