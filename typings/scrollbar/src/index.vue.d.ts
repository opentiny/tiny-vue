declare const _default: import("vue").DefineComponent<{
    marginBottomAdjust: {
        type: NumberConstructor;
        default: number;
    };
    native: BooleanConstructor;
    noresize: BooleanConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    viewClass: {};
    viewStyle: {};
    wrapClass: {};
    wrapStyle: {};
}, {
    t: any;
    vm: any;
    f: (props: any, attrs?: {}) => {};
    a: (attrs: any, filters: any, include: any) => {};
    d: (props: any) => void;
    dp: (props: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("mouseenter" | "scroll" | "mousemove")[], "mouseenter" | "scroll" | "mousemove", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    marginBottomAdjust: {
        type: NumberConstructor;
        default: number;
    };
    native: BooleanConstructor;
    noresize: BooleanConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    viewClass: {};
    viewStyle: {};
    wrapClass: {};
    wrapStyle: {};
}>> & {
    onMouseenter?: ((...args: any[]) => any) | undefined;
    onMousemove?: ((...args: any[]) => any) | undefined;
    onScroll?: ((...args: any[]) => any) | undefined;
}, {
    tag: string;
    marginBottomAdjust: number;
    native: boolean;
    noresize: boolean;
}>;
export default _default;
