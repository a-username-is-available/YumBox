<script>
    import { scale, fade } from 'svelte/transition'
</script>

<span class='w-screen before:w-screen h-screen before:h-screen before:bg-dark absolute before:absolute
             before:opacity-50 flex justify-center items-center' transition:fade>
    <div class='bg-dark text-white rounded z-10 p-3 h-1/2 w-1/2 absolute overflow-auto' transition:scale>
        <slot/>
    </div>
</span>