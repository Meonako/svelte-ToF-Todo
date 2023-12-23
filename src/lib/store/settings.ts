import { browser } from "$app/environment";
import { localStorageStore } from "@skeletonlabs/skeleton";
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
        value = setDefaultValue(value, defaultSettings);
        return value;
    });

    return settings;
}

function setDefaultValue(
    target: Record<string, any>,
    def: Record<string, any>
): Record<string, any> {
    for (const [name, task] of Object.entries(def)) {
        if (typeof task == "object") {
            target[name] = setDefaultValue(target[name], task);
        } else if (target[name]) {
            continue;
        } else {
            target[name] = task;
        }
    }

    return target;
}
