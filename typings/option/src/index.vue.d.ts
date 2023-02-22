declare const _default: import("vue").DefineComponent<{
    value: {
        required: true;
    };
    label: (StringConstructor | NumberConstructor)[];
    created: BooleanConstructor;
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    events: {
        type: ObjectConstructor;
        default: () => {};
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    highlightClass: StringConstructor;
}, {
    t: any;
    vm: any;
    f: (props: any, attrs?: {}) => {};
    a: (attrs: any, filters: any, include: any) => {};
    d: (props: any) => void;
    dp: (props: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        required: true;
    };
    label: (StringConstructor | NumberConstructor)[];
    created: BooleanConstructor;
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    events: {
        type: ObjectConstructor;
        default: () => {};
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    highlightClass: StringConstructor;
}>>, {
    visible: boolean;
    disabled: boolean;
    events: Record<string, any>;
    created: boolean;
}>;
export default _default;
