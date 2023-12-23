import type { Store } from "$lib/utils/interface";

export function reset(data: Store): Store {
    for (let [k, v] of Object.entries(data.Value)) {
        if (Array.isArray(v)) {
            if (v.length == 0) continue;
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

function resetObject(data: Record<string, any>): Record<string, any> {
    for (const [key, value] of Object.entries(data)) {
        if (value.contructor == Object) {
            data[key] = resetObject(value);
            continue;
        } else if (Array.isArray(value)) {
            data[key] = resetArray(value);
            continue;
        }

        data[key] = defaultValue(value);
    }

    return data;
}

function resetArray(data: any[]): any[] {
    for (let i = 0; i < data.length; i++) {
        if (data[i] == null || typeof data[i] == "undefined") continue;

        if (data[i].contructor == Object) {
            data[i] = resetObject(data[i]);
            continue;
        } else if (Array.isArray(data[i])) {
            data[i] = resetArray(data[i]);
            continue;
        }

        data[i] = defaultValue(data[i]);
    }

    return data;
}

function defaultValue(data: any) {
    switch (typeof data) {
        case "number":
            return 0;
        case "boolean":
            return false;
        case "string":
            return parseInt(data);
        default:
            console.log("Unknown Type:", data);
            return null;
    }
}
