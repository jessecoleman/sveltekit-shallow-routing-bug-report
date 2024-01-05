<script>
    import { page } from "$app/stores";

    export let id = Number($page.params.id);
</script>

<button on:click={() => history.back()}>Post {id}</button>
