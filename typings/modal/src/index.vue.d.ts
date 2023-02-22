declare const _default: import("vue").DefineComponent<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            MODAL_STATUS: {
                INFO: string;
                SUCCESS: string;
                WARNING: string;
                ERROR: string;
                LOADING: string;
            };
            NODAL_TYPE: {
                ALERT: string;
                CONFIRM: string;
                MESSAGE: string;
            };
            STATUS_MAPPING_CLASSS: {
                INFO: string;
                SUCCESS: string;
                WARNING: string;
                ERROR: string;
                LOADING: string;
            };
        };
    };
    animat: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    beforeClose: FunctionConstructor;
    duration: {
        type: (StringConstructor | NumberConstructor)[];
        default: () => number;
    };
    escClosable: BooleanConstructor;
    events: ObjectConstructor;
    fullscreen: BooleanConstructor;
    height: (StringConstructor | NumberConstructor)[];
    id: StringConstructor;
    isFormReset: {
        type: BooleanConstructor;
        default: boolean;
    };
    lockScroll: BooleanConstructor;
    lockView: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    marginSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    mask: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    maskClosable: BooleanConstructor;
    message: (StringConstructor | FunctionConstructor)[];
    minHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: () => number;
    };
    minWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: () => number;
    };
    modelValue: BooleanConstructor;
    resize: BooleanConstructor;
    showFooter: BooleanConstructor;
    showHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    status: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    title: StringConstructor;
    top: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    vSize: StringConstructor;
    width: (StringConstructor | NumberConstructor)[];
    zIndex: (StringConstructor | NumberConstructor)[];
}, {
    t: any;
    vm: any;
    f: (props: any, attrs?: {}) => {};
    a: (attrs: any, filters: any, include: any) => {};
    d: (props: any) => void;
    dp: (props: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "confirm" | "cancel" | "show" | "hide" | "zoom")[], "close" | "confirm" | "cancel" | "hide" | "show" | "zoom", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            MODAL_STATUS: {
                INFO: string;
                SUCCESS: string;
                WARNING: string;
                ERROR: string;
                LOADING: string;
            };
            NODAL_TYPE: {
                ALERT: string;
                CONFIRM: string;
                MESSAGE: string;
            };
            STATUS_MAPPING_CLASSS: {
                INFO: string;
                SUCCESS: string;
                WARNING: string;
                ERROR: string;
                LOADING: string;
            };
        };
    };
    animat: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    beforeClose: FunctionConstructor;
    duration: {
        type: (StringConstructor | NumberConstructor)[];
        default: () => number;
    };
    escClosable: BooleanConstructor;
    events: ObjectConstructor;
    fullscreen: BooleanConstructor;
    height: (StringConstructor | NumberConstructor)[];
    id: StringConstructor;
    isFormReset: {
        type: BooleanConstructor;
        default: boolean;
    };
    lockScroll: BooleanConstructor;
    lockView: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    marginSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    mask: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    maskClosable: BooleanConstructor;
    message: (StringConstructor | FunctionConstructor)[];
    minHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: () => number;
    };
    minWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: () => number;
    };
    modelValue: BooleanConstructor;
    resize: BooleanConstructor;
    showFooter: BooleanConstructor;
    showHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    status: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    title: StringConstructor;
    top: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    vSize: StringConstructor;
    width: (StringConstructor | NumberConstructor)[];
    zIndex: (StringConstructor | NumberConstructor)[];
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
    onCancel?: ((...args: any[]) => any) | undefined;
    onShow?: ((...args: any[]) => any) | undefined;
    onHide?: ((...args: any[]) => any) | undefined;
    onZoom?: ((...args: any[]) => any) | undefined;
}, {
    _constants: Record<string, any>;
    type: string;
    mask: boolean;
    modelValue: boolean;
    duration: string | number;
    top: string | number;
    showHeader: boolean;
    resize: boolean;
    isFormReset: boolean;
    lockScroll: boolean;
    fullscreen: boolean;
    status: string | Record<string, any>;
    animat: boolean;
    escClosable: boolean;
    lockView: boolean;
    marginSize: string | number;
    maskClosable: boolean;
    minHeight: string | number;
    minWidth: string | number;
    showFooter: boolean;
}>;
export default _default;
