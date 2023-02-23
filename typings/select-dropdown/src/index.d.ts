declare const _default: import("vue").DefineComponent<{
    appendToBody: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    arrowOffset: {
        type: NumberConstructor;
        default: () => number;
    };
    boundariesPadding: {
        default: () => number;
    };
    isDropInheritWidth: BooleanConstructor;
    modelValue: BooleanConstructor;
    offset: {
        default: () => number;
    };
    placement: {
        default: () => string;
    };
    popper: {};
    popperOptions: {
        default: () => {
            gpuAcceleration: boolean;
        };
    };
    reference: {};
    transformOrigin: {
        type: (BooleanConstructor | StringConstructor)[];
        default: () => boolean;
    };
    visibleArrow: {
        default: () => boolean;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    appendToBody: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    arrowOffset: {
        type: NumberConstructor;
        default: () => number;
    };
    boundariesPadding: {
        default: () => number;
    };
    isDropInheritWidth: BooleanConstructor;
    modelValue: BooleanConstructor;
    offset: {
        default: () => number;
    };
    placement: {
        default: () => string;
    };
    popper: {};
    popperOptions: {
        default: () => {
            gpuAcceleration: boolean;
        };
    };
    reference: {};
    transformOrigin: {
        type: (BooleanConstructor | StringConstructor)[];
        default: () => boolean;
    };
    visibleArrow: {
        default: () => boolean;
    };
}>>, {
    modelValue: boolean;
    popperOptions: {
        gpuAcceleration: boolean;
    };
    placement: string;
    visibleArrow: boolean;
    offset: number;
    boundariesPadding: number;
    arrowOffset: number;
    appendToBody: boolean;
    transformOrigin: string | boolean;
    isDropInheritWidth: boolean;
}>;
export default _default;
