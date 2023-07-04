<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Checkbox from '$lib/components/Checkbox.svelte';
	import SupportButton from '$lib/components/SupportButton.svelte';

	import { daily } from '$lib/store/daily';
	import { scale } from 'svelte/transition';

	function handleInput(value: number, max: number): number {
		if (value > max) {
			return max;
		} else if (value < 0 || value == null || isNaN(value)) {
			return 0;
		}

		return value;
	}
</script>

<div
	class="m-auto bg-surface-500 bg-opacity-50 border-collapse table-fixed lg:w-3/4 backdrop-blur"
	in:scale={{ delay: 200 }} out:scale={{ duration: 150 }}
>
	{#each $daily.Daily as task}
		<hr />
		<div class="item">
			<h3 class="h3 text-center p-2">{task.name}</h3>
			<div class="flex justify-center items-center pb-4">
				{#if task.type === 'number' && typeof task.value === 'number' && task.max}
					<Button bind:value={task.value} max={task.max} />
				{:else if task.type === 'boolean' && typeof task.value === 'boolean'}
					<Checkbox
						bind:value={task.value}
						text={typeof task.label == 'string' && task.label ? task.label : ''}
					/>
				{:else if task.type === 'booleanList' && typeof task.value === 'object'}
					<div>
						{#each task.value as value, idx}
							<Checkbox
								bind:value
								text={typeof task.label == 'object' && task.label[idx] ? task.label[idx] : ''}
							/>
						{/each}
					</div>
				{:else if task.type === 'numberWithButtons' && task.max && task.buttons}
					<div>
						<input
							class="input text-center p-1 text-lg"
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
