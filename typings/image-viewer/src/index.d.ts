declare const _default: import("vue").DefineComponent<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            MODE: {
                CONTAIN: {
                    name: string;
                    icon: string;
                };
                ORIGINAL: {
                    name: string;
                    icon: string;
                };
            };
            DEFAULT_POPPER_ZINDEX: number;
        };
    };
    urlList: {
        type: ArrayConstructor;
        default: () => never[];
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    previewVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    arrowShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    toolShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    showIndex: {
        type: BooleanConstructor;
        default: boolean;
    };
    imageFullCurrent: {
        type: BooleanConstructor;
        default: boolean;
    };
    startPosition: {
        type: NumberConstructor;
        default: number;
    };
    asyncClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    deleteButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    onSwitch: {
        type: FunctionConstructor;
        default: () => void;
    };
    onClose: {
        type: FunctionConstructor;
        default: () => void;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            MODE: {
                CONTAIN: {
                    name: string;
                    icon: string;
                };
                ORIGINAL: {
                    name: string;
                    icon: string;
                };
            };
            DEFAULT_POPPER_ZINDEX: number;
        };
    };
    urlList: {
        type: ArrayConstructor;
        default: () => never[];
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    previewVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    arrowShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    toolShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    showIndex: {
        type: BooleanConstructor;
        default: boolean;
    };
    imageFullCurrent: {
        type: BooleanConstructor;
        default: boolean;
    };
    startPosition: {
        type: NumberConstructor;
        default: number;
    };
    asyncClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    deleteButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    onSwitch: {
        type: FunctionConstructor;
        default: () => void;
    };
    onClose: {
        type: FunctionConstructor;
        default: () => void;
    };
}>>, {
    _constants: Record<string, any>;
    onClose: Function;
    zIndex: number;
    urlList: unknown[];
    onSwitch: Function;
    previewVisible: boolean;
    closeShow: boolean;
    arrowShow: boolean;
    toolShow: boolean;
    showIndex: boolean;
    imageFullCurrent: boolean;
    startPosition: number;
    asyncClose: boolean;
    deleteButton: boolean;
}>;
export default _default;
