import { DAILY } from "$lib/server/model";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
    return {
        DAILY
    };
}) satisfies PageServerLoad;
