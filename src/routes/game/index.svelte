<script lang='ts'>
    import { things } from '../../services/things'
    import { mx, my } from '../../services/util'
    import Thing from '../../components/Thing.svelte'

    const updateLocation = (e: { clientX: number; clientY: number; }) => [$mx, $my] = [e.clientX, e.clientY]
</script>

<div class='bg-lime-300 h-screen w-screen grid grid-cols-30 grid-rows-30' on:mousemove={updateLocation}>
    {#each $things as thing}
        <Thing {...thing}/>
    {/each}
</div>