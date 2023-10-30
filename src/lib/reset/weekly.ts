import { setResetTime, setTimeOffset } from "$lib/utils/time";

enum Day {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

function init(): Date {
    const now = new Date();
    setTimeOffset(now);
    console.log(now);

    const day = now.getDay();
    const hour = now.getHours();

    // Reset on Monday 04:00
    // day == 1 && hour < 4 will do nothing
    if (day == Day.Monday && hour >= 4) {
        // Set to next Monday
        now.setDate(now.getDate() + 7);
    } else if (day == Day.Sunday) {
        // Set to Monday
        now.setDate(now.getDate() + 1);
    } else if (day != Day.Monday) {
        const newDate = now.getDate() + (8 - day);
        now.setDate(newDate);
    }

    setResetTime(now);

    console.log(now);
    console.log("--------------------------------------");
    return now;
}

export const RESET_TIME = init();
