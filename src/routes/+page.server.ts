import type { PageServerLoad } from "./$types";

import { DAILY, WEEKLY, MONTHLY } from "$lib/server/model";

export const load = (async () => {
    return {
        DAILY,
        WEEKLY,
        MONTHLY
    };
}) satisfies PageServerLoad;
