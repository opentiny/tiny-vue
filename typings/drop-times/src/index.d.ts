declare const _default: import("vue").DefineComponent<{
    modelValue: {};
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    tabindex: {
        type: StringConstructor;
        default: string;
    };
    size: StringConstructor;
    popperClass: StringConstructor;
    popperAppendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    start: {
        type: NumberConstructor;
        default: number;
    };
    end: {
        type: NumberConstructor;
        default: number;
    };
    step: {
        type: NumberConstructor;
        default: number;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {};
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    tabindex: {
        type: StringConstructor;
        default: string;
    };
    size: StringConstructor;
    popperClass: StringConstructor;
    popperAppendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    start: {
        type: NumberConstructor;
        default: number;
    };
    end: {
        type: NumberConstructor;
        default: number;
    };
    step: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    tabindex: string;
    placeholder: string;
    popperAppendToBody: boolean;
    start: number;
    end: number;
    step: number;
}>;
export default _default;
