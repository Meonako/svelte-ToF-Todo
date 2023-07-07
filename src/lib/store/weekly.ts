import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { getDefault } from '../utils/getDefault';
import type { Base, Task } from '../utils/interface';

const KEY = 'weekly';
const LAST_UPDATE = '2023-07-04T04:04:29.775Z';

const weeklyDefault: Base = {
	Time: new Date(),
	Value: [
		{
			name: 'Dream Machine',
			type: 'number',
			value: 0,
			max: 3
		},
		{
			name: 'Sequential Phantasm',
			type: 'number',
			value: 0,
			max: 4
		},
		{
			name: 'Crew Quest',
			type: 'number',
			value: 0,
			max: 4
		},
		{
			name: 'M-SEC Quest',
			type: 'number',
			value: 0,
			max: 3
		},
		{
			name: 'Raid',
			type: 'boolean',
			value: false,
			label: 'Clear'
		},
		{
			name: 'Void Rift',
			type: 'boolean',
			value: false,
			label: 'Clear'
		},
		{
			name: 'Frontier Clash',
			type: 'boolean',
			value: false,
			label: 'Clear'
		},
		{
			name: 'Domain 9 Fountain Pillar',
			type: 'boolean',
			value: false,
			label: 'Clear'
		},
		{
			name: 'Artificial Island',
			type: 'booleanList',
			value: [false, false, false, false, false, false],
			label: [
				'[Monster] Clear',
				'[Shop] Metal',
				'[Shop] Fiber',
				'[Shop] Energy',
				'[Shop] Supply',
				'[Shop] Accessory'
			]
		}
	]
};

export const weekly = writable(getDefault(KEY, weeklyDefault, new Date(LAST_UPDATE)));

if (browser) {
	weekly.subscribe((value) => window.localStorage.setItem(KEY, JSON.stringify(value)));
}
