<script lang="ts">
	import TaskRender from '$lib/components/TaskRender.svelte';

	import { monthly } from '$lib/store/monthly';
	import { RESET_TIME } from '$lib/reset/monthly';
</script>

<TaskRender tasks={monthly} resetTime={RESET_TIME} max={86400 * 30} resetLabel="Monthly" />
