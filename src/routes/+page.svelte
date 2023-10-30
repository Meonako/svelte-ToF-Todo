<script>
    // @ts-nocheck

    export let data;

    import Daily from "$lib/section/Daily.svelte";
    import Weekly from "$lib/section/Weekly.svelte";
    import Monthly from "$lib/section/Monthly.svelte";
</script>

<svelte:head>
    <title>All | ToF TODOs</title>
</svelte:head>

<div class="flex flex-col lg:flex-row lg:items-start lg:justify-start">
    <Daily tasks={data.DAILY} />
    <div class="m-2 lg:hidden" />
    <Weekly tasks={data.WEEKLY} />
    <div class="m-2 lg:hidden" />
    <Monthly tasks={data.MONTHLY} />
</div>
