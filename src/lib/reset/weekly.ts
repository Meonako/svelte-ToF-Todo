import { setResetTime, setTimeOffset } from '$lib/utils/time';

function init(): Date {
	const now = new Date();
	setTimeOffset(now);

	const day = now.getDay();
	const hour = now.getHours();
	if (day == 0 && hour >= 5) {
		now.setDate(now.getDate() + 7);
	} else {
		now.setDate(now.getDate() + (7 - day));
	}

	setResetTime(now);

	return now;
}

export const RESET_TIME = init();
