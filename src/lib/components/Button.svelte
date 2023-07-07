<script lang="ts">
	export let value: number;
	export let max: number;

	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	let progress = tweened(value, {
		duration: 300,
		easing: cubicOut
	});

	$: progress.set(value)
</script>

<div class="container text-center lg:w-3/4">
	<h4 class="h4 mb-1">{value} / {max}</h4>
	<button
		class="btn variant-ghost-primary active:variant-filled-primary lg:hover:variant-filled-primary"
		on:click={() => {
			value = 0;
			progress.set(value);
		}}
	>
		Min
	</button>
	<button
		class="btn variant-ghost-primary active:variant-filled-primary lg:hover:variant-filled-primary"
		on:click={() => {
			if (value <= 0) return;

			value--;
			progress.set(value);
		}}
	>
		-
	</button>
	<div class="inline-block w-2" />
	<button
		class="btn variant-ghost-primary active:variant-filled-primary lg:hover:variant-filled-primary mb-2"
		on:click={() => {
			if (value >= max) return;

			value++;
			progress.set(value);
		}}
	>
		+
	</button>
	<button
		class="btn variant-ghost-primary active:variant-filled-primary lg:hover:variant-filled-primary mb-2"
		on:click={() => {
			value = max;
			progress.set(value);
		}}
	>
		Max
	</button>
	<progress value={$progress} {max} />
</div>

<style>
	progress::-webkit-progress-bar {
		background-color: rgb(var(--color-primary-900));
	}

	progress::-webkit-progress-value {
		background-color: rgb(var(--color-primary-600));
	}
</style>
