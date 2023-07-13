<script lang="ts">
	export let value: number;
	export let max: number;

	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	const progress = tweened(0, {
		duration: 300,
		easing: cubicOut
	});

	$: {
		if (value > max) {
			value = max;
		} else if (value < 0) {
			value = 0;
		}
		progress.set(value);
	}
</script>

<div class="container text-center lg:w-3/4">
	<h4 class="h4 mb-1">
		{value} / {max}
	</h4>
	<button
		on:click={() => {
			value = 0;
		}}
	>
		Min
	</button>
	<button
		on:click={() => {
			if (value <= 0) return;

			value--;
		}}
	>
		-
	</button>
	<div class="inline-block w-2" />
	<button
		on:click={() => {
			if (value >= max) return;

			value++;
		}}
	>
		+
	</button>
	<button
		on:click={() => {
			value = max;
		}}
	>
		Max
	</button>
	<progress value={$progress} {max} />
</div>

<style lang="postcss">
	button {
		@apply btn variant-ghost-primary active:variant-filled-primary lg:hover:variant-filled-primary mb-2;
	}
	
	progress::-webkit-progress-bar {
		@apply bg-primary-900;
	}

	progress::-webkit-progress-value {
		@apply bg-primary-600;
	}
</style>
