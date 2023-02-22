declare const _default: import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        default: string;
    };
    tabindex: {
        type: StringConstructor;
        default: string;
    };
    timeArrowControl: BooleanConstructor;
    size: StringConstructor;
    format: StringConstructor;
    valueFormat: StringConstructor;
    timeFormat: StringConstructor;
    readonly: BooleanConstructor;
    placeholder: StringConstructor;
    startPlaceholder: StringConstructor;
    endPlaceholder: StringConstructor;
    prefixIcon: ObjectConstructor;
    suffixIcon: ObjectConstructor;
    clearIcon: {
        type: ObjectConstructor;
        default(): any;
    };
    name: {
        default: string;
        validator(value: unknown): boolean;
    };
    disabled: BooleanConstructor;
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    id: {
        default: string;
        validator(value: unknown): boolean;
    };
    popperClass: StringConstructor;
    popperAppendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    editable: {
        type: BooleanConstructor;
        default: boolean;
    };
    align: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {};
    defaultValue: {};
    defaultTime: {};
    rangeSeparator: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    pickerOptions: {};
    unlinkPanels: BooleanConstructor;
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    isRange: BooleanConstructor;
    arrowControl: BooleanConstructor;
    timezoneData: {};
    showTimezone: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultTimezone: StringConstructor;
    isutc8: {
        type: BooleanConstructor;
        default: boolean;
    };
    dbTimezone: NumberConstructor;
    timezone: NumberConstructor;
    iso8601: BooleanConstructor;
}, {
    t: any;
    vm: any;
    f: (props: any, attrs?: {}) => {};
    a: (attrs: any, filters: any, include: any) => {};
    d: (props: any) => void;
    dp: (props: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "focus" | "blur" | "update:modelValue" | "select-change" | "created")[], "change" | "focus" | "blur" | "update:modelValue" | "select-change" | "created", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
    };
    tabindex: {
        type: StringConstructor;
        default: string;
    };
    timeArrowControl: BooleanConstructor;
    size: StringConstructor;
    format: StringConstructor;
    valueFormat: StringConstructor;
    timeFormat: StringConstructor;
    readonly: BooleanConstructor;
    placeholder: StringConstructor;
    startPlaceholder: StringConstructor;
    endPlaceholder: StringConstructor;
    prefixIcon: ObjectConstructor;
    suffixIcon: ObjectConstructor;
    clearIcon: {
        type: ObjectConstructor;
        default(): any;
    };
    name: {
        default: string;
        validator(value: unknown): boolean;
    };
    disabled: BooleanConstructor;
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    id: {
        default: string;
        validator(value: unknown): boolean;
    };
    popperClass: StringConstructor;
    popperAppendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    editable: {
        type: BooleanConstructor;
        default: boolean;
    };
    align: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {};
    defaultValue: {};
    defaultTime: {};
    rangeSeparator: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    pickerOptions: {};
    unlinkPanels: BooleanConstructor;
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    isRange: BooleanConstructor;
    arrowControl: BooleanConstructor;
    timezoneData: {};
    showTimezone: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultTimezone: StringConstructor;
    isutc8: {
        type: BooleanConstructor;
        default: boolean;
    };
    dbTimezone: NumberConstructor;
    timezone: NumberConstructor;
    iso8601: BooleanConstructor;
}>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onSelect-change"?: ((...args: any[]) => any) | undefined;
    onCreated?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    type: string;
    readonly: boolean;
    tabindex: string;
    disabled: boolean;
    popperAppendToBody: boolean;
    clearable: boolean;
    id: string;
    validateEvent: boolean;
    timeArrowControl: boolean;
    clearIcon: Record<string, any>;
    editable: boolean;
    align: string;
    rangeSeparator: string | Record<string, any>;
    unlinkPanels: boolean;
    isRange: boolean;
    arrowControl: boolean;
    showTimezone: boolean;
    isutc8: boolean;
    iso8601: boolean;
}>;
export default _default;
