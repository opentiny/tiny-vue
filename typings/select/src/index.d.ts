declare const _default: import("vue").DefineComponent<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            CLASS: {
                SelectDropdownWrap: string;
                IsReverse: string;
            };
            I18N: {
                noData: string;
                noMatch: string;
                loading: string;
            };
            COMPONENT_NAME: {
                Form: string;
                Select: string;
                Option: string;
                FormItem: string;
                OptionGroup: string;
                SelectDropdown: string;
            };
            EVENT_NAME: {
                removeTag: string;
                formChange: string;
                formBlur: string;
                queryChange: string;
                setSelected: string;
                updatePopper: string;
                destroyPopper: string;
                visibleChange: string;
                handleOptionClick: string;
                handleGroupDisabled: string;
            };
            TYPE: {
                Grid: string;
                Tree: string;
            };
        };
    };
    id: (StringConstructor | NumberConstructor)[];
    name: StringConstructor;
    size: StringConstructor;
    remote: BooleanConstructor;
    remoteConfig: {
        type: ObjectConstructor;
        default(): {
            showIcon: boolean;
            clearData: boolean;
            autoSearch: boolean;
        };
    };
    loading: BooleanConstructor;
    disabled: BooleanConstructor;
    options: ArrayConstructor;
    dataset: ObjectConstructor;
    textField: {
        type: StringConstructor;
        default: string;
    };
    tabindex: {
        type: StringConstructor;
        default: string;
    };
    valueField: {
        type: StringConstructor;
        default: string;
    };
    placement: {
        type: StringConstructor;
        default: string;
    };
    showCheck: {
        type: BooleanConstructor;
        default: boolean;
    };
    showAlloption: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: BooleanConstructor;
    clearable: BooleanConstructor;
    noDataText: StringConstructor;
    filterable: BooleanConstructor;
    loadingText: StringConstructor;
    noMatchText: StringConstructor;
    popperClass: StringConstructor;
    allowCreate: BooleanConstructor;
    collapseTags: BooleanConstructor;
    remoteMethod: FunctionConstructor;
    filterMethod: FunctionConstructor;
    reserveKeyword: BooleanConstructor;
    automaticDropdown: BooleanConstructor;
    defaultFirstOption: BooleanConstructor;
    modelValue: {};
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: () => any;
    };
    autocomplete: {
        type: StringConstructor;
        default: string;
    };
    multipleLimit: {
        type: NumberConstructor;
        default: number;
    };
    popperAppendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideDrop: {
        type: BooleanConstructor;
        default: boolean;
    };
    copyable: {
        type: BooleanConstructor;
        default: boolean;
    };
    renderType: StringConstructor;
    gridOp: {
        type: ObjectConstructor;
        default: () => {};
    };
    treeOp: {
        type: ObjectConstructor;
        default: () => {};
    };
    delay: {
        type: NumberConstructor;
        default: number;
    };
    readonly: BooleanConstructor;
    dropStyle: {
        type: ObjectConstructor;
        default: () => {};
    };
    cacheOp: ObjectConstructor;
    isDropInheritWidth: BooleanConstructor;
    tagSelectable: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectConfig: {
        type: ObjectConstructor;
        default(): {
            checkMethod(): true;
        };
    };
    radioConfig: {
        type: ObjectConstructor;
        default(): {
            checkMethod(): true;
        };
    };
    allowCopy: {
        type: BooleanConstructor;
        default: boolean;
    };
    textSplit: {
        type: StringConstructor;
        default: string;
    };
    autoClose: BooleanConstructor;
    queryDebounce: NumberConstructor;
    ignoreEnter: {
        type: BooleanConstructor;
        default: boolean;
    };
    optimization: (ObjectConstructor | BooleanConstructor)[];
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "focus" | "blur" | "clear" | "visible-change" | "remove-tag")[], "change" | "focus" | "blur" | "clear" | "visible-change" | "remove-tag", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            CLASS: {
                SelectDropdownWrap: string;
                IsReverse: string;
            };
            I18N: {
                noData: string;
                noMatch: string;
                loading: string;
            };
            COMPONENT_NAME: {
                Form: string;
                Select: string;
                Option: string;
                FormItem: string;
                OptionGroup: string;
                SelectDropdown: string;
            };
            EVENT_NAME: {
                removeTag: string;
                formChange: string;
                formBlur: string;
                queryChange: string;
                setSelected: string;
                updatePopper: string;
                destroyPopper: string;
                visibleChange: string;
                handleOptionClick: string;
                handleGroupDisabled: string;
            };
            TYPE: {
                Grid: string;
                Tree: string;
            };
        };
    };
    id: (StringConstructor | NumberConstructor)[];
    name: StringConstructor;
    size: StringConstructor;
    remote: BooleanConstructor;
    remoteConfig: {
        type: ObjectConstructor;
        default(): {
            showIcon: boolean;
            clearData: boolean;
            autoSearch: boolean;
        };
    };
    loading: BooleanConstructor;
    disabled: BooleanConstructor;
    options: ArrayConstructor;
    dataset: ObjectConstructor;
    textField: {
        type: StringConstructor;
        default: string;
    };
    tabindex: {
        type: StringConstructor;
        default: string;
    };
    valueField: {
        type: StringConstructor;
        default: string;
    };
    placement: {
        type: StringConstructor;
        default: string;
    };
    showCheck: {
        type: BooleanConstructor;
        default: boolean;
    };
    showAlloption: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: BooleanConstructor;
    clearable: BooleanConstructor;
    noDataText: StringConstructor;
    filterable: BooleanConstructor;
    loadingText: StringConstructor;
    noMatchText: StringConstructor;
    popperClass: StringConstructor;
    allowCreate: BooleanConstructor;
    collapseTags: BooleanConstructor;
    remoteMethod: FunctionConstructor;
    filterMethod: FunctionConstructor;
    reserveKeyword: BooleanConstructor;
    automaticDropdown: BooleanConstructor;
    defaultFirstOption: BooleanConstructor;
    modelValue: {};
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: () => any;
    };
    autocomplete: {
        type: StringConstructor;
        default: string;
    };
    multipleLimit: {
        type: NumberConstructor;
        default: number;
    };
    popperAppendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideDrop: {
        type: BooleanConstructor;
        default: boolean;
    };
    copyable: {
        type: BooleanConstructor;
        default: boolean;
    };
    renderType: StringConstructor;
    gridOp: {
        type: ObjectConstructor;
        default: () => {};
    };
    treeOp: {
        type: ObjectConstructor;
        default: () => {};
    };
    delay: {
        type: NumberConstructor;
        default: number;
    };
    readonly: BooleanConstructor;
    dropStyle: {
        type: ObjectConstructor;
        default: () => {};
    };
    cacheOp: ObjectConstructor;
    isDropInheritWidth: BooleanConstructor;
    tagSelectable: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectConfig: {
        type: ObjectConstructor;
        default(): {
            checkMethod(): true;
        };
    };
    radioConfig: {
        type: ObjectConstructor;
        default(): {
            checkMethod(): true;
        };
    };
    allowCopy: {
        type: BooleanConstructor;
        default: boolean;
    };
    textSplit: {
        type: StringConstructor;
        default: string;
    };
    autoClose: BooleanConstructor;
    queryDebounce: NumberConstructor;
    ignoreEnter: {
        type: BooleanConstructor;
        default: boolean;
    };
    optimization: (ObjectConstructor | BooleanConstructor)[];
}>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    onClear?: ((...args: any[]) => any) | undefined;
    "onVisible-change"?: ((...args: any[]) => any) | undefined;
    "onRemove-tag"?: ((...args: any[]) => any) | undefined;
}, {
    _constants: Record<string, any>;
    readonly: boolean;
    tabindex: string;
    placeholder: string;
    disabled: boolean;
    popperAppendToBody: boolean;
    valueKey: string;
    clearable: boolean;
    placement: string;
    loading: boolean;
    valueField: string;
    textField: string;
    filterable: boolean;
    collapseTags: boolean;
    multiple: boolean;
    textSplit: string;
    remote: boolean;
    autocomplete: string;
    gridOp: Record<string, any>;
    treeOp: Record<string, any>;
    dropStyle: Record<string, any>;
    copyable: boolean;
    showCheck: boolean;
    showAlloption: boolean;
    hideDrop: boolean;
    remoteConfig: Record<string, any>;
    allowCreate: boolean;
    multipleLimit: number;
    reserveKeyword: boolean;
    automaticDropdown: boolean;
    defaultFirstOption: boolean;
    delay: number;
    isDropInheritWidth: boolean;
    tagSelectable: boolean;
    selectConfig: Record<string, any>;
    radioConfig: Record<string, any>;
    allowCopy: boolean;
    autoClose: boolean;
    ignoreEnter: boolean;
}>;
export default _default;
