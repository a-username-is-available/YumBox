import { writable, type Writable } from 'svelte/store'

interface Thing {
       name: string
    earning: number
          x: number
          y: number
}
type ThingsType = Thing[]
export const things: Writable<ThingsType> = writable([])