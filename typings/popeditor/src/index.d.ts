declare const _default: import("vue").DefineComponent<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            TITLE: string;
            COLUMNS_TYPE: {
                selection: string;
                radio: string;
                index: string;
                width: number;
            };
            GRID_REF: {
                history: string;
                source: string;
            };
            TAG_NAME: string;
            MODAL_WIDTH: {
                multi: number;
                radio: number;
            };
            ACTIVE_NAME: {
                history: string;
                source: string;
            };
            TYPE_GRID: string;
            TYPE_TREE: string;
            ID: string;
            LABEL: string;
        };
    };
    modelValue: {
        type: (ArrayConstructor | StringConstructor | NumberConstructor)[];
        default: string;
    };
    tabindex: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    size: StringConstructor;
    trigger: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: ObjectConstructor;
        default(): any;
    };
    iconSearch: {
        type: ObjectConstructor;
        default(): any;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    textField: {
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
    valueSplit: {
        type: StringConstructor;
        default: string;
    };
    popseletor: {
        type: StringConstructor;
        default: string;
        validator(value: unknown): boolean;
    };
    conditions: {
        type: ArrayConstructor;
        default(): never[];
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    height: (StringConstructor | NumberConstructor)[];
    gridOp: {
        type: ObjectConstructor;
        default(): {
            columns: never[];
            data: never[];
        };
    };
    remoteSearch: FunctionConstructor;
    dataset: ObjectConstructor;
    alwaysLoad: {
        type: BooleanConstructor;
        default: boolean;
    };
    treeOp: {
        type: ObjectConstructor;
        default(): {
            data: never[];
        };
    };
    pagerOp: {
        type: ObjectConstructor;
        default(): {};
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    multi: {
        type: BooleanConstructor;
        default: boolean;
    };
    showClearBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    showPager: {
        type: BooleanConstructor;
        default: boolean;
    };
    showHistory: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoLookup: {
        type: BooleanConstructor;
        default: boolean;
    };
    beforeReset: FunctionConstructor;
    resize: {
        type: BooleanConstructor;
        default: boolean;
    };
    dialogClass: {
        type: StringConstructor;
        default: string;
    };
    textRenderSource: FunctionConstructor;
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    placement: {
        type: StringConstructor;
        default: string;
    };
    popperAppendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    suggest: BooleanConstructor;
    beforeClose: {
        type: FunctionConstructor;
        default: () => () => true;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "close" | "page-change")[], "change" | "close" | "page-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            TITLE: string;
            COLUMNS_TYPE: {
                selection: string;
                radio: string;
                index: string;
                width: number;
            };
            GRID_REF: {
                history: string;
                source: string;
            };
            TAG_NAME: string;
            MODAL_WIDTH: {
                multi: number;
                radio: number;
            };
            ACTIVE_NAME: {
                history: string;
                source: string;
            };
            TYPE_GRID: string;
            TYPE_TREE: string;
            ID: string;
            LABEL: string;
        };
    };
    modelValue: {
        type: (ArrayConstructor | StringConstructor | NumberConstructor)[];
        default: string;
    };
    tabindex: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    size: StringConstructor;
    trigger: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: ObjectConstructor;
        default(): any;
    };
    iconSearch: {
        type: ObjectConstructor;
        default(): any;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    textField: {
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
    valueSplit: {
        type: StringConstructor;
        default: string;
    };
    popseletor: {
        type: StringConstructor;
        default: string;
        validator(value: unknown): boolean;
    };
    conditions: {
        type: ArrayConstructor;
        default(): never[];
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    height: (StringConstructor | NumberConstructor)[];
    gridOp: {
        type: ObjectConstructor;
        default(): {
            columns: never[];
            data: never[];
        };
    };
    remoteSearch: FunctionConstructor;
    dataset: ObjectConstructor;
    alwaysLoad: {
        type: BooleanConstructor;
        default: boolean;
    };
    treeOp: {
        type: ObjectConstructor;
        default(): {
            data: never[];
        };
    };
    pagerOp: {
        type: ObjectConstructor;
        default(): {};
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    multi: {
        type: BooleanConstructor;
        default: boolean;
    };
    showClearBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    showPager: {
        type: BooleanConstructor;
        default: boolean;
    };
    showHistory: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoLookup: {
        type: BooleanConstructor;
        default: boolean;
    };
    beforeReset: FunctionConstructor;
    resize: {
        type: BooleanConstructor;
        default: boolean;
    };
    dialogClass: {
        type: StringConstructor;
        default: string;
    };
    textRenderSource: FunctionConstructor;
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    placement: {
        type: StringConstructor;
        default: string;
    };
    popperAppendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    suggest: BooleanConstructor;
    beforeClose: {
        type: FunctionConstructor;
        default: () => () => true;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    "onPage-change"?: ((...args: any[]) => any) | undefined;
}, {
    _constants: Record<string, any>;
    title: string;
    width: string | number;
    readonly: boolean;
    modelValue: string | number | unknown[];
    icon: Record<string, any>;
    tabindex: string;
    placeholder: string;
    disabled: boolean;
    popperAppendToBody: boolean;
    placement: string;
    valueField: string;
    textField: string;
    trigger: string;
    beforeClose: Function;
    textSplit: string;
    resize: boolean;
    draggable: boolean;
    dialogClass: string;
    autoLookup: boolean;
    conditions: unknown[];
    gridOp: Record<string, any>;
    alwaysLoad: boolean;
    treeOp: Record<string, any>;
    iconSearch: Record<string, any>;
    multi: boolean;
    pagerOp: Record<string, any>;
    popseletor: string;
    showClearBtn: boolean;
    showHistory: boolean;
    showPager: boolean;
    valueSplit: string;
    suggest: boolean;
}>;
export default _default;
