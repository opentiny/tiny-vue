declare const _default: import("vue").DefineComponent<{
    columnsItem: {
        type: ObjectConstructor;
        default: () => {};
    };
    defaultIndex: NumberConstructor;
    itemHeight: NumberConstructor;
    visibleItemCount: NumberConstructor;
    swipeDuration: NumberConstructor;
    valueKey: StringConstructor;
}, {
    t: any;
    vm: any;
    f: (props: any, attrs?: {}) => {};
    a: (attrs: any, filters: any, include: any) => {};
    d: (props: any) => void;
    dp: (props: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    columnsItem: {
        type: ObjectConstructor;
        default: () => {};
    };
    defaultIndex: NumberConstructor;
    itemHeight: NumberConstructor;
    visibleItemCount: NumberConstructor;
    swipeDuration: NumberConstructor;
    valueKey: StringConstructor;
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    columnsItem: Record<string, any>;
}>;
export default _default;
