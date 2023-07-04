<script lang="ts">
	import TaskRender from '$lib/components/TaskRender.svelte';

	import { monthly } from '$lib/store/monthly';
</script>


<TaskRender tasks={$monthly.Monthly} />
