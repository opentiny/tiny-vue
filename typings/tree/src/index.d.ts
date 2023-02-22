declare const _default: import("vue").DefineComponent<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            EMPTY_TEXT_LOCAL: string;
        };
    };
    accordion: BooleanConstructor;
    checkDescendants: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowDrag: FunctionConstructor;
    allowDrop: FunctionConstructor;
    autoExpandParent: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkOnClickNode: BooleanConstructor;
    checkStrictly: BooleanConstructor;
    currentNodeKey: (StringConstructor | NumberConstructor)[];
    data: {
        type: ArrayConstructor;
    };
    dataset: ObjectConstructor;
    defaultCheckedKeys: ArrayConstructor;
    defaultExpandAll: BooleanConstructor;
    defaultExpandedKeys: ArrayConstructor;
    defaultExpandedKeysHighlight: (StringConstructor | NumberConstructor)[];
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    emptyText: StringConstructor;
    expandIcon: ObjectConstructor;
    expandOnClickNode: {
        type: BooleanConstructor;
        default: boolean;
    };
    filterNodeMethod: FunctionConstructor;
    highlightCurrent: BooleanConstructor;
    icon: ObjectConstructor;
    iconTriggerClickNode: {
        type: BooleanConstructor;
        default: boolean;
    };
    indent: {
        type: NumberConstructor;
        default: number;
    };
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    load: FunctionConstructor;
    nodeKey: StringConstructor;
    parentKey: StringConstructor;
    props: {
        default(): {
            children: string;
            label: string;
            disabled: string;
        };
    };
    renderAfterExpand: {
        type: BooleanConstructor;
        default: boolean;
    };
    renderContent: FunctionConstructor;
    showCheckbox: {
        type: BooleanConstructor;
        default: boolean;
    };
    showContextmenu: {
        type: BooleanConstructor;
        default: boolean;
    };
    showRadio: {
        type: BooleanConstructor;
        default: boolean;
    };
    shrinkIcon: ObjectConstructor;
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("check" | "current-change" | "check-change" | "node-collapse" | "node-expand" | "node-click" | "node-drag-end" | "node-drag-enter" | "node-drag-leave" | "node-drag-over" | "node-drag-start" | "node-drop" | "node-contextmenu")[], "check" | "current-change" | "check-change" | "node-collapse" | "node-expand" | "node-click" | "node-drag-end" | "node-drag-enter" | "node-drag-leave" | "node-drag-over" | "node-drag-start" | "node-drop" | "node-contextmenu", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            EMPTY_TEXT_LOCAL: string;
        };
    };
    accordion: BooleanConstructor;
    allowDrag: FunctionConstructor;
    checkDescendants: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowDrop: FunctionConstructor;
    autoExpandParent: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkOnClickNode: BooleanConstructor;
    checkStrictly: BooleanConstructor;
    currentNodeKey: (StringConstructor | NumberConstructor)[];
    data: {
        type: ArrayConstructor;
    };
    dataset: ObjectConstructor;
    defaultCheckedKeys: ArrayConstructor;
    defaultExpandAll: BooleanConstructor;
    defaultExpandedKeys: ArrayConstructor;
    defaultExpandedKeysHighlight: (StringConstructor | NumberConstructor)[];
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    emptyText: StringConstructor;
    expandIcon: ObjectConstructor;
    expandOnClickNode: {
        type: BooleanConstructor;
        default: boolean;
    };
    filterNodeMethod: FunctionConstructor;
    highlightCurrent: BooleanConstructor;
    icon: ObjectConstructor;
    iconTriggerClickNode: {
        type: BooleanConstructor;
        default: boolean;
    };
    indent: {
        type: NumberConstructor;
        default: number;
    };
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    load: FunctionConstructor;
    nodeKey: StringConstructor;
    parentKey: StringConstructor;
    props: {
        default(): {
            children: string;
            label: string;
            disabled: string;
        };
    };
    renderAfterExpand: {
        type: BooleanConstructor;
        default: boolean;
    };
    renderContent: FunctionConstructor;
    showCheckbox: {
        type: BooleanConstructor;
        default: boolean;
    };
    showContextmenu: {
        type: BooleanConstructor;
        default: boolean;
    };
    showRadio: {
        type: BooleanConstructor;
        default: boolean;
    };
    shrinkIcon: ObjectConstructor;
}>> & {
    onCheck?: ((...args: any[]) => any) | undefined;
    "onCurrent-change"?: ((...args: any[]) => any) | undefined;
    "onCheck-change"?: ((...args: any[]) => any) | undefined;
    "onNode-collapse"?: ((...args: any[]) => any) | undefined;
    "onNode-expand"?: ((...args: any[]) => any) | undefined;
    "onNode-click"?: ((...args: any[]) => any) | undefined;
    "onNode-drag-end"?: ((...args: any[]) => any) | undefined;
    "onNode-drag-enter"?: ((...args: any[]) => any) | undefined;
    "onNode-drag-leave"?: ((...args: any[]) => any) | undefined;
    "onNode-drag-over"?: ((...args: any[]) => any) | undefined;
    "onNode-drag-start"?: ((...args: any[]) => any) | undefined;
    "onNode-drop"?: ((...args: any[]) => any) | undefined;
    "onNode-contextmenu"?: ((...args: any[]) => any) | undefined;
}, {
    props: {
        children: string;
        label: string;
        disabled: string;
    };
    _constants: Record<string, any>;
    checkStrictly: boolean;
    accordion: boolean;
    draggable: boolean;
    lazy: boolean;
    defaultExpandAll: boolean;
    showCheckbox: boolean;
    expandOnClickNode: boolean;
    renderAfterExpand: boolean;
    checkOnClickNode: boolean;
    checkDescendants: boolean;
    autoExpandParent: boolean;
    highlightCurrent: boolean;
    indent: number;
    iconTriggerClickNode: boolean;
    showRadio: boolean;
    showContextmenu: boolean;
}>;
export default _default;
