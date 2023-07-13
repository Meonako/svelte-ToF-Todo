import { getOffsetInHours } from '$lib/utils/offset';

const now = new Date();

function init(): Date {
	const offset = getOffsetInHours(now);

	if (offset != 7) {
		now.setHours(now.getHours() + (7 - offset));
	}

    const day = now.getDay();
	const hour = now.getHours();
	if (day == 0 && hour >= 5) {
		now.setDate(now.getDate() + 7);
	} else {
        now.setDate(now.getDate() + (7 - day))
    }

	now.setHours(5, 0, 0, 0);

	return now;
}

export const RESET_TIME = init();
