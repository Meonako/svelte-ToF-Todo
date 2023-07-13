import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { getDefault } from '../utils/getDefault';
import type { Base } from '../utils/interface';
import { MONTHLY } from '$lib/config';

const KEY = 'monthly';
const LAST_UPDATE = '2023-07-07T05:05:46.402Z';

const monthlyDefault: Base = {
	Time: new Date(),
	Value: MONTHLY
};

export const monthly = writable(getDefault(KEY, monthlyDefault, new Date(LAST_UPDATE)));

if (browser) {
	monthly.subscribe((value) => window.localStorage.setItem(KEY, JSON.stringify(value)));
}
