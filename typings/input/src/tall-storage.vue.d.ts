import '@opentiny/vue-theme/tall-storage/index.css';
declare const _default: import("vue").DefineComponent<{
    isMemoryStorage: BooleanConstructor;
    localstorageData: ArrayConstructor;
}, {
    t: any;
    vm: any;
    f: (props: any, attrs?: {}) => {};
    a: (attrs: any, filters: any, include: any) => {};
    d: (props: any) => void;
    dp: (props: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("input" | "change" | "clear" | "focus" | "blur")[], "input" | "change" | "clear" | "focus" | "blur", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    isMemoryStorage: BooleanConstructor;
    localstorageData: ArrayConstructor;
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onClear?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
}, {
    isMemoryStorage: boolean;
}>;
export default _default;
