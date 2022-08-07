<script lang='ts'>
    export let x: number,
               y: number,
               name: string
    const thing = import(`../assets/thing/${name}.png`)
</script>

<span class='scale-crisp place-self-center'
      style='grid-column: {x}; grid-row: {y}'>
    {#await thing then thingImg}
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src={thingImg.default} class='w-8'>
    {/await}
</span>
