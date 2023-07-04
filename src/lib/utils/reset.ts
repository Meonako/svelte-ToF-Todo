import type { Base } from '$lib/utils/interface';

export function reset<Type extends Base>(data: Type): Type {
	for (const [key, value] of Object.entries(data)) {
		if (key == 'Time') continue;

		switch (typeof value) {
			case 'number':
				// @ts-ignore
				data[key] = 0;
				break;
			case 'boolean':
				// @ts-ignore
				data[key] = false;
				break;
			case 'object':
				// @ts-ignore
				data[key] = reset(value);
				break;
			default:
				console.log(`Unknown Type: ${typeof value}: ${value}`);
		}
	}
	return data;
}
