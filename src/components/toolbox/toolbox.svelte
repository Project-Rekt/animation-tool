<script>
  import Draggable from "../draggable/draggable.svelte";
</script>

<style lang="scss">
    .toolbox {
        width: 300px;
        height: 500px;
        
        background-color: purple;
        color: white;
        
        h1 {
            margin: 0;
        }
    }
</style>

<Draggable x={0} y={40} style={{'z-index': 100, 'box-shadow': '10px 10px 31px 1px rgba(0,0,0,0.37)'}}>
    <div class="toolbox">
        <h1>Toolbox</h1>
    </div>
</Draggable>
