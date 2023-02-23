declare const _default: import("vue").DefineComponent<{
    size: StringConstructor;
    /**
     * @property {String} value - 显示值
     */
    modelValue: StringConstructor;
    /**
     * @property {String} [type = IPv4]  - IP地址输入组件类型（'IPv4', 'IPv6',）可选择
     */
    type: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @property {Boolean} readonly - 只读
     */
    readonly: BooleanConstructor;
    /**
     *  @property {Boolean} disabled - 禁用
     */
    disabled: BooleanConstructor;
    /**
     * @property {String, Object} [delimiter = .] - 组件IP段显示的分隔符改为图标
     */
    delimiter: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("input" | "select" | "change" | "focus" | "blur")[], "input" | "select" | "change" | "focus" | "blur", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: StringConstructor;
    /**
     * @property {String} value - 显示值
     */
    modelValue: StringConstructor;
    /**
     * @property {String} [type = IPv4]  - IP地址输入组件类型（'IPv4', 'IPv6',）可选择
     */
    type: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @property {Boolean} readonly - 只读
     */
    readonly: BooleanConstructor;
    /**
     *  @property {Boolean} disabled - 禁用
     */
    disabled: BooleanConstructor;
    /**
     * @property {String, Object} [delimiter = .] - 组件IP段显示的分隔符改为图标
     */
    delimiter: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
}>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
    onSelect?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
    readonly: boolean;
    disabled: boolean;
    delimiter: string | Record<string, any>;
}>;
export default _default;
