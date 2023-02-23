declare const _default: import("vue").DefineComponent<{
    modelValue: {};
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    size: StringConstructor;
    fetchRole: FunctionConstructor;
    fetchCurrentRole: FunctionConstructor;
    fields: ObjectConstructor;
    popperClass: StringConstructor;
    popperAppendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {};
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    size: StringConstructor;
    fetchRole: FunctionConstructor;
    fetchCurrentRole: FunctionConstructor;
    fields: ObjectConstructor;
    popperClass: StringConstructor;
    popperAppendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    placeholder: string;
    popperAppendToBody: boolean;
}>;
export default _default;
