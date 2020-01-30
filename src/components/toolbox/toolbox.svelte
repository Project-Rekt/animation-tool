<script>
  import Draggable from "../draggable/draggable.svelte";

  let tools = [
    {
      name: "Select",
      icon: "assets/tool-icons/select.png",
      description: "Rectangle Selection",
      action: () => {console.log("Hello World!")}
    },
    {
      name: "Move",
      icon: "assets/tool-icons/move.png",
      description: "Move Selection"
    },
    {
      name: "Resize",
      icon: "assets/tool-icons/resize.png",
      description: "Resize Selection"
    },
  ];
</script>

<style lang="scss">
  .toolbox {
    width: 100px;
    height: 500px;

    background-color: #594ffa;
    color: white;

    border: 1px solid black;

    .tools-list {
      background-color: white;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }

    .tool {
      position: relative;
      max-width: 40px;
      max-height: 40px;
      padding: 5px;

      margin: 0;
      background: none;
      border: none;
      border-radius: 0;

      img {
        max-width: 30px;
        max-height: 30px;
      }
    }

    .tool-tip {
      user-select: none;
      z-index: 100;
      position: absolute;
      padding: 5px;
      bottom: -30px;
      left: 30px;
      display: none;
      background-color: white;
      color: black;
      border: 1px solid black;
    }

    .tool:hover > .tool-tip {
      display: block;
    }
  }

  .title {
    margin: 20px 0;
    text-align: center;
  }
</style>

<Draggable
  x={0}
  y={40}
  style={{ 'z-index': 100, 'box-shadow': '10px 10px 31px 1px rgba(0,0,0,0.37)' }}>
  <div class="toolbox">
    <p class="title">Toolbox</p>
    <div class="tools-list">
      {#each tools as tool}
        <button class="tool" on:click={tool.action}>
          <img src={tool.icon} />
          <p class="tool-tip">{tool.description}</p>
        </button>
      {/each}
    </div>
  </div>
</Draggable>
