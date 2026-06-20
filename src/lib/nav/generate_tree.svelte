<script lang="ts">
    import { folder, item } from '$lib';
    import Folder from '$lib/nav/folder.svelte';
    import Item from '$lib/nav/item.svelte';

    let { tree } = $props();
</script>

{#each tree as element}
    {#if element instanceof folder}
        <Folder element={element}/>
    {:else if element instanceof item}
        <Item element={element} />
    {/if}
{/each}
