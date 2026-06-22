<script lang="ts">
    import { Viewer } from 'svelte-image-viewer';
    import { visible } from './nav/navigation_bar_config.svelte';
    import Open from './nav/functionality/visible/open.svelte';

	let { children } = $props();
</script>

<Viewer>
	<div class="scroll">
    	<main class:with_bar={visible.state} class:without_bar={!visible.state}>
			{@render children()}
    	</main>
	</div>
</Viewer>

<style>
    .scroll {
        height: 400vh;
        width: 400vw;

        display: flex;
        justify-content: center;
        align-items: center;

        overflow: hidden;

        background: radial-gradient(circle, transparent 20%, #F5F5F5 20%, #F5F5F5 80%, transparent 80%, transparent) 0% 0% / 120px 120px, radial-gradient(circle, transparent 20%, #F5F5F5 20%, #F5F5F5 80%, transparent 80%, transparent) 60px 60px / 120px 120px, linear-gradient(#000029 2px, transparent 2px) 0px -1px / 60px 60px, linear-gradient(90deg, #000029 2px, #F5F5F5 2px) -1px 0px / 60px 60px #F5F5F5;
        background-size: 120px 120px, 120px 120px, 60px 60px, 60px 60px;
        background-color: #F5F5F5;
    }
	main {
		height: 100vh;

		border: 5px solid pink;
	}
    .with_bar {
    	width: 84vw;

		margin-left: 16vw;
    }
    .without_bar {
		width: 100vw;

		margin-left: 0;
    }
</style>