declare const GlobalConfig: {
    validConfig: {
        message: string;
    };
    sortConfig: {};
    stripe: boolean;
    highlightHoverRow: boolean;
    resizable: boolean;
    fit: boolean;
    showHeader: boolean;
    defaultTreeIndent: number;
    defaultTreeSpacing: number;
    rowId: string;
    version: number;
    optimization: {
        animat: boolean;
        delayHover: number;
        scrollX: {
            gt: number;
        };
        scrollY: {
            gt: number;
        };
    };
    icon: {
        sortAsc: any;
        sortDesc: any;
        sortDefault: any;
        required: string;
        filter: any;
        edit: any;
        tree: string;
        refresh: any;
        minscreen: any;
        fullscreen: any;
        custom: any;
        jumpPrev: string;
        jumpNext: string;
        prevPage: string;
        nextPage: string;
        zoomIn: string;
        zoomOut: string;
        modalClose: string;
        modalInfo: string;
        modalSuccess: string;
        modalWarning: string;
        modalError: string;
        modalQuestion: string;
        modalLoading: string;
        caretBottom: string;
        dropdownBottom: string;
        btnLoading: string;
    };
    grid: {};
    menu: {};
    tooltip: {
        trigger: string;
        theme: string;
    };
    pager: {};
    toolbar: {
        resizable: {
            storage: boolean;
        };
        buttons: never[];
    };
    modal: {
        zIndex: number;
        minWidth: number;
        minHeight: number;
        lockView: boolean;
        mask: boolean;
        duration: number;
        marginSize: number;
        animat: boolean;
    };
    i18n: (key: any) => any;
    constant: {
        insertedField: string;
        deletedField: string;
        asyncPrefix: string;
    };
    TINY_TABLE_CUSTOM_COLUMN_WIDTH: string;
    TINY_TABLE_CUSTOM_SETTING: string;
};
export default GlobalConfig;
export declare const prefix = "tiny-grid";
