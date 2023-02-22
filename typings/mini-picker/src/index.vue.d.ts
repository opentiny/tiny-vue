declare const _default: import("vue").DefineComponent<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            CHILDREN_PICKER: string;
        };
    };
    columns: {
        type: ArrayConstructor;
        default: () => never[];
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    confirmButtonText: {
        type: StringConstructor;
        default: () => any;
    };
    cancelButtonText: {
        type: StringConstructor;
        default: () => any;
    };
    defaultIndex: {
        type: NumberConstructor;
        default: number;
    };
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    itemHeight: {
        type: NumberConstructor;
        default: number;
    };
    visibleItemCount: {
        type: NumberConstructor;
        default: number;
    };
    swipeDuration: {
        type: NumberConstructor;
        default: number;
    };
}, {
    t: any;
    vm: any;
    f: (props: any, attrs?: {}) => {};
    a: (attrs: any, filters: any, include: any) => {};
    d: (props: any) => void;
    dp: (props: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            CHILDREN_PICKER: string;
        };
    };
    columns: {
        type: ArrayConstructor;
        default: () => never[];
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    confirmButtonText: {
        type: StringConstructor;
        default: () => any;
    };
    cancelButtonText: {
        type: StringConstructor;
        default: () => any;
    };
    defaultIndex: {
        type: NumberConstructor;
        default: number;
    };
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    itemHeight: {
        type: NumberConstructor;
        default: number;
    };
    visibleItemCount: {
        type: NumberConstructor;
        default: number;
    };
    swipeDuration: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    _constants: Record<string, any>;
    title: string;
    visible: boolean;
    valueKey: string;
    columns: unknown[];
    confirmButtonText: string;
    cancelButtonText: string;
    defaultIndex: number;
    itemHeight: number;
    visibleItemCount: number;
    swipeDuration: number;
}>;
export default _default;
