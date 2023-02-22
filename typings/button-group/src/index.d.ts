declare const _default: import("vue").DefineComponent<{
    size: StringConstructor;
    data: ArrayConstructor;
    plain: BooleanConstructor;
    modelValue: (StringConstructor | NumberConstructor)[];
    disabled: BooleanConstructor;
    valueField: {
        type: StringConstructor;
        default: string;
    };
    textField: {
        type: StringConstructor;
        default: string;
    };
    showMore: NumberConstructor;
    showEdit: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "edit"[], "edit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: StringConstructor;
    data: ArrayConstructor;
    plain: BooleanConstructor;
    modelValue: (StringConstructor | NumberConstructor)[];
    disabled: BooleanConstructor;
    valueField: {
        type: StringConstructor;
        default: string;
    };
    textField: {
        type: StringConstructor;
        default: string;
    };
    showMore: NumberConstructor;
    showEdit: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onEdit?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    plain: boolean;
    valueField: string;
    textField: string;
    showEdit: boolean;
}>;
export default _default;
