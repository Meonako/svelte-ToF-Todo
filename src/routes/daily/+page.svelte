<script>
    import Daily from "$lib/section/Daily.svelte";
    import { DAILY } from "$lib/model/task";
</script>

<svelte:head>
    <title>Daily | ToF TODOs</title>
</svelte:head>

<Daily tasks={DAILY} />
