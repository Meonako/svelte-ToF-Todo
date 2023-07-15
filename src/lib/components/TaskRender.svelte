<script lang="ts">
	import type { Base } from '$lib/utils/interface';
	import { fly, scale } from 'svelte/transition';
	import Button from './Button.svelte';
	import Checkbox from './Checkbox.svelte';
	import SupportButton from './SupportButton.svelte';
	import { writable, type Writable } from 'svelte/store';
	import { reset } from '$lib/utils/reset';
	import { onMount } from 'svelte';
	import { modalStore, type ModalSettings } from '@skeletonlabs/skeleton';

	export let tasks: Writable<Base>;
	export let resetTime: Date;
	export let max: number;
	export let resetLabel: string;

	const now = new Date();
	const millisecondsDiff = resetTime.getTime() - now.getTime();
	const secondsDiff = writable(Math.floor(millisecondsDiff / 1000));

	$: seconds = $secondsDiff % 60;
	$: minutes = Math.floor(($secondsDiff / 60) % 60);
	$: hours = Math.floor($secondsDiff / 60 / 60);
	$: displayHours = hours > 24 ? hours % 24 : hours;
	$: days = hours > 24 ? Math.floor(hours / 24) : 0;

	function handleInput(value: number, max: number): number {
		if (value > max) {
			return max;
		} else if (value < 0 || value == null || isNaN(value)) {
			return 0;
		}

		return value;
	}

	const modal: ModalSettings = {
		type: 'confirm',
		title: `Reset <span class="text-green-500">${resetLabel}</span>?`,
		body: `Are you sure you want to reset <strong class="text-green-400 underline">${resetLabel}</strong>?`,
		backdropClasses: 'backdrop-blur',
		response: (r) => {
			if (r) {
				const resetted = reset($tasks);
				tasks.set(resetted);
			}
		}
	};

	onMount(() => {
		const interval = setInterval(() => secondsDiff.update((x) => x - 1), 1000);

		return () => clearInterval(interval);
	});
</script>

<div
	class="mx-auto bg-surface-500 bg-opacity-50 border-collapse table-fixed w-full lg:w-3/4 backdrop-blur lg:py-4"
	in:fly={{ y: 200, delay: 150 }}
	out:scale={{ duration: 150 }}
>
	<div class="text-center">
		<h3 class="h3 text-lime-500">
			[
			<span class="text-blue-500">SEA</span>
			<span class="text-white">-</span>
			<span class="text-yellow-300">Odyssey</span>
			]
		</h3>
		<h3 class="h3">
			{days ? `${days} days ` : ''}{displayHours} hours {minutes} minutes {seconds} seconds remaining
		</h3>
		<progress class="w-11/12" value={$secondsDiff} {max} />
		<button
			class="btn variant-ghost-error active:variant-filled-error lg:hover:variant-filled-error w-full"
			on:click={() => {
				modalStore.trigger(modal);
			}}
		>
			Reset
		</button>
	</div>
	{#each $tasks.Value as task}
		<hr />
		<div class="item">
			<div class="flex flex-col justify-center items-center pb-4">
				{#if task.type === 'number' && typeof task.value === 'number' && task.max}
					<h3 class="h3 text-center p-2">{task.name}</h3>
					<Button bind:value={task.value} max={task.max} />
				{:else if task.type === 'boolean' && typeof task.value === 'boolean'}
					<Checkbox bind:value={task.value} text={task.name} />
				{:else if task.type === 'booleanList' && typeof task.value === 'object'}
					<h3 class="h3 text-center p-2">{task.name}</h3>
					<div>
						{#each task.value as value, idx}
							<Checkbox
								bind:value
								text={typeof task.label == 'object' && task.label[idx] ? task.label[idx] : ''}
								single={true}
							/>
						{/each}
					</div>
				{:else if task.type === 'numberWithButtons' && task.max && task.buttons}
					<h3 class="h3 text-center p-2">{task.name}</h3>
					<div>
						<input
							class="input text-center p-1 text-lg border border-primary-500"
							type="number"
							bind:value={task.value}
							on:input={() => {
								// @ts-ignore
								const newValue = handleInput(task.value, task.max);
								task.value = newValue;
							}}
						/>
						<br />
						<hr />
						<div class="flex flex-row justify-center">
							{#each task.buttons as button}
								<SupportButton bind:value={task.value} max={task.max} step={button} />
							{/each}
						</div>
					</div>
				{/if}
			</div>
		</div>
	{/each}
</div>

<style lang="postcss">
	progress::-webkit-progress-bar {
		@apply bg-primary-900;
	}

	progress::-webkit-progress-value {
		@apply bg-primary-600;
	}
</style>
