declare const _default: import("vue").DefineComponent<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            KB: string;
            FILE_NAME: string;
            FILE_SIZE: string;
            FILE_STATUS: string;
            DIALOG_TITLE: string;
            UPLOAD_ERROR: string;
            ERROR_NUM_TIPS: string;
            UPLOAD_SUCCESS: string;
            TIPS_TITLE_TEXT: string;
            ERROR_TYPE_TIPS: string;
            ERROR_SIZE_TIPS: string;
            SAVE_BUTTON_TEXT: string;
            UPLOAD_BUTTON_TEXT: string;
            CANCEL_BUTTTON_TEXT: string;
            UPLOADS_BUTTON_TEXT: string;
            LIMIT_UPLOAD_FILE_TYPE: string;
            LIMIT_UPLOAD_FILE_SIZE: string;
            LIMIT_UPLOAD_FILE_NUMBER: string;
        };
    };
    size: StringConstructor;
    data: ObjectConstructor;
    uploadName: StringConstructor;
    dialogTitle: {
        type: StringConstructor;
        default: string;
    };
    action: {
        type: StringConstructor;
        default: string;
    };
    uploadButtonText: {
        type: StringConstructor;
        default: string;
    };
    headers: {
        type: ObjectConstructor;
        default: () => {};
    };
    withCredentials: {
        type: BooleanConstructor;
        default: boolean;
    };
    limit: NumberConstructor;
    multiple: BooleanConstructor;
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    filters: {
        type: ObjectConstructor;
        default: () => {};
    };
    accept: StringConstructor;
    submitButtonText: {
        typee: StringConstructor;
        default: string;
    };
    cancelButtonText: {
        typee: StringConstructor;
        default: string;
    };
    uploadFileType: ArrayConstructor;
    beforeUpload: FunctionConstructor;
    beforeRemove: FunctionConstructor;
    maxUploadFileSize: NumberConstructor;
    httpRequest: FunctionConstructor;
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            KB: string;
            FILE_NAME: string;
            FILE_SIZE: string;
            FILE_STATUS: string;
            DIALOG_TITLE: string;
            UPLOAD_ERROR: string;
            ERROR_NUM_TIPS: string;
            UPLOAD_SUCCESS: string;
            TIPS_TITLE_TEXT: string;
            ERROR_TYPE_TIPS: string;
            ERROR_SIZE_TIPS: string;
            SAVE_BUTTON_TEXT: string;
            UPLOAD_BUTTON_TEXT: string;
            CANCEL_BUTTTON_TEXT: string;
            UPLOADS_BUTTON_TEXT: string;
            LIMIT_UPLOAD_FILE_TYPE: string;
            LIMIT_UPLOAD_FILE_SIZE: string;
            LIMIT_UPLOAD_FILE_NUMBER: string;
        };
    };
    size: StringConstructor;
    data: ObjectConstructor;
    uploadName: StringConstructor;
    dialogTitle: {
        type: StringConstructor;
        default: string;
    };
    action: {
        type: StringConstructor;
        default: string;
    };
    uploadButtonText: {
        type: StringConstructor;
        default: string;
    };
    headers: {
        type: ObjectConstructor;
        default: () => {};
    };
    withCredentials: {
        type: BooleanConstructor;
        default: boolean;
    };
    limit: NumberConstructor;
    multiple: BooleanConstructor;
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    filters: {
        type: ObjectConstructor;
        default: () => {};
    };
    accept: StringConstructor;
    submitButtonText: {
        typee: StringConstructor;
        default: string;
    };
    cancelButtonText: {
        typee: StringConstructor;
        default: string;
    };
    uploadFileType: ArrayConstructor;
    beforeUpload: FunctionConstructor;
    beforeRemove: FunctionConstructor;
    maxUploadFileSize: NumberConstructor;
    httpRequest: FunctionConstructor;
}>>, {
    _constants: Record<string, any>;
    action: string;
    disabled: boolean;
    multiple: boolean;
    dialogTitle: string;
    headers: Record<string, any>;
    withCredentials: boolean;
    cancelButtonText: string;
    filters: Record<string, any>;
    uploadButtonText: string;
    submitButtonText: string;
}>;
export default _default;
