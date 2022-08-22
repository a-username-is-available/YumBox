<script lang='ts'>
    export let name: string,
               level: number
    const meta = import(`../assets/thing/${name}.json`)
    const thing = meta.then(v => import(`../assets/thing/${v.levels[level].src}.png`))
</script>

<span>
    {#await thing then thingImg}
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src={thingImg.default} class='w-8 scale-crisp'>
    {/await}
    
</span>