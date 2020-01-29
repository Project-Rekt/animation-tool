<script>
  import Layout from "../components/layout/layout.svelte";
  import Toolbar from "../components/toolbar/toolbar.svelte";
  import Draggable from "../components/draggable/draggable.svelte";
  import Toolbox from "../components/toolbox/toolbox.svelte";
</script>

<style lang="scss">
  $bg-color: #f2f0f0;
  * {
    font-family: "Nanum Gothic", sans-serif;
    font-weight: 500;
  }

  :global(body) {
    background-color: $bg-color;
  }
</style>

<Layout title="Editor">
  <Toolbar />
  <Toolbox/>
</Layout>
