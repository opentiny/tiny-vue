export declare function adjustParams(rows: any, cb: any, vaildDatas: any): {
    cb: any;
    vaildDatas: any;
};
export declare function columnHandler({ _vm, colVailds, editRules, isAll, row, validRest }: {
    _vm: any;
    colVailds: any;
    editRules: any;
    isAll: any;
    row: any;
    validRest: any;
}): (column: any, columnIndex: any) => void;
export declare function hasNoEditRules(cb: any, status: any): void;
export declare function realValid({ _vm, editRules, isAll, validRest, treeConfig, hasTreeExpand, vaildDatas, treeOpts }: {
    _vm: any;
    editRules: any;
    isAll: any;
    validRest: any;
    treeConfig: any;
    hasTreeExpand: any;
    vaildDatas: any;
    treeOpts: any;
}): any[];
