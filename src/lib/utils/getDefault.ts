// import { browser } from "$app/environment";
// import type { Base, TaskValue } from "./interface";

// export function getDefault<T extends Base>(key: string, def: T, lastUpdate?: Date): T {
//     if (!browser) return def;

//     const ObjectString = window.localStorage.getItem(key);
//     if (!ObjectString) return def;

//     let data: T = JSON.parse(ObjectString);
//     if (!data.Time) return def;

//     if (typeof data.Time == "string") {
//         data.Time = new Date(data.Time);
//     }

//     if (lastUpdate && data.Time < lastUpdate) {
//         return def;
//     } else {
//         data.Time = new Date();
//     }

//     if (!data.Value) return def;

//     for (let i = 0; i < def.Value.length; i++) {
//         const defaultValue = def.Value[i];
//         const currentValue = data.Value[i];

//         for (const key of Object.keys(defaultValue)) {
//             if (!Object.keys(currentValue).includes(key)) {
//                 console.log("Current data not include: ", key);
//                 // @ts-ignore
//                 currentValue[key] = defaultValue[key];
//             }
//         }

//         for (const key of Object.keys(currentValue)) {
//             if (!Object.keys(defaultValue).includes(key)) {
//                 console.log("Current data not include: ", key);
//                 delete data.Value[i][key as keyof TaskValue];
//             }
//         }

//         def.Value[i] = defaultValue;
//         data.Value[i] = currentValue;
//     }

//     return data;
// }

export function defaultValue(v: string, len?: number): any {
    switch (v) {
        case "number":
            return 0;
        case "boolean":
            return false;
        case "numberWithButtons":
            return 0;
        case "booleanList":
            if (!len) {
                return [];
            }

            const boolList = [];
            for (let i = 0; i < len; i++) {
                boolList.push(false);
            }

            return [];
        default:
            return "Unknown type: " + v;
    }
}
