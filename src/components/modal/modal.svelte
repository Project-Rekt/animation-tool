<script>
  import Draggable from "../draggable/draggable.svelte";
</script>

<style lang="scss">
  .modal {
    z-index: 10000;
    background-color: #594ffa;
    color: white;
  }
</style>

<Draggable>
  <div class="modal">
    <slot />
  </div>
</Draggable>
