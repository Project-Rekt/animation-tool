<script>
  export let title = "Animation-Tool";
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700&display=swap");
  :global(body) {
    padding: 0;
  }
</style>

<!-- Default Layout Wrapper -->
<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{title}</title>
</svelte:head>
<slot />
