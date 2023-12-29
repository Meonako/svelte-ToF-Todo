<script lang="ts">
    export let data;

    import "../app.postcss";

    import { AppShell, Modal, type ModalComponent } from "@skeletonlabs/skeleton";
    import Navigation from "$lib/components/Navigation.svelte";
    import Background from "$lib/components/Background.svelte";
    import {
        Toast,
        initializeStores,
        getToastStore,
        getModalStore,
        type ToastSettings,
        type ModalSettings
    } from "@skeletonlabs/skeleton";
    import AddTask from "$lib/components/modal/AddTask.svelte";
    import { fly } from "svelte/transition";
    import { SETTINGS } from "$lib/store/settings";
    import { setTheme } from "$lib/utils/theme";
    import { onMount } from "svelte";

    onMount(() => {
        setTheme($SETTINGS.theme);
    });

    initializeStores();

    const modalStore = getModalStore();
    const modal: ModalSettings = {
        type: "alert",
        title: "Missing Features",
        body: "<br>- Reset sync with server<br>- Progress Bar turn red when time is about to run out"
    };

    const toastStore = getToastStore();
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

    const modalComponentRegistry: Record<string, ModalComponent> = {
        addTask: {
            ref: AddTask
        }
    };
</script>

<Background />
<Toast />
<Modal
    components={modalComponentRegistry}
    buttonPositive="variant-filled-success"
    duration={200}
    flyY={300}
    padding="px-10 py-7"
/>
<AppShell slotSidebarLeft="bg-surface-500/5" slotPageContent="bg-transparent">
    <svelte:fragment slot="sidebarLeft">
        <div class="h-full">
            <Navigation />
        </div>
    </svelte:fragment>

    {#if $SETTINGS.pageAnimation.enable}
        {#key data.path}
            <div
                class="w-full h-full"
                in:fly={{
                    y: $SETTINGS.pageAnimation.distanceIn,
                    duration: $SETTINGS.pageAnimation.duration,
                    delay: $SETTINGS.pageAnimation.duration
                }}
                out:fly={{
                    y: $SETTINGS.pageAnimation.distanceOut,
                    duration: $SETTINGS.pageAnimation.duration
                }}
            >
                <slot />
            </div>
        {/key}
    {:else}
        <slot />
    {/if}
</AppShell>
