import { writable, type Writable } from 'svelte/store';
import { browser } from '$app/environment';

const KEY = 'bgType';
const DEFAULT: Background = {
	type: 'image',
	props: 'https://cdn.discordapp.com/attachments/1124903904971333632/1125529873054715956/3.0bg.jpg'
};
export const IMAGE_DEFAULT =
	'https://cdn.discordapp.com/attachments/1124903904971333632/1125529873054715956/3.0bg.jpg';
export const VIDEO_DEFAULT =
	'https://cdn.discordapp.com/attachments/1124903904971333632/1124903942829117550/bg.mp4';

export type Background = {
	type: 'video' | 'image';
	props: string;
};

function getValueFromStore(): Background {
	if (!browser) return DEFAULT;

	const storeValue = localStorage.getItem(KEY);
	if (!storeValue) return DEFAULT;

	let parsed;
	try {
		parsed = JSON.parse(storeValue);
	} catch (e) {
		return DEFAULT;
	}

	if (!parsed.type && !parsed.props) return DEFAULT;

	return parsed;
}

export const backgroundType: Writable<Background> = writable(getValueFromStore());

if (browser) {
	backgroundType.subscribe((v) => localStorage.setItem(KEY, JSON.stringify(v)));
}
