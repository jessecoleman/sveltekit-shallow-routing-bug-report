<script>
  import { invalidateAll, pushState } from "$app/navigation";
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  onMount(async () => {
    await new Promise(resolve => 
      // some latency in network before state changes
      setTimeout(() => {
        pushState('', { id: 123 })
        resolve(null);
      }, 1000)
    )
    // some more latency in network before calling invalidateAll
    await new Promise(resolve => 
      setTimeout(() => {
        invalidateAll();
        resolve(null);
      }, 1000)
    );
  });

</script>

