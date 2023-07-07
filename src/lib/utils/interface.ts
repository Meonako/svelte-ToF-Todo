export interface Base {
	Time: Date;
	Value: Task[];
}

interface TaskBase {
	name: string;
	type: string;
}

interface numberProps extends TaskBase {
	type: 'number',
	value: number,
	max: number,
}

interface numberWithButtonsProps extends TaskBase {
	type: 'numberWithButtons',
	value: number,
	max: number,
	buttons: number[],
}

interface booleanProps extends TaskBase {
	type: 'boolean',
	value: boolean,
	label: string,
}

interface booleanListProps extends TaskBase {
	type: 'booleanList',
	value: boolean[],
	label: string[],
}

export type Task = TaskBase & (
	numberProps |
	numberWithButtonsProps |
	booleanProps |
	booleanListProps
)