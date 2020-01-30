<script>
  import ClickOutside from "svelte-click-outside";
  import {canvasImage, view} from "../../store.js";
  let loader;

  let tabs = [
    {
      name: "File",
      list: [
        {
          name: "New Project",
          action: () => {
            console.log("Hello WOrld!");
          }
        },
        {
          name: "Open Project",
          action: () => {
            console.log("Hello WOrld!");
          }
        },
        {
          name: "Save Project"
        },
        {
          name: "Import File",
          action: async () => {
            loader.click();
            let reader = new FileReader();
            let target = await new Promise((res, rej) => {
              loader.addEventListener("change", e => {
                res(e.target);
              }, {once: true});
            });
            reader.readAsDataURL(target.files[0]);
            reader.onload = (event) => {
              canvasImage.update(src => event.target.result);
            }
          }
        }
      ]
    },
    {
      name: "Edit",
      list: [
        {
          name: "Undo"
        },
        {
          name: "Redo"
        },
        {
          name: "Cut"
        },
        {
          name: "Copy"
        },
        {
          name: "Paste"
        }
      ]
    },
    {
      name: "View",
      list: [
        {
          name: "Color Palette"
        },
        {
          name: "Toolbox",
          action: () => {
            view.update((v) => 
               Object.assign(v, {toolbox: !v.toolbox})
            );
          }
        }
      ]
    }
  ];

  let current = tabs[0].list[0].name;
</script>

<style lang="scss">
  $highlighted: #3f51b5;
  $bg-color: #594ffa;
  $fg-color: white;

  input {
    display: none;
  }

  .toolbar {
    position: fixed;
    top: 0;
    width: 100%;
    height: 30px;
    z-index: 1000;

    background-color: $bg-color;
    color: $fg-color;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .tabs {
    margin-left: 10px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .tab {
    height: 100%;
    padding: 0 10px;
    margin: 0 5px;
    background: none;
    border: none;
    border-radius: 0;
    color: $fg-color;
  }

  .tab p {
    padding: 0;
    margin: 0;
    font-size: 14px;
  }

  .tab:hover {
    background-color: $highlighted;
  }

  .list {
    padding: 5px 0 0 0;
    width: 200px;
    position: absolute;
    margin-top: 6px;
    display: none;
    background-color: $bg-color;
    color: $fg-color;
    text-align: left;
    box-shadow: 10px 10px 31px 1px rgba(0, 0, 0, 0.37);
  }

  .tab .list.expand {
    display: block;
  }

  .list-item {
    width: 100%;
    padding: 0 5px;
    height: 25px;

    margin: 3px 0;
    border: none;
    border-radius: 0;
    background: none;
    color: $fg-color;

    border-bottom: 1px solid $fg-color;
    display: flex;
    * {
      margin: auto 0;
    }
  }

  .list-item:hover {
    background-color: $highlighted;
  }
</style>

<ClickOutside
  on:clickoutside={() => {
    current = '';
  }}>
  <div class="toolbar">
    <input type="file" bind:this={loader} />
    <div class="tabs">
      {#each tabs as tab}
        <button
          class="tab"
          on:click={() => {
            if (current == tab.name) {
              current = '';
            } else {
              current = tab.name;
            }
          }}
          on:mouseover={() => {
            if (current) {
              current = tab.name;
            }
          }}>
          <p>{tab.name}</p>
          <div class={current === tab.name ? 'list expand' : 'list'}>
            {#each tab.list as li}
              <button class="list-item" on:click={li.action}>
                <p>{li.name}</p>
              </button>
            {/each}
          </div>
        </button>
      {/each}
    </div>
  </div>
</ClickOutside>
