import type { Store } from "$lib/utils/interface";

export function reset(data: Store): Store {
    for (let [k, v] of Object.entries(data.Value)) {
        if (Array.isArray(v)) {
            if (v.length == 0) continue
            // @ts-ignore
            data.Value[k] = resetArray(v);
            continue;
        }

        switch (typeof v) {
            case "number":
                // @ts-ignore
                data.Value[k] = 0;
                break;
            case "boolean":
                // @ts-ignore
                data.Value[k] = false;
                break;
            case "string":
                data.Value[k] = parseInt(v);
                break;
            default:
                console.log(`Unknown Type: ${typeof v}: `, v);
        }
    }
    return data;
}

function resetObject(data: Object): Object {
    for (const [key, value] of Object.entries(data)) {
        if (value.contructor == Object) {
            // @ts-ignore
            data[key] = resetObject(value);
            continue;
        } else if (Array.isArray(value)) {
            // @ts-ignore
            data[key] = resetArray(value);
            continue;
        }

        switch (typeof value) {
            case "number":
                // @ts-ignore
                data[key] = 0;
                break;
            case "boolean":
                // @ts-ignore
                data[i] = false;
                break;
            case "string":
                break;
            default:
                console.log(`Unknown Type: ${typeof value}: `, value);
        }
    }

    return {};
}

function resetArray(data: any[]): any[] {
    for (let i = 0; i < data.length; i++) {
        if (data[i] == null || typeof data[i] == "undefined") continue;

        if (data[i].contructor == Object) {
            // @ts-ignore
            data[i] = resetObject(value);
            continue;
        } else if (Array.isArray(data[i])) {
            // @ts-ignore
            data[i] = resetArray(data[i]);
            continue;
        }

        switch (typeof data[i]) {
            case "number":
                // @ts-ignore
                data[i] = 0;
                break;
            case "boolean":
                // @ts-ignore
                data[i] = false;
                break;
            case "string":
                break;
            default:
                console.log(`Unknown Type: ${typeof data[i]}: `, data[i]);
        }
    }

    return data;
}
