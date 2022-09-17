<script lang='ts'>
    import { createEventDispatcher } from 'svelte'
    import { scale } from 'svelte/transition'
    import { mx, my } from '../services/util'
    import { onDestroy } from 'svelte'
    import type { ThingResult } from '../services/things'

    const dispatch: (msg: ThingResult, details?: object) => void = createEventDispatcher()

    const mousePosToCoord = (val: number) => Math.ceil(val / 32) - 1

    let interval: NodeJS.Timer | undefined

    const move = () => interval = setInterval(() => dispatch('move', { x: mousePosToCoord($mx), y: mousePosToCoord($my) - 1 }), 100)
    const del = () => dispatch('delete')
    const lvlup = () => dispatch('lvlup')

    function confirmMove() {
        clearInterval(interval ?? undefined)
        interval = undefined
    }

    onDestroy(confirmMove)

</script>

<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,100,0,0" />
</svelte:head>

<div class='p-2 pr-4 w-fit rounded bg-dark text-white font-light flex gap-1 flex-col relative' 
     transition:scale='{{ duration: 200 }}'>
    <button class='flex gap-1' on:click={move}>
        <span class='material-symbols-outlined'>Open_With</span>
        Move
    </button>

    <button class='flex gap-1' on:click={lvlup}>
        <span class='material-symbols-outlined'>Bar_Chart</span>
        Lv. Up
    </button>

    <button class='flex gap-1 text-red-500' on:click={del}>
        <span class='material-symbols-outlined'>Delete</span>
        Delete
    </button>
</div>