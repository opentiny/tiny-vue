declare const _default: {
    _insert(data: any): any;
    _insertAt(records: any, row: any): any;
    /**
     * 删除指定行数据
     * 如果传 row 则删除一行
     * 如果传 rows 则删除多行
     */
    _remove(rows: any): any;
    /**
     * 删除选中数据
     */
    _removeSelecteds(): any;
    _revert(...args: any[]): any;
    /**
     * 对数据进行还原
     * 如果不传任何参数，则还原整个表格；
     * 如果传row则还原一行；
     * 如果传rows则还原多行；
     * 如果还额外传了field则还原指定单元格。
     */
    _revertData(rows: any, field: any): any;
    /**
     * 获取表格操作数据集
     */
    _getRecordset(): {};
    /**
     * 获取删除数据列表
     */
    _getRemoveRecords(): any;
    /**
     * 获取新增数据列表
     */
    _getInsertRecords(): any;
    /**
     * 获取更新数据列表
     * 只精准匹配row的更改。如果是树表格，子节点更改状态不会影响父节点的更新状态
     */
    _getUpdateRecords(): any;
    /**
     * 处理激活编辑
     */
    handleActived(params: any, event: any): any;
    _getColumnModel(row: any, column: any): void;
    _setColumnModel(row: any, column: any): void;
    _getActiveRow(): any;
    /**
     * 清除已激活的编辑
     */
    _clearActived(event: any): any;
    _hasActiveRow(row: any): boolean;
    /**
     * 处理聚焦
     */
    handleFocus(params: any): void;
    /**
     * 激活单元格编辑
     */
    _setActiveCell: (row: any, field: any) => any;
    /**
     * 激活行编辑
     */
    _setActiveRow(row: any): any;
    /**
     * 只对trigger为dblclick有效，选中单元格
     */
    _setSelectCell(row: any, field: any): any;
    updateSelectedCls(clear: any): void;
    /**
     * 处理选中源
     */
    handleSelected(params: any, event: any): any;
};
export default _default;
