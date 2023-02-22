declare const _default: import("vue").DefineComponent<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            AUTH: string;
            ANONYMOUS: string;
            GLOBAL: string;
            ROLE: string;
        };
    };
    fetchRole: FunctionConstructor;
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            AUTH: string;
            ANONYMOUS: string;
            GLOBAL: string;
            ROLE: string;
        };
    };
    fetchRole: FunctionConstructor;
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    _constants: Record<string, any>;
}>;
export default _default;
