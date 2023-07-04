export interface Base {
	Time: Date;
}

export interface Task {
	name: string;
	type: 'number' | 'numberWithButtons' | 'boolean' | 'booleanList';
	value: number | boolean | boolean[];
	max?: number;
	label?: string | string[];
	buttons?: number[];
}
