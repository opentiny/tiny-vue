declare const _default: import("vue").DefineComponent<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            RADIO_GROUP: string;
        };
    };
    modelValue: {};
    label: {};
    disabled: BooleanConstructor;
    name: StringConstructor;
    border: BooleanConstructor;
    size: StringConstructor;
    text: StringConstructor;
    events: {
        type: ObjectConstructor;
        default: () => {};
    };
    tabindex: {
        type: StringConstructor;
        default: string;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            RADIO_GROUP: string;
        };
    };
    modelValue: {};
    label: {};
    disabled: BooleanConstructor;
    name: StringConstructor;
    border: BooleanConstructor;
    size: StringConstructor;
    text: StringConstructor;
    events: {
        type: ObjectConstructor;
        default: () => {};
    };
    tabindex: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    _constants: Record<string, any>;
    tabindex: string;
    disabled: boolean;
    events: Record<string, any>;
    border: boolean;
}>;
export default _default;
