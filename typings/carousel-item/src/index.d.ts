declare const _default: import("vue").DefineComponent<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            TYPE_CARD: string;
            TYPE_VERTICAL: string;
            CARD_SCALE: number;
        };
    };
    name: StringConstructor;
    title: StringConstructor;
    label: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            TYPE_CARD: string;
            TYPE_VERTICAL: string;
            CARD_SCALE: number;
        };
    };
    name: StringConstructor;
    title: StringConstructor;
    label: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
}>>, {
    _constants: Record<string, any>;
    label: string | number;
}>;
export default _default;
