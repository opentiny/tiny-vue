declare const _default: import("vue").DefineComponent<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            COMPONENT_NAME: {
                Collapse: string;
            };
            EVENT_NAME: {
                CollapseItemClick: string;
            };
        };
    };
    accordion: BooleanConstructor;
    beforeClose: FunctionConstructor;
    modelValue: {
        type: (ArrayConstructor | StringConstructor | NumberConstructor)[];
        default(): never[];
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            COMPONENT_NAME: {
                Collapse: string;
            };
            EVENT_NAME: {
                CollapseItemClick: string;
            };
        };
    };
    accordion: BooleanConstructor;
    beforeClose: FunctionConstructor;
    modelValue: {
        type: (ArrayConstructor | StringConstructor | NumberConstructor)[];
        default(): never[];
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    _constants: Record<string, any>;
    modelValue: string | number | unknown[];
    accordion: boolean;
}>;
export default _default;
