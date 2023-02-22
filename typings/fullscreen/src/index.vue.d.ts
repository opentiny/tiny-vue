declare const _default: import("vue").DefineComponent<{
    fullscreen: {
        type: BooleanConstructor;
        default: boolean;
    };
    exitOnClickWrapper: {
        type: BooleanConstructor;
        default: boolean;
    };
    fullscreenClass: {
        type: StringConstructor;
        default: string;
    };
    pageOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    teleport: {
        type: BooleanConstructor;
        default: boolean;
    };
    zIndex: {
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:fullscreen"[], "update:fullscreen", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    fullscreen: {
        type: BooleanConstructor;
        default: boolean;
    };
    exitOnClickWrapper: {
        type: BooleanConstructor;
        default: boolean;
    };
    fullscreenClass: {
        type: StringConstructor;
        default: string;
    };
    pageOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    teleport: {
        type: BooleanConstructor;
        default: boolean;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    "onUpdate:fullscreen"?: ((...args: any[]) => any) | undefined;
}, {
    fullscreen: boolean;
    zIndex: number;
    exitOnClickWrapper: boolean;
    fullscreenClass: string;
    pageOnly: boolean;
    teleport: boolean;
}>;
export default _default;
