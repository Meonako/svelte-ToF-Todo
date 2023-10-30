import { WEEKLY } from "$lib/server/model";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
    return {
        WEEKLY
    };
}) satisfies PageServerLoad;
