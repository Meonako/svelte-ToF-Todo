<script>
	import Daily from '$lib/section/Daily.svelte';
	import Weekly from '$lib/section/Weekly.svelte';
	import Monthly from '$lib/section/Monthly.svelte';
</script>

<svelte:head>
	<title>All | ToF TODOs</title>
</svelte:head>

<div class="flex flex-row items-start justify-start">
	<Daily />
	<Weekly />
	<Monthly />
</div>