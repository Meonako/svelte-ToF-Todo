import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { getDefault } from '../utils/getDefault';
import type { Base } from '../utils/interface';

const KEY = 'monthly';

export interface Monthly extends Base {
	VoidAbyss: number;
	ApexLeague: boolean;
	ArtificialIsland: {
		Metal: boolean;
		Fiber: boolean;
		Energy: boolean;
		Supply: boolean;
	};
}

const monthlyDefault: Monthly = {
	VoidAbyss: 0,
	ApexLeague: false,
	ArtificialIsland: {
		Metal: false,
		Fiber: false,
		Energy: false,
		Supply: false
	},
	Time: new Date()
};

export const monthlyMax = {
	VoidAbyss: 6
};

export const monthly = writable(getDefault(KEY, monthlyDefault));

if (browser) {
	monthly.subscribe((value) => window.localStorage.setItem(KEY, JSON.stringify(value)));
}
