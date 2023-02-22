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
import CellDefault from './src/cell';
export declare const Cell: {
    createColumn($table: any, colProps: any): any;
    renderHeader(h: any, params: any): any;
    renderCell(h: any, params: any): any;
    renderTreeCell(h: any, params: any): any[];
    renderTreeIcon(h: any, params: any): any[];
    renderIndexHeader(h: any, params: any): any;
    renderTreeIndexCell(h: any, params: any): any[];
    renderIndexCell(h: any, params: any): any;
    renderRadioHeader(h: any, params: any): any;
    renderRadioCell(h: any, params: any): any;
    renderTreeRadioCell(h: any, params: any): any[];
    renderSelectionHeader(h: any, params: any): any;
    renderSelectionCell(h: any, params: any): any;
    renderTreeSelectionCell(h: any, params: any): any[];
    renderSelectionCellByProp(h: any, params: any): any;
    renderTreeSelectionCellByProp(h: any, params: any): any[];
    renderExpandCell(h: any, params: any): any[];
    renderExpandData(h: any, params: any): any;
    renderSortAndFilterHeader(h: any, params: any): any;
    renderSortHeader(h: any, params: any): any;
    renderSortIcon(h: any, params: any): any[];
    renderFilterHeader(h: any, params: any): any;
    renderFilterIcon(h: any, params: any, cls?: string): any[];
    renderEditHeader(h: any, params: any): any[];
    renderTreeRowEdit(h: any, params: any): any[];
    renderRowEdit(h: any, params: any): any;
    renderTreeCellEdit(h: any, params: any): any[];
    renderCellEdit(h: any, params: any): any;
    runRenderer(h: any, params: any, _vm: any, isEdit: any): any;
    getSuffixCls(params: any): string[];
};
export default CellDefault;
