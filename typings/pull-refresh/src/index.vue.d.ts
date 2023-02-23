import '@opentiny/vue-theme-mobile/pull-refresh/index.css';
declare const _default: import("vue").DefineComponent<{
    modelValue: BooleanConstructor;
    pullingText: {
        type: StringConstructor;
        default: () => any;
    };
    loosingText: {
        type: StringConstructor;
        default: () => any;
    };
    successText: StringConstructor;
    successDuration: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    animationDuration: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    headHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    disabled: {
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
    modelValue: BooleanConstructor;
    pullingText: {
        type: StringConstructor;
        default: () => any;
    };
    loosingText: {
        type: StringConstructor;
        default: () => any;
    };
    successText: StringConstructor;
    successDuration: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    animationDuration: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    headHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    modelValue: boolean;
    disabled: boolean;
    pullingText: string;
    loosingText: string;
    successDuration: string | number;
    animationDuration: string | number;
    headHeight: string | number;
}>;
export default _default;
