declare const _default: import("vue").DefineComponent<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            COMPONENT_NAME: {
                FormItem: string;
            };
            EVENT_NAME: {
                FormBlur: string;
            };
        };
    };
    tabindex: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    valueSplit: {
        type: StringConstructor;
        default: string;
    };
    textSplit: {
        type: StringConstructor;
        default: string;
    };
    valueField: {
        type: StringConstructor;
        default: string;
    };
    textField: {
        type: StringConstructor;
        default: string;
    };
    cache: {
        type: BooleanConstructor;
        default: boolean;
    };
    cacheKey: {
        type: StringConstructor;
        default: string;
    };
    delay: {
        type: NumberConstructor;
        default: number;
    };
    suggestLength: {
        type: NumberConstructor;
        default: number;
    };
    cacheFields: {
        type: ArrayConstructor;
        default: () => never[];
    };
    collapseTags: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    showOverflowTooltip: {
        type: BooleanConstructor;
        default: boolean;
    };
    sortByFetchData: {
        type: BooleanConstructor;
        default: boolean;
    };
    sortable: FunctionConstructor;
    size: StringConstructor;
    fetchW3Accounts: FunctionConstructor;
    fetchSuggestUser: FunctionConstructor;
    fetchUserByUserId: FunctionConstructor;
    userCache: ObjectConstructor;
    popperClass: StringConstructor;
    popperAppendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    tagSelectable: {
        type: BooleanConstructor;
        default: boolean;
    };
    copyable: {
        type: BooleanConstructor;
        default: boolean;
    };
    batch: {
        type: (BooleanConstructor | NumberConstructor)[];
        default: number;
    };
    allowCopy: {
        type: BooleanConstructor;
        default: boolean;
    };
    noDataText: StringConstructor;
    loadingText: StringConstructor;
    autoClose: BooleanConstructor;
    queryDebounce: {
        type: NumberConstructor;
        default: number;
    };
    hideSelected: BooleanConstructor;
    ignoreEnter: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "error")[], "change" | "error", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            COMPONENT_NAME: {
                FormItem: string;
            };
            EVENT_NAME: {
                FormBlur: string;
            };
        };
    };
    tabindex: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    valueSplit: {
        type: StringConstructor;
        default: string;
    };
    textSplit: {
        type: StringConstructor;
        default: string;
    };
    valueField: {
        type: StringConstructor;
        default: string;
    };
    textField: {
        type: StringConstructor;
        default: string;
    };
    cache: {
        type: BooleanConstructor;
        default: boolean;
    };
    cacheKey: {
        type: StringConstructor;
        default: string;
    };
    delay: {
        type: NumberConstructor;
        default: number;
    };
    suggestLength: {
        type: NumberConstructor;
        default: number;
    };
    cacheFields: {
        type: ArrayConstructor;
        default: () => never[];
    };
    collapseTags: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    showOverflowTooltip: {
        type: BooleanConstructor;
        default: boolean;
    };
    sortByFetchData: {
        type: BooleanConstructor;
        default: boolean;
    };
    sortable: FunctionConstructor;
    size: StringConstructor;
    fetchW3Accounts: FunctionConstructor;
    fetchSuggestUser: FunctionConstructor;
    fetchUserByUserId: FunctionConstructor;
    userCache: ObjectConstructor;
    popperClass: StringConstructor;
    popperAppendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    tagSelectable: {
        type: BooleanConstructor;
        default: boolean;
    };
    copyable: {
        type: BooleanConstructor;
        default: boolean;
    };
    batch: {
        type: (BooleanConstructor | NumberConstructor)[];
        default: number;
    };
    allowCopy: {
        type: BooleanConstructor;
        default: boolean;
    };
    noDataText: StringConstructor;
    loadingText: StringConstructor;
    autoClose: BooleanConstructor;
    queryDebounce: {
        type: NumberConstructor;
        default: number;
    };
    hideSelected: BooleanConstructor;
    ignoreEnter: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onError?: ((...args: any[]) => any) | undefined;
}, {
    _constants: Record<string, any>;
    tabindex: string;
    placeholder: string;
    disabled: boolean;
    popperAppendToBody: boolean;
    valueField: string;
    textField: string;
    collapseTags: boolean;
    multiple: boolean;
    textSplit: string;
    valueSplit: string;
    copyable: boolean;
    showOverflowTooltip: boolean;
    delay: number;
    tagSelectable: boolean;
    allowCopy: boolean;
    autoClose: boolean;
    queryDebounce: number;
    ignoreEnter: boolean;
    cache: boolean;
    suggestLength: number;
    cacheFields: unknown[];
    cacheKey: string;
    sortByFetchData: boolean;
    batch: number | boolean;
    hideSelected: boolean;
}>;
export default _default;
