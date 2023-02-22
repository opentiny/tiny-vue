declare const _default: import("vue").DefineComponent<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            FORM_ITEM: string;
            FORM_CHANGE: string;
            CHECKBOX: string;
            CHECKBOX_GROUP: string;
        };
    };
    modelValue: {};
    label: {};
    indeterminate: BooleanConstructor;
    disabled: BooleanConstructor;
    checked: BooleanConstructor;
    name: StringConstructor;
    trueLabel: (StringConstructor | NumberConstructor)[];
    falseLabel: (StringConstructor | NumberConstructor)[];
    id: StringConstructor;
    controls: StringConstructor;
    border: BooleanConstructor;
    size: StringConstructor;
    text: StringConstructor;
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    events: {
        type: ObjectConstructor;
        default: () => {};
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            FORM_ITEM: string;
            FORM_CHANGE: string;
            CHECKBOX: string;
            CHECKBOX_GROUP: string;
        };
    };
    modelValue: {};
    label: {};
    indeterminate: BooleanConstructor;
    disabled: BooleanConstructor;
    checked: BooleanConstructor;
    name: StringConstructor;
    trueLabel: (StringConstructor | NumberConstructor)[];
    falseLabel: (StringConstructor | NumberConstructor)[];
    id: StringConstructor;
    controls: StringConstructor;
    border: BooleanConstructor;
    size: StringConstructor;
    text: StringConstructor;
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    events: {
        type: ObjectConstructor;
        default: () => {};
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    _constants: Record<string, any>;
    disabled: boolean;
    events: Record<string, any>;
    border: boolean;
    indeterminate: boolean;
    checked: boolean;
    validateEvent: boolean;
}>;
export default _default;
