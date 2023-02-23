declare const _default: import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        default: string;
    };
    _constants: {
        type: ObjectConstructor;
        default: () => {
            MonthDay: number;
            Minutes: number;
            Hours: number;
            TotalMonth: number;
            Max: string;
            Min: string;
            Hour: string;
            Minute: string;
            CapYear: string;
            CapMonth: string;
            CapDate: string;
            CapHour: string;
            CapMinute: string;
            YearMonth: string;
            DateTime: string;
            Date: string;
            HookMounted: string;
            Hidden: string;
            Year: string;
            Day: string;
        };
    };
    timeArrowControl: BooleanConstructor;
    size: StringConstructor;
    format: StringConstructor;
    valueFormat: StringConstructor;
    readonly: BooleanConstructor;
    placeholder: StringConstructor;
    startPlaceholder: StringConstructor;
    endPlaceholder: StringConstructor;
    prefixIcon: ObjectConstructor;
    clearIcon: {
        type: ObjectConstructor;
        default(): any;
    };
    name: {
        default: string;
        validator: (value: any) => boolean;
    };
    disabled: BooleanConstructor;
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    id: {
        default: string;
        validator: (value: any) => boolean;
    };
    popperClass: StringConstructor;
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
    defaultTimezone: {};
    visible: BooleanConstructor;
    minDate: {
        type: DateConstructor;
        default: () => Date;
    };
    maxDate: {
        type: DateConstructor;
        default: () => Date;
    };
    formatter: {
        type: FunctionConstructor;
        default: (type: any, value: any) => any;
    };
    componentName: {
        type: StringConstructor;
        default: string;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "focus" | "blur")[], "change" | "focus" | "blur", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
    };
    _constants: {
        type: ObjectConstructor;
        default: () => {
            MonthDay: number;
            Minutes: number;
            Hours: number;
            TotalMonth: number;
            Max: string;
            Min: string;
            Hour: string;
            Minute: string;
            CapYear: string;
            CapMonth: string;
            CapDate: string;
            CapHour: string;
            CapMinute: string;
            YearMonth: string;
            DateTime: string;
            Date: string;
            HookMounted: string;
            Hidden: string;
            Year: string;
            Day: string;
        };
    };
    timeArrowControl: BooleanConstructor;
    size: StringConstructor;
    format: StringConstructor;
    valueFormat: StringConstructor;
    readonly: BooleanConstructor;
    placeholder: StringConstructor;
    startPlaceholder: StringConstructor;
    endPlaceholder: StringConstructor;
    prefixIcon: ObjectConstructor;
    clearIcon: {
        type: ObjectConstructor;
        default(): any;
    };
    name: {
        default: string;
        validator: (value: any) => boolean;
    };
    disabled: BooleanConstructor;
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    id: {
        default: string;
        validator: (value: any) => boolean;
    };
    popperClass: StringConstructor;
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
    defaultTimezone: {};
    visible: BooleanConstructor;
    minDate: {
        type: DateConstructor;
        default: () => Date;
    };
    maxDate: {
        type: DateConstructor;
        default: () => Date;
    };
    formatter: {
        type: FunctionConstructor;
        default: (type: any, value: any) => any;
    };
    componentName: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    _constants: Record<string, any>;
    type: string;
    readonly: boolean;
    visible: boolean;
    disabled: boolean;
    clearable: boolean;
    componentName: string;
    id: string;
    validateEvent: boolean;
    minDate: Date;
    maxDate: Date;
    formatter: Function;
    timeArrowControl: boolean;
    clearIcon: Record<string, any>;
    editable: boolean;
    align: string;
    rangeSeparator: string | Record<string, any>;
    unlinkPanels: boolean;
    isRange: boolean;
    arrowControl: boolean;
    showTimezone: boolean;
}>;
export default _default;
