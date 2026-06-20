<script lang="ts">
    import { Viewer } from 'svelte-image-viewer';

	let { children } = $props();
</script>

<Viewer>
	<div class="scroll">
    	<main>
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
		width: 84vw;

		margin-left: 16vw;

		border: 5px solid pink;
	}
</style>