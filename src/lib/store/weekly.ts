// import { writable } from "svelte/store";
// import { browser } from "$app/environment";
// import { getDefault } from "$lib/utils/getDefault";
// import type { Base } from "$lib/utils/interface";
// import { WEEKLY } from "$lib/server/model";

// const KEY = "weekly";
// const LAST_UPDATE = "2023-07-07T05:05:46.402Z";

// const weeklyDefault: Base = {
//     Time: new Date(),
//     Value: WEEKLY
// };

// export const weekly = writable(getDefault(KEY, weeklyDefault, new Date(LAST_UPDATE)));

// if (browser) {
//     weekly.subscribe((value) => localStorage.setItem(KEY, JSON.stringify(value)));
// }

import type { Store } from "$lib/utils/interface";

const KEY = "weekly";

import { localStorageStore } from "@skeletonlabs/skeleton";
import type { Writable } from "svelte/store";

export const weekly: Writable<Store> = localStorageStore(KEY, {
    Time: new Date(),
    Value: {}
});
