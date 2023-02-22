declare const getRowUniqueId: () => string;
declare const setTableRowKey: ($table: any) => any;
declare const getTableRowKey: ($table: any) => any;
declare const getTableCellKey: ({ $table, column, row }: {
    $table: any;
    column: any;
    row: any;
}) => string;
declare const setTreeScrollYCache: (_vm: any) => void;
declare const sliceFullData: ({ afterFullData, renderSize, scrollYLoad, startIndex, treeConfig, treeExpandeds }: {
    afterFullData: any;
    renderSize: any;
    scrollYLoad: any;
    startIndex: any;
    treeConfig: any;
    treeExpandeds: any;
}) => any;
declare const getTotalRows: (_vm: any) => any;
declare const getTreeChildrenKey: ({ scrollYLoad, treeConfig }: {
    scrollYLoad: any;
    treeConfig: any;
}) => any;
declare const getTreeShowKey: ({ scrollYLoad, treeConfig }: {
    scrollYLoad: any;
    treeConfig: any;
}) => string | undefined;
declare const sliceVisibleColumn: (args: any) => {
    tableColumn: any;
    lastStartIndex: any;
    visibleColumnChanged: any;
    sliced: boolean;
};
declare const clearOnTableUnmount: ($table: any) => void;
export { clearOnTableUnmount, getRowUniqueId, getTableCellKey, getTableRowKey, getTotalRows, getTreeChildrenKey, getTreeShowKey, setTreeScrollYCache, setTableRowKey, sliceFullData, sliceVisibleColumn };
