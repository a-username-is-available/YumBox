import { writable, type Writable } from 'svelte/store'

interface Thing {
    name: string
    earnings: number
    x: number
    y: number
}
export const things: Writable<Thing[]> = writable([])