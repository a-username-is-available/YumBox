<script lang='ts'>
    import Menu from './Menu.svelte'
    import { things, thingData } from '../services/things'
    import { coins } from '../services/stats'

    export let x: number,
               y: number,
               name: string,
               level: number
    let importMeta = thingData()

    let isMenuOpen = false
    const toggleMenu = () => isMenuOpen = !isMenuOpen

    const move = (e: CustomEvent<any>) => {
        const squareThing = $things.find(thing => thing.x === e.detail.x && thing.y === e.detail.y)
        if (squareThing) return

        const thisThingIndex = $things.findIndex(thing => thing.x === x && thing.y === y)
        // if (thisThing) [thisThing.x, thisThing.y] = [e.detail.x, e.detail.y]; <- cannot do this bc it won't trigger localStorage update
        if (thisThingIndex !== -1) {
            $things[thisThingIndex].x = e.detail.x
            $things[thisThingIndex].y = e.detail.y
        }
        [x, y] = [e.detail.x, e.detail.y]
    }

    const del = () => {
        const indexOfThisElement = $things.findIndex(e => e.x == x && e.y == y)

        $things.splice(indexOfThisElement, 1)
        $things = $things // tell svelte this need to be updated
    }

    const lvlup = () => {
        isMenuOpen = false
        importMeta.then(meta => {
            const cost = meta[name].levels?.[level + 1]?.cost
            
            if (!cost) return alert(`There are no more levels left.`)
            const coinsAfter = $coins - cost
            if (coinsAfter < 0) return alert(`You don't have enough coins!`)

            if (!confirm(`Buy for ${cost} coins?`)) return
            $coins = coinsAfter
            const thisElement = $things.findIndex(e => e.x == x && e.y == y)
            $things[thisElement].level = level + 1
            level++
        })
    }
</script>

<span style='grid-column: {x + 1}; grid-row: {y + 1}'>
    {#await importMeta}
        Loading...
    {:then meta}
        <img src='/assets/things/{meta?.[name]?.levels?.[level]?.src}.png' class='w-8 scale-crisp' alt='{name}: lvl. {level}' on:click={toggleMenu}>
    {/await}

    {#if isMenuOpen}
              <!-- style='transform: translate({(x - (x > 24 ? 4 : -1)) * 32}px, {(y - (y < 5 ? 0 : 2)) * 32}px);'> -->
        <span class='absolute'
              style='transform: translate({(x > 24 ? -3 : 1) * 32}px, {(y < 5 ? -1 : -3) * 32}px);'>
            <Menu on:move={move}
                  on:delete={del}
                  on:lvlup={lvlup}/>
        </span>
    {/if}
</span>