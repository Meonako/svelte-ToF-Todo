import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { getDefault } from '../utils/getDefault';
import type { Base } from '../utils/interface';

const KEY = 'weekly';

export interface Weekly extends Base {
	DreamMachine: number;
	Raid: number;
	SequentialPhantasm: number;
	CrewQuest: number;
	MSECQuest: number;
	VoidRift: boolean;
	FrontierClash: boolean;
	ArtificialIsland: {
		Monster: boolean;
		Metal: boolean;
		Fiber: boolean;
		Energy: boolean;
		Supply: boolean;
		Accessory: boolean;
	};
}

const weeklyDefault: Weekly = {
	DreamMachine: 0,
	Raid: 0,
	SequentialPhantasm: 0,
	CrewQuest: 0,
	MSECQuest: 0,
	VoidRift: false,
	FrontierClash: false,
	ArtificialIsland: {
		Monster: false,
		Metal: false,
		Fiber: false,
		Energy: false,
		Supply: false,
		Accessory: false
	},
	Time: new Date()
};

export const weeklyMax = {
	DreamMachine: 3,
	Raid: 1,
	SequentialPhantasm: 4,
	CrewQuest: 4,
	MSECQuest: 3
};

export const weekly = writable(getDefault(KEY, weeklyDefault));

if (browser) {
	weekly.subscribe((value) => window.localStorage.setItem(KEY, JSON.stringify(value)));
}
