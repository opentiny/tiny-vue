declare const _default: import("vue").DefineComponent<{
    data: ArrayConstructor;
    nodeKey: StringConstructor;
    defaultExpandAll: BooleanConstructor;
    suffixIcon: ObjectConstructor;
    prefixIcon: ObjectConstructor;
    searchIcon: {
        type: ObjectConstructor;
        default: () => any;
    };
    props: ObjectConstructor;
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    emptyText: {
        type: StringConstructor;
        default: string;
    };
    checkStrictly: BooleanConstructor;
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    load: FunctionConstructor;
    showCheckbox: BooleanConstructor;
    filterNodeMethod: FunctionConstructor;
    defaultCheckedKeys: ArrayConstructor;
    defaultExpandedKeys: ArrayConstructor;
    defaultExpandedKeysHighlight: (StringConstructor | NumberConstructor)[];
    indent: {
        type: NumberConstructor;
        default: number;
    };
    allowDrag: FunctionConstructor;
    allowDrop: FunctionConstructor;
    expandOnClickNode: {
        type: BooleanConstructor;
        default: boolean;
    };
    ellipsis: {
        type: BooleanConstructor;
        default: boolean;
    };
    wrap: {
        type: BooleanConstructor;
        default: boolean;
    };
    getMenuDataSync: FunctionConstructor;
    accordion: BooleanConstructor;
    showTitle: {
        type: BooleanConstructor;
        default: boolean;
    };
    showFilter: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    t: any;
    vm: any;
    f: (props: any, attrs?: {}) => {};
    a: (attrs: any, filters: any, include: any) => {};
    d: (props: any) => void;
    dp: (props: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("current-change" | "check-change" | "node-collapse" | "node-expand" | "node-click")[], "current-change" | "check-change" | "node-collapse" | "node-expand" | "node-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: ArrayConstructor;
    nodeKey: StringConstructor;
    defaultExpandAll: BooleanConstructor;
    suffixIcon: ObjectConstructor;
    prefixIcon: ObjectConstructor;
    searchIcon: {
        type: ObjectConstructor;
        default: () => any;
    };
    props: ObjectConstructor;
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    emptyText: {
        type: StringConstructor;
        default: string;
    };
    checkStrictly: BooleanConstructor;
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    load: FunctionConstructor;
    showCheckbox: BooleanConstructor;
    filterNodeMethod: FunctionConstructor;
    defaultCheckedKeys: ArrayConstructor;
    defaultExpandedKeys: ArrayConstructor;
    defaultExpandedKeysHighlight: (StringConstructor | NumberConstructor)[];
    indent: {
        type: NumberConstructor;
        default: number;
    };
    allowDrag: FunctionConstructor;
    allowDrop: FunctionConstructor;
    expandOnClickNode: {
        type: BooleanConstructor;
        default: boolean;
    };
    ellipsis: {
        type: BooleanConstructor;
        default: boolean;
    };
    wrap: {
        type: BooleanConstructor;
        default: boolean;
    };
    getMenuDataSync: FunctionConstructor;
    accordion: BooleanConstructor;
    showTitle: {
        type: BooleanConstructor;
        default: boolean;
    };
    showFilter: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onCurrent-change"?: ((...args: any[]) => any) | undefined;
    "onCheck-change"?: ((...args: any[]) => any) | undefined;
    "onNode-collapse"?: ((...args: any[]) => any) | undefined;
    "onNode-expand"?: ((...args: any[]) => any) | undefined;
    "onNode-click"?: ((...args: any[]) => any) | undefined;
}, {
    ellipsis: boolean;
    showTitle: boolean;
    checkStrictly: boolean;
    accordion: boolean;
    draggable: boolean;
    lazy: boolean;
    defaultExpandAll: boolean;
    searchIcon: Record<string, any>;
    wrap: boolean;
    showCheckbox: boolean;
    expandOnClickNode: boolean;
    showFilter: boolean;
    emptyText: string;
    indent: number;
}>;
export default _default;
