declare const _default: import("vue").DefineComponent<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            TIP_HEIGHT: number;
            BUTTON_SIZE: number;
            HALF_BAR_HEIGHT: number;
            PC_TIP_CLS: string;
            PC_SLIDER_CLS: string;
            PC_RANGE_CLS: string;
            PC_BUTTON_CLS: string;
            MOBILE_TIP_CLS: string;
            MOBILE_SLIDER_CLS: string;
            MOBILE_RANGE_CLS: string;
            MOBILE_BUTTON_CLS: string;
            Mode: string;
            tipCls(mode: any): string;
            sliderCls(mode: any): string;
            rangeCls(mode: any): string;
            buttonCls(mode: any): string;
        };
    };
    formatTooltip: FunctionConstructor;
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    modelValue: {
        type: (ArrayConstructor | NumberConstructor)[];
        default: number;
    };
    numPages: {
        type: NumberConstructor;
        default: number;
    };
    range: {
        type: BooleanConstructor;
        default: boolean;
    };
    showInput: {
        type: BooleanConstructor;
        default: boolean;
    };
    showTip: {
        type: BooleanConstructor;
        default: boolean;
    };
    step: {
        type: NumberConstructor;
        default: number;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "Start" | "Stop")[], "change" | "Start" | "Stop", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            TIP_HEIGHT: number;
            BUTTON_SIZE: number;
            HALF_BAR_HEIGHT: number;
            PC_TIP_CLS: string;
            PC_SLIDER_CLS: string;
            PC_RANGE_CLS: string;
            PC_BUTTON_CLS: string;
            MOBILE_TIP_CLS: string;
            MOBILE_SLIDER_CLS: string;
            MOBILE_RANGE_CLS: string;
            MOBILE_BUTTON_CLS: string;
            Mode: string;
            tipCls(mode: any): string;
            sliderCls(mode: any): string;
            rangeCls(mode: any): string;
            buttonCls(mode: any): string;
        };
    };
    formatTooltip: FunctionConstructor;
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    modelValue: {
        type: (ArrayConstructor | NumberConstructor)[];
        default: number;
    };
    numPages: {
        type: NumberConstructor;
        default: number;
    };
    range: {
        type: BooleanConstructor;
        default: boolean;
    };
    showInput: {
        type: BooleanConstructor;
        default: boolean;
    };
    showTip: {
        type: BooleanConstructor;
        default: boolean;
    };
    step: {
        type: NumberConstructor;
        default: number;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onStart?: ((...args: any[]) => any) | undefined;
    onStop?: ((...args: any[]) => any) | undefined;
}, {
    _constants: Record<string, any>;
    height: string;
    modelValue: number | unknown[];
    disabled: boolean;
    max: number;
    vertical: boolean;
    min: number;
    range: boolean;
    step: number;
    numPages: number;
    showTip: boolean;
    showInput: boolean;
}>;
export default _default;
