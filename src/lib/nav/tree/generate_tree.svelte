<script lang="ts">
    import { folder, item } from '$lib/nav/navigation_bar_config';
    import Folder from '$lib/nav/tree/folder.svelte';
    import Item from '$lib/nav/tree/item.svelte';

    let { tree } = $props();
</script>

{#each tree as element}
    {#if element instanceof folder}
        <Folder element={element}/>
    {:else if element instanceof item}
        <Item element={element} />
    {/if}
{/each}
