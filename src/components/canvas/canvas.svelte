<script>
  import { canvasImage, doc } from "../../store.js";
  import { onMount } from "svelte";
  import Draggable from "../draggable/draggable.svelte";

  let canvas, ctx;
  onMount(async () => {
    ctx = canvas.getContext("2d");
    canvasImage.subscribe(val => {
      if (val) {
        let image = new Image();
        image.addEventListener(
          "load",
          () => {
            canvas.width = image.width;
            canvas.height = image.height;
            canvas.style.width = image.width + "px";
            canvas.style.height = image.height + "px";
            doc.update(d =>
              Object.assign(d, { width: image.width, height: image.height })
            );
            ctx.drawImage(image, 0, 0);
          },
          { once: true }
        );
        image.src = val;
      }
    });

    doc.subscribe(d => {
      //canvas.width = d.width;
      //canvas.height = d.height;
      canvas.style.width = d.width + "px";
      canvas.style.height = d.height + "px";

      canvasImage.update(canvasImage => canvasImage);
    });
  });
</script>

<style>
  canvas {
    background-color: white;
    width: 400px;
    height: 400px;
  }
</style>

<Draggable x={window.innerWidth / 2 - 200} y={window.innerHeight / 2 - 200}>
  <canvas bind:this={canvas} />
</Draggable>
