declare const _default: import("vue").DefineComponent<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            TARGETORDER: string;
            ISCHECKED: string;
            DROPPANEL: string;
            TRANSFERPANEL: string;
        };
    };
    buttonTexts: {
        type: ArrayConstructor;
        default: () => never[];
    };
    columns: ArrayConstructor;
    data: {
        type: ArrayConstructor;
        default: () => never[];
    };
    dropConfig: ObjectConstructor;
    filterMethod: FunctionConstructor;
    filterPlaceholder: {
        type: StringConstructor;
        default: string;
    };
    filterable: BooleanConstructor;
    format: {
        type: ObjectConstructor;
        default: () => {};
    };
    leftDefaultChecked: {
        type: ArrayConstructor;
        default: () => never[];
    };
    modelValue: {
        type: ArrayConstructor;
        default: () => never[];
    };
    pagerOp: {
        type: ObjectConstructor;
        default: () => {
            mode: string;
            pageVO: {
                currentPage: number;
                pageSize: number;
            };
        };
    };
    props: {
        type: ObjectConstructor;
        default: () => {
            label: string;
            key: string;
            disabled: string;
        };
    };
    render: ObjectConstructor;
    renderContent: FunctionConstructor;
    renderType: StringConstructor;
    rightDefaultChecked: {
        type: ArrayConstructor;
        default: () => never[];
    };
    showAllBtn: BooleanConstructor;
    showPager: {
        type: BooleanConstructor;
        default: boolean;
    };
    targetOrder: {
        type: StringConstructor;
        default: string;
    };
    titles: {
        type: ArrayConstructor;
        default: () => never[];
    };
    toLeftDisable: {
        type: BooleanConstructor;
        default: boolean;
    };
    toRightDisable: {
        type: BooleanConstructor;
        default: boolean;
    };
    treeOp: ObjectConstructor;
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "left-check-change" | "right-check-change")[], "change" | "left-check-change" | "right-check-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            TARGETORDER: string;
            ISCHECKED: string;
            DROPPANEL: string;
            TRANSFERPANEL: string;
        };
    };
    buttonTexts: {
        type: ArrayConstructor;
        default: () => never[];
    };
    columns: ArrayConstructor;
    data: {
        type: ArrayConstructor;
        default: () => never[];
    };
    dropConfig: ObjectConstructor;
    filterMethod: FunctionConstructor;
    filterPlaceholder: {
        type: StringConstructor;
        default: string;
    };
    filterable: BooleanConstructor;
    format: {
        type: ObjectConstructor;
        default: () => {};
    };
    leftDefaultChecked: {
        type: ArrayConstructor;
        default: () => never[];
    };
    modelValue: {
        type: ArrayConstructor;
        default: () => never[];
    };
    pagerOp: {
        type: ObjectConstructor;
        default: () => {
            mode: string;
            pageVO: {
                currentPage: number;
                pageSize: number;
            };
        };
    };
    props: {
        type: ObjectConstructor;
        default: () => {
            label: string;
            key: string;
            disabled: string;
        };
    };
    render: ObjectConstructor;
    renderContent: FunctionConstructor;
    renderType: StringConstructor;
    rightDefaultChecked: {
        type: ArrayConstructor;
        default: () => never[];
    };
    showAllBtn: BooleanConstructor;
    showPager: {
        type: BooleanConstructor;
        default: boolean;
    };
    targetOrder: {
        type: StringConstructor;
        default: string;
    };
    titles: {
        type: ArrayConstructor;
        default: () => never[];
    };
    toLeftDisable: {
        type: BooleanConstructor;
        default: boolean;
    };
    toRightDisable: {
        type: BooleanConstructor;
        default: boolean;
    };
    treeOp: ObjectConstructor;
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onLeft-check-change"?: ((...args: any[]) => any) | undefined;
    "onRight-check-change"?: ((...args: any[]) => any) | undefined;
}, {
    props: Record<string, any>;
    data: unknown[];
    _constants: Record<string, any>;
    modelValue: unknown[];
    format: Record<string, any>;
    filterable: boolean;
    pagerOp: Record<string, any>;
    showPager: boolean;
    titles: unknown[];
    buttonTexts: unknown[];
    filterPlaceholder: string;
    leftDefaultChecked: unknown[];
    rightDefaultChecked: unknown[];
    targetOrder: string;
    showAllBtn: boolean;
    toLeftDisable: boolean;
    toRightDisable: boolean;
}>;
export default _default;
