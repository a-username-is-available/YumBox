<script lang='ts'>
    import Menu from './Menu.svelte'
    import { things } from '../services/things'

    export let x: number,
               y: number,
               name: string,
               level: number
    const meta = import(`../assets/thing/${name}.json`)
    const thing = meta.then(v => import(`../assets/thing/${v.levels[level].src}.png`))

    let isMenuOpen = false
    const toggleMenu = () => isMenuOpen = !isMenuOpen

    const move = (e: CustomEvent<any>) => [x, y] = [e.detail.x, e.detail.y]
    const del = () => {
        const indexOfThisElement = $things.findIndex(e => e.x == x && e.y == y)

        $things = $things.splice(indexOfThisElement, 1)
    }
</script>

<span style='grid-column: {x}; grid-row: {y}'>
    {#await thing then thingImg}
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src={thingImg.default} class='w-8 scale-crisp' on:click={toggleMenu}>
    {/await}
    
</span>

{#if isMenuOpen}
    <span style='transform: translate({x * 32 + 5}px, {(y - 3) * 32}px);'>
        <Menu on:move={move}
              on:delete={del}/>
    </span>
{/if}