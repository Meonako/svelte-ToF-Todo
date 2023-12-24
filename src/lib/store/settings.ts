import { browser } from "$app/environment";
import { localStorageStore } from "@skeletonlabs/skeleton";
import { setMissingValueFromDefault, removeUnused } from "$lib/utils/object";
import type { Writable } from "svelte/store";

const KEY = "settings";

type Settings = {
    pageAnimation: {
        enable: boolean;
        duration: number;
        distanceIn: number;
        distanceOut: number;
    };
    task: {
        width: number;
        allPageWidth: number;
        progressBarWidth: number;
        backgroundBlur: boolean;
        backgroundOpacity: number;
    };
};

export const defaultSettings: Settings = {
    pageAnimation: {
        enable: true,
        duration: 300,
        distanceIn: 500,
        distanceOut: -500
    },
    task: {
        width: 75,
        allPageWidth: 95,
        progressBarWidth: 85,
        backgroundBlur: true,
        backgroundOpacity: 50
    }
};

export const SETTINGS = init();

function init(): Writable<Settings> {
    let settings = localStorageStore(KEY, defaultSettings);
    if (!browser) return settings;

    settings.update((value) => {
        // @ts-ignore
        value = setMissingValueFromDefault(value, defaultSettings);
        // @ts-ignore
        value = removeUnused(value, defaultSettings);
        return value;
    });

    return settings;
}
