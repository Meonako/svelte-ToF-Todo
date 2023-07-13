<script lang="ts">
	import TaskRender from '$lib/components/TaskRender.svelte';

	import { daily } from '$lib/store/daily';
	import { RESET_TIME } from '$lib/reset/daily';
</script>

<TaskRender tasks={daily} resetTime={RESET_TIME} max={86400} resetLabel="Daily" />
