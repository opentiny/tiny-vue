declare const _default: import("vue").DefineComponent<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            MAX: string;
            MIN: string;
            VALUENOW: string;
            DISABLED: string;
            KEY: string;
            VALUE: string;
            EVENT_NAME: {
                blur: string;
                change: string;
            };
            COMPONENT_NAME: string;
        };
    };
    allowEmpty: {
        type: BooleanConstructor;
        default: boolean;
    };
    circulate: BooleanConstructor;
    controls: {
        type: BooleanConstructor;
        default: boolean;
    };
    controlsPosition: {
        type: StringConstructor;
        default: string;
    };
    disabled: BooleanConstructor;
    format: (ObjectConstructor | StringConstructor)[];
    hideUnit: {
        type: BooleanConstructor;
        default: boolean;
    };
    holdZero: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: StringConstructor;
    max: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    min: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    modelTruncation: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {};
    mouseWheel: BooleanConstructor;
    name: StringConstructor;
    placeholder: StringConstructor;
    plugin: FunctionConstructor;
    precision: {
        type: NumberConstructor;
        validator(val: unknown): boolean;
    };
    size: StringConstructor;
    step: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    stepStrictly: {
        type: BooleanConstructor;
        default: boolean;
    };
    strictInput: {
        type: BooleanConstructor;
        default: boolean;
    };
    stringMode: BooleanConstructor;
    tabindex: {
        type: StringConstructor;
        default: string;
    };
    theme: {
        type: StringConstructor;
        default: string;
    };
    unit: StringConstructor;
    unitCenter: {
        type: BooleanConstructor;
        default: boolean;
    };
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "focus" | "blur")[], "change" | "focus" | "blur", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            MAX: string;
            MIN: string;
            VALUENOW: string;
            DISABLED: string;
            KEY: string;
            VALUE: string;
            EVENT_NAME: {
                blur: string;
                change: string;
            };
            COMPONENT_NAME: string;
        };
    };
    allowEmpty: {
        type: BooleanConstructor;
        default: boolean;
    };
    circulate: BooleanConstructor;
    controls: {
        type: BooleanConstructor;
        default: boolean;
    };
    controlsPosition: {
        type: StringConstructor;
        default: string;
    };
    disabled: BooleanConstructor;
    format: (ObjectConstructor | StringConstructor)[];
    hideUnit: {
        type: BooleanConstructor;
        default: boolean;
    };
    holdZero: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: StringConstructor;
    max: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    min: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    modelTruncation: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {};
    mouseWheel: BooleanConstructor;
    name: StringConstructor;
    placeholder: StringConstructor;
    plugin: FunctionConstructor;
    precision: {
        type: NumberConstructor;
        validator(val: unknown): boolean;
    };
    size: StringConstructor;
    step: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    stepStrictly: {
        type: BooleanConstructor;
        default: boolean;
    };
    strictInput: {
        type: BooleanConstructor;
        default: boolean;
    };
    stringMode: BooleanConstructor;
    tabindex: {
        type: StringConstructor;
        default: string;
    };
    theme: {
        type: StringConstructor;
        default: string;
    };
    unit: StringConstructor;
    unitCenter: {
        type: BooleanConstructor;
        default: boolean;
    };
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    _constants: Record<string, any>;
    tabindex: string;
    disabled: boolean;
    holdZero: boolean;
    modelTruncation: boolean;
    strictInput: boolean;
    max: string | number;
    theme: string;
    controls: boolean;
    validateEvent: boolean;
    min: string | number;
    step: string | number;
    stepStrictly: boolean;
    controlsPosition: string;
    circulate: boolean;
    mouseWheel: boolean;
    allowEmpty: boolean;
    stringMode: boolean;
    hideUnit: boolean;
    unitCenter: boolean;
}>;
export default _default;
