import { setResetTime, setTimeOffset } from '$lib/utils/time';

function init(): Date {
	const now = new Date();
	setTimeOffset(now);

	const date = now.getDate();
	const hour = now.getHours();

	if (date == 1 && hour >= 5) {
		now.setMonth(now.getMonth() + 1);
	} else {
		now.setDate(1);
		now.setMonth(now.getMonth() + 1);
	}

	setResetTime(now);

	return now;
}

export const RESET_TIME = init();
