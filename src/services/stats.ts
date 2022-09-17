import { derived, writable } from "svelte/store"
import { things, thingData } from "./things"

export const coins = writable(5)
export const credits = writable(0)

export const coinsPerMinute = derived(things, async $things => {
    const data = await thingData()
    return $things
        .map(thing => data[thing.name].levels[thing.level].earnings)
        .reduce((acc, curr) => acc + curr, 0)
}, Promise.resolve(0))