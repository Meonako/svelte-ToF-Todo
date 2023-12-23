<script>
    import Daily from "$lib/section/Daily.svelte";
    import Weekly from "$lib/section/Weekly.svelte";
    import Monthly from "$lib/section/Monthly.svelte";

    import { DAILY, WEEKLY, MONTHLY } from "$lib/model/task";
</script>

<svelte:head>
    <title>All | ToF TODOs</title>
</svelte:head>

<div class="grid grid-cols-1 lg:grid-cols-3">
    <Daily tasks={DAILY} />
    <div class="m-2 lg:hidden" />
    <Weekly tasks={WEEKLY} />
    <div class="m-2 lg:hidden" />
    <Monthly tasks={MONTHLY} />
</div>
