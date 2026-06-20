<script lang="ts">
    import { tree } from '$lib/nav/navigation_bar_config';
    import GenerateTree from '$lib/nav/tree/generate_tree.svelte'
</script>

<nav>
    <GenerateTree tree={tree} />
</nav>

<style>
    nav {
        height: 100vh;
        width: 16vw;

        position: fixed;
        left: 0;
        z-index: 1;

        background-color: hsl(240, 100%, 8%);
        color: hsl(0, 0%, 96%);
    }
</style>