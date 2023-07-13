import { getOffsetInHours } from '$lib/utils/offset';

const now = new Date();

function init(): Date {
	const offset = getOffsetInHours(now);

	if (offset != 7) {
		now.setHours(now.getHours() + (7 - offset));
	}

	const date = now.getDate();
	const hour = now.getHours();

	if (date == 1 && hour >= 5) {
		now.setMonth(now.getMonth() + 1);
	} else {
		now.setDate(1);
		now.setMonth(now.getMonth() + 1);
	}

	now.setHours(5, 0, 0, 0);

	return now;
}

export const RESET_TIME = init();
