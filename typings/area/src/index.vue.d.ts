declare const _default: import("vue").DefineComponent<{
    modelValue: {};
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    size: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    props: {
        type: ObjectConstructor;
        default: () => {
            label: string;
            value: string;
        };
    };
    fetchJcr: {
        type: FunctionConstructor;
    };
    fetchRegion: {
        type: FunctionConstructor;
    };
    fetchRep: {
        type: FunctionConstructor;
    };
    fetchOffice: {
        type: FunctionConstructor;
    };
    popperClass: StringConstructor;
    popperAppendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    t: any;
    vm: any;
    f: (props: any, attrs?: {}) => {};
    a: (attrs: any, filters: any, include: any) => {};
    d: (props: any) => void;
    dp: (props: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change-region" | "change-rep" | "change-office")[], "change-region" | "change-rep" | "change-office", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {};
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    size: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    props: {
        type: ObjectConstructor;
        default: () => {
            label: string;
            value: string;
        };
    };
    fetchJcr: {
        type: FunctionConstructor;
    };
    fetchRegion: {
        type: FunctionConstructor;
    };
    fetchRep: {
        type: FunctionConstructor;
    };
    fetchOffice: {
        type: FunctionConstructor;
    };
    popperClass: StringConstructor;
    popperAppendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onChange-region"?: ((...args: any[]) => any) | undefined;
    "onChange-rep"?: ((...args: any[]) => any) | undefined;
    "onChange-office"?: ((...args: any[]) => any) | undefined;
}, {
    props: Record<string, any>;
    placeholder: string;
    disabled: boolean;
    popperAppendToBody: boolean;
}>;
export default _default;
