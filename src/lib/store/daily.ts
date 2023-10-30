import type { Store } from "$lib/utils/interface";

const KEY = "daily";

import { localStorageStore } from "@skeletonlabs/skeleton";
import type { Writable } from "svelte/store";

export const daily: Writable<Store> = localStorageStore(KEY, {
    Time: new Date(),
    Value: {}
});
