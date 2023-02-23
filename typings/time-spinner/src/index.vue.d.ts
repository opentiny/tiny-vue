declare const _default: import("vue").DefineComponent<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            ANIMATIONNAME: string;
        };
    };
    date: {};
    defaultValue: {};
    showSeconds: {
        type: BooleanConstructor;
        default: boolean;
    };
    arrowControl: BooleanConstructor;
    amPmMode: {
        type: StringConstructor;
        default: string;
    };
}, {
    t: any;
    vm: any;
    f: (props: any, attrs?: {}) => {};
    a: (attrs: any, filters: any, include: any) => {};
    d: (props: any) => void;
    dp: (props: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "select-range")[], "change" | "select-range", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            ANIMATIONNAME: string;
        };
    };
    date: {};
    defaultValue: {};
    showSeconds: {
        type: BooleanConstructor;
        default: boolean;
    };
    arrowControl: BooleanConstructor;
    amPmMode: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onSelect-range"?: ((...args: any[]) => any) | undefined;
}, {
    _constants: Record<string, any>;
    arrowControl: boolean;
    showSeconds: boolean;
    amPmMode: string;
}>;
export default _default;
