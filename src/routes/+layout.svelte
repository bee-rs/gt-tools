<script lang="ts">
	import { NavigationBar, MainBox, OpenNavBar } from '$lib';

	let { children } = $props();
</script>

<svelte:head>
	<link href="https://cdn.jsdelivr.net/npm/typeface-minecraft@1.0.0/index.min.css" rel="stylesheet">
</svelte:head>

<OpenNavBar />
<NavigationBar />

<MainBox>
    {@render children()}
</MainBox>

<style>
    :global(body) {
        font-family: "Minecraft";
        background-color: black;
        overflow: hidden;
        margin: 0;
        padding: 0;

        display: flex;

        height: 100vh;
    }
</style>


