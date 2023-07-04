<script lang="ts">
	export let value: boolean;
	export let text: string;
</script>

<label class="flex items-center space-x-2 p-2 active:variant-ghost-primary lg:text-lg lg:hover:variant-ghost-primary border-b-2 border-primary-400 last:border-0">
	<input class="checkbox" type="checkbox" bind:checked={value} />
	<p>{text}</p>
</label>
