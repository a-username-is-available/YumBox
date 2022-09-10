<script lang='ts'>
    import { inventory } from '../services/things'
    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher()

    export let name: string,
               level: number,
               id: number
    const importMeta = import(`../assets/thing/${name}.json`)
    // const thing = meta.then(v => import(`../assets/thing/${v.levels[level].src}.png`))

    const spawnThing = () => {
        const indexOfThisElement = $inventory.findIndex(e => e.id === id)

        const removedElement = $inventory.splice(indexOfThisElement, 1)
        setTimeout(() => $inventory = $inventory, 0)

        dispatch('place', removedElement)
    }
</script>

<span>
    {#await importMeta} 
        Loading...
    {:then meta}
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src='src/assets/thing/{meta?.levels?.[level]?.src}.png' class='w-8 scale-crisp' on:click={spawnThing}>
    {/await}
</span>