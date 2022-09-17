import { writable, type Writable } from 'svelte/store'
import thingsList from '../things/things.json'
import { bindStoreToLocalStorage } from './util'

export interface Thing {
    name: string
    level: number
    x: number
    y: number
}

export const things: Writable<Thing[]> = 
    writable(JSON.parse(localStorage.getItem('things') ?? '[]')) // could do the array of arrays thingy but im too lazy
                                                                 // someone please make a pr to fix this
                                                                 // the code will be so slowwwwww
bindStoreToLocalStorage('things', things)

export type ThingResult = 'move'
                        | 'delete'
                        | 'lvlup'

export type InvThing = {
    name: string
    level: number
    id: number
}

export const inventory: Writable<InvThing[]> = 
    writable(JSON.parse(localStorage.getItem('inventory') ?? '[]'))
bindStoreToLocalStorage('inventory', inventory)

export interface ThingData {
    description: string
    levels: {
        cost: number
        earnings: number
        src: string
    }[]
}

let thingDataMemo: { [key: string]: ThingData } = {}
export const thingData = async () => {
    if (Object.keys(thingDataMemo).length > 0) return thingDataMemo
    
    for (let name of thingsList) {
        thingDataMemo[name] = await import(`../things/pointers/${name}.json`)
    }
 
    return thingDataMemo
}