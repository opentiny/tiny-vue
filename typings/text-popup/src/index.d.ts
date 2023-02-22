declare const _default: import("vue").DefineComponent<{
    modelValue: {
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        required: false;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
        validator(value: unknown): boolean;
    };
    separtor: {
        type: StringConstructor;
        default: string;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        required: false;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
        validator(value: unknown): boolean;
    };
    separtor: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    width: string | number;
    readonly: boolean;
    modelValue: string;
    separtor: string;
}>;
export default _default;
