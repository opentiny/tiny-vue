declare const _default: import("vue").DefineComponent<{
    hit: BooleanConstructor;
    text: StringConstructor;
    type: StringConstructor;
    size: StringConstructor;
    color: StringConstructor;
    closable: BooleanConstructor;
    effect: {
        type: StringConstructor;
        default: string;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "close")[], "click" | "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    hit: BooleanConstructor;
    text: StringConstructor;
    type: StringConstructor;
    size: StringConstructor;
    color: StringConstructor;
    closable: BooleanConstructor;
    effect: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
}, {
    effect: string;
    closable: boolean;
    hit: boolean;
}>;
export default _default;
