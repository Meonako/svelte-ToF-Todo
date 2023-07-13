export function getOffsetInHours(date: Date): number {
	return Math.abs(date.getTimezoneOffset()) / 60;
}
