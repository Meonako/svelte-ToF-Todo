// import { writable } from "svelte/store";
// import { browser } from "$app/environment";
// import { getDefault } from "$lib/utils/getDefault";
// import type { Base } from "$lib/utils/interface";
// import { MONTHLY } from "$lib/server/model";

// const KEY = "monthly";
// const LAST_UPDATE = "2023-07-07T05:05:46.402Z";

// const monthlyDefault: Base = {
//     Time: new Date(),
//     Value: MONTHLY
// };

// export const monthly = writable(getDefault(KEY, monthlyDefault, new Date(LAST_UPDATE)));

// if (browser) {
//     monthly.subscribe((value) => localStorage.setItem(KEY, JSON.stringify(value)));
// }
import type { Store } from "$lib/utils/interface";

const KEY = "monthly";

import { localStorageStore } from "@skeletonlabs/skeleton";
import type { Writable } from "svelte/store";

export const monthly: Writable<Store> = localStorageStore(KEY, {
    Time: new Date(),
    Value: {}
});
