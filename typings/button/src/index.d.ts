declare const _default: import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        default: string;
    };
    tabindex: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    text: {
        type: StringConstructor;
        default: string;
    };
    resetTime: {
        type: NumberConstructor;
        default: number;
    };
    nativeType: {
        type: StringConstructor;
        default: string;
    };
    size: StringConstructor;
    round: BooleanConstructor;
    plain: BooleanConstructor;
    circle: BooleanConstructor;
    loading: BooleanConstructor;
    disabled: BooleanConstructor;
    autofocus: BooleanConstructor;
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
    };
    tabindex: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    text: {
        type: StringConstructor;
        default: string;
    };
    resetTime: {
        type: NumberConstructor;
        default: number;
    };
    nativeType: {
        type: StringConstructor;
        default: string;
    };
    size: StringConstructor;
    round: BooleanConstructor;
    plain: BooleanConstructor;
    circle: BooleanConstructor;
    loading: BooleanConstructor;
    disabled: BooleanConstructor;
    autofocus: BooleanConstructor;
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
    circle: boolean;
    text: string;
    icon: string | Record<string, any>;
    tabindex: string;
    disabled: boolean;
    autofocus: boolean;
    resetTime: number;
    nativeType: string;
    loading: boolean;
    plain: boolean;
    round: boolean;
}>;
export default _default;
