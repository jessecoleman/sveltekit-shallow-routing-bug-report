<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import Example from "../components/Example.svelte";

  $: console.log($page.state);
  $: console.log($page.params);

  export let data;

  // this is a workaround for the <=2.5.0 bug being discussed
  // avoids calling pushState before $page is initialized
  let mounted = false;
  
  onMount(() => {
    mounted = true;
  });
</script>

{#if mounted}
  <Example />
  <!--
    When Example.svelte is mounted, it sets the $page.state,
    then a bit later it calls `invalidateAll()`. This causes the
    `layout.server.ts` to rerun, and the $page.state.id gets reset
  -->
  loaded: {data.loaded}
  id: {$page.state.id};
{/if}
