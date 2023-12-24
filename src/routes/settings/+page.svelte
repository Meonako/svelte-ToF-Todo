<script lang="ts">
    import { VIDEO_DEFAULT, IMAGE_DEFAULT, backgroundType } from "$lib/store/background";
    import { SETTINGS } from "$lib/store/settings";
    import { modalStore, type ModalSettings } from "@skeletonlabs/skeleton";
    import SettingsSlider from "$lib/components/SettingsSlider.svelte";

    let selected = $backgroundType.type;
    let link = "";

    if ($backgroundType.type == "image") {
        link = $backgroundType.props;
    } else if ($backgroundType.type == "video") {
        link = $backgroundType.props ?? VIDEO_DEFAULT;
    }

    const clearStorageModal: ModalSettings = {
        type: "confirm",
        title: "Confirmation",
        body: `You sure? This will remove <span class="font-bold text-red-500">ALL: PROGRESS, SETTINGS</span>`,
        response(r: any) {
            if (!r) return;

            if (!localStorage) {
                console.log("No localStorage");
                return;
            }

            if (!location) {
                console.log("No location");
                return;
            }

            localStorage.clear();
            location.reload();
        }
    };

    $: blur = $SETTINGS.task.backgroundBlur ? " backdrop-blur" : "";
</script>

<svelte:head>
    <title>Settings | ToF TODOs</title>
</svelte:head>

<div class="grid grid-cols-1 gap-5 w-full h-full">
    <div
        class="section{blur}"
        style="--tw-bg-opacity: {$SETTINGS.task.backgroundOpacity /
            100}; --tw-backdrop-blur: blur({$SETTINGS.task.backgroundBlurStrength}px"
    >
        <h2 class="h2 text-center">General</h2>
        <label
            class="flex justify-center items-center space-x-2 border border-primary-500 mt-2 p-2"
        >
            <input class="checkbox" type="checkbox" bind:checked={$SETTINGS.task.backgroundBlur} />
            <p>Tasks Background Blur</p>
        </label>
        {#if $SETTINGS.task.backgroundBlur}
            <SettingsSlider
                label={"Background Blur Strength"}
                bind:value={$SETTINGS.task.backgroundBlurStrength}
            />
        {/if}
        <SettingsSlider
            label={"Background Opacity"}
            bind:value={$SETTINGS.task.backgroundOpacity}
        />
        <SettingsSlider label={"Tasks Width"} bind:value={$SETTINGS.task.width} />
        <SettingsSlider
            label={"Tasks in All Page Width"}
            bind:value={$SETTINGS.task.allPageWidth}
        />
        <SettingsSlider
            label={"Tasks Type BUTTONS Progress Bar Width"}
            bind:value={$SETTINGS.task.progressBarWidth}
        />
    </div>

    <div
        class="section{blur}"
        style="--tw-bg-opacity: {$SETTINGS.task.backgroundOpacity /
            100}; --tw-backdrop-blur: blur({$SETTINGS.task.backgroundBlurStrength}px"
    >
        <h2 class="h2 text-center">Background</h2>
        <label class="label">
            <span>Type</span>
            <select
                class="select"
                size="2"
                bind:value={selected}
                on:change={() => {
                    if (selected == "image") {
                        if ($backgroundType.type == "image") {
                            link = $backgroundType.props;
                        } else {
                            link = IMAGE_DEFAULT;
                        }
                    } else if (selected == "video") {
                        if ($backgroundType.type == "video") {
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
                        if (selected == "image") {
                            link = IMAGE_DEFAULT;
                        } else if (selected == "video") {
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
                    if (selected !== "image" && selected !== "video") return;

                    if (link == null || link == "") return;

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

    <div
        class="section{blur}"
        style="--tw-bg-opacity: {$SETTINGS.task.backgroundOpacity /
            100}; --tw-backdrop-blur: blur({$SETTINGS.task.backgroundBlurStrength}px"
    >
        <h2 class="h2 text-center">Page Animation</h2>
        <!-- <Checkbox bind:value={$SETTINGS.pageAnimationEnable} text="Enable" /> -->
        <label
            class="flex justify-center items-center space-x-2 border border-primary-500 mt-2 p-2"
        >
            <input class="checkbox" type="checkbox" bind:checked={$SETTINGS.pageAnimation.enable} />
            <p>Enable</p>
        </label>
        {#if $SETTINGS.pageAnimation.enable}
            <label>
                <span>Duration <strong>(ms)</strong></span>
                <input class="input" type="number" bind:value={$SETTINGS.pageAnimation.duration} />
            </label>
            <label>
                <span>Transition IN distance</span>
                <input
                    class="input"
                    type="number"
                    bind:value={$SETTINGS.pageAnimation.distanceIn}
                />
            </label>
            <label>
                <span>Transition OUT distance</span>
                <input
                    class="input"
                    type="number"
                    bind:value={$SETTINGS.pageAnimation.distanceOut}
                />
            </label>
        {/if}
    </div>

    <div
        class="section text-center{blur}"
        style="--tw-bg-opacity: {$SETTINGS.task.backgroundOpacity /
            100}; --tw-backdrop-blur: blur({$SETTINGS.task.backgroundBlurStrength}px"
    >
        <h2 class="h2 font-bold">Having a problem?</h2>
        <div class="h-px w-[90%] bg-secondary-400 my-2 mx-auto" />
        <h3 class="h3">Try clearing your storage! Click the button below.</h3>
        <button
            class="btn variant-filled-error mt-2 border border-red-500 text-white"
            on:click={() => modalStore.trigger(clearStorageModal)}>Here!</button
        >
    </div>
</div>

<style lang="postcss">
    .section {
        @apply bg-surface-500 border border-primary-500 py-4 px-6 w-full lg:w-3/5 mx-auto;
    }
</style>
