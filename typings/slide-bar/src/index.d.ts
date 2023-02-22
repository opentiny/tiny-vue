declare const _default: import("vue").DefineComponent<{
    initBlocks: NumberConstructor;
    wheelBlocks: {
        type: NumberConstructor;
        default: number;
    };
    modelValue: ArrayConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    subTag: {
        type: StringConstructor;
        default: string;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "before-click")[], "click" | "before-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    initBlocks: NumberConstructor;
    wheelBlocks: {
        type: NumberConstructor;
        default: number;
    };
    modelValue: ArrayConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    subTag: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    "onBefore-click"?: ((...args: any[]) => any) | undefined;
}, {
    tag: string;
    wheelBlocks: number;
    subTag: string;
}>;
export default _default;
