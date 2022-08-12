<script lang='ts'>
    import { createEventDispatcher } from 'svelte'
    import { scale } from 'svelte/transition'
    import type { ThingResult } from '../services/things'
    const dispatch = createEventDispatcher()

    function passResult(res: ThingResult) {
        dispatch(res)
    }
</script>

<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,100,0,0" />
</svelte:head>

<div class='p-2 pr-4 w-fit rounded bg-dark text-white font-light flex gap-1 flex-col' 
     transition:scale='{{ duration: 200 }}'>
    <button class='flex gap-1'>
        <span class='material-symbols-outlined'>Open_With</span>
        Move
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