declare const _default: import("vue").DefineComponent<{
    accept: StringConstructor;
    action: {
        type: StringConstructor;
        default: string;
    };
    autoUpload: BooleanConstructor;
    beforeUpload: FunctionConstructor;
    data: ObjectConstructor;
    disabled: BooleanConstructor;
    drag: BooleanConstructor;
    edmToken: {
        type: ObjectConstructor;
        default: () => {};
    };
    fileList: ArrayConstructor;
    headers: ObjectConstructor;
    httpRequest: {
        type: FunctionConstructor;
        default: any;
    };
    isFolder: {
        type: BooleanConstructor;
        default: boolean;
    };
    limit: NumberConstructor;
    listType: StringConstructor;
    multiple: BooleanConstructor;
    name: {
        type: StringConstructor;
        default: string;
    };
    onError: FunctionConstructor;
    onExceed: FunctionConstructor;
    onPreview: {
        type: FunctionConstructor;
        default: () => void;
    };
    onProgress: FunctionConstructor;
    onRemove: {
        type: FunctionConstructor;
        default: () => void;
    };
    onStart: FunctionConstructor;
    onSuccess: FunctionConstructor;
    size: StringConstructor;
    type: StringConstructor;
    withCredentials: BooleanConstructor;
}, {
    t: any;
    vm: any;
    f: (props: any, attrs?: {}) => {};
    a: (attrs: any, filters: any, include: any) => {};
    d: (props: any) => void;
    dp: (props: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    accept: StringConstructor;
    action: {
        type: StringConstructor;
        default: string;
    };
    autoUpload: BooleanConstructor;
    beforeUpload: FunctionConstructor;
    data: ObjectConstructor;
    disabled: BooleanConstructor;
    drag: BooleanConstructor;
    edmToken: {
        type: ObjectConstructor;
        default: () => {};
    };
    fileList: ArrayConstructor;
    headers: ObjectConstructor;
    httpRequest: {
        type: FunctionConstructor;
        default: any;
    };
    isFolder: {
        type: BooleanConstructor;
        default: boolean;
    };
    limit: NumberConstructor;
    listType: StringConstructor;
    multiple: BooleanConstructor;
    name: {
        type: StringConstructor;
        default: string;
    };
    onError: FunctionConstructor;
    onExceed: FunctionConstructor;
    onPreview: {
        type: FunctionConstructor;
        default: () => void;
    };
    onProgress: FunctionConstructor;
    onRemove: {
        type: FunctionConstructor;
        default: () => void;
    };
    onStart: FunctionConstructor;
    onSuccess: FunctionConstructor;
    size: StringConstructor;
    type: StringConstructor;
    withCredentials: BooleanConstructor;
}>>, {
    name: string;
    action: string;
    disabled: boolean;
    multiple: boolean;
    drag: boolean;
    withCredentials: boolean;
    autoUpload: boolean;
    httpRequest: Function;
    edmToken: Record<string, any>;
    isFolder: boolean;
    onRemove: Function;
    onPreview: Function;
}>;
export default _default;
