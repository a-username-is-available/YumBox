<script lang='ts'>
    import Menu from './Menu.svelte'
    import { things } from '../services/things'

    export let x: number,
               y: number,
               name: string,
               level: number
    let importMeta = import(`../routes/assets/thing/${name}.json`)

    let isMenuOpen = false
    const toggleMenu = () => isMenuOpen = !isMenuOpen

    const move = (e: CustomEvent<any>) => {
        const squareThing = $things.find(thing => thing.x === e.detail.x && thing.y === e.detail.y)
        if (squareThing) return
        let thisThing = $things.find(thing => thing.x === x && thing.y === y)
        if (thisThing) [thisThing.x, thisThing.y] = [e.detail.x, e.detail.y];
        [x, y] = [e.detail.x, e.detail.y]
    }

    const del = () => {
        const indexOfThisElement = $things.findIndex(e => e.x == x && e.y == y)

        $things.splice(indexOfThisElement, 1)
        $things = $things // tell svelte this need to be updated
    }
</script>

<span style='grid-column: {x + 1}; grid-row: {y + 1}'>
    {#await importMeta}
        Loading...
    {:then meta}
        <img src='src/routes/assets/thing/{meta?.levels?.[level]?.src}.png' class='w-8 scale-crisp' alt='{name}: lvl. {level}' on:click={toggleMenu}>
    {/await}
</span>

{#if isMenuOpen}
<!-- style='transform: translate({x * 32 + 5}px, {(y - 3) * 32}px);' -->
    <span style='transform: translate({(x - (x > 24 ? 3.5 : -1)) * 32}px, {(y - (y < 5 ? 0 : 2)) * 32}px);'>
        <Menu on:move={move}
              on:delete={del}/>
    </span>
{/if}