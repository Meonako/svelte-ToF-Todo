export interface Store {
    Time: Date;
    Value: Record<string, any>;
}

interface numberProps {
    type: "number";
    max: number;
}

interface numberWithButtonsProps {
    type: "numberWithButtons";
    max: number;
    buttons: number[];
}

interface booleanProps {
    type: "boolean";
}

interface booleanListProps {
    type: "booleanList";
    label: string[];
}

export type Task = numberProps | numberWithButtonsProps | booleanProps | booleanListProps;
