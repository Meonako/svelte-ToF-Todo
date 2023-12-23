<script>
    import Monthly from "$lib/section/Monthly.svelte";
    import { MONTHLY } from "$lib/model/task";
</script>

<svelte:head>
    <title>Monthly | ToF TODOs</title>
</svelte:head>

<Monthly tasks={MONTHLY} />
