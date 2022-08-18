<script lang='ts'>
    import Menu from "./Menu.svelte"

    export let x: number,
               y: number,
               name: string,
               level: number
    const meta = import(`../assets/thing/${name}.json`)
    // meta.then(v => console.log(v.levels[0]))
    const thing = meta.then(v => import(`../assets/thing/${v.levels[level].src}.png`))

    let isMenuOpen = false
    function toggleMenu() {
        isMenuOpen = !isMenuOpen
    }

    function changeLocation(e: {x: number; y: number}) {
        [x, y] = [e.x, e.y]
    }
</script>

<span style='grid-column: {x}; grid-row: {y}'>
    {#await thing then thingImg}
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src={thingImg.default} class='w-8 scale-crisp' on:click={toggleMenu} on:message={changeLocation}>
    {/await}
    
</span>

{#if isMenuOpen}
    <span style='transform: translate({x * 32 + 5}px, {(y - 3) * 32}px);'>
        <Menu/>
    </span>
{/if}