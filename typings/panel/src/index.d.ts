declare const _default: import("vue").DefineComponent<{
    expand: {
        type: BooleanConstructor;
        default: boolean;
    };
    foot: {
        type: StringConstructor;
    };
    head: {
        type: StringConstructor;
    };
    iconOpen: {
        type: StringConstructor;
        default: string;
    };
    iconClose: {
        type: StringConstructor;
        default: string;
    };
    isToggle: {
        type: BooleanConstructor;
        default: boolean;
    };
    transition: {
        type: StringConstructor;
        default: string;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("expand" | "collapse" | "beforeCollapse" | "beforeExpand")[], "expand" | "collapse" | "beforeCollapse" | "beforeExpand", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    expand: {
        type: BooleanConstructor;
        default: boolean;
    };
    foot: {
        type: StringConstructor;
    };
    head: {
        type: StringConstructor;
    };
    iconOpen: {
        type: StringConstructor;
        default: string;
    };
    iconClose: {
        type: StringConstructor;
        default: string;
    };
    isToggle: {
        type: BooleanConstructor;
        default: boolean;
    };
    transition: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onExpand?: ((...args: any[]) => any) | undefined;
    onCollapse?: ((...args: any[]) => any) | undefined;
    onBeforeCollapse?: ((...args: any[]) => any) | undefined;
    onBeforeExpand?: ((...args: any[]) => any) | undefined;
}, {
    transition: string;
    iconClose: string;
    expand: boolean;
    iconOpen: string;
    isToggle: boolean;
}>;
export default _default;
