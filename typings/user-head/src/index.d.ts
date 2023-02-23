declare const _default: import("vue").DefineComponent<{
    /**
     * @property {Boolean} [min=false] - 小尺寸模式
     */
    min: BooleanConstructor;
    /**
     * @property {Boolean} [round=true] - 圆形模式
     */
    round: BooleanConstructor;
    /**
     * @property {String} [color=#ffffff] - 文字颜色
     */
    color: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @property {String} [backgroundColor=#BBBBBB] - 背景色
     */
    backgroundColor: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @property {String} [type=label] - 头像类型，icon|image|label 可选
     */
    type: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @property {String} - 头像资源
     * type=icon 时为图标类名，type=label时为字体串，type=image时为资源路径
     */
    value: {
        type: (ObjectConstructor | StringConstructor)[];
        default: null;
    };
    /**
     * @property {Number} - 消息计数
     */
    messageTotal: NumberConstructor;
    /**
     * @property {String} [messageType=details] - 消息类型 details|basic 可选
     */
    messageType: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @property {Number} [messageUpperLimit=0] - 消息显示上限
     */
    messageUpperLimit: {
        type: NumberConstructor;
        default: number;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * @property {Boolean} [min=false] - 小尺寸模式
     */
    min: BooleanConstructor;
    /**
     * @property {Boolean} [round=true] - 圆形模式
     */
    round: BooleanConstructor;
    /**
     * @property {String} [color=#ffffff] - 文字颜色
     */
    color: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @property {String} [backgroundColor=#BBBBBB] - 背景色
     */
    backgroundColor: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @property {String} [type=label] - 头像类型，icon|image|label 可选
     */
    type: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @property {String} - 头像资源
     * type=icon 时为图标类名，type=label时为字体串，type=image时为资源路径
     */
    value: {
        type: (ObjectConstructor | StringConstructor)[];
        default: null;
    };
    /**
     * @property {Number} - 消息计数
     */
    messageTotal: NumberConstructor;
    /**
     * @property {String} [messageType=details] - 消息类型 details|basic 可选
     */
    messageType: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @property {Number} [messageUpperLimit=0] - 消息显示上限
     */
    messageUpperLimit: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    value: string | Record<string, any>;
    type: string;
    round: boolean;
    backgroundColor: string;
    min: boolean;
    color: string;
    messageType: string;
    messageUpperLimit: number;
}>;
export default _default;
