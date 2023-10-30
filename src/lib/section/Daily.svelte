<script lang="ts">
    export let tasks: Record<string, Task>;

    import TaskRender from "$lib/components/TaskRender.svelte";

    import { daily } from "$lib/store/daily";
    import { RESET_TIME } from "$lib/reset/daily";
    import type { Task } from "$lib/utils/interface";
</script>

<TaskRender {tasks} tasksValue={daily} resetTime={RESET_TIME} max={86400} resetLabel="Daily" />
