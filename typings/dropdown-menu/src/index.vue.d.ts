declare const _default: import("vue").DefineComponent<{
    zIndex: (StringConstructor | NumberConstructor)[];
    activeColor: StringConstructor;
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    direction: {
        type: StringConstructor;
        default: string;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnClickOutside: {
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "open"[], "open", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    zIndex: (StringConstructor | NumberConstructor)[];
    activeColor: StringConstructor;
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    direction: {
        type: StringConstructor;
        default: string;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnClickOutside: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onOpen?: ((...args: any[]) => any) | undefined;
}, {
    duration: string | number;
    overlay: boolean;
    direction: string;
    closeOnClickOverlay: boolean;
    closeOnClickOutside: boolean;
}>;
export default _default;
