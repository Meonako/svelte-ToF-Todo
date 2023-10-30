// export const COMMON_RESET_HOUR = 5;

function getOffsetInHours(date: Date): number {
    return Math.abs(date.getTimezoneOffset()) / 60;
}

export function setTimeOffset(date: Date) {
    const offset = getOffsetInHours(date);

    if (offset != 7) {
        date.setHours(date.getHours() + (7 - offset));
    }
}

export function setResetTime(date: Date) {
    date.setHours(5, 0, 0, 0);
}
