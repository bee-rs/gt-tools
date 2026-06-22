<script lang="ts">
    import { visible } from '../../navigation_bar_config.svelte.ts';
    import arrow_right from '$lib/assets/arrow_right.png'
</script>

<label>
    <button onclick={() => visible.state = true}>nothing</button>
    <img src={arrow_right} alt="open navigation bar">
</label>

<style>
    button {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
    }
    img {
        height: 20px;

        padding: 15px 10px 15px 10px;


        border-right: 4px solid hsl(240, 100%, 60%);
        border-bottom: 4px solid hsl(240, 100%, 75%);
        border-radius: 0px 0px 15px 0px;

        background-color: hsl(240, 100%, 8%);
    }
    label {
        cursor: pointer;

        position: fixed;
        left: 0;
        z-index: 1;
    }
</style>