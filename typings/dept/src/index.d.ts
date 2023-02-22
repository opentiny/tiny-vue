declare const _default: import("vue").DefineComponent<{
    modelValue: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: StringConstructor;
    fetchDeptList: FunctionConstructor;
    fetchDeptByValue: FunctionConstructor;
    fetchDept: FunctionConstructor;
    beforeConfirm: FunctionConstructor;
    title: {
        type: StringConstructor;
        default: string;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "close" | "confirm" | "cancel" | "open" | "selected")[], "change" | "close" | "confirm" | "cancel" | "open" | "selected", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: StringConstructor;
    fetchDeptList: FunctionConstructor;
    fetchDeptByValue: FunctionConstructor;
    fetchDept: FunctionConstructor;
    beforeConfirm: FunctionConstructor;
    title: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
    onCancel?: ((...args: any[]) => any) | undefined;
    onOpen?: ((...args: any[]) => any) | undefined;
    onSelected?: ((...args: any[]) => any) | undefined;
}, {
    title: string;
    disabled: boolean;
    autoSelect: boolean;
}>;
export default _default;
