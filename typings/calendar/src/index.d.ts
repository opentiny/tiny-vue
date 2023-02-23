declare const _default: import("vue").DefineComponent<{
    /**
     * @property {String} [mode='month'] - 显示模式，month|year 可选
     */
    mode: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @property {Number} [year=getFullYear()] - 指定年份，默认今年
     */
    year: {
        type: NumberConstructor;
        default(): number;
    };
    /**
     * @property {Number} [month=getMonth()] - 指定月份，默认当月
     */
    month: {
        type: NumberConstructor;
        default(): number;
    };
    /**
     * @property {Array} events - 事件列表
     * @example
     * [{ time: 1534297845236, title: '消息', content: '这是一条消息', type: 'primary' },
     * { time: 1534297845236, title: '消息', content: '还有', type: 'info' }]
     * type 类型： warning、error、info、success
     */
    events: ArrayConstructor;
    /**
     * @property {Boolean} [showSelected=false] - 显示选中的日期
     */
    showSelected: BooleanConstructor;
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * @property {String} [mode='month'] - 显示模式，month|year 可选
     */
    mode: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @property {Number} [year=getFullYear()] - 指定年份，默认今年
     */
    year: {
        type: NumberConstructor;
        default(): number;
    };
    /**
     * @property {Number} [month=getMonth()] - 指定月份，默认当月
     */
    month: {
        type: NumberConstructor;
        default(): number;
    };
    /**
     * @property {Array} events - 事件列表
     * @example
     * [{ time: 1534297845236, title: '消息', content: '这是一条消息', type: 'primary' },
     * { time: 1534297845236, title: '消息', content: '还有', type: 'info' }]
     * type 类型： warning、error、info、success
     */
    events: ArrayConstructor;
    /**
     * @property {Boolean} [showSelected=false] - 显示选中的日期
     */
    showSelected: BooleanConstructor;
}>>, {
    mode: string;
    year: number;
    month: number;
    showSelected: boolean;
}>;
export default _default;
