declare const _default: import("vue").DefineComponent<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            INTERVAL: number;
        };
    };
    title: StringConstructor;
    name: {
        type: (StringConstructor | NumberConstructor)[];
        default(): any;
    };
    disabled: BooleanConstructor;
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            INTERVAL: number;
        };
    };
    title: StringConstructor;
    name: {
        type: (StringConstructor | NumberConstructor)[];
        default(): any;
    };
    disabled: BooleanConstructor;
}>>, {
    name: string | number;
    _constants: Record<string, any>;
    disabled: boolean;
}>;
export default _default;
