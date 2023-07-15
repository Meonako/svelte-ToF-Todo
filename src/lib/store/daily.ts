import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { getDefault } from '$lib/utils/getDefault';
import type { Base } from '$lib/utils/interface';
import { DAILY } from '$lib/config';

const KEY = 'daily';
const LAST_UPDATE = '2023-07-07T05:05:46.402Z';

const dailyDefault: Base = {
	Time: new Date(),
	Value: DAILY
};

export const daily = writable(getDefault(KEY, dailyDefault, new Date(LAST_UPDATE)));

if (browser) {
	daily.subscribe((value) => localStorage.setItem(KEY, JSON.stringify(value)));
}
