declare const _default: import("vue").DefineComponent<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            DIALOG_TITLE: string;
        };
    };
    icon: ObjectConstructor;
    searchIcon: {
        type: ObjectConstructor;
        default: () => any;
    };
    data: {
        type: ArrayConstructor;
    };
    maxItem: {
        type: NumberConstructor;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    defaultExpandAll: {
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
    props: {
        default: () => {
            children: string;
            disabled: string;
            label: string;
        };
    };
    getMenuDataSync: FunctionConstructor;
    keepSelectedNodes: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            DIALOG_TITLE: string;
        };
    };
    icon: ObjectConstructor;
    searchIcon: {
        type: ObjectConstructor;
        default: () => any;
    };
    data: {
        type: ArrayConstructor;
    };
    maxItem: {
        type: NumberConstructor;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    defaultExpandAll: {
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
    props: {
        default: () => {
            children: string;
            disabled: string;
            label: string;
        };
    };
    getMenuDataSync: FunctionConstructor;
    keepSelectedNodes: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    props: {
        children: string;
        disabled: string;
        label: string;
    };
    _constants: Record<string, any>;
    title: string;
    ellipsis: boolean;
    defaultExpandAll: boolean;
    searchIcon: Record<string, any>;
    wrap: boolean;
    keepSelectedNodes: boolean;
}>;
export default _default;
