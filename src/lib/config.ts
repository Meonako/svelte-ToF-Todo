import type { Task } from './utils/interface';

export const DAILY: Task[] = [
	{
		name: 'Bounty',
		type: 'number',
		value: 0,
		max: 4
	},
	{
		name: 'Training',
		type: 'number',
		value: 0,
		max: 2
	},
	{
		name: 'Mirroria Fun Zone',
		type: 'number',
		value: 0,
		max: 8
	},
	{
		name: 'Artificial Island Resource',
		type: 'boolean',
		value: false,
		label: 'Claim'
	},
	{
		name: 'Gift',
		type: 'booleanList',
		value: [false, false],
		label: ['[Aesperia] Banges: Black Market', '[Aesperia] Navia: Cetus Island']
	},
	{
		name: 'Support Points',
		type: 'numberWithButtons',
		value: 0,
		max: 1500,
		buttons: [100, 150, 250, 375, 500]
	},
	{
		name: 'Return Support Points',
		type: 'numberWithButtons',
		value: 0,
		max: 600,
		buttons: [50, 100]
	}
];

export const WEEKLY: Task[] = [
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
		name: 'Comissary Shop',
		type: 'boolean',
		value: false,
		label: 'Bought'
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
];

export const MONTHLY: Task[] = [
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
];
