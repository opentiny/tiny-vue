declare const _default: import("vue").DefineComponent<{
    pageSize: {
        type: NumberConstructor;
        default: number;
    };
    total: NumberConstructor;
    pageCount: NumberConstructor;
    pagerCount: {
        type: NumberConstructor;
        validator(value: unknown): boolean;
        default: number;
    };
    currentPage: {
        type: NumberConstructor;
        default: number;
    };
    layout: StringConstructor;
    pageSizes: {
        type: ArrayConstructor;
        default(): number[];
    };
    prevText: StringConstructor;
    nextText: StringConstructor;
    hideOnSinglePage: BooleanConstructor;
    mode: StringConstructor;
    appendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    isBeforePageChange: BooleanConstructor;
    popperClass: StringConstructor;
    popperAppendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, unknown, {
    internalCurrentPage: number;
    internalPageSize: number;
    lastEmittedPage: number;
    userChangePageSize: boolean;
    internalTotal: number | undefined;
}, {
    internalPageCount(): number | null;
    internalLayout(): string;
}, {
    beforeSizeChangeHandler(params: any): void;
    beforePagerChangeHandler(params: any): void;
    beforeJumperChangeHandler(params: any): void;
    copyEmit(...args: any[]): void;
    beforeChangeHandler(val?: number): any;
    handleCurrentChange(val: any): false | undefined;
    prev(): void;
    next(): void;
    buildBeforePageChangeParam(param: any): any;
    getValidCurrentPage(val: any): any;
    emitChange(): void;
    setTotal(val: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("before-page-change" | "size-change" | "current-change" | "prev-click" | "next-click")[], "before-page-change" | "size-change" | "current-change" | "prev-click" | "next-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    pageSize: {
        type: NumberConstructor;
        default: number;
    };
    total: NumberConstructor;
    pageCount: NumberConstructor;
    pagerCount: {
        type: NumberConstructor;
        validator(value: unknown): boolean;
        default: number;
    };
    currentPage: {
        type: NumberConstructor;
        default: number;
    };
    layout: StringConstructor;
    pageSizes: {
        type: ArrayConstructor;
        default(): number[];
    };
    prevText: StringConstructor;
    nextText: StringConstructor;
    hideOnSinglePage: BooleanConstructor;
    mode: StringConstructor;
    appendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    isBeforePageChange: BooleanConstructor;
    popperClass: StringConstructor;
    popperAppendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onBefore-page-change"?: ((...args: any[]) => any) | undefined;
    "onSize-change"?: ((...args: any[]) => any) | undefined;
    "onCurrent-change"?: ((...args: any[]) => any) | undefined;
    "onPrev-click"?: ((...args: any[]) => any) | undefined;
    "onNext-click"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    popperAppendToBody: boolean;
    appendToBody: boolean;
    pageSizes: unknown[];
    isBeforePageChange: boolean;
    currentPage: number;
    pageSize: number;
    pagerCount: number;
    hideOnSinglePage: boolean;
}>;
export default _default;
