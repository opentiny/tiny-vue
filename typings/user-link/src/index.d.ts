declare const _default: import("vue").DefineComponent<{
    modelValue: StringConstructor;
    cache: {
        type: BooleanConstructor;
        default: boolean;
    };
    cacheKey: {
        type: StringConstructor;
        default: string;
    };
    cacheFields: {
        type: ArrayConstructor;
        default: () => never[];
    };
    valueSplit: {
        type: StringConstructor;
        default: () => string;
    };
    textSplit: {
        type: StringConstructor;
        default: () => string;
    };
    valueField: {
        type: StringConstructor;
        default: () => string;
    };
    textField: {
        type: StringConstructor;
        default: () => string;
    };
    card: {
        type: BooleanConstructor;
        default: boolean;
    };
    fetchUser: FunctionConstructor;
    fetchW3Accounts: FunctionConstructor;
    getUserImageUrl: FunctionConstructor;
    fetchUserByUserId: FunctionConstructor;
    UserCache: ObjectConstructor;
    batch: {
        type: (BooleanConstructor | NumberConstructor)[];
        default: number;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: StringConstructor;
    cache: {
        type: BooleanConstructor;
        default: boolean;
    };
    cacheKey: {
        type: StringConstructor;
        default: string;
    };
    cacheFields: {
        type: ArrayConstructor;
        default: () => never[];
    };
    valueSplit: {
        type: StringConstructor;
        default: () => string;
    };
    textSplit: {
        type: StringConstructor;
        default: () => string;
    };
    valueField: {
        type: StringConstructor;
        default: () => string;
    };
    textField: {
        type: StringConstructor;
        default: () => string;
    };
    card: {
        type: BooleanConstructor;
        default: boolean;
    };
    fetchUser: FunctionConstructor;
    fetchW3Accounts: FunctionConstructor;
    getUserImageUrl: FunctionConstructor;
    fetchUserByUserId: FunctionConstructor;
    UserCache: ObjectConstructor;
    batch: {
        type: (BooleanConstructor | NumberConstructor)[];
        default: number;
    };
}>>, {
    valueField: string;
    textField: string;
    card: boolean;
    textSplit: string;
    valueSplit: string;
    cache: boolean;
    cacheFields: unknown[];
    cacheKey: string;
    batch: number | boolean;
}>;
export default _default;
