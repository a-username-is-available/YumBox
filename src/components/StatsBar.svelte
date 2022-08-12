<script lang='ts'>
    import coin from '../assets/coin.png'
    import credit from '../assets/credit.png'
    import StatSection from './StatSection.svelte'
    import StatPanel from './StatPanel.svelte'
    import { coins, credits, coinsPerMinute } from '../services/stats'
    import { onDestroy } from 'svelte'

    const interval = setInterval(() => $coins += $coinsPerMinute, 60 * 1000)
    onDestroy(() => clearInterval(interval))
</script>

<div class='p-1.5 bg-black text-black flex flex-row items-center text-sm gap-3 w-screen'>
    <StatSection>
        <span class='font-bold text-primary'>YUM GAME</span>
    </StatSection>

    <StatSection>
        <img src={coin} alt="coin" class='scale-crisp h-4'>
        <StatPanel>Coins: {$coins}</StatPanel>
        <StatPanel>Coins/Minute: {$coinsPerMinute}</StatPanel>
    </StatSection>
    
    <StatSection>
        <img src={credit} alt="credit" class='scale-crisp h-4'>
        <StatPanel>Credits: {$credits}</StatPanel>
    </StatSection>
</div>