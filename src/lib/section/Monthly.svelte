<script lang="ts">
    export let tasks: Record<string, Task>;

    import TaskRender from "$lib/components/TaskRender.svelte";

    import { monthly } from "$lib/store/monthly";
    import { RESET_TIME } from "$lib/reset/monthly";
    import type { Task } from "$lib/utils/interface";

    const label = "MONTHLY";
</script>

<TaskRender {tasks} tasksValue={monthly} resetTime={RESET_TIME} max={86400 * 30} {label} />
