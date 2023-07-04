<script>
	import Daily from '$lib/section/Daily.svelte';
	import Weekly from '$lib/section/Weekly.svelte';
	import Monthly from '$lib/section/Monthly.svelte';
</script>

<svelte:head>
	<title>All | ToF TODOs</title>
</svelte:head>

<div class="flex flex-col lg:flex-row lg:items-start lg:justify-start">
	<Daily />
	<div class="m-2 lg:hidden"></div>
	<Weekly />
	<div class="m-2 lg:hidden"></div>
	<Monthly />
</div>