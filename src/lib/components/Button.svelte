<script lang="ts">
    export let value: number;
    export let max: number;

    import { tweened } from "svelte/motion";
    import { cubicOut } from "svelte/easing";
    import { ProgressBar } from "@skeletonlabs/skeleton";

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

<div class="container text-center">
    <h4 class="h3 text-secondary-300 mb-1">
        <strong>{value}</strong> / <strong>{max}</strong>
    </h4>
    <button
        class="btn variant-ghost-primary active:variant-filled-primary lg:hover:variant-filled-primary mb-2"
        on:click={() => {
            value = 0;
        }}
    >
        Min
    </button>
    <button
        class="btn variant-ghost-primary active:variant-filled-primary lg:hover:variant-filled-primary mb-2"
        on:click={() => {
            if (value <= 0) return;

            value--;
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
        }}
    >
        +
    </button>
    <button
        class="btn variant-ghost-primary active:variant-filled-primary lg:hover:variant-filled-primary mb-2"
        on:click={() => {
            value = max;
        }}
    >
        Max
    </button>
    <ProgressBar
        class="w-[85%] mx-auto"
        track={"bg-primary-900"}
        meter={"bg-primary-600"}
        value={$progress}
        {max}
    />
</div>
