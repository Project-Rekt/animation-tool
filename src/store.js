import {writable} from "svelte/store";

let canvasImage = writable("");
let view = writable({
    toolbox: true
});

let doc = writable({
    width: 400,
    height: 400
});

export {doc, canvasImage, view};