declare const _default: import("vue").DefineComponent<{
    showName: {
        type: BooleanConstructor;
        default: boolean;
    };
    showArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 是否显示 userDescription, colType 为 false 时生效
     */
    showDescription: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 是否显示 头像
     */
    showImg: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 数据
     */
    data: {
        type: ObjectConstructor;
    };
    popperClass: StringConstructor;
    popperAppendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    isNewImMode: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    showName: {
        type: BooleanConstructor;
        default: boolean;
    };
    showArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 是否显示 userDescription, colType 为 false 时生效
     */
    showDescription: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 是否显示 头像
     */
    showImg: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 数据
     */
    data: {
        type: ObjectConstructor;
    };
    popperClass: StringConstructor;
    popperAppendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    isNewImMode: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    popperAppendToBody: boolean;
    isNewImMode: boolean;
    showArrow: boolean;
    showName: boolean;
    showDescription: boolean;
    showImg: boolean;
}>;
export default _default;
