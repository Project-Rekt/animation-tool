<script>
  import { onMount } from "svelte";
  let drag;
  export let x, y;
  export let style;
  let ox, oy;

  function handleMove(e) {
    x = e.clientX;
    y = e.clientY;

    Object.assign(drag.style, { top: y - oy + "px", left: x - ox + "px" });
  }

  function handleClick(e) {
    let bounds = drag.getBoundingClientRect();
    ox = e.clientX - bounds.x;
    oy = e.clientY - bounds.y;
    //start movement listener
    window.addEventListener("mousemove", handleMove);
    //start end listener
    window.addEventListener("mouseup", function() {
      window.removeEventListener("mousemove", handleMove);
    });
  }

  onMount(() => {
    let bounds = drag.getBoundingClientRect();
    //default center
    if(!x && !y) {
      x = window.innerWidth/2 - bounds.width;
      y = window.innerHeight/2 - bounds.height/2;
    }

    //mount styles
    Object.assign(drag.style, style);
    
    drag.addEventListener("mousedown", handleClick);
    if (!x || !y) {
      if (!x) x = bounds.x;
      if (!y) y = bounds.y;
    }
    Object.assign(drag.style, {
      position: "fixed",
      top: y + "px",
      left: x + "px"
    });
  });
</script>

<div bind:this={drag} class="draggable">
  <slot />
</div>
