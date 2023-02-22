declare const _default: import("vue").DefineComponent<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            PC_PREFIXCLS: string;
            MOBILE_PREFIXCLS: string;
            Mode: string;
            prefixcls(mode: any): string;
        };
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    falseColor: StringConstructor;
    falseValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: boolean;
    };
    mini: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: boolean;
    };
    size: (StringConstructor | NumberConstructor)[];
    tabindex: {
        type: StringConstructor;
        default: string;
    };
    trueColor: StringConstructor;
    trueValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: boolean;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            PC_PREFIXCLS: string;
            MOBILE_PREFIXCLS: string;
            Mode: string;
            prefixcls(mode: any): string;
        };
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    falseColor: StringConstructor;
    falseValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: boolean;
    };
    mini: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: boolean;
    };
    size: (StringConstructor | NumberConstructor)[];
    tabindex: {
        type: StringConstructor;
        default: string;
    };
    trueColor: StringConstructor;
    trueValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: boolean;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    _constants: Record<string, any>;
    modelValue: string | number | boolean;
    tabindex: string;
    disabled: boolean;
    mini: boolean;
    trueValue: string | number | boolean;
    falseValue: string | number | boolean;
}>;
export default _default;
