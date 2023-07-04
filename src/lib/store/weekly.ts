import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { getDefault } from '../utils/getDefault';
import type { Base, Task } from '../utils/interface';

const KEY = 'weekly';

export interface WeeklyList extends Base {
	Weekly: Task[];
}

const weeklyDefault: WeeklyList = {
	Time: new Date(),
	Weekly: [
		{
			name: 'Dream Machine',
			type: 'number',
			value: 0,
			max: 3
		},
		{
			name: "Sequential Phantasm",
			type: "number",
			value: 0,
			max: 4
		},
		{
			name: "Crew Quest",
			type: "number",
			value: 0,
			max: 4
		},
		{
			name: "M-SEC Quest",
			type: "number",
			value: 0,
			max: 3
		},
		{
			name: 'Raid',
			type: 'boolean',
			value: false,
			label: "Clear"
		},
		{
			name: 'Void Rift',
			type: 'boolean',
			value: false,
			label: "Clear"
		},
		{
			name: 'Frontier Clash',
			type: 'boolean',
			value: false,
			label: "Clear"
		},
		{
			name: 'Artificial Island',
			type: 'booleanList',
			value: [false, false, false, false, false, false],
			label: ["[Monster] Clear", "[Shop] Metal", "[Shop] Fiber", "[Shop] Energy", "[Shop] Supply", "[Shop] Accessory"]
		},
	]
};

export const weekly = writable(getDefault(KEY, weeklyDefault));

if (browser) {
	weekly.subscribe((value) => window.localStorage.setItem(KEY, JSON.stringify(value)));
}
