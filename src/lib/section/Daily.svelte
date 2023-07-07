<script lang="ts">
	import TaskRender from '$lib/components/TaskRender.svelte';

	import { daily } from '$lib/store/daily';
</script>

<TaskRender tasks={daily} />
