declare const _default: import("vue").DefineComponent<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            NONE: string;
            CONTAIN: string;
            COVER: string;
            FILL: string;
            SCALE_DOWN: string;
            DEFAULT_POPPER_ZINDEX: number;
        };
    };
    fit: StringConstructor;
    lazy: BooleanConstructor;
    previewSrcList: {
        type: ArrayConstructor;
        default: () => never[];
    };
    scrollContainer: {};
    src: StringConstructor;
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("error" | "load")[], "error" | "load", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            NONE: string;
            CONTAIN: string;
            COVER: string;
            FILL: string;
            SCALE_DOWN: string;
            DEFAULT_POPPER_ZINDEX: number;
        };
    };
    fit: StringConstructor;
    lazy: BooleanConstructor;
    previewSrcList: {
        type: ArrayConstructor;
        default: () => never[];
    };
    scrollContainer: {};
    src: StringConstructor;
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    onLoad?: ((...args: any[]) => any) | undefined;
    onError?: ((...args: any[]) => any) | undefined;
}, {
    _constants: Record<string, any>;
    zIndex: number;
    lazy: boolean;
    previewSrcList: unknown[];
}>;
export default _default;
