<script lang='ts'>
    import { inventory } from '../services/things'

    export let name: string,
               level: number
    const meta = import(`../assets/thing/${name}.json`)
    const thing = meta.then(v => import(`../assets/thing/${v.levels[level].src}.png`))

    const spawnThing = () => {
        // we don't need to know which element exactly it is
        const indexOfThisElement = $inventory.findIndex(e => e.name === name && e.level === level)

        $inventory.splice(0)
        $inventory = $inventory
    }
</script>

<span>
    {#await thing then thingImg}
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src={thingImg.default} class='w-8 scale-crisp' on:click={spawnThing}>
    {/await}
</span>