<script>
    import Daily from "$lib/section/Daily.svelte";
    import Weekly from "$lib/section/Weekly.svelte";
    import Monthly from "$lib/section/Monthly.svelte";

    import { DAILY, WEEKLY, MONTHLY } from "$lib/model/task";
    import { SETTINGS } from "$lib/store/settings";
</script>

<svelte:head>
    <title>All | ToF TODOs</title>
</svelte:head>

<div class="grid grid-cols-1 lg:grid-cols-3">
    <Daily tasks={DAILY} width={$SETTINGS.task.allPageWidth} />
    <div class="m-2 lg:hidden" />
    <Weekly tasks={WEEKLY} width={$SETTINGS.task.allPageWidth} />
    <div class="m-2 lg:hidden" />
    <Monthly tasks={MONTHLY} width={$SETTINGS.task.allPageWidth} />
</div>
