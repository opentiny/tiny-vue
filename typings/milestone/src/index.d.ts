declare const _default: import("vue").DefineComponent<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            DEFAULT_COLOR: string;
            DEFAULT_BACK_COLOR: string;
            BOX_SHADOW_PX: string;
            FLAG_CONTENT_CLS: string;
        };
    };
    showNumber: {
        type: BooleanConstructor;
        default: boolean;
    };
    solid: {
        type: BooleanConstructor;
        default: boolean;
    };
    lineStyle: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    flagBefore: {
        type: BooleanConstructor;
        default: boolean;
    };
    completedField: {
        type: StringConstructor;
        default: string;
    };
    milestonesStatus: {
        type: ObjectConstructor;
        default: () => {};
    };
    statusField: {
        type: StringConstructor;
        default: string;
    };
    nameField: {
        type: StringConstructor;
        default: string;
    };
    flagField: {
        type: StringConstructor;
        default: string;
    };
    flagNameField: {
        type: StringConstructor;
        default: string;
    };
    flagContentField: {
        type: StringConstructor;
        default: string;
    };
    flagStatusField: {
        type: StringConstructor;
        default: string;
    };
    timeField: {
        type: StringConstructor;
        default: string;
    };
    data: (ObjectConstructor | ArrayConstructor)[];
    space: NumberConstructor;
    start: {
        type: NumberConstructor;
        default: number;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "flag-click")[], "click" | "flag-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            DEFAULT_COLOR: string;
            DEFAULT_BACK_COLOR: string;
            BOX_SHADOW_PX: string;
            FLAG_CONTENT_CLS: string;
        };
    };
    showNumber: {
        type: BooleanConstructor;
        default: boolean;
    };
    solid: {
        type: BooleanConstructor;
        default: boolean;
    };
    lineStyle: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    flagBefore: {
        type: BooleanConstructor;
        default: boolean;
    };
    completedField: {
        type: StringConstructor;
        default: string;
    };
    milestonesStatus: {
        type: ObjectConstructor;
        default: () => {};
    };
    statusField: {
        type: StringConstructor;
        default: string;
    };
    nameField: {
        type: StringConstructor;
        default: string;
    };
    flagField: {
        type: StringConstructor;
        default: string;
    };
    flagNameField: {
        type: StringConstructor;
        default: string;
    };
    flagContentField: {
        type: StringConstructor;
        default: string;
    };
    flagStatusField: {
        type: StringConstructor;
        default: string;
    };
    timeField: {
        type: StringConstructor;
        default: string;
    };
    data: (ObjectConstructor | ArrayConstructor)[];
    space: NumberConstructor;
    start: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onFlagclick?: ((...args: any[]) => any) | undefined;
}, {
    _constants: Record<string, any>;
    start: number;
    solid: boolean;
    lineStyle: string | number;
    timeField: string;
    showNumber: boolean;
    flagBefore: boolean;
    completedField: string;
    milestonesStatus: Record<string, any>;
    statusField: string;
    nameField: string;
    flagField: string;
    flagNameField: string;
    flagContentField: string;
    flagStatusField: string;
}>;
export default _default;
