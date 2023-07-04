<script>
	import { backgroundType, VIDEO_DEFAULT } from '$lib/store/background';
</script>

{#if $backgroundType.type === 'video'}
	<video
		autoplay
		loop
		muted
		playsinline
		src="{$backgroundType.props ?? VIDEO_DEFAULT}"
	/>
{:else if $backgroundType.type === 'image'}
	<img
		src="{$backgroundType.props}"
		alt="bg"
	/>
{/if}

<style>
	video, img {
		position: fixed;
		z-index: -1;
		object-fit: cover;
		width: 100%;
		height: 100%;
	}

	video {
		right: 0;
		top: 0;
	}
</style>
