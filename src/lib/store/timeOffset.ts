import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const KEY = 'timeOffset';

type timeOffsetStore = {
	name: string;
	offset: number;
};

const defaultTimeOffset: timeOffsetStore = {
	name: 'SEA - Odyssey',
	offset: 8
};

let currentTimeOffset = 8;

function getValueFromStorage(): timeOffsetStore {
	if (!browser) return defaultTimeOffset;

	const storedValue = localStorage.getItem(KEY);
	if (!storedValue) return defaultTimeOffset;

	return JSON.parse(storedValue);
}

export const timeOffset = writable(getValueFromStorage());

if (browser) {
	timeOffset.subscribe((v) => {
		currentTimeOffset = v.offset;
		localStorage.setItem(KEY, JSON.stringify(v));
	});
}
