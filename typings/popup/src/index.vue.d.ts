declare const _default: import("vue").DefineComponent<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            OVERFLOWHIDDEN: string;
        };
    };
    closeIcon: {
        type: StringConstructor;
        default: string;
    };
    closeIconPosition: {
        type: StringConstructor;
        default: string;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: (StringConstructor | NumberConstructor)[];
    lazyRender: {
        type: BooleanConstructor;
        default: boolean;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: BooleanConstructor;
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlayClass: StringConstructor;
    overlayStyle: ObjectConstructor;
    popupClass: StringConstructor;
    popupStyle: ObjectConstructor;
    position: {
        type: StringConstructor;
        default: string;
    };
    round: BooleanConstructor;
    safeAreaInsetBottom: BooleanConstructor;
    transition: StringConstructor;
    zIndex: (StringConstructor | NumberConstructor)[];
}, {
    t: any;
    vm: any;
    f: (props: any, attrs?: {}) => {};
    a: (attrs: any, filters: any, include: any) => {};
    d: (props: any) => void;
    dp: (props: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "update:modelValue" | "close" | "open" | "opened" | "closed" | "click-overlay")[], "click" | "update:modelValue" | "close" | "open" | "opened" | "closed" | "click-overlay", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            OVERFLOWHIDDEN: string;
        };
    };
    closeIcon: {
        type: StringConstructor;
        default: string;
    };
    closeIconPosition: {
        type: StringConstructor;
        default: string;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: (StringConstructor | NumberConstructor)[];
    lazyRender: {
        type: BooleanConstructor;
        default: boolean;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: BooleanConstructor;
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlayClass: StringConstructor;
    overlayStyle: ObjectConstructor;
    popupClass: StringConstructor;
    popupStyle: ObjectConstructor;
    position: {
        type: StringConstructor;
        default: string;
    };
    round: BooleanConstructor;
    safeAreaInsetBottom: BooleanConstructor;
    transition: StringConstructor;
    zIndex: (StringConstructor | NumberConstructor)[];
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onOpen?: ((...args: any[]) => any) | undefined;
    onOpened?: ((...args: any[]) => any) | undefined;
    onClosed?: ((...args: any[]) => any) | undefined;
    "onClick-overlay"?: ((...args: any[]) => any) | undefined;
}, {
    _constants: Record<string, any>;
    modelValue: boolean;
    round: boolean;
    lockScroll: boolean;
    overlay: boolean;
    closeOnClickOverlay: boolean;
    position: string;
    closeIcon: string;
    closeIconPosition: string;
    closeable: boolean;
    lazyRender: boolean;
    safeAreaInsetBottom: boolean;
}>;
export default _default;
