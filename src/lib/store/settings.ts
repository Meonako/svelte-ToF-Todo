import { defaultValue } from "$lib/utils/getDefault";
import { localStorageStore } from "@skeletonlabs/skeleton";
import type { Writable } from "svelte/store";

const KEY = "settings";

export const defaultSettings = {
    pageAnimation: {
        enable: true,
        duration: 300,
        distanceIn: 500,
        distanceOut: -500
    },
    task: {
        backgroundBlur: true,
        backgroundOpacity: 50
    }
}

export const SETTINGS = init();

function init() {
    let settings = localStorageStore(KEY, defaultSettings);
    settings.update((value) => {
        for (const [name, task] of Object.entries(defaultSettings)) {
            // @ts-ignore
            if (value[name]) continue;
            
            // @ts-ignore
            value[name] = task;
        }

        return value;
    })

    return settings;
}