<script>
  import { canvasImage } from "../../store.js";
  import { onMount } from "svelte";
  let canvas, ctx;
  onMount(() => {
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
            ctx.drawImage(image, 0, 0);
          },
          { once: true }
        );
        image.src = val;
      }
    });
  });
</script>

<style>
  canvas {
    background-color: white;
    width: 400px;
    height: 400px;

    position: fixed;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>

<canvas bind:this={canvas} />
