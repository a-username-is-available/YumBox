import { writable, type Writable } from 'svelte/store'

interface Thing {
      name: string
         x: number
         y: number
}
type ThingsType = Thing[]
export const things: Writable<ThingsType> = writable([])