declare const _default: import("vue").DefineComponent<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            UPLOAD_INNER: string;
            FILE_STATUS: {
                READY: string;
                SUCESS: string;
                UPLOADING: string;
                FAIL: string;
                DOWNLOADING: string;
            };
            LIST_TYPE: {
                TEXT: string;
                PICTURE_CARD: string;
                PICTURE: string;
                THUMB: string;
            };
            EDM: {
                CHUNKINIT: string;
                FILESIZE: string;
                CHUNKS: string;
                FILENAME: string;
                ISCHECKCODE: string;
                CHECKCODE: string;
                MULTIPART: string;
                DOCID: string;
                CHUNK: string;
                SINGLEUPLOAD: string;
                LOWERNAME: string;
                FOLDERKEY: string;
                FORMAT: string;
                WATER: string;
                SOURCE: string;
                URLCONTS: string;
                EDMTOKEN: string;
                TRACEID: string;
                TEXT: string;
                JSLIB: string;
                I18NKEY: string;
                LARGEFILEKEY: string;
                EXCEED: string;
                SIZE: string;
                SIZE_2G: number;
                SIZE_20M: number;
                SIZE_8M: number;
                FILEEMPTY: string;
                KIASCANTIP: string;
                FILENAMEEXCEEDS: string;
                THEFILENAME: string;
            };
        };
    };
    accept: StringConstructor;
    action: StringConstructor;
    autoUpload: {
        type: BooleanConstructor;
        default: () => true;
    };
    beforeRemove: FunctionConstructor;
    beforeUpload: FunctionConstructor;
    data: ObjectConstructor;
    disabled: BooleanConstructor;
    display: {
        type: BooleanConstructor;
        default: () => true;
    };
    drag: BooleanConstructor;
    dragger: BooleanConstructor;
    edm: {
        type: ObjectConstructor;
        default: () => {};
    };
    fileIconList: {
        type: ArrayConstructor;
        default: () => never[];
    };
    fileList: {
        type: ArrayConstructor;
        default: () => never[];
    };
    fileSize: {
        type: (ArrayConstructor | NumberConstructor)[];
        validator(value: unknown): boolean;
    };
    fileTitle: {
        type: StringConstructor;
        default: () => "附件";
    };
    headerShow: {
        type: BooleanConstructor;
        default: () => true;
    };
    headers: {
        type: ObjectConstructor;
        default: () => {};
    };
    httpRequest: FunctionConstructor;
    limit: NumberConstructor;
    listType: {
        type: StringConstructor;
        default: () => "text";
    };
    mergeService: {
        type: BooleanConstructor;
        default: () => false;
    };
    multiple: BooleanConstructor;
    name: {
        type: StringConstructor;
        default: () => "file";
    };
    openDownloadFile: {
        type: BooleanConstructor;
        default: () => false;
    };
    showFileList: {
        type: BooleanConstructor;
        default: () => true;
    };
    size: StringConstructor;
    successStatistics: {
        type: BooleanConstructor;
        default: () => true;
    };
    thumbOption: {
        type: ObjectConstructor;
        default: () => {
            popperClass: string;
            width: number;
            showDownload: boolean;
            downloadFile: FunctionConstructor;
            showDel: boolean;
            icon: string;
            showTooltip: boolean;
        };
    };
    type: {
        type: StringConstructor;
        default: () => "select";
    };
    uploadIcon: {
        type: BooleanConstructor;
        default: () => true;
    };
    withCredentials: {
        type: BooleanConstructor;
        default: () => true;
    };
    isFolderTitle: {
        type: BooleanConstructor;
        default: boolean;
    };
    plugin: {
        type: (ObjectConstructor | FunctionConstructor)[];
        default: () => any;
    };
    listOption: {
        type: ObjectConstructor;
        default: () => {
            showUpdate: boolean;
            showDel: boolean;
        };
    };
    maxNameLength: {
        type: NumberConstructor;
        default: number;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("progress" | "change" | "drop-error" | "preview" | "remove" | "error" | "exceed" | "success")[], "progress" | "change" | "error" | "preview" | "exceed" | "drop-error" | "remove" | "success", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            UPLOAD_INNER: string;
            FILE_STATUS: {
                READY: string;
                SUCESS: string;
                UPLOADING: string;
                FAIL: string;
                DOWNLOADING: string;
            };
            LIST_TYPE: {
                TEXT: string;
                PICTURE_CARD: string;
                PICTURE: string;
                THUMB: string;
            };
            EDM: {
                CHUNKINIT: string;
                FILESIZE: string;
                CHUNKS: string;
                FILENAME: string;
                ISCHECKCODE: string;
                CHECKCODE: string;
                MULTIPART: string;
                DOCID: string;
                CHUNK: string;
                SINGLEUPLOAD: string;
                LOWERNAME: string;
                FOLDERKEY: string;
                FORMAT: string;
                WATER: string;
                SOURCE: string;
                URLCONTS: string;
                EDMTOKEN: string;
                TRACEID: string;
                TEXT: string;
                JSLIB: string;
                I18NKEY: string;
                LARGEFILEKEY: string;
                EXCEED: string;
                SIZE: string;
                SIZE_2G: number;
                SIZE_20M: number;
                SIZE_8M: number;
                FILEEMPTY: string;
                KIASCANTIP: string;
                FILENAMEEXCEEDS: string;
                THEFILENAME: string;
            };
        };
    };
    accept: StringConstructor;
    action: StringConstructor;
    autoUpload: {
        type: BooleanConstructor;
        default: () => true;
    };
    beforeRemove: FunctionConstructor;
    beforeUpload: FunctionConstructor;
    data: ObjectConstructor;
    disabled: BooleanConstructor;
    display: {
        type: BooleanConstructor;
        default: () => true;
    };
    drag: BooleanConstructor;
    dragger: BooleanConstructor;
    edm: {
        type: ObjectConstructor;
        default: () => {};
    };
    fileIconList: {
        type: ArrayConstructor;
        default: () => never[];
    };
    fileList: {
        type: ArrayConstructor;
        default: () => never[];
    };
    fileSize: {
        type: (ArrayConstructor | NumberConstructor)[];
        validator(value: unknown): boolean;
    };
    fileTitle: {
        type: StringConstructor;
        default: () => "附件";
    };
    headerShow: {
        type: BooleanConstructor;
        default: () => true;
    };
    headers: {
        type: ObjectConstructor;
        default: () => {};
    };
    httpRequest: FunctionConstructor;
    limit: NumberConstructor;
    listType: {
        type: StringConstructor;
        default: () => "text";
    };
    mergeService: {
        type: BooleanConstructor;
        default: () => false;
    };
    multiple: BooleanConstructor;
    name: {
        type: StringConstructor;
        default: () => "file";
    };
    openDownloadFile: {
        type: BooleanConstructor;
        default: () => false;
    };
    showFileList: {
        type: BooleanConstructor;
        default: () => true;
    };
    size: StringConstructor;
    successStatistics: {
        type: BooleanConstructor;
        default: () => true;
    };
    thumbOption: {
        type: ObjectConstructor;
        default: () => {
            popperClass: string;
            width: number;
            showDownload: boolean;
            downloadFile: FunctionConstructor;
            showDel: boolean;
            icon: string;
            showTooltip: boolean;
        };
    };
    type: {
        type: StringConstructor;
        default: () => "select";
    };
    uploadIcon: {
        type: BooleanConstructor;
        default: () => true;
    };
    withCredentials: {
        type: BooleanConstructor;
        default: () => true;
    };
    isFolderTitle: {
        type: BooleanConstructor;
        default: boolean;
    };
    plugin: {
        type: (ObjectConstructor | FunctionConstructor)[];
        default: () => any;
    };
    listOption: {
        type: ObjectConstructor;
        default: () => {
            showUpdate: boolean;
            showDel: boolean;
        };
    };
    maxNameLength: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onError?: ((...args: any[]) => any) | undefined;
    onProgress?: ((...args: any[]) => any) | undefined;
    onRemove?: ((...args: any[]) => any) | undefined;
    onExceed?: ((...args: any[]) => any) | undefined;
    onSuccess?: ((...args: any[]) => any) | undefined;
    onPreview?: ((...args: any[]) => any) | undefined;
    "onDrop-error"?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    _constants: Record<string, any>;
    type: string;
    disabled: boolean;
    plugin: Function | Record<string, any>;
    multiple: boolean;
    display: boolean;
    drag: boolean;
    headers: Record<string, any>;
    withCredentials: boolean;
    showFileList: boolean;
    fileList: unknown[];
    autoUpload: boolean;
    listType: string;
    fileIconList: unknown[];
    fileTitle: string;
    headerShow: boolean;
    successStatistics: boolean;
    uploadIcon: boolean;
    edm: Record<string, any>;
    dragger: boolean;
    openDownloadFile: boolean;
    mergeService: boolean;
    thumbOption: Record<string, any>;
    isFolderTitle: boolean;
    listOption: Record<string, any>;
    maxNameLength: number;
}>;
export default _default;
