<script lang="ts">
    export let value: boolean;
    export let text: string;
    export let single: boolean = false;
</script>

<label
    class="flex items-center space-x-2 py-2 px-10 duration-200 active:variant-ghost-primary lg:text-lg lg:hover:variant-ghost-primary border border-primary-400 mt-4"
>
    <input class="checkbox" type="checkbox" bind:checked={value} />
    <h4 class:h4={!single}>{text}</h4>
</label>
