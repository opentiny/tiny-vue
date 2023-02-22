declare const _default: import("vue").DefineComponent<{
    beforeClose: FunctionConstructor;
    closeIcon: {
        type: ObjectConstructor;
        default: () => any;
    };
    customClass: (ObjectConstructor | StringConstructor)[];
    duration: {
        type: NumberConstructor;
        default: number;
    };
    message: (StringConstructor | FunctionConstructor)[];
    onClose: FunctionConstructor;
    position: {
        type: StringConstructor;
        default: string;
    };
    showClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    showIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
    statusIcon: ObjectConstructor;
    title: (StringConstructor | FunctionConstructor)[];
    type: StringConstructor;
}, {
    t: any;
    vm: any;
    f: (props: any, attrs?: {}) => {};
    a: (attrs: any, filters: any, include: any) => {};
    d: (props: any) => void;
    dp: (props: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    beforeClose: FunctionConstructor;
    closeIcon: {
        type: ObjectConstructor;
        default: () => any;
    };
    customClass: (ObjectConstructor | StringConstructor)[];
    duration: {
        type: NumberConstructor;
        default: number;
    };
    message: (StringConstructor | FunctionConstructor)[];
    onClose: FunctionConstructor;
    position: {
        type: StringConstructor;
        default: string;
    };
    showClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    showIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
    statusIcon: ObjectConstructor;
    title: (StringConstructor | FunctionConstructor)[];
    type: StringConstructor;
}>>, {
    closeIcon: Record<string, any>;
    duration: number;
    position: string;
    showClose: boolean;
    showIcon: boolean;
}>;
export default _default;
