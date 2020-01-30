import {writable} from "svelte/store";

let canvasImage = writable("");
let view = writable({
    toolbox: true
});

export {canvasImage, view};