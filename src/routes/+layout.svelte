<script lang="ts">
    export let data;

    // The ordering of these imports is critical to your app working properly
    // import '@skeletonlabs/skeleton/themes/theme-rocket.css';
    import "../theme.postcss";
    // If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
    import "@skeletonlabs/skeleton/styles/skeleton.css";
    // Most of your app wide CSS should be put in this file
    import "../app.postcss";

    import { AppShell, Modal } from "@skeletonlabs/skeleton";
    import Navigation from "$lib/components/Navigation.svelte";
    import Background from "$lib/components/Background.svelte";
    import {
        Toast,
        toastStore,
        modalStore,
        type ToastSettings,
        type ModalSettings
    } from "@skeletonlabs/skeleton";
    import { fly } from "svelte/transition";
    import { SETTINGS } from "$lib/store/settings";

    const modal: ModalSettings = {
        type: "alert",
        title: "Missing Features",
        body: "<br>- Reset sync with server<br>- Progress Bar turn red when time is about to run out"
    };

    const t: ToastSettings = {
        message:
            "This app is Work In Progress. Still missing some key features and not ready to use",
        action: {
            label: "See what's missing",
            response: () => modalStore.trigger(modal)
        },
        // timeout: 5000,
        background: "variant-filled-surface"
    };

    toastStore.trigger(t);
</script>

<Background />
<Toast />
<Modal buttonPositive="variant-filled-success" duration={200} flyY={300} padding="px-10 py-7" />
<AppShell slotSidebarLeft="bg-surface-500/5" slotPageContent="bg-transparent">
    <svelte:fragment slot="sidebarLeft">
        <div class="h-full">
            <Navigation />
        </div>
    </svelte:fragment>

    {#if $SETTINGS.pageAnimationEnable}
        {#key data.path}
            <div
                class="w-full h-full"
                in:fly={{
                    y: $SETTINGS.pageAnimationDistanceIn,
                    duration: $SETTINGS.pageAnimationDuration,
                    delay: $SETTINGS.pageAnimationDuration
                }}
                out:fly={{
                    y: $SETTINGS.pageAnimationDistanceOut,
                    duration: $SETTINGS.pageAnimationDuration
                }}
            >
                <slot />
            </div>
        {/key}
    {:else}
        <slot />
    {/if}
</AppShell>
