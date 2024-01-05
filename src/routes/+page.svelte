<script lang="ts">
    import { goto, preloadData, pushState } from "$app/navigation";
    import { page } from "$app/stores";
    import Post from "./[id]/+page.svelte";

    $: console.log($page.state.id);

    async function openPost(e: MouseEvent, id: number) {
        if (e.metaKey) return;

        e.preventDefault();

        const { href } = e.currentTarget as HTMLAnchorElement;

        const result = await preloadData(href);

        if (result.type === "loaded" && result.status === 200) {
            pushState(href, { id });
        } else {
            goto(href);
        }
    }
</script>

<a href="/{1}" on:click={(e) => openPost(e, 1)}>Open Post 1</a>
<a href="/{2}" on:click={(e) => openPost(e, 2)}>Open Post 2</a>
<a href="/{3}" on:click={(e) => openPost(e, 3)}>Open Post 3</a>

{#if $page.state.id}
    <Post id={$page.state.id} />
{/if}
