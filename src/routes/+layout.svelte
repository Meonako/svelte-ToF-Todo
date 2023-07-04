<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	// import '@skeletonlabs/skeleton/themes/theme-rocket.css';
	import '../theme.postcss';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import { AppShell } from '@skeletonlabs/skeleton';
	import Navigation from '$lib/components/Navigation.svelte';
	import Background from '$lib/components/Background.svelte';
</script>

<Background />
<AppShell slotSidebarLeft="bg-surface-500/5" slotPageContent="bg-transparent">
	<svelte:fragment slot="sidebarLeft">
		<div class="h-full">
			<Navigation />
		</div>
	</svelte:fragment>
	<slot />
</AppShell>
