declare const _default: import("vue").DefineComponent<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            INPUT_PC: string;
            INPUTGROUP_PC: string;
            INPUT_MOBILE: string;
            INPUTGROUP_MOBILE: string;
            Mode: string;
            inputMode(mode: any): string;
            inputGroupMode(mode: any): string;
            VALIDATE_ICON: {
                Validating: string;
                Success: string;
                Error: string;
            };
            COMPONENT_NAME: {
                FormItem: string;
            };
        };
    };
    name: StringConstructor;
    size: StringConstructor;
    form: StringConstructor;
    label: StringConstructor;
    height: NumberConstructor;
    resize: StringConstructor;
    tabindex: {
        type: StringConstructor;
        default: string;
    };
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
    suffixIcon: (ObjectConstructor | StringConstructor)[];
    prefixIcon: (ObjectConstructor | StringConstructor)[];
    modelValue: (StringConstructor | NumberConstructor)[];
    type: {
        type: StringConstructor;
        default: string;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectMenu: {
        type: ArrayConstructor;
        default: () => never[];
    };
    isSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    mobileTips: StringConstructor;
    counter: {
        type: BooleanConstructor;
        default: boolean;
    };
    autosize: {
        type: (ObjectConstructor | BooleanConstructor)[];
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    autocomplete: {
        type: StringConstructor;
        default: string;
    };
    showPassword: {
        type: BooleanConstructor;
        default: boolean;
    };
    showWordLimit: {
        type: BooleanConstructor;
        default: boolean;
    };
    showTitle: {
        type: BooleanConstructor;
        default: boolean;
    };
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    textareaTitle: {
        type: StringConstructor;
        default: string;
    };
    rows: {
        type: NumberConstructor;
        default: number;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("input" | "change" | "clear" | "focus" | "blur")[], "input" | "change" | "clear" | "focus" | "blur", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            INPUT_PC: string;
            INPUTGROUP_PC: string;
            INPUT_MOBILE: string;
            INPUTGROUP_MOBILE: string;
            Mode: string;
            inputMode(mode: any): string;
            inputGroupMode(mode: any): string;
            VALIDATE_ICON: {
                Validating: string;
                Success: string;
                Error: string;
            };
            COMPONENT_NAME: {
                FormItem: string;
            };
        };
    };
    name: StringConstructor;
    size: StringConstructor;
    form: StringConstructor;
    label: StringConstructor;
    height: NumberConstructor;
    resize: StringConstructor;
    tabindex: {
        type: StringConstructor;
        default: string;
    };
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
    suffixIcon: (ObjectConstructor | StringConstructor)[];
    prefixIcon: (ObjectConstructor | StringConstructor)[];
    modelValue: (StringConstructor | NumberConstructor)[];
    type: {
        type: StringConstructor;
        default: string;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectMenu: {
        type: ArrayConstructor;
        default: () => never[];
    };
    isSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    mobileTips: StringConstructor;
    counter: {
        type: BooleanConstructor;
        default: boolean;
    };
    autosize: {
        type: (ObjectConstructor | BooleanConstructor)[];
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    autocomplete: {
        type: StringConstructor;
        default: string;
    };
    showPassword: {
        type: BooleanConstructor;
        default: boolean;
    };
    showWordLimit: {
        type: BooleanConstructor;
        default: boolean;
    };
    showTitle: {
        type: BooleanConstructor;
        default: boolean;
    };
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    textareaTitle: {
        type: StringConstructor;
        default: string;
    };
    rows: {
        type: NumberConstructor;
        default: number;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onClear?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
}, {
    _constants: Record<string, any>;
    type: string;
    selectMenu: unknown[];
    vertical: boolean;
    isSelect: boolean;
    disabled: boolean;
    readonly: boolean;
    clearable: boolean;
    autocomplete: string;
    showPassword: boolean;
    validateEvent: boolean;
    showWordLimit: boolean;
    showTitle: boolean;
    textareaTitle: string;
    counter: boolean;
    autosize: boolean | Record<string, any>;
    tabindex: string;
    rows: number;
    placeholder: string;
}>;
export default _default;
