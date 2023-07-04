import { browser } from '$app/environment';
import type { Base } from './interface';

export function getDefault<T extends Base>(key: string, def: T): T {
	if (!browser) return def;

	const ObjectString = window.localStorage.getItem(key);
	if (!ObjectString) return def;

	let data: T = JSON.parse(ObjectString);
	if (!data.Time) return def;

	if (typeof data.Time == 'string') {
		data.Time = new Date(data.Time);
	}

	for (const key in def) {
		if (!Object.keys(data).includes(key)) {
			console.log('Current data not include: ', key);
			// @ts-ignore
			data[key] = def[key];
		}
	}

	return data;
}
