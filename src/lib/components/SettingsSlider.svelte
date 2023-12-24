<script lang="ts">
    export let label: string;
    export let value: number;
    export let min = 0;
    export let max = 100;

    import RangeSlider from "./skeleton/RangeSlider.svelte";
    import { fly } from "svelte/transition";
    import { SETTINGS } from "$lib/store/settings";
</script>

<div
    class="border border-secondary-500 p-4 my-2"
    in:fly={{
        x: -200,
        duration: $SETTINGS.pageAnimation.duration,
        delay: $SETTINGS.pageAnimation.duration
    }}
    out:fly={{ x: 200, duration: $SETTINGS.pageAnimation.duration }}
>
    <RangeSlider name="background-opacity" bind:value {min} {max} step={1} padding={"pb-2"}>
        <div class="flex justify-between items-center">
            <div class="flex flex-row justify-between w-full">
                <p class="font-bold flex items-center justify-center">{label}</p>
                <input
                    class="input w-auto text-center"
                    type="number"
                    bind:value
                    on:input={() => {
                        if (value > 100) {
                            value = 100;
                        } else if (value < 0) {
                            value = 0;
                        } else if (isNaN(value) || value == null) {
                            value = 50;
                        }
                    }}
                />
            </div>
        </div>
    </RangeSlider>
</div>
