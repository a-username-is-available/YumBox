<script lang='ts'>
    import { things } from '../../services/things'
    import Thing from '../../components/Thing.svelte'
</script>

<div class='bg-lime-300 h-screen grid grid-cols-30 grid-rows-30'>
    {#each $things as thing}
        <Thing {...thing}/>
    {/each}
</div>