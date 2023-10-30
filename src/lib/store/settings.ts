import { localStorageStore } from "@skeletonlabs/skeleton";

const KEY = "settings";

export const SETTINGS = localStorageStore(KEY, {
    pageAnimationEnable: true,
    pageAnimationDuration: 300,
    pageAnimationDistanceIn: 500,
    pageAnimationDistanceOut: -500
});
