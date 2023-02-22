declare const _default: import("vue").DefineComponent<{
    date: {};
    disabledDate: {};
    maxDate: {};
    minDate: {};
    rangeState: {
        default: () => {
            endDate: null;
            selecting: boolean;
        };
    };
    selectionMode: {
        default: string;
    };
    value: {};
}, {
    t: any;
    vm: any;
    f: (props: any, attrs?: {}) => {};
    a: (attrs: any, filters: any, include: any) => {};
    d: (props: any) => void;
    dp: (props: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("pick" | "changerange")[], "pick" | "changerange", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    date: {};
    disabledDate: {};
    maxDate: {};
    minDate: {};
    rangeState: {
        default: () => {
            endDate: null;
            selecting: boolean;
        };
    };
    selectionMode: {
        default: string;
    };
    value: {};
}>> & {
    onPick?: ((...args: any[]) => any) | undefined;
    onChangerange?: ((...args: any[]) => any) | undefined;
}, {
    selectionMode: string;
    rangeState: {
        endDate: null;
        selecting: boolean;
    };
}>;
export default _default;
