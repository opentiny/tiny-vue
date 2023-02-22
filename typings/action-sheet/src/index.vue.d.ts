import '@opentiny/vue-theme-mobile/action-sheet/index.css';
declare const _default: import("vue").DefineComponent<{
    menus: {
        type: ArrayConstructor;
        default: () => never[];
    };
    modelValue: (StringConstructor | NumberConstructor)[];
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    ellipsis: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    t: any;
    vm: any;
    f: (props: any, attrs?: {}) => {};
    a: (attrs: any, filters: any, include: any) => {};
    d: (props: any) => void;
    dp: (props: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    menus: {
        type: ArrayConstructor;
        default: () => never[];
    };
    modelValue: (StringConstructor | NumberConstructor)[];
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    ellipsis: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    menus: unknown[];
    visible: boolean;
    ellipsis: boolean;
}>;
export default _default;
