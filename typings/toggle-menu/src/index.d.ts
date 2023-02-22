declare const _default: import("vue").DefineComponent<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            LOCALE_PLACEHOLDER: string;
        };
    };
    data: ArrayConstructor;
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    icon: ObjectConstructor;
    defaultExpandAll: {
        type: BooleanConstructor;
        default: boolean;
    };
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
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
    showFilter: {
        type: BooleanConstructor;
        default: boolean;
    };
    automaticFiltering: {
        type: BooleanConstructor;
        default: boolean;
    };
    props: {
        default: () => {
            children: string;
            disabled: string;
            label: string;
        };
    };
    getMenuDataSync: FunctionConstructor;
    accordion: BooleanConstructor;
    defaultCheckedKeys: ArrayConstructor;
    showCheckbox: BooleanConstructor;
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("node-collapse" | "node-expand" | "node-click" | "node-drag-end" | "node-drag-enter" | "node-drag-leave" | "node-drag-over" | "node-drag-start" | "node-drop")[], "node-collapse" | "node-expand" | "node-click" | "node-drag-end" | "node-drag-enter" | "node-drag-leave" | "node-drag-over" | "node-drag-start" | "node-drop", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            LOCALE_PLACEHOLDER: string;
        };
    };
    data: ArrayConstructor;
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    icon: ObjectConstructor;
    defaultExpandAll: {
        type: BooleanConstructor;
        default: boolean;
    };
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
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
    showFilter: {
        type: BooleanConstructor;
        default: boolean;
    };
    automaticFiltering: {
        type: BooleanConstructor;
        default: boolean;
    };
    props: {
        default: () => {
            children: string;
            disabled: string;
            label: string;
        };
    };
    getMenuDataSync: FunctionConstructor;
    accordion: BooleanConstructor;
    defaultCheckedKeys: ArrayConstructor;
    showCheckbox: BooleanConstructor;
}>> & {
    "onNode-collapse"?: ((...args: any[]) => any) | undefined;
    "onNode-expand"?: ((...args: any[]) => any) | undefined;
    "onNode-click"?: ((...args: any[]) => any) | undefined;
    "onNode-drag-end"?: ((...args: any[]) => any) | undefined;
    "onNode-drag-enter"?: ((...args: any[]) => any) | undefined;
    "onNode-drag-leave"?: ((...args: any[]) => any) | undefined;
    "onNode-drag-over"?: ((...args: any[]) => any) | undefined;
    "onNode-drag-start"?: ((...args: any[]) => any) | undefined;
    "onNode-drop"?: ((...args: any[]) => any) | undefined;
}, {
    props: {
        children: string;
        disabled: string;
        label: string;
    };
    _constants: Record<string, any>;
    ellipsis: boolean;
    placeholder: string;
    accordion: boolean;
    draggable: boolean;
    defaultExpandAll: boolean;
    wrap: boolean;
    showCheckbox: boolean;
    automaticFiltering: boolean;
    expandOnClickNode: boolean;
    showFilter: boolean;
}>;
export default _default;
