<script lang='ts'>
    import { createEventDispatcher } from 'svelte'
    import type { ThingResult } from '../services/things'
    const dispatch = createEventDispatcher()

    function passResult(res: ThingResult) {
        dispatch(res)
    }
</script>