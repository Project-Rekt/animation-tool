<script>
  import Draggable from "../draggable/draggable.svelte";
</script>

<style>
    .toolbox {
        width: 300px;
        height: 500px;
        
        background-color: purple;
        color: white;
    }
</style>

<Draggable x={0} y={20}>
    <div class="toolbox">
        <h1>Toolbox</h1>
    </div>
</Draggable>
