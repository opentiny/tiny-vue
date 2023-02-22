declare const _default: import("vue").DefineComponent<{
    modelValue: StringConstructor;
    approvalPerson: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    category: {
        type: StringConstructor;
        default: string;
    };
    title: StringConstructor;
    fetchHrapprover: FunctionConstructor;
    fetchDeptList: FunctionConstructor;
    fetchDeptByValue: FunctionConstructor;
    fetchDept: FunctionConstructor;
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: StringConstructor;
    approvalPerson: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    category: {
        type: StringConstructor;
        default: string;
    };
    title: StringConstructor;
    fetchHrapprover: FunctionConstructor;
    fetchDeptList: FunctionConstructor;
    fetchDeptByValue: FunctionConstructor;
    fetchDept: FunctionConstructor;
}>>, {
    disabled: boolean;
    approvalPerson: string;
    category: string;
}>;
export default _default;
