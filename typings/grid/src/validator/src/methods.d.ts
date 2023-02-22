declare const _default: {
    _validate(rows: any, cb: any): Promise<void>;
    _fullValidate(rows: any, cb: any): Promise<void>;
    handleValidError(params: any): void;
    validatePromise(row: any, column: any, columnIndex: any, isAll: any, validRest: any): Promise<unknown>;
    /**
     * 对表格数据进行校验
     * 如果传 row 指定行记录，则只验证传入的行
     * 如果传 rows 为多行记录，则只验证传入的行
     * 如果只传 callback 否则默认验证整个表格数据
     * 返回 Promise 对象，或者使用回调方式
     */
    beginValidate(rows: any, cb: any, isAll: any): Promise<void>;
    hasCellRules(type: any, row: any, { property }: {
        property: any;
    }): any;
    /**
     * 校验数据：
     * 按表格行顺序、列顺序依次校验（同步或异步）；
     * 根据校验规则的索引顺序依次校验，如果是异步则会等待校验完成才会继续校验下一列；
     * 如果校验失败，则触发回调或者Promise，结果返回一个Boolean值；
     * 如果是传回调方式这返回一个Boolean值和校验不通过列的错误消息；
     *
     * rule 配置：
     *  required为Boolean表示是否必填；
     *  max为Number表示最大长度；
     *  min为Number表示最小长度；
     *  validator为Function(rule, value, callback, {rules, row, column, rowIndex, columnIndex})进行自定义校验；
     *  trigger为blur|change表示触发方式（默认为空就行，除非特殊场景）；
     */
    validCellRules(type: any, row: any, column: any, defVal: any): Promise<void>;
    _clearValidate(): any;
    triggerValidate(type: any): Promise<void>;
    showValidTooltip(params: any): void;
    clostValidTooltip(): any;
};
export default _default;
