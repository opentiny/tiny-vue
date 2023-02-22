declare const _default: import("vue").DefineComponent<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            PROGRESS_TYPE: {
                LINE: string;
                CIRCLE: string;
                DASHBOARD: string;
            };
            PROGRESS_STATUS: {
                SUCCESS: string;
                EXCEPTION: string;
                WARNING: string;
            };
            STATUS_TO_COLOR: {
                success: string;
                exception: string;
                warning: string;
            };
            STATUS_DEFAULT_COLOR: string;
            ICON_CIRCLE_WARNING: string;
            ICON_CIRCLE_SUCCESS: string;
            ICON_CIRCLE_EXCEPTION: string;
            ICON_SUCCESS: string;
            ICON_EXCEPTION: string;
            ICON_WARNING: string;
        };
    };
    color: {
        type: (ArrayConstructor | StringConstructor | FunctionConstructor)[];
        default: string;
    };
    format: FunctionConstructor;
    percentage: {
        type: NumberConstructor;
        default: number;
        required: true;
    };
    showText: {
        type: BooleanConstructor;
        default: boolean;
    };
    status: {
        type: StringConstructor;
    };
    strokeWidth: {
        type: NumberConstructor;
        default: number;
    };
    textInside: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            PROGRESS_TYPE: {
                LINE: string;
                CIRCLE: string;
                DASHBOARD: string;
            };
            PROGRESS_STATUS: {
                SUCCESS: string;
                EXCEPTION: string;
                WARNING: string;
            };
            STATUS_TO_COLOR: {
                success: string;
                exception: string;
                warning: string;
            };
            STATUS_DEFAULT_COLOR: string;
            ICON_CIRCLE_WARNING: string;
            ICON_CIRCLE_SUCCESS: string;
            ICON_CIRCLE_EXCEPTION: string;
            ICON_SUCCESS: string;
            ICON_EXCEPTION: string;
            ICON_WARNING: string;
        };
    };
    color: {
        type: (ArrayConstructor | StringConstructor | FunctionConstructor)[];
        default: string;
    };
    format: FunctionConstructor;
    percentage: {
        type: NumberConstructor;
        default: number;
        required: true;
    };
    showText: {
        type: BooleanConstructor;
        default: boolean;
    };
    status: {
        type: StringConstructor;
    };
    strokeWidth: {
        type: NumberConstructor;
        default: number;
    };
    textInside: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    _constants: Record<string, any>;
    type: string;
    width: number;
    color: string | Function | unknown[];
    percentage: number;
    strokeWidth: number;
    textInside: boolean;
    showText: boolean;
}>;
export default _default;
