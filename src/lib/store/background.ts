import { localStorageStore } from "@skeletonlabs/skeleton";

export const IMAGE_DEFAULT =
    "https://cdn.discordapp.com/attachments/1124903904971333632/1125529873054715956/3.0bg.jpg";
export const VIDEO_DEFAULT =
    "https://cdn.discordapp.com/attachments/1124903904971333632/1124903942829117550/bg.mp4";

const KEY = "bgType";
const DEFAULT: Background = {
    type: "image",
    props: IMAGE_DEFAULT
};

export type Background = {
    type: "video" | "image";
    props: string;
};

export const backgroundType = localStorageStore(KEY, DEFAULT);
