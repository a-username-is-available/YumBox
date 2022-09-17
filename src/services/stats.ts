import { derived, writable, type Writable } from "svelte/store"
import { things, thingData } from "./things"
import { bindStoreToLocalStorage } from "./util"

export const coins = writable(Number(localStorage.getItem('coins') ?? 5))
export const credits = writable(Number(localStorage.getItem('credits') ?? 0))
bindStoreToLocalStorage('coins', coins)
bindStoreToLocalStorage('credits', credits)

export const coinsPerMinute = derived(things, async $things => {
    const data = await thingData()
    return $things
        .map(thing => data[thing.name].levels[thing.level].earnings)
        .reduce((acc, curr) => acc + curr, 0)
}, Promise.resolve(0))