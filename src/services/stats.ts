import { derived, writable, type Writable } from "svelte/store";
import { things, type Thing } from "./things";

export const coins = writable(0)
export const credits = writable(0)

export const coinsPerMinute = derived(things, $things => {
    return $things
        .map(t => t.earnings)
        .reduce((acc, cur) => acc + cur, 0)
})