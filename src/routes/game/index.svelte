<script lang='ts'>
    import { things } from '../../services/things'
    import { mx, my } from '../../services/util'
    import Thing from '../../components/Thing.svelte'
    import { thingData } from '../../services/things'

    import StatsBar from '../../components/StatsBar.svelte'
    import Overlay from '../../components/Overlay.svelte'
    import Panel from '../../components/Panel.svelte'
    import InvPanel from '../../components/InvPanel.svelte'
    import InvThing from '../../components/InvThing.svelte'
    import { inventory } from '../../services/things'

    let hasInventory = false
    const showInventory = () => { hasInventory = !hasInventory; hasShop = false }
    let hasShop = false
    const showShop = () => { hasShop = !hasShop; hasInventory = false }

    const updateLocation = (e: { clientX: number; clientY: number; }) => [$mx, $my] = [e.clientX, e.clientY]

    const forward = (e: any) => $things = [...$things, { ...e.detail[0], x: 0, y: 0 }]
</script>

<header>
    <StatsBar on:showInventory={showInventory} on:showShop={showShop}/>
</header>

{#if hasShop}
    <Overlay>
        <span class='flex flex-col gap-3'>
            <h1 class='font-bold text-xl'>Shop</h1>
            <Panel>
                <span class="flex p-2 gap-3">
                    <div class="bg-red-100 p-10"></div>
                    <span class="flex flex-col text-black">
                        <h1 class='font-bold text-lg'>Example Item</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum unde nesciunt non odio natus debitis vero nisi rem illum accusantium obcaecati.</p>
                    </span>
                </span>
            </Panel>
        </span>
    </Overlay>
{/if}

{#if hasInventory}
    <Overlay>
        <span class='flex flex-col gap-3'>
            <h1 class='font-bold text-xl'>Inventory</h1>
            <div class='flex gap-1'>
                {#each $inventory as item}
                    <span class='w-8 h-8'>
                        <InvPanel>
                            <InvThing name={item.name} level={item.level} on:place={forward}/>
                        </InvPanel>
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