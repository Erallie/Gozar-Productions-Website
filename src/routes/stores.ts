import { writable } from "svelte/store";



export let barFinalHeight = writable(150);
// let barFinalHeight = $state(150);
export let barInitialHeight = writable(500);