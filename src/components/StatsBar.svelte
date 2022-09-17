<script lang='ts'>
    import StatSection from './StatSection.svelte'
    import StatPanel from './Panel.svelte'
    
    import { createEventDispatcher } from 'svelte'
    import { coins, credits, coinsPerMinute } from '../services/stats'
    import { onDestroy } from 'svelte'

    const dispatch = createEventDispatcher()
    const interval = setInterval(async () => $coins += (await $coinsPerMinute), 60 * 1000)
    onDestroy(() => clearInterval(interval))
</script>

<div class='p-1.5 bg-black text-black flex flex-row items-center text-sm gap-3 w-screen'>
    <span class="flex flex-row flex-grow gap-3">
        <StatSection>
            <span class='font-bold text-primary'>YumBox 1.2.0-Beta</span>
        </StatSection>
        <StatSection>
            <img src='/assets/coin.png' alt="coin" class='scale-crisp h-5 w-5'>
            <StatPanel>Coins: {$coins}</StatPanel>
            <StatPanel>
                Coins/Minute: 
                {#await $coinsPerMinute} 
                    Loading...
                {:then coinsPerMinuteResolved} 
                    {coinsPerMinuteResolved}
                {/await}
            </StatPanel>
        </StatSection>
        
        <StatSection>
            <img src='/assets/credit.png' alt="credit" class='scale-crisp h-5 w-5'>
            <StatPanel>Credits: {$credits}</StatPanel>
        </StatSection>
    </span>

    <StatSection>
        <img on:click='{() => dispatch('showShop')}' class='h-8 w-8 bg-white rounded p-1 scale-crisp' 
             src='/assets/shop.png' alt="shop">
    </StatSection>

    <StatSection>
        <img on:click='{() => dispatch('showInventory')}' class='h-8 w-8 bg-white rounded p-1 scale-crisp' 
             src='/assets/inv.png' alt="inventory">
    </StatSection>
</div>