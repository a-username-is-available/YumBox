<script lang='ts'>
    import { inventory } from '../services/things'
    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher()

    export let name: string,
               level: number,
               id: number
    const importMeta = import(`../things/pointers/${name}.json`)

    const spawnThing = () => {
        const indexOfThisElement = $inventory.findIndex(e => e.id === id)

        const removedElement = $inventory.splice(indexOfThisElement, 1)
        $inventory = $inventory
        
        dispatch('place', removedElement)
    }
</script>

<span>
    {#await importMeta} 
        Loading...
    {:then meta}
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src='/assets/things/{meta?.levels?.[level]?.src}.png' class='w-8 scale-crisp' on:click={spawnThing}>
    {/await}
</span>