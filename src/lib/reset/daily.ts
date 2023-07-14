import { setResetTime, setTimeOffset } from '$lib/utils/time';

function init(): Date {
	const now = new Date();
	setTimeOffset(now);

	const hour = now.getHours();
	if (hour >= 5) {
		now.setDate(now.getDate() + 1);
	}

	setResetTime(now);

	return now;
}

export const RESET_TIME = init();
