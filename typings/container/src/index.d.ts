declare const _default: import("vue").DefineComponent<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            DEFAULT: string;
            SIMPLE: string;
            LEGEND: string;
            CLASSIC: string;
            FASHION: string;
        };
    };
    pattern: {
        type: StringConstructor;
        default: string;
    };
    headerHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    asideWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    footerHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            DEFAULT: string;
            SIMPLE: string;
            LEGEND: string;
            CLASSIC: string;
            FASHION: string;
        };
    };
    pattern: {
        type: StringConstructor;
        default: string;
    };
    headerHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    asideWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    footerHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}>>, {
    _constants: Record<string, any>;
    pattern: string;
    headerHeight: string | number;
    asideWidth: string | number;
    footerHeight: string | number;
}>;
export default _default;
