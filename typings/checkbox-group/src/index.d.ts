declare const _default: import("vue").DefineComponent<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            FORM_ITEM: string;
            FORM_CHANGE: string;
        };
    };
    modelValue: {};
    disabled: BooleanConstructor;
    min: NumberConstructor;
    max: NumberConstructor;
    size: StringConstructor;
    fill: StringConstructor;
    textColor: StringConstructor;
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
    _constants: {
        type: ObjectConstructor;
        default: () => {
            FORM_ITEM: string;
            FORM_CHANGE: string;
        };
    };
    modelValue: {};
    disabled: BooleanConstructor;
    min: NumberConstructor;
    max: NumberConstructor;
    size: StringConstructor;
    fill: StringConstructor;
    textColor: StringConstructor;
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
    _constants: Record<string, any>;
    type: string;
    disabled: boolean;
    vertical: boolean;
    options: unknown[];
}>;
export default _default;
