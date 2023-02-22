declare const _default: import("vue").DefineComponent<{
    activeColor: StringConstructor;
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    fixed: {
        type: BooleanConstructor;
        default: boolean;
    };
    inactiveColor: StringConstructor;
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    placeholder: BooleanConstructor;
    route: BooleanConstructor;
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: null;
    };
    zIndex: (StringConstructor | NumberConstructor)[];
}, {
    t: any;
    vm: any;
    f: (props: any, attrs?: {}) => {};
    a: (attrs: any, filters: any, include: any) => {};
    d: (props: any) => void;
    dp: (props: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    activeColor: StringConstructor;
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    fixed: {
        type: BooleanConstructor;
        default: boolean;
    };
    inactiveColor: StringConstructor;
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    placeholder: BooleanConstructor;
    route: BooleanConstructor;
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: null;
    };
    zIndex: (StringConstructor | NumberConstructor)[];
}>>, {
    route: boolean;
    fixed: boolean;
    modelValue: string | number;
    placeholder: boolean;
    border: boolean;
    safeAreaInsetBottom: boolean;
}>;
export default _default;
