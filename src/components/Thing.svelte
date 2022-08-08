<script lang='ts'>
    export let x: number,
               y: number,
               name: string
    const thing = import(`../assets/thing/${name}.png`)

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
