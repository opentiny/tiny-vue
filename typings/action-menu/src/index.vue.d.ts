import '@opentiny/vue-theme/action-menu/index.css';
declare const _default: import("vue").DefineComponent<{
    options: {
        type: ArrayConstructor;
        default: () => never[];
    };
    maxShowNum: {
        type: NumberConstructor;
        default: number;
    };
    moreText: {
        type: StringConstructor;
        default: any;
    };
    spacing: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    textField: {
        type: StringConstructor;
        default: string;
    };
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    popperAppendToBody: {
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("moreClick" | "itemClick")[], "moreClick" | "itemClick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    options: {
        type: ArrayConstructor;
        default: () => never[];
    };
    maxShowNum: {
        type: NumberConstructor;
        default: number;
    };
    moreText: {
        type: StringConstructor;
        default: any;
    };
    spacing: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    textField: {
        type: StringConstructor;
        default: string;
    };
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    popperAppendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onMoreClick?: ((...args: any[]) => any) | undefined;
    onItemClick?: ((...args: any[]) => any) | undefined;
}, {
    options: unknown[];
    maxShowNum: number;
    moreText: string;
    spacing: string | number;
    textField: string;
    popperClass: string;
    popperAppendToBody: boolean;
}>;
export default _default;
