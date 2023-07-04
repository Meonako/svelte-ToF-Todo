<script lang="ts">
	import { VIDEO_DEFAULT, IMAGE_DEFAULT, backgroundType } from '$lib/store/background';
	import { scale } from 'svelte/transition';

	let selected = $backgroundType.type;
	let link = '';

	if ($backgroundType.type == 'image') {
		link = $backgroundType.props;
	} else if ($backgroundType.type == 'video') {
		link = $backgroundType.props ?? VIDEO_DEFAULT;
	}
</script>

<svelte:head>
	<title>Settings | ToF TODOs</title>
</svelte:head>

<div
	class="flex items-center justify-center w-full h-full"
	in:scale={{ delay: 200 }}
	out:scale={{ duration: 150 }}
>
	<div class="bg-surface-500 bg-opacity-70 border border-primary-500 py-4 px-6 w-full lg:w-3/5">
		<h1 class="h2 text-center mb-4">Background</h1>
		<label class="label">
			<span>Type</span>
			<select
				class="select"
				size="2"
				bind:value={selected}
				on:change={() => {
					if (selected == 'image') {
						if ($backgroundType.type == 'image') {
							link = $backgroundType.props;
						} else {
							link = IMAGE_DEFAULT;
						}
					} else if (selected == 'video') {
						if ($backgroundType.type == 'video') {
							link = $backgroundType.props;
						} else {
							link = VIDEO_DEFAULT;
						}
					}
				}}
			>
				<option value="image">Image</option>
				<option value="video">Video</option>
			</select>
		</label>

		<label class="label">
			<span>Link</span>
			<div class="input-group input-group-divider grid-cols-[1fr_auto]">
				<input type="text" placeholder="https://..." bind:value={link} />
				<button
					class="btn variant-ghost-warning"
					title="Reset to default"
					on:click={() => {
						if (selected == 'image') {
							link = IMAGE_DEFAULT;
						} else if (selected == 'video') {
							link = VIDEO_DEFAULT;
						}
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
						<path d="M3 3v5h5" />
					</svg>
				</button>
			</div>
		</label>
		<div class="text-center mt-4">
			<button
				class="btn variant-filled-primary"
				on:click={() => {
					if (selected !== 'image' && selected !== 'video') return;

					if (link == null || link == '') return;

					backgroundType.set({
						type: selected,
						props: link
					});
				}}
			>
				Save
			</button>
		</div>
	</div>
</div>
