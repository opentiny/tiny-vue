declare const _default: import("vue").DefineComponent<{
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    currentPage: NumberConstructor;
    pageCount: NumberConstructor;
    pagerCount: NumberConstructor;
    popupIcon: {
        type: ObjectConstructor;
        default: () => any;
    };
    doubleLeftIcon: {
        type: ObjectConstructor;
        default: () => any;
    };
    doubleRightIcon: {
        type: ObjectConstructor;
        default: () => any;
    };
    isBeforePageChange: BooleanConstructor;
}, {
    t: any;
    vm: any;
    f: (props: any, attrs?: {}) => {};
    a: (attrs: any, filters: any, include: any) => {};
    d: (props: any) => void;
    dp: (props: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    currentPage: NumberConstructor;
    pageCount: NumberConstructor;
    pagerCount: NumberConstructor;
    popupIcon: {
        type: ObjectConstructor;
        default: () => any;
    };
    doubleLeftIcon: {
        type: ObjectConstructor;
        default: () => any;
    };
    doubleRightIcon: {
        type: ObjectConstructor;
        default: () => any;
    };
    isBeforePageChange: BooleanConstructor;
}>>, {
    disabled: boolean;
    isBeforePageChange: boolean;
    popupIcon: Record<string, any>;
    doubleLeftIcon: Record<string, any>;
    doubleRightIcon: Record<string, any>;
}>;
export default _default;
