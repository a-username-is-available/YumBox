<script lang='ts'>
    import { things } from '../../services/things'
    import { mx, my } from '../../services/util'
    import Thing from '../../components/Thing.svelte'

    import StatsBar from '../../components/StatsBar.svelte'
    import Overlay from '../../components/Overlay.svelte'
    import Panel from '../../components/InvPanel.svelte'
    import InvThing from '../../components/InvThing.svelte'
    import { inventory } from '../../services/things'

    let hasInventory = false

    const updateLocation = (e: { clientX: number; clientY: number; }) => [$mx, $my] = [e.clientX, e.clientY]

    const forward = (e: any) => {
        console.log(e.detail)
    }
</script>

<header>
    <StatsBar on:showInventory='{() => hasInventory = !hasInventory}'/>
</header>

{#if hasInventory}
    <Overlay>
        <span class='flex flex-col gap-3'>
            <h1 class='font-bold text-xl'>Inventory</h1>
            <div class='flex gap-1'>
                {#each $inventory as item}
                    <span class='w-8 h-8'>
                        <Panel>
                            <InvThing name={item.name} level={item.level} on:place={forward}/>
                        </Panel>
                    </span>
                {/each}
            </div>
        </span>
    </Overlay>
{/if}

<div class='bg-lime-300 h-screen w-screen grid grid-cols-30 grid-rows-30' on:mousemove={updateLocation}>
    {#each $things as thing}
        <Thing {...thing}/>
    {/each}
</div>