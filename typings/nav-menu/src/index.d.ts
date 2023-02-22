declare const _default: import("vue").DefineComponent<{
    data: ArrayConstructor;
    overflow: {
        type: StringConstructor;
        default: string;
        validator(value: unknown): boolean;
    };
    parentKey: StringConstructor;
    beforeSkip: FunctionConstructor;
    fetchMenuData: FunctionConstructor;
    fields: ObjectConstructor;
    prevent: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowFullUrl: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: ArrayConstructor;
    overflow: {
        type: StringConstructor;
        default: string;
        validator(value: unknown): boolean;
    };
    parentKey: StringConstructor;
    beforeSkip: FunctionConstructor;
    fetchMenuData: FunctionConstructor;
    fields: ObjectConstructor;
    prevent: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowFullUrl: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    overflow: string;
    prevent: boolean;
    allowFullUrl: boolean;
}>;
export default _default;
