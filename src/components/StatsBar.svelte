<script lang='ts'>
    import coin from '../assets/coin.png'
    import credit from '../assets/credit.png'

    import { coins, credits } from '../services/stats'
</script>

<div class='p-1.5 bg-black text-black flex flex-row items-center text-sm gap-1'>
    <img src={coin} alt="coin" class='scale-crisp h-4'>
    <span class='bg-white rounded pr-1 pl-1'>Coins: {$coins}</span>
    <span></span>
    <img src={credit} alt="credit" class='scale-crisp h-4'>
    <span class='bg-white rounded pr-1 pl-1'>Credits: {$credits}</span>
</div>