declare const _default: import("vue").DefineComponent<{
    content: {
        type: StringConstructor;
        default: string;
    };
    subText: {
        type: StringConstructor;
        default: string;
    };
    contentDes: {
        type: StringConstructor;
        default: string;
    };
    list: {
        type: BooleanConstructor;
        default: boolean;
    };
    id: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
}, {
    t: any;
    vm: any;
    f: (props: any, attrs?: {}) => {};
    a: (attrs: any, filters: any, include: any) => {};
    d: (props: any) => void;
    dp: (props: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    content: {
        type: StringConstructor;
        default: string;
    };
    subText: {
        type: StringConstructor;
        default: string;
    };
    contentDes: {
        type: StringConstructor;
        default: string;
    };
    list: {
        type: BooleanConstructor;
        default: boolean;
    };
    id: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
}>>, {
    content: string;
    id: string | number;
    list: boolean;
    subText: string;
    contentDes: string;
}>;
export default _default;
