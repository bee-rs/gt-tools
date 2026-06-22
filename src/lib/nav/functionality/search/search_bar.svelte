<script lang="ts">
    import Close from '$lib/nav/functionality/visible/close.svelte'
</script>

<div>
    <input type="text" placeholder="Search">
    <Close />
</div>

<style>
    input {
        width: 80%;
        height: 30px;

        margin: 0px 0px 0px 5px;

        font-size: larger;
        font-family: "Minecraft";
        color: hsl(0, 0%, 96%);

        background-color: hsl(240, 100%, 8%);

        border: 0;
    }
    input:focus-visible {
        outline: none;
    }
    div {
        margin: 10px 5px;

        width: 93%;

        border: 3px solid hsl(240, 100%, 20%);
    }
</style>