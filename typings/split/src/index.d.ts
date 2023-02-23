declare const _default: import("vue").DefineComponent<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            PREFIX: string;
            HORIZONTAL: string;
            VERTICAL: string;
        };
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    mode: {
        validator(value: unknown): boolean;
        default: string;
    };
    leftTopMin: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    rightBottomMin: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("moving" | "moveend" | "movestart")[], "moving" | "moveend" | "movestart", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            PREFIX: string;
            HORIZONTAL: string;
            VERTICAL: string;
        };
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    mode: {
        validator(value: unknown): boolean;
        default: string;
    };
    leftTopMin: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    rightBottomMin: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
}>> & {
    onMoving?: ((...args: any[]) => any) | undefined;
    onMoveend?: ((...args: any[]) => any) | undefined;
    onMovestart?: ((...args: any[]) => any) | undefined;
}, {
    _constants: Record<string, any>;
    modelValue: string | number;
    mode: string;
    leftTopMin: string | number;
    rightBottomMin: string | number;
}>;
export default _default;
