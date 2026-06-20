<script>
    import { slide } from 'svelte/transition';

    let { element } = $props();

</script>

{#if element.visible}
    <div class="element-box" transition:slide|global>
        <a href={element.path}>{element.name}</a>
    </div>
{/if}

<style>
    a {
        text-decoration: none;
        cursor: default;
        outline: none;

        color: whitesmoke;
    }
    .element-box {

        border-radius: 3px;

        overflow-wrap: anywhere;

        margin: 5px 0;
        padding: 2px 0;
    }
</style>