declare const _default: import("vue").DefineComponent<{
    modelValue: null;
    title: StringConstructor;
    disabled: BooleanConstructor;
    titleClass: StringConstructor;
    options: {
        type: ArrayConstructor;
        default: () => never[];
    };
    icon: ObjectConstructor;
    type: {
        type: StringConstructor;
        default: string;
    };
}, {
    t: any;
    vm: any;
    f: (props: any, attrs?: {}) => {};
    a: (attrs: any, filters: any, include: any) => {};
    d: (props: any) => void;
    dp: (props: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "change" | "update:modelValue" | "close" | "confirm" | "open" | "opened" | "closed")[], "click" | "change" | "update:modelValue" | "close" | "confirm" | "open" | "opened" | "closed", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: null;
    title: StringConstructor;
    disabled: BooleanConstructor;
    titleClass: StringConstructor;
    options: {
        type: ArrayConstructor;
        default: () => never[];
    };
    icon: ObjectConstructor;
    type: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onClick?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
    onOpen?: ((...args: any[]) => any) | undefined;
    onOpened?: ((...args: any[]) => any) | undefined;
    onClosed?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
    disabled: boolean;
    options: unknown[];
}>;
export default _default;
