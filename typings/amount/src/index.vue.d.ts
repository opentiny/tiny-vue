declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
    };
    tabindex: {
        type: StringConstructor;
        default: string;
    };
    size: StringConstructor;
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    currency: {
        type: StringConstructor;
        default: string;
    };
    date: (StringConstructor | DateConstructor)[];
    dateAllowEmpty: {
        type: BooleanConstructor;
        default: boolean;
    };
    digits: {
        type: NumberConstructor;
        default: number;
    };
    rounding: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxLen: {
        type: NumberConstructor;
        default: number;
    };
    negative: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    fetchCurrency: FunctionConstructor;
    fields: ObjectConstructor;
    popperClass: StringConstructor;
    popperAppendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    format: ObjectConstructor;
    type: {
        type: StringConstructor;
        default: string;
    };
    holdZero: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelTruncation: {
        type: BooleanConstructor;
        default: boolean;
    };
    strictInput: {
        type: BooleanConstructor;
        default: boolean;
    };
    plugin: FunctionConstructor;
    popUp: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideCurrency: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    t: any;
    vm: any;
    f: (props: any, attrs?: {}) => {};
    a: (attrs: any, filters: any, include: any) => {};
    d: (props: any) => void;
    dp: (props: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
    };
    tabindex: {
        type: StringConstructor;
        default: string;
    };
    size: StringConstructor;
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    currency: {
        type: StringConstructor;
        default: string;
    };
    date: (StringConstructor | DateConstructor)[];
    dateAllowEmpty: {
        type: BooleanConstructor;
        default: boolean;
    };
    digits: {
        type: NumberConstructor;
        default: number;
    };
    rounding: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxLen: {
        type: NumberConstructor;
        default: number;
    };
    negative: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    fetchCurrency: FunctionConstructor;
    fields: ObjectConstructor;
    popperClass: StringConstructor;
    popperAppendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    format: ObjectConstructor;
    type: {
        type: StringConstructor;
        default: string;
    };
    holdZero: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelTruncation: {
        type: BooleanConstructor;
        default: boolean;
    };
    strictInput: {
        type: BooleanConstructor;
        default: boolean;
    };
    plugin: FunctionConstructor;
    popUp: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideCurrency: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
    tabindex: string;
    placeholder: string;
    currency: string;
    dateAllowEmpty: boolean;
    digits: number;
    rounding: boolean;
    maxLen: number;
    negative: boolean;
    disabled: boolean;
    popperAppendToBody: boolean;
    holdZero: boolean;
    modelTruncation: boolean;
    strictInput: boolean;
    popUp: boolean;
    hideCurrency: boolean;
}>;
export default _default;
