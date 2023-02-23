/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
export declare function isTargetRadioOrCheckbox(event: any, column: any, colType: any, targetType: any): any;
export declare function onClickExpandColumn({ $el, _vm, column, event, expandConfig, params }: {
    $el: any;
    _vm: any;
    column: any;
    event: any;
    expandConfig: any;
    params: any;
}): void;
export declare function onClickTreeNodeColumn({ _vm, column, event, params, treeConfig }: {
    _vm: any;
    column: any;
    event: any;
    params: any;
    treeConfig: any;
}): void;
export declare function onHighlightCurrentRow({ $el, _vm, event, highlightCurrentRow, params, radioConfig }: {
    $el: any;
    _vm: any;
    event: any;
    highlightCurrentRow: any;
    params: any;
    radioConfig: any;
}): void;
export declare function onClickRadioColumn({ $el, _vm, column, event, params, radioConfig }: {
    $el: any;
    _vm: any;
    column: any;
    event: any;
    params: any;
    radioConfig: any;
}): void;
export declare function onClickSelectColumn({ _vm, column, event, params, selectConfig }: {
    _vm: any;
    column: any;
    event: any;
    params: any;
    selectConfig: any;
}): void;
export declare function onClickCellSelect({ _vm, actived, cell, column, editConfig, event, mouseConfig, params, row }: {
    _vm: any;
    actived: any;
    cell: any;
    column: any;
    editConfig: any;
    event: any;
    mouseConfig: any;
    params: any;
    row: any;
}): void;
