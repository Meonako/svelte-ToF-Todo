import { browser } from '$app/environment';
import type { Base, Task } from './interface';

export function getDefault<T extends Base>(key: string, def: T, lastUpdate?: Date): T {
	if (!browser) return def;

	const ObjectString = window.localStorage.getItem(key);
	if (!ObjectString) return def;

	let data: T = JSON.parse(ObjectString);
	if (!data.Time) return def;

	if (typeof data.Time == 'string') {
		data.Time = new Date(data.Time);
	}

	if (lastUpdate && data.Time < lastUpdate) {
		return def;
	} else {
		data.Time = new Date();
	}

	for (let i = 0; i < def.Value.length; i++) {
		const defaultValue = def.Value[i];
		const currentValue = data.Value[i];

		for (const key of Object.keys(defaultValue)) {
			if (!Object.keys(currentValue).includes(key)) {
				console.log('Current data not include: ', key);
				// @ts-ignore
				currentValue[key] = defaultValue[key];
			}
		}

		for (const key of Object.keys(currentValue)) {
			if (!Object.keys(defaultValue).includes(key)) {
				console.log('Current data not include: ', key);
				delete data.Value[i][key as keyof Task];
			}
		}

		def.Value[i] = defaultValue;
		data.Value[i] = currentValue;
	}

	return data;
}
