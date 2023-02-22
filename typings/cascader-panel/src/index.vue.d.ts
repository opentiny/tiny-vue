declare const _default: import("vue").DefineComponent<{
    modelValue: {};
    options: ArrayConstructor;
    props: ObjectConstructor;
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    renderLabel: FunctionConstructor;
}, {
    t: any;
    vm: any;
    f: (props: any, attrs?: {}) => {};
    a: (attrs: any, filters: any, include: any) => {};
    d: (props: any) => void;
    dp: (props: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "expand-change")[], "change" | "expand-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {};
    options: ArrayConstructor;
    props: ObjectConstructor;
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    renderLabel: FunctionConstructor;
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onExpand-change"?: ((...args: any[]) => any) | undefined;
}, {
    border: boolean;
}>;
export default _default;
