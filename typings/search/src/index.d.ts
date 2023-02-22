declare const _default: import("vue").DefineComponent<{
    mini: {
        type: BooleanConstructor;
        default: boolean;
    };
    buttonText: {
        type: StringConstructor;
        default: () => any;
    };
    /**
     * 设置为透明模式，配置为true时，边框变为透明且收缩后半透明显示，一般用在带有背景的场景
     */
    transparent: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 搜索的类型选项，格式为[{text:'文档',value:1},...]，不配置时类型选择固定显示为All
     */
    searchTypes: {
        type: ArrayConstructor;
        default: () => never[];
    };
    /**
     * 设置搜索输入框内的提示占位文本
     */
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    modelValue: StringConstructor;
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    tabindex: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 配置搜索输入框enter键,enter按下触发搜索
     */
    isEnterSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "change" | "search")[], "select" | "search" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    mini: {
        type: BooleanConstructor;
        default: boolean;
    };
    buttonText: {
        type: StringConstructor;
        default: () => any;
    };
    /**
     * 设置为透明模式，配置为true时，边框变为透明且收缩后半透明显示，一般用在带有背景的场景
     */
    transparent: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 搜索的类型选项，格式为[{text:'文档',value:1},...]，不配置时类型选择固定显示为All
     */
    searchTypes: {
        type: ArrayConstructor;
        default: () => never[];
    };
    /**
     * 设置搜索输入框内的提示占位文本
     */
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    modelValue: StringConstructor;
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    tabindex: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 配置搜索输入框enter键,enter按下触发搜索
     */
    isEnterSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onSelect?: ((...args: any[]) => any) | undefined;
    onSearch?: ((...args: any[]) => any) | undefined;
}, {
    tabindex: string;
    placeholder: string;
    clearable: boolean;
    mini: boolean;
    transparent: boolean;
    buttonText: string;
    searchTypes: unknown[];
    isEnterSearch: boolean;
}>;
export default _default;
