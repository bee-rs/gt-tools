<script lang="ts">
    import { visible, tree } from './navigation_bar_config.svelte.ts';
    import GenerateTree from '$lib/nav/tree/generate_tree.svelte'
    import SearchBar from '$lib/nav/functionality/search/search_bar.svelte';
    import { fly } from 'svelte/transition';
</script>

{#if visible.state}
    <nav transition:fly={{x: -350, duration: 2000}}>
        <SearchBar />
        <GenerateTree tree={tree} />
    </nav>
{/if}

<style>
    nav {
        height: 100vh;
        width: 16vw;

        position: fixed;
        left: 0;
        z-index: 2;

        background-color: hsl(240, 100%, 8%);
        color: hsl(0, 0%, 96%);
    }

</style>