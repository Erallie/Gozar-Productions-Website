import { writable } from "svelte/store";



export let barFinalHeight = writable(150);
export let barInitialHeight = writable(500);

export let initialHeightSet = writable(false);