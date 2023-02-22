declare const _default: import("vue").DefineComponent<{
    /**
     * @property {number} [span=12] - 栅格占据的列数（一行以12栅格划分）
     */
    span: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @property {number} [offset=0] - 栅格左侧的间隔格数
     */
    offset: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @property {no} [no=0] - 排序编号
     */
    no: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @property {number} [move=0] - 栅格向左向右移动格数
     */
    move: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @property {(number|object)} xs - <768px 响应式栅格数或者栅格属性对象
     */
    xs: {
        type: (ObjectConstructor | NumberConstructor)[];
    };
    /**
     * @property {(number|object)} sm - ≥768px 响应式栅格数或者栅格属性对象
     */
    sm: {
        type: (ObjectConstructor | NumberConstructor)[];
    };
    /**
     * @property {(number|object)} md - ≥992px 响应式栅格数或者栅格属性对象
     */
    md: {
        type: (ObjectConstructor | NumberConstructor)[];
    };
    /**
     * @property {(number|object)} lg - ≥1200px 响应式栅格数或者栅格属性对象
     */
    lg: {
        type: (ObjectConstructor | NumberConstructor)[];
    };
    /**
     * @property {(number|object)} xl - ≥1920px 响应式栅格数或者栅格属性对象
     */
    xl: {
        type: (ObjectConstructor | NumberConstructor)[];
    };
    /**
     * @property {string} [tag=div] - 自定义元素标签
     */
    tag: {
        type: StringConstructor;
        default: string;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * @property {number} [span=12] - 栅格占据的列数（一行以12栅格划分）
     */
    span: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @property {number} [offset=0] - 栅格左侧的间隔格数
     */
    offset: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @property {no} [no=0] - 排序编号
     */
    no: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @property {number} [move=0] - 栅格向左向右移动格数
     */
    move: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @property {(number|object)} xs - <768px 响应式栅格数或者栅格属性对象
     */
    xs: {
        type: (ObjectConstructor | NumberConstructor)[];
    };
    /**
     * @property {(number|object)} sm - ≥768px 响应式栅格数或者栅格属性对象
     */
    sm: {
        type: (ObjectConstructor | NumberConstructor)[];
    };
    /**
     * @property {(number|object)} md - ≥992px 响应式栅格数或者栅格属性对象
     */
    md: {
        type: (ObjectConstructor | NumberConstructor)[];
    };
    /**
     * @property {(number|object)} lg - ≥1200px 响应式栅格数或者栅格属性对象
     */
    lg: {
        type: (ObjectConstructor | NumberConstructor)[];
    };
    /**
     * @property {(number|object)} xl - ≥1920px 响应式栅格数或者栅格属性对象
     */
    xl: {
        type: (ObjectConstructor | NumberConstructor)[];
    };
    /**
     * @property {string} [tag=div] - 自定义元素标签
     */
    tag: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    span: number;
    offset: number;
    tag: string;
    no: number;
    move: number;
}>;
export default _default;
