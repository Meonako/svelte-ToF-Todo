<script>
    import { WEEKLY } from "$lib/model/task";
    import Weekly from "$lib/section/Weekly.svelte";
</script>

<svelte:head>
    <title>Weekly | ToF TODOs</title>
</svelte:head>

<Weekly tasks={WEEKLY} />
