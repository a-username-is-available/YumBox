import { browser } from "$app/env"
import { writable, type Writable } from "svelte/store"

export const my = writable(0)
export const mx = writable(0)

export const bindStoreToLocalStorage = (name: string, store: Writable<any>) => {
    if (browser) store.subscribe(val => localStorage.setItem(name, JSON.stringify(val)))
}