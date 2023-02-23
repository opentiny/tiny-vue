declare const _default: import("vue").DefineComponent<{
    modelValue: {};
    size: StringConstructor;
    fill: StringConstructor;
    textColor: StringConstructor;
    disabled: BooleanConstructor;
    vertical: BooleanConstructor;
    options: {
        type: ArrayConstructor;
        default: () => never[];
    };
    type: {
        type: StringConstructor;
        default: string;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {};
    size: StringConstructor;
    fill: StringConstructor;
    textColor: StringConstructor;
    disabled: BooleanConstructor;
    vertical: BooleanConstructor;
    options: {
        type: ArrayConstructor;
        default: () => never[];
    };
    type: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
    disabled: boolean;
    vertical: boolean;
    options: unknown[];
}>;
export default _default;
