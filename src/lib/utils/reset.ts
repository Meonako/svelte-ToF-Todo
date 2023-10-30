import type { Store } from "$lib/utils/interface";

export function reset(data: Store): Store {
    for (const v of Object.values(data.Value)) {
        if (Array.isArray(v.value)) {
            // @ts-ignore
            v.value = resetArray(v.value);
            continue;
        }

        switch (typeof v.value) {
            case "number":
                // @ts-ignore
                v.value = 0;
                break;
            case "boolean":
                // @ts-ignore
                v.value = false;
                break;
            case "string":
                v.value = parseInt(v.value);
                break;
            default:
                console.log(`Unknown Type: ${typeof v.value}: `, v.value);
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
