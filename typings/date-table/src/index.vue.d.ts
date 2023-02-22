declare const _default: import("vue").DefineComponent<{
    value: {};
    defaultValue: {
        validator(value: unknown): any;
    };
    firstDayOfWeek: {
        default: number;
        type: NumberConstructor;
    };
    date: {};
    selectionMode: {
        default: string;
    };
    disabledDate: {};
    cellClassName: {};
    maxDate: {};
    minDate: {};
    showWeekNumber: {
        type: BooleanConstructor;
        default: boolean;
    };
    rangeState: {
        default(): {
            endDate: null;
            selecting: boolean;
        };
    };
}, {
    t: any;
    vm: any;
    f: (props: any, attrs?: {}) => {};
    a: (attrs: any, filters: any, include: any) => {};
    d: (props: any) => void;
    dp: (props: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("pick" | "changerange")[], "pick" | "changerange", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: {};
    defaultValue: {
        validator(value: unknown): any;
    };
    firstDayOfWeek: {
        default: number;
        type: NumberConstructor;
    };
    date: {};
    selectionMode: {
        default: string;
    };
    disabledDate: {};
    cellClassName: {};
    maxDate: {};
    minDate: {};
    showWeekNumber: {
        type: BooleanConstructor;
        default: boolean;
    };
    rangeState: {
        default(): {
            endDate: null;
            selecting: boolean;
        };
    };
}>> & {
    onPick?: ((...args: any[]) => any) | undefined;
    onChangerange?: ((...args: any[]) => any) | undefined;
}, {
    firstDayOfWeek: number;
    selectionMode: string;
    showWeekNumber: boolean;
    rangeState: {
        endDate: null;
        selecting: boolean;
    };
}>;
export default _default;
