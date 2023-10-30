import { MONTHLY } from "$lib/server/model";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
    return {
        MONTHLY
    };
}) satisfies PageServerLoad;
