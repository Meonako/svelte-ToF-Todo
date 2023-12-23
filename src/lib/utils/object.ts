export function removeUnused(
    target: Record<string, any>,
    def: Record<string, any>
): Record<string, any> {
    for (const [name, task] of Object.entries(target)) {
        if (!def[name]) {
            delete target[name];
        } else if (typeof task == "object") {
            target[name] = removeUnused(task, def[name]);
        }
    }

    return target;
}

export function setMissingValueFromDefault(
    target: Record<string, any>,
    def: Record<string, any>
): Record<string, any> {
    for (const [name, task] of Object.entries(def)) {
        if (typeof task == "object") {
            target[name] = setMissingValueFromDefault(target[name], task);
        } else if (target[name]) {
            continue;
        } else {
            target[name] = task;
        }
    }

    return target;
}
