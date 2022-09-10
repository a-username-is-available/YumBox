<script lang='ts'>
    import { things, type ThingData } from '../../services/things'
    import { mx, my } from '../../services/util'
    import { coins } from '../../services/stats'
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

    const forward = (e: any) => {
        for (let y = 0; y < 30; y++) {
            for (let x = 0; x < 30; x++) {
                const thing = $things.find(thing => thing.x === x && thing.y === y)
                if (!thing) return $things = [...$things, { ...e.detail[0], x, y }]
            }  
        }
    }

    const buyItem = (thing: ThingData, name: string) => {
        const { cost } = thing.levels[0]
        if ($coins - cost < 0) return
        $coins -= cost
        $inventory.push({ name, level: 0, id: Math.random() })
    }
</script>

<header>
    <StatsBar on:showInventory={showInventory} on:showShop={showShop}/>
</header>

{#if hasShop}
    <Overlay>
        <span class='flex flex-col gap-3'>
            <h1 class='font-bold text-xl'>Shop</h1>
            <Panel>
                {#await thingData()}
                    Loading...
                {:then resolvedThingData}           
                    {#each Object.entries(resolvedThingData) as [thingName, aThing]}
                        <span class="flex p-2 gap-3">
                            <img src='src/assets/thing/{aThing.levels[0].src}.png' alt='a thing' class='scale-crisp w-20 h-20'>
                            <span class="flex flex-col text-black">
                                <h1 class='font-bold text-lg'>{thingName[0].toUpperCase() + thingName.slice(1)}</h1>
                                <p>{aThing.description}</p>
                                <button class='bg-primary rounded p-1 px-2 inline w-fit' on:click={() => buyItem(aThing, thingName)}>
                                    Buy - {aThing.levels[0].cost} coins
                                </button>
                            </span>
                        </span>
                    {/each}
                {/await}
            </Panel>
        </span>
    </Overlay>
{/if}

{#if hasInventory}
    <Overlay>
        <span class='flex flex-col gap-3'>
            <h1 class='font-bold text-xl'>Inventory</h1>
            <div class='flex flex-wrap gap-1'>
                {#each $inventory as item (item.id)}
                    <span class='w-8 h-8'>
                        <InvPanel>
                            <InvThing {...item} on:place={forward}/>
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