declare const _default: import("vue").DefineComponent<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            PROCESS_DONE_CLS: string;
            PROCESS_CUR_CLS: string;
            PROCESS_WAIT_CLS: string;
        };
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    horizontal: {
        type: BooleanConstructor;
        default: boolean;
    };
    showNumber: {
        type: BooleanConstructor;
        default: boolean;
    };
    nameField: {
        type: StringConstructor;
        default: string;
    };
    timeField: {
        type: StringConstructor;
        default: string;
    };
    start: {
        type: NumberConstructor;
        default: number;
    };
    data: ArrayConstructor;
    space: NumberConstructor;
    active: {
        type: NumberConstructor;
        default: number;
    };
    reverse: {
        type: BooleanConstructor;
        default: boolean;
    };
    showStatus: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            PROCESS_DONE_CLS: string;
            PROCESS_CUR_CLS: string;
            PROCESS_WAIT_CLS: string;
        };
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    horizontal: {
        type: BooleanConstructor;
        default: boolean;
    };
    showNumber: {
        type: BooleanConstructor;
        default: boolean;
    };
    nameField: {
        type: StringConstructor;
        default: string;
    };
    timeField: {
        type: StringConstructor;
        default: string;
    };
    start: {
        type: NumberConstructor;
        default: number;
    };
    data: ArrayConstructor;
    space: NumberConstructor;
    active: {
        type: NumberConstructor;
        default: number;
    };
    reverse: {
        type: BooleanConstructor;
        default: boolean;
    };
    showStatus: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    _constants: Record<string, any>;
    reverse: boolean;
    vertical: boolean;
    start: number;
    timeField: string;
    showNumber: boolean;
    nameField: string;
    horizontal: boolean;
    active: number;
    showStatus: boolean;
}>;
export default _default;
