declare const _default: import("vue").DefineComponent<{
    appendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    arrowOffset: {
        type: NumberConstructor;
        default: number;
    };
    boundariesPadding: {
        type: NumberConstructor;
        default: number;
    };
    closeDelay: {
        type: NumberConstructor;
        default: number;
    };
    content: StringConstructor;
    disabled: BooleanConstructor;
    modelValue: BooleanConstructor;
    offset: {
        default: number;
    };
    openDelay: {
        type: NumberConstructor;
        default: number;
    };
    placement: {
        type: StringConstructor;
        default: string;
    };
    popper: {};
    popperClass: StringConstructor;
    popperOptions: {
        type: ObjectConstructor;
        default: () => {
            gpuAcceleration: boolean;
        };
    };
    reference: {};
    tabindex: {
        type: NumberConstructor;
        default: number;
    };
    title: StringConstructor;
    transformOrigin: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    transition: {
        type: StringConstructor;
        default: string;
    };
    trigger: {
        type: StringConstructor;
        default: string;
    };
    visibleArrow: {
        default: boolean;
    };
    width: {};
}, {
    t: any;
    vm: any;
    f: (props: any, attrs?: {}) => {};
    a: (attrs: any, filters: any, include: any) => {};
    d: (props: any) => void;
    dp: (props: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("after-leave" | "after-enter" | "show" | "hide")[], "after-leave" | "after-enter" | "hide" | "show", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    appendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    arrowOffset: {
        type: NumberConstructor;
        default: number;
    };
    boundariesPadding: {
        type: NumberConstructor;
        default: number;
    };
    closeDelay: {
        type: NumberConstructor;
        default: number;
    };
    content: StringConstructor;
    disabled: BooleanConstructor;
    modelValue: BooleanConstructor;
    offset: {
        default: number;
    };
    openDelay: {
        type: NumberConstructor;
        default: number;
    };
    placement: {
        type: StringConstructor;
        default: string;
    };
    popper: {};
    popperClass: StringConstructor;
    popperOptions: {
        type: ObjectConstructor;
        default: () => {
            gpuAcceleration: boolean;
        };
    };
    reference: {};
    tabindex: {
        type: NumberConstructor;
        default: number;
    };
    title: StringConstructor;
    transformOrigin: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    transition: {
        type: StringConstructor;
        default: string;
    };
    trigger: {
        type: StringConstructor;
        default: string;
    };
    visibleArrow: {
        default: boolean;
    };
    width: {};
}>> & {
    "onAfter-leave"?: ((...args: any[]) => any) | undefined;
    "onAfter-enter"?: ((...args: any[]) => any) | undefined;
    onShow?: ((...args: any[]) => any) | undefined;
    onHide?: ((...args: any[]) => any) | undefined;
}, {
    transition: string;
    modelValue: boolean;
    tabindex: number;
    disabled: boolean;
    popperOptions: Record<string, any>;
    placement: string;
    trigger: string;
    visibleArrow: boolean;
    offset: number;
    boundariesPadding: number;
    arrowOffset: number;
    appendToBody: boolean;
    closeDelay: number;
    openDelay: number;
    transformOrigin: string | boolean;
}>;
export default _default;
