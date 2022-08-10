<script lang='ts'>
    export let x: number,
               y: number,
               name: string,
               level: number
    const meta = import(`../assets/thing/${name}.json`)
    meta.then(v => console.log(v.levels[0]))
    const thing = meta.then(v => import(`../assets/thing/${v.levels[level].src}.png`))

    function openMenu() {

    }
</script>

<span style='grid-column: {x}; grid-row: {y}'
      on:click={openMenu}>
    {#await thing then thingImg}
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src={thingImg.default} class='w-8 scale-crisp'>
    {/await}
</span>
