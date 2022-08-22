<script>
    import Overlay from './Overlay.svelte'
    import Panel from './Panel.svelte'
    import Thing from './InvThing.svelte';

    import { inventory } from '../services/things'
</script>

<Overlay>
    <span class="flex flex-col gap-3">
        <h1 class="font-bold text-xl">Inventory</h1>
        <div class="flex gap-1">
            {#each $inventory as item}
                <span class="w-8 h-8">
                    <Panel>
                        <Thing name={item.name} level={item.level}>{item}</Thing>
                    </Panel>
                </span>
            {/each}
        </div>
    </span>
</Overlay>
