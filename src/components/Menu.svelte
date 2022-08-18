<script lang='ts'>
    import { createEventDispatcher } from 'svelte'
    import { scale } from 'svelte/transition'
    import { mx, my } from '../services/util'
    import type { ThingResult } from '../services/things'
    const dispatch = createEventDispatcher()
    const pass = (msg: ThingResult, details?: object) => dispatch('message', { type: msg, ...details})

    const mousePosToCoord = (val: number) => Math.floor(val / 32)
    let isInMovingState = false
    let interval
    function move() {
        isInMovingState = true
        interval = setInterval(() => dispatch('move', { x: mousePosToCoord($mx), y: mousePosToCoord($my) }))
    }

</script>

<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,100,0,0" />
</svelte:head>

<div class='p-2 pr-4 w-fit rounded bg-dark text-white font-light flex gap-1 flex-col' 
     transition:scale='{{ duration: 200 }}'>
    <button class='flex gap-1' on:click={move}>
        <span class='material-symbols-outlined'>Open_With</span>
        Move x:{$mx / 32} y:{$my / 32}
    </button>

    <button class='flex gap-1'>
        <span class='material-symbols-outlined'>Bar_Chart</span>
        Statistics
    </button>

    <button class='flex gap-1 text-red-500'>
        <span class='material-symbols-outlined'>Delete</span>
        Delete
    </button>
</div>