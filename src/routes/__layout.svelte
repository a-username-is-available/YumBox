<script lang='ts'>
    import '../app.css'
    import StatsBar from '../components/StatsBar.svelte'
</script>

<header>
    <StatsBar/>
</header>

<main>
    <slot></slot>
</main>