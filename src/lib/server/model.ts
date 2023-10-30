import type { Task } from "$lib/utils/interface";

export const DAILY: Record<string, Task> = {
    Bounty: {
        type: "number",
        max: 4
    },
    Training: {
        type: "number",
        max: 2
    },
    "Mirroria Fun Zone": {
        type: "number",
        max: 8
    },
    "Joint Operation First Clear": {
        type: "boolean"
    },
    "Tianhe Bazaar Market": {
        type: "boolean"
    },
    "Artificial Island": {
        type: "booleanList",
        label: ["Resource", "Beast Pen"]
    },
    Gift: {
        type: "booleanList",
        label: [
            "[Aesperia] Banges: Black Market",
            "[Aesperia] Navia: Cetus Island",
            "[Domain 9] Ignisville: Festival"
        ]
    },
    "Support Points": {
        type: "numberWithButtons",
        max: 1500,
        buttons: [100, 150, 250, 375, 500]
    },
    "Return Support Points": {
        type: "numberWithButtons",
        max: 600,
        buttons: [50, 100, 200]
    }
};

export const WEEKLY: Record<string, Task> = {
    "Dream Machine": {
        type: "number",
        max: 3
    },
    "Sequential Phantasm": {
        type: "number",
        max: 4
    },
    "Crew Quest": {
        type: "number",
        max: 4
    },
    "M-SEC Quest": {
        type: "number",
        max: 3
    },
    "Random NPC Quest": {
        type: "number",
        max: 13
    },
    "Commissary Shop": {
        type: "boolean"
    },
    Raid: {
        type: "boolean"
    },
    "Void Rift": {
        type: "boolean"
    },
    "Frontier Clash": {
        type: "boolean"
    },
    "Domain 9 Fountain Pillar": {
        type: "boolean"
    },
    "Artificial Island": {
        type: "booleanList",
        label: [
            "[Monster] Clear",
            "[Shop] Metal",
            "[Shop] Fiber",
            "[Shop] Energy",
            "[Shop] Supply",
            "[Shop] Accessory"
        ]
    }
};

export const MONTHLY: Record<string, Task> = {
    "Void Abyss": {
        type: "number",
        max: 6
    },
    "Apex League": {
        type: "boolean"
    },
    "Artificial Island": {
        type: "booleanList",
        label: ["[Shop] Metal", "[Shop] Fiber", "[Shop] Energy", "[Shop] Supply"]
    }
};
