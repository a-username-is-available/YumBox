import { writable, type Writable } from "svelte/store";

export const coins: Writable<number> = writable(0)
export const credits: Writable<number> = writable(0)