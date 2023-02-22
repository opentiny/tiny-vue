export declare function onGroupHeader({ _vm, isGroup, headerProps }: {
    _vm: any;
    isGroup: any;
    headerProps: any;
}): void;
export declare function reassignNotFixed({ centerList, column }: {
    centerList: any;
    column: any;
}): void;
export declare function reassignFixedRight({ column, columnIndex, isColspan, rightEndIndex, rightList }: {
    column: any;
    columnIndex: any;
    isColspan: any;
    rightEndIndex: any;
    rightList: any;
}): {
    isColspan: any;
    rightEndIndex: any;
};
export declare function reassignFixedLeft({ column, columnIndex, isColspan, leftList, leftStartIndex, letIndex }: {
    column: any;
    columnIndex: any;
    isColspan: any;
    leftList: any;
    leftStartIndex: any;
    letIndex: any;
}): {
    leftStartIndex: any;
    letIndex: any;
    isColspan: any;
};
export declare function showGroupFixedError({ isColspan, isGroup, leftStartIndex, rightEndIndex, visibleColumn }: {
    isColspan: any;
    isGroup: any;
    leftStartIndex: any;
    rightEndIndex: any;
    visibleColumn: any;
}): void;
export declare function onScrollXLoad({ _vm, scrollX, scrollXLoad, scrollXStore, tableColumn, visibleColumn }: {
    _vm: any;
    scrollX: any;
    scrollXLoad: any;
    scrollXStore: any;
    tableColumn: any;
    visibleColumn: any;
}): any;
