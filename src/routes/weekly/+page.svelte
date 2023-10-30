<script>
    export let data;

    import Weekly from "$lib/section/Weekly.svelte";
</script>

<svelte:head>
    <title>Weekly | ToF TODOs</title>
</svelte:head>

<Weekly tasks={data.WEEKLY} />
