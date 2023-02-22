declare const _default: import("vue").DefineComponent<{
    adjustArrow: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    appendToBody: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    arrowOffset: {
        type: NumberConstructor;
        default: () => number;
    };
    boundariesPadding: {
        type: NumberConstructor;
        default: () => number;
    };
    closeDelay: {
        type: NumberConstructor;
        default: () => number;
    };
    content: {
        type: StringConstructor;
    };
    disabled: {
        type: BooleanConstructor;
    };
    effect: {
        type: StringConstructor;
        default: () => string;
    };
    enterable: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    hideAfter: {
        type: NumberConstructor;
        default: () => number;
    };
    manual: {
        type: BooleanConstructor;
    };
    modelValue: {
        type: BooleanConstructor;
    };
    offset: {
        default: () => number;
    };
    openDelay: {
        type: NumberConstructor;
        default: () => number;
    };
    placement: {
        type: StringConstructor;
        default: () => string;
    };
    popper: {};
    popperClass: {
        type: StringConstructor;
    };
    popperOptions: {
        default: () => {
            gpuAcceleration: boolean;
            boundariesPadding: number;
        };
    };
    pre: {
        type: BooleanConstructor;
    };
    reference: {};
    renderContent: {
        type: FunctionConstructor;
    };
    tabindex: {
        type: NumberConstructor;
        default: () => number;
    };
    transformOrigin: {
        type: (BooleanConstructor | StringConstructor)[];
        default: () => boolean;
    };
    transition: {
        type: StringConstructor;
        default: () => string;
    };
    type: {
        type: StringConstructor;
    };
    visibleArrow: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    zIndex: {
        type: StringConstructor;
        default: () => string;
    };
}, {
    t: any;
    vm: any;
    f: (props: any, attrs?: {}) => {};
    a: (attrs: any, filters: any, include: any) => {};
    d: (props: any) => void;
    dp: (props: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    adjustArrow: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    appendToBody: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    arrowOffset: {
        type: NumberConstructor;
        default: () => number;
    };
    boundariesPadding: {
        type: NumberConstructor;
        default: () => number;
    };
    closeDelay: {
        type: NumberConstructor;
        default: () => number;
    };
    content: {
        type: StringConstructor;
    };
    disabled: {
        type: BooleanConstructor;
    };
    effect: {
        type: StringConstructor;
        default: () => string;
    };
    enterable: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    hideAfter: {
        type: NumberConstructor;
        default: () => number;
    };
    manual: {
        type: BooleanConstructor;
    };
    modelValue: {
        type: BooleanConstructor;
    };
    offset: {
        default: () => number;
    };
    openDelay: {
        type: NumberConstructor;
        default: () => number;
    };
    placement: {
        type: StringConstructor;
        default: () => string;
    };
    popper: {};
    popperClass: {
        type: StringConstructor;
    };
    popperOptions: {
        default: () => {
            gpuAcceleration: boolean;
            boundariesPadding: number;
        };
    };
    pre: {
        type: BooleanConstructor;
    };
    reference: {};
    renderContent: {
        type: FunctionConstructor;
    };
    tabindex: {
        type: NumberConstructor;
        default: () => number;
    };
    transformOrigin: {
        type: (BooleanConstructor | StringConstructor)[];
        default: () => boolean;
    };
    transition: {
        type: StringConstructor;
        default: () => string;
    };
    type: {
        type: StringConstructor;
    };
    visibleArrow: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    zIndex: {
        type: StringConstructor;
        default: () => string;
    };
}>>, {
    pre: boolean;
    transition: string;
    effect: string;
    modelValue: boolean;
    tabindex: number;
    disabled: boolean;
    manual: boolean;
    popperOptions: {
        gpuAcceleration: boolean;
        boundariesPadding: number;
    };
    placement: string;
    visibleArrow: boolean;
    offset: number;
    boundariesPadding: number;
    arrowOffset: number;
    appendToBody: boolean;
    zIndex: string;
    closeDelay: number;
    openDelay: number;
    transformOrigin: string | boolean;
    adjustArrow: boolean;
    enterable: boolean;
    hideAfter: number;
}>;
export default _default;
