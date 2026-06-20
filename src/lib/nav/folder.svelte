<script lang="ts">
    import GenerateTree from './generate_tree.svelte';
    import folder_open from '$lib/assets/folder_open.png'
    import folder_close from '$lib/assets/folder_close.png'

    let { element } = $props();

    let showItems = $state(false);
</script>

{#if element.visible}
    <div class="folder">
        <label>
            <input type="checkbox" bind:checked={showItems} />
            <img src={showItems ? folder_open : folder_close} alt="folder">
            {element.name}
        </label>
    </div>
    <section>
        {#if showItems}
            <GenerateTree tree={element.items} />
        {/if}
    </section>
{/if}

<style>
    input {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
    }
    label {
        color: hsl(0, 0%, 96%);
        font-size: larger;
    }
    .folder {
        width: 95.5%;
        padding: 5px;
    }
    section {
        margin-left: 15px;
        padding-left: 8px;

        border-left: 1px solid hsl(0, 0%, 96%);
    }

    img {
        width: 20px;
        margin-right: 2px;
    }
</style>