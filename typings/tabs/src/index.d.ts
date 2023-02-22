declare const _default: import("vue").DefineComponent<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            TAB_ITEM: string;
        };
    };
    tabStyle: StringConstructor;
    activeName: StringConstructor;
    withClose: BooleanConstructor;
    withAdd: BooleanConstructor;
    size: StringConstructor;
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {};
    editable: BooleanConstructor;
    position: {
        type: StringConstructor;
        default: string;
    };
    beforeLeave: FunctionConstructor;
    stretch: BooleanConstructor;
    showMoreTabs: BooleanConstructor;
    swipeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    popperClass: StringConstructor;
    popperAppendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    dropConfig: {
        type: ObjectConstructor;
        default: () => null;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "edit" | "close" | "add")[], "click" | "edit" | "close" | "add", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            TAB_ITEM: string;
        };
    };
    tabStyle: StringConstructor;
    activeName: StringConstructor;
    withClose: BooleanConstructor;
    withAdd: BooleanConstructor;
    size: StringConstructor;
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {};
    editable: BooleanConstructor;
    position: {
        type: StringConstructor;
        default: string;
    };
    beforeLeave: FunctionConstructor;
    stretch: BooleanConstructor;
    showMoreTabs: BooleanConstructor;
    swipeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    popperClass: StringConstructor;
    popperAppendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    dropConfig: {
        type: ObjectConstructor;
        default: () => null;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onEdit?: ((...args: any[]) => any) | undefined;
    onAdd?: ((...args: any[]) => any) | undefined;
}, {
    _constants: Record<string, any>;
    popperAppendToBody: boolean;
    activeColor: string;
    position: string;
    stretch: boolean;
    editable: boolean;
    withClose: boolean;
    showMoreTabs: boolean;
    withAdd: boolean;
    swipeable: boolean;
    dropConfig: Record<string, any>;
}>;
export default _default;
