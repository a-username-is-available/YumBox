<script lang='ts'>
    // import { things } from '../../stores/thing.js'
    import Thing from '../../components/Thing.svelte'
</script>

<div class='bg-lime-300 h-screen grid grid-cols-30 grid-rows-30'>
    <!-- { $things } -->
    <Thing x={4} y={4} name='grass' />
</div>