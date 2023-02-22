declare const _default: import("vue").DefineComponent<{
    type: StringConstructor;
    trigger: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    splitButton: BooleanConstructor;
    showTimeout: {
        type: NumberConstructor;
        default: number;
    };
    hideTimeout: {
        type: NumberConstructor;
        default: number;
    };
    hideOnClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    tabindex: {
        type: NumberConstructor;
        default: number;
    };
}, {
    t: any;
    vm: any;
    f: (props: any, attrs?: {}) => {};
    a: (attrs: any, filters: any, include: any) => {};
    d: (props: any) => void;
    dp: (props: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("visible-change" | "item-click" | "button-click" | "visibles-change" | "menu-item-click")[], "visible-change" | "item-click" | "button-click" | "visibles-change" | "menu-item-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: StringConstructor;
    trigger: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    splitButton: BooleanConstructor;
    showTimeout: {
        type: NumberConstructor;
        default: number;
    };
    hideTimeout: {
        type: NumberConstructor;
        default: number;
    };
    hideOnClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    tabindex: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    "onVisible-change"?: ((...args: any[]) => any) | undefined;
    "onItem-click"?: ((...args: any[]) => any) | undefined;
    "onButton-click"?: ((...args: any[]) => any) | undefined;
    "onVisibles-change"?: ((...args: any[]) => any) | undefined;
    "onMenu-item-click"?: ((...args: any[]) => any) | undefined;
}, {
    size: string;
    tabindex: number;
    disabled: boolean;
    trigger: string;
    splitButton: boolean;
    showTimeout: number;
    hideTimeout: number;
    hideOnClick: boolean;
}>;
export default _default;
