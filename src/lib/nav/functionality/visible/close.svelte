<script lang="ts">
    import arrow_left from '$lib/assets/arrow_left.png';
    import { visible } from '../../navigation_bar_config.svelte.ts';
</script>

<label>
    <button onclick={() => visible.state = false}>nothing</button>
    <img src={arrow_left} alt="close navigation bar">
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

        padding: 5px 10px 0px 0px;
        margin: 0px 0px 0px 10px;
    }
    label {
        cursor: pointer;
    }
</style>