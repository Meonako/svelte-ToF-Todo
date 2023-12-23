<script lang="ts">
    export let tasks: Record<string, Task>;

    import { SETTINGS } from "$lib/store/settings";
    export let width = $SETTINGS.task.width;

    import TaskRender from "$lib/components/TaskRender.svelte";

    import { weekly } from "$lib/store/weekly";
    import { RESET_TIME } from "$lib/reset/weekly";
    import type { Task } from "$lib/utils/interface";

    const label = "WEEKLY";
</script>

<TaskRender {tasks} tasksValue={weekly} resetTime={RESET_TIME} max={604800} {label} {width} />
