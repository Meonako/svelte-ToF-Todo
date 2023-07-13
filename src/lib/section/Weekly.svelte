<script lang="ts">
	import TaskRender from '$lib/components/TaskRender.svelte';

	import { weekly } from '$lib/store/weekly';
	import { RESET_TIME } from '$lib/reset/weekly';
</script>

<TaskRender tasks={weekly} resetTime={RESET_TIME} max={604800} resetLabel="Weekly" />
