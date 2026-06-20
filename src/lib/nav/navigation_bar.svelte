<script lang="ts">
    import { folder, item } from '$lib';
    import GenerateTree from './generate_tree.svelte';

    let tree = [
        new item("test item", "/test_item"),
        new folder("Star Technology", [
            new item("something to make it overflow", "/line"),
            new item("some other line", "/some_other line"),
            new folder("test folder",[
                new item("test", "/test"),
                new item("test", "/test"),
                new item("test", "/test"),
            ]),
        ]),
    ];
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