declare const _default: import("vue").DefineComponent<{
    nameField: {
        type: StringConstructor;
        default: string;
    };
    countField: {
        type: StringConstructor;
        default: string;
    };
    statusField: {
        type: StringConstructor;
        default: string;
    };
    data: (ObjectConstructor | ArrayConstructor)[];
    space: NumberConstructor;
    active: {
        type: NumberConstructor;
        default: number;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    nameField: {
        type: StringConstructor;
        default: string;
    };
    countField: {
        type: StringConstructor;
        default: string;
    };
    statusField: {
        type: StringConstructor;
        default: string;
    };
    data: (ObjectConstructor | ArrayConstructor)[];
    space: NumberConstructor;
    active: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    statusField: string;
    nameField: string;
    countField: string;
    active: number;
}>;
export default _default;
