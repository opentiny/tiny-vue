declare const _default: import("vue").DefineComponent<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            placeholder: string;
            COMPONENT_NAME: {
                FormItem: string;
            };
            EVENT_NAME: {
                FormBlur: string;
            };
        };
    };
    autoSize: BooleanConstructor;
    beforeFilter: {
        type: FunctionConstructor;
        default: () => () => void;
    };
    clearable: BooleanConstructor;
    collapseTags: BooleanConstructor;
    debounce: {
        type: NumberConstructor;
        default: number;
    };
    disabled: BooleanConstructor;
    filterMethod: FunctionConstructor;
    filterable: BooleanConstructor;
    modelValue: {};
    options: ArrayConstructor;
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    popperAppendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    popperClass: StringConstructor;
    showAllLevels: {
        type: BooleanConstructor;
        default: boolean;
    };
    props: ObjectConstructor;
    separator: {
        type: StringConstructor;
        default: string;
    };
    size: StringConstructor;
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "focus" | "blur" | "visible-change" | "expand-change" | "remove-tag")[], "change" | "focus" | "blur" | "visible-change" | "expand-change" | "remove-tag", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            placeholder: string;
            COMPONENT_NAME: {
                FormItem: string;
            };
            EVENT_NAME: {
                FormBlur: string;
            };
        };
    };
    autoSize: BooleanConstructor;
    beforeFilter: {
        type: FunctionConstructor;
        default: () => () => void;
    };
    clearable: BooleanConstructor;
    collapseTags: BooleanConstructor;
    debounce: {
        type: NumberConstructor;
        default: number;
    };
    disabled: BooleanConstructor;
    filterMethod: FunctionConstructor;
    filterable: BooleanConstructor;
    modelValue: {};
    options: ArrayConstructor;
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    popperAppendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    popperClass: StringConstructor;
    props: ObjectConstructor;
    showAllLevels: {
        type: BooleanConstructor;
        default: boolean;
    };
    separator: {
        type: StringConstructor;
        default: string;
    };
    size: StringConstructor;
}>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    "onVisible-change"?: ((...args: any[]) => any) | undefined;
    "onExpand-change"?: ((...args: any[]) => any) | undefined;
    "onRemove-tag"?: ((...args: any[]) => any) | undefined;
}, {
    _constants: Record<string, any>;
    placeholder: string;
    disabled: boolean;
    popperAppendToBody: boolean;
    clearable: boolean;
    debounce: number;
    separator: string;
    filterable: boolean;
    showAllLevels: boolean;
    collapseTags: boolean;
    beforeFilter: Function;
    autoSize: boolean;
}>;
export default _default;
