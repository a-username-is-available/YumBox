import { writable, type Writable } from 'svelte/store'

export interface Thing {
    name: string
    earnings: number
    x: number
    y: number
}
export const things: Writable<Thing[]> = writable([{
    name: 'grass',
    earnings: 10, // make this read from the json file and cache it here
    x: 5,
    y: 20,
}])

export type ThingResult = 'ChangePosition'
                        | 'Delete'