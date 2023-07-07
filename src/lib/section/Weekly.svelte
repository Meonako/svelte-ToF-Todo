<script lang="ts">
	import TaskRender from '$lib/components/TaskRender.svelte';

	import { weekly } from '$lib/store/weekly';
</script>

<TaskRender tasks={weekly} />
