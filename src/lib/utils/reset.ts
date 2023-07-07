import type { Base } from '$lib/utils/interface';

export function reset<Type extends Base>(data: Type): Type {
	for (const v of data.Value) {
		for (let value of Object.values(v)) {
			console.log(`Resetting: ${typeof value}: `, value);
			if (value.contructor == Object) {
				// @ts-ignore
				value = resetObject(value);
				continue;
			} else if (Array.isArray(value)) {
				// @ts-ignore
				value = resetArray(value);
				continue;
			}

			switch (typeof value) {
				case 'number':
					// @ts-ignore
					value = 0;
					break;
				case 'boolean':
					// @ts-ignore
					value = false;
					break;
				case 'string':
					break;
				default:
					console.log(`Unknown Type: ${typeof value}: `, value);
			}
		}
	}
	return data;
}

function resetObject(data: Object): Object {
	for (const [key, value] of Object.entries(data)) {
		if (value.contructor == Object) {
			// @ts-ignore
			data[key] = resetObject(value);
			continue;
		} else if (Array.isArray(value)) {
			// @ts-ignore
			data[key] = resetArray(value);
			continue;
		}

		switch (typeof value) {
			case 'number':
				// @ts-ignore
				data[key] = 0;
				break;
			case 'boolean':
				// @ts-ignore
				data[i] = false;
				break;
			case 'string':
				break;
			default:
				console.log(`Unknown Type: ${typeof value}: `, value);
		}
	}

	return {};
}

function resetArray(data: any[]): any[] {
	for (let i = 0; i < data.length; i++) {
		if (data[i].contructor == Object) {
			// @ts-ignore
			data[i] = resetObject(value);
			continue;
		} else if (Array.isArray(data[i])) {
			// @ts-ignore
			data[i] = resetArray(data[i]);
			continue;
		}

		switch (typeof data[i]) {
			case 'number':
				// @ts-ignore
				data[i] = 0;
				break;
			case 'boolean':
				// @ts-ignore
				data[i] = false;
				break;
			case 'string':
				break;
			default:
				console.log(`Unknown Type: ${typeof data[i]}: `, data[i]);
		}
	}

	return data;
}
