declare const _default: import("vue").DefineComponent<{
    node: {
        required: true;
    };
    nodeId: StringConstructor;
}, {
    t: any;
    vm: any;
    f: (props: any, attrs?: {}) => {};
    a: (attrs: any, filters: any, include: any) => {};
    d: (props: any) => void;
    dp: (props: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue" | "expand-change" | "expand" | "active-item-change")[], "change" | "update:modelValue" | "expand-change" | "expand" | "active-item-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    node: {
        required: true;
    };
    nodeId: StringConstructor;
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onExpand-change"?: ((...args: any[]) => any) | undefined;
    onExpand?: ((...args: any[]) => any) | undefined;
    "onActive-item-change"?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _default;
