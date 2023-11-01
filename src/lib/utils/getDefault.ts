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
