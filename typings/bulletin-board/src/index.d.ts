declare const _default: import("vue").DefineComponent<{
    title: StringConstructor;
    icon: (ObjectConstructor | StringConstructor)[];
    showMore: {
        type: BooleanConstructor;
        default: boolean;
    };
    moreLink: {
        type: ObjectConstructor;
        default: () => void;
    };
    tabTitle: {
        type: ArrayConstructor;
        required: true;
    };
    activeName: {
        type: StringConstructor;
        default: string;
    };
    data: {
        type: ArrayConstructor;
        required: true;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: StringConstructor;
    icon: (ObjectConstructor | StringConstructor)[];
    showMore: {
        type: BooleanConstructor;
        default: boolean;
    };
    moreLink: {
        type: ObjectConstructor;
        default: () => void;
    };
    tabTitle: {
        type: ArrayConstructor;
        required: true;
    };
    activeName: {
        type: StringConstructor;
        default: string;
    };
    data: {
        type: ArrayConstructor;
        required: true;
    };
}>>, {
    showMore: boolean;
    moreLink: Record<string, any>;
    activeName: string;
}>;
export default _default;
