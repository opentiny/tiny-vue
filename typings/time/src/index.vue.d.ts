declare const _default: import("vue").DefineComponent<{
    show: BooleanConstructor;
    timeArrowControl: BooleanConstructor;
    emitter: ObjectConstructor;
    value: DateConstructor;
}, {
    t: any;
    vm: any;
    f: (props: any, attrs?: {}) => {};
    a: (attrs: any, filters: any, include: any) => {};
    d: (props: any) => void;
    dp: (props: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("pick" | "dodestroy" | "select-range")[], "pick" | "dodestroy" | "select-range", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    show: BooleanConstructor;
    timeArrowControl: BooleanConstructor;
    emitter: ObjectConstructor;
    value: DateConstructor;
}>> & {
    onPick?: ((...args: any[]) => any) | undefined;
    onDodestroy?: ((...args: any[]) => any) | undefined;
    "onSelect-range"?: ((...args: any[]) => any) | undefined;
}, {
    show: boolean;
    timeArrowControl: boolean;
}>;
export default _default;
