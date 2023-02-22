declare const _default: import("vue").DefineComponent<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            CHILD_NAME: string;
        };
    };
    autoplay: {
        type: BooleanConstructor;
        default: boolean;
    };
    initialIndex: {
        type: NumberConstructor;
        default: number;
    };
    height: StringConstructor;
    trigger: {
        type: StringConstructor;
        default: string;
    };
    interval: {
        type: NumberConstructor;
        default: number;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    indicatorPosition: StringConstructor;
    arrow: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
    };
    showTitle: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            CHILD_NAME: string;
        };
    };
    autoplay: {
        type: BooleanConstructor;
        default: boolean;
    };
    initialIndex: {
        type: NumberConstructor;
        default: number;
    };
    height: StringConstructor;
    trigger: {
        type: StringConstructor;
        default: string;
    };
    interval: {
        type: NumberConstructor;
        default: number;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    indicatorPosition: StringConstructor;
    arrow: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
    };
    showTitle: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    _constants: Record<string, any>;
    initialIndex: number;
    trigger: string;
    autoplay: boolean;
    interval: number;
    arrow: string;
    showTitle: boolean;
    loop: boolean;
}>;
export default _default;
