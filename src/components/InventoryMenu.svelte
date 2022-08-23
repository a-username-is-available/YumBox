<!-- currently unused -->

<script>
    import { scale } from 'svelte/transition'
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
</div>