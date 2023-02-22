declare const _default: import("vue").DefineComponent<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            WARP_CLS: string;
            ITEM_CLS: string;
        };
    };
    autofocus: BooleanConstructor;
    clearable: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    customItem: StringConstructor;
    debounce: {
        type: NumberConstructor;
        default: () => number;
    };
    disabled: BooleanConstructor;
    fetchSuggestions: FunctionConstructor;
    hideLoading: BooleanConstructor;
    highlightFirstItem: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    label: StringConstructor;
    maxlength: NumberConstructor;
    minlength: NumberConstructor;
    modelValue: StringConstructor;
    name: StringConstructor;
    placeholder: StringConstructor;
    placement: {
        type: StringConstructor;
        default: () => string;
    };
    popperAppendToBody: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    popperClass: StringConstructor;
    popperOptions: ObjectConstructor;
    prefixIcon: (ObjectConstructor | StringConstructor)[];
    selectWhenUnmatched: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    size: StringConstructor;
    suffixIcon: (ObjectConstructor | StringConstructor)[];
    triggerOnFocus: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    valueKey: {
        type: StringConstructor;
        default: () => string;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "select"[], "select", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            WARP_CLS: string;
            ITEM_CLS: string;
        };
    };
    autofocus: BooleanConstructor;
    clearable: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    customItem: StringConstructor;
    debounce: {
        type: NumberConstructor;
        default: () => number;
    };
    disabled: BooleanConstructor;
    fetchSuggestions: FunctionConstructor;
    hideLoading: BooleanConstructor;
    highlightFirstItem: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    label: StringConstructor;
    maxlength: NumberConstructor;
    minlength: NumberConstructor;
    modelValue: StringConstructor;
    name: StringConstructor;
    placeholder: StringConstructor;
    placement: {
        type: StringConstructor;
        default: () => string;
    };
    popperAppendToBody: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    popperClass: StringConstructor;
    popperOptions: ObjectConstructor;
    prefixIcon: (ObjectConstructor | StringConstructor)[];
    selectWhenUnmatched: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    size: StringConstructor;
    suffixIcon: (ObjectConstructor | StringConstructor)[];
    triggerOnFocus: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    valueKey: {
        type: StringConstructor;
        default: () => string;
    };
}>> & {
    onSelect?: ((...args: any[]) => any) | undefined;
}, {
    _constants: Record<string, any>;
    disabled: boolean;
    popperAppendToBody: boolean;
    valueKey: string;
    clearable: boolean;
    autofocus: boolean;
    triggerOnFocus: boolean;
    selectWhenUnmatched: boolean;
    debounce: number;
    placement: string;
    hideLoading: boolean;
    highlightFirstItem: boolean;
}>;
export default _default;
