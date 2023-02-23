declare const _default: import("vue").DefineComponent<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            ICON_MAP: {
                success: string;
                error: string;
                info: string;
                warning: string;
            };
            TITLE_MAP: {
                success: string;
                error: string;
                info: string;
                warning: string;
            };
        };
    };
    icon: (ObjectConstructor | StringConstructor)[];
    type: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    description: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
    };
    center: BooleanConstructor;
    showIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeText: {
        type: StringConstructor;
        default: string;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            ICON_MAP: {
                success: string;
                error: string;
                info: string;
                warning: string;
            };
            TITLE_MAP: {
                success: string;
                error: string;
                info: string;
                warning: string;
            };
        };
    };
    icon: (ObjectConstructor | StringConstructor)[];
    type: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    description: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
    };
    center: BooleanConstructor;
    showIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeText: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
}, {
    _constants: Record<string, any>;
    center: boolean;
    type: string;
    size: string;
    description: string;
    closable: boolean;
    showIcon: boolean;
    closeText: string;
}>;
export default _default;
