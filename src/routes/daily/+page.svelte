<script>
    export let data;

    import Daily from "$lib/section/Daily.svelte";
</script>

<svelte:head>
    <title>Daily | ToF TODOs</title>
</svelte:head>

<Daily tasks={data.DAILY} />
