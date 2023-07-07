import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { getDefault } from '../utils/getDefault';
import type { Base, Task } from '../utils/interface';

const KEY = 'monthly';
const LAST_UPDATE = '2023-07-07T05:05:46.402Z';

const monthlyDefault: Base = {
	Time: new Date(),
	Value: [
		{
			name: 'Void Abyss',
			type: 'number',
			value: 0,
			max: 6
		},
		{
			name: 'Apex League',
			type: 'boolean',
			value: false,
			label: 'Done'
		},
		{
			name: 'Artificial Island',
			type: 'booleanList',
			value: [false, false, false, false],
			label: ['[Shop] Metal', '[Shop] Fiber', '[Shop] Energy', '[Shop] Supply']
		}
	]
};

// export interface Monthly extends Base {
// 	VoidAbyss: number;
// 	ApexLeague: boolean;
// 	ArtificialIsland: {
// 		Metal: boolean;
// 		Fiber: boolean;
// 		Energy: boolean;
// 		Supply: boolean;
// 	};
// }

// const monthlyDefault: Monthly = {
// 	VoidAbyss: 0,
// 	ApexLeague: false,
// 	ArtificialIsland: {
// 		Metal: false,
// 		Fiber: false,
// 		Energy: false,
// 		Supply: false
// 	},
// 	Time: new Date()
// };

// export const monthlyMax = {
// 	VoidAbyss: 6
// };

export const monthly = writable(getDefault(KEY, monthlyDefault, new Date(LAST_UPDATE)));

if (browser) {
	monthly.subscribe((value) => window.localStorage.setItem(KEY, JSON.stringify(value)));
}
