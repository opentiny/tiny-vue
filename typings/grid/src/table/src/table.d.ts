declare const _default: {
    name: string;
    props: {
        align: {
            type: StringConstructor;
            default: () => any;
        };
        autoResize: BooleanConstructor;
        border: {
            type: BooleanConstructor;
            default: () => any;
        };
        cellClassName: (StringConstructor | FunctionConstructor)[];
        columnKey: BooleanConstructor;
        columnMinWidth: (StringConstructor | NumberConstructor)[];
        columnWidth: (StringConstructor | NumberConstructor)[];
        contextMenu: ObjectConstructor;
        customs: ArrayConstructor;
        data: (ObjectConstructor | ArrayConstructor)[];
        dropConfig: ObjectConstructor;
        editConfig: (ObjectConstructor | BooleanConstructor)[];
        editRules: ObjectConstructor;
        expandConfig: ObjectConstructor;
        fit: {
            type: BooleanConstructor;
            default: () => boolean;
        };
        footerAlign: {
            type: StringConstructor;
            default: () => any;
        };
        footerCellClassName: (StringConstructor | FunctionConstructor)[];
        footerMethod: FunctionConstructor;
        footerRowClassName: (StringConstructor | FunctionConstructor)[];
        footerSpanMethod: FunctionConstructor;
        headerAlign: {
            type: StringConstructor;
            default: () => any;
        };
        headerCellClassName: (StringConstructor | FunctionConstructor)[];
        headerRowClassName: (StringConstructor | FunctionConstructor)[];
        headerSuffixIconAbsolute: BooleanConstructor;
        height: (StringConstructor | NumberConstructor)[];
        highlightCell: BooleanConstructor;
        highlightCurrentColumn: {
            type: BooleanConstructor;
            default: () => any;
        };
        highlightCurrentRow: {
            type: BooleanConstructor;
            default: () => any;
        };
        highlightHoverColumn: {
            type: BooleanConstructor;
            default: () => any;
        };
        highlightHoverRow: {
            type: BooleanConstructor;
            default: () => boolean;
        };
        isAsyncColumn: BooleanConstructor;
        isCenterEmpty: BooleanConstructor;
        isDragHeaderSorting: BooleanConstructor;
        keyboardConfig: ObjectConstructor;
        loading: BooleanConstructor;
        loadingComponent: ObjectConstructor;
        maxHeight: (StringConstructor | NumberConstructor)[];
        minHeight: (StringConstructor | NumberConstructor)[];
        mouseConfig: ObjectConstructor;
        optimization: ObjectConstructor;
        params: ObjectConstructor;
        radioConfig: ObjectConstructor;
        remoteFilter: BooleanConstructor;
        remoteSort: BooleanConstructor;
        renderEmpty: FunctionConstructor;
        renderRowAfter: FunctionConstructor;
        resizable: {
            type: BooleanConstructor;
            default: () => boolean;
        };
        rowClassName: (StringConstructor | FunctionConstructor)[];
        rowGroup: ObjectConstructor;
        rowId: {
            type: StringConstructor;
            default: () => string;
        };
        rowKey: BooleanConstructor;
        rowSpan: ArrayConstructor;
        scrollLoad: ObjectConstructor;
        selectConfig: ObjectConstructor;
        showFooter: BooleanConstructor;
        showHeader: {
            type: BooleanConstructor;
            default: () => boolean;
        };
        showHeaderOverflow: {
            type: (BooleanConstructor | StringConstructor)[];
            default: () => any;
        };
        showOverflow: {
            type: (BooleanConstructor | StringConstructor)[];
            default: () => any;
        };
        size: {
            type: StringConstructor;
            default: () => any;
        };
        sortConfig: ObjectConstructor;
        sortMethod: FunctionConstructor;
        sortable: {
            type: BooleanConstructor;
            default: boolean;
        };
        spanMethod: FunctionConstructor;
        startIndex: {
            type: NumberConstructor;
            default: number;
        };
        stripe: {
            type: BooleanConstructor;
            default: () => boolean;
        };
        summaryConfig: ObjectConstructor;
        syncResize: BooleanConstructor;
        tableLayout: StringConstructor;
        tooltipConfig: {
            type: ObjectConstructor;
            default: () => {};
        };
        treeConfig: ObjectConstructor;
        validConfig: ObjectConstructor;
    };
    provide(): {
        $table: {
            name: string;
            props: {
                align: {
                    type: StringConstructor;
                    default: () => any;
                };
                autoResize: BooleanConstructor;
                border: {
                    type: BooleanConstructor;
                    default: () => any;
                };
                cellClassName: (StringConstructor | FunctionConstructor)[];
                columnKey: BooleanConstructor;
                columnMinWidth: (StringConstructor | NumberConstructor)[];
                columnWidth: (StringConstructor | NumberConstructor)[];
                contextMenu: ObjectConstructor;
                customs: ArrayConstructor;
                data: (ObjectConstructor | ArrayConstructor)[];
                dropConfig: ObjectConstructor;
                editConfig: (ObjectConstructor | BooleanConstructor)[];
                editRules: ObjectConstructor;
                expandConfig: ObjectConstructor;
                fit: {
                    type: BooleanConstructor;
                    default: () => boolean;
                };
                footerAlign: {
                    type: StringConstructor;
                    default: () => any;
                };
                footerCellClassName: (StringConstructor | FunctionConstructor)[];
                footerMethod: FunctionConstructor;
                footerRowClassName: (StringConstructor | FunctionConstructor)[];
                footerSpanMethod: FunctionConstructor;
                headerAlign: {
                    type: StringConstructor;
                    default: () => any;
                };
                headerCellClassName: (StringConstructor | FunctionConstructor)[];
                headerRowClassName: (StringConstructor | FunctionConstructor)[];
                headerSuffixIconAbsolute: BooleanConstructor;
                height: (StringConstructor | NumberConstructor)[];
                highlightCell: BooleanConstructor;
                highlightCurrentColumn: {
                    type: BooleanConstructor;
                    default: () => any;
                };
                highlightCurrentRow: {
                    type: BooleanConstructor;
                    default: () => any;
                };
                highlightHoverColumn: {
                    type: BooleanConstructor;
                    default: () => any;
                };
                highlightHoverRow: {
                    type: BooleanConstructor;
                    default: () => boolean;
                };
                isAsyncColumn: BooleanConstructor;
                isCenterEmpty: BooleanConstructor;
                isDragHeaderSorting: BooleanConstructor;
                keyboardConfig: ObjectConstructor;
                loading: BooleanConstructor;
                loadingComponent: ObjectConstructor;
                maxHeight: (StringConstructor | NumberConstructor)[];
                minHeight: (StringConstructor | NumberConstructor)[];
                mouseConfig: ObjectConstructor;
                optimization: ObjectConstructor;
                params: ObjectConstructor;
                radioConfig: ObjectConstructor;
                remoteFilter: BooleanConstructor;
                remoteSort: BooleanConstructor;
                renderEmpty: FunctionConstructor;
                renderRowAfter: FunctionConstructor;
                resizable: {
                    type: BooleanConstructor;
                    default: () => boolean;
                };
                rowClassName: (StringConstructor | FunctionConstructor)[];
                rowGroup: ObjectConstructor;
                rowId: {
                    type: StringConstructor;
                    default: () => string;
                };
                rowKey: BooleanConstructor;
                rowSpan: ArrayConstructor;
                scrollLoad: ObjectConstructor;
                selectConfig: ObjectConstructor;
                showFooter: BooleanConstructor;
                showHeader: {
                    type: BooleanConstructor;
                    default: () => boolean;
                };
                showHeaderOverflow: {
                    type: (BooleanConstructor | StringConstructor)[];
                    default: () => any;
                };
                showOverflow: {
                    type: (BooleanConstructor | StringConstructor)[];
                    default: () => any;
                };
                size: {
                    type: StringConstructor;
                    default: () => any;
                };
                sortConfig: ObjectConstructor;
                sortMethod: FunctionConstructor;
                sortable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                spanMethod: FunctionConstructor;
                startIndex: {
                    type: NumberConstructor;
                    default: number;
                };
                stripe: {
                    type: BooleanConstructor;
                    default: () => boolean;
                };
                summaryConfig: ObjectConstructor;
                syncResize: BooleanConstructor;
                tableLayout: StringConstructor;
                tooltipConfig: {
                    type: ObjectConstructor;
                    default: () => {};
                };
                treeConfig: ObjectConstructor;
                validConfig: ObjectConstructor;
            };
            provide(): any;
            inject: {
                $grid: {
                    default: null;
                };
            };
            data(): any;
            computed: {
                bodyCtxMenu(): any;
                ctxMenuList(): any[];
                ctxMenuOpts(): any;
                hasFilter(): any;
                hasTip(): boolean;
                headerCtxMenu(): any;
                isCtxMenu(): number;
                isGroup(): any;
                isResizable(): any;
                optimizeOpts(): any;
                sortOpts(): any;
                tooltipContentOpts(): any;
                vSize(): any;
                vaildTipOpts(): any;
                validOpts(): any;
            };
            watch: {
                collectColumn(value: any): void;
                customs(value: any): void;
                data(value: any): void;
                height(): void;
                syncResize(value: any): void;
                tableColumn(): void;
            };
            created(): void;
            mounted(): void;
            activated(): void;
            setup(props: any, { slots, attrs, listeners }: {
                slots: any;
                attrs: any;
                listeners: any;
            }): {
                slots: any;
                tableListeners: any;
            };
            render(): any;
            methods: {
                columnDrop(): void;
                rowDrop(): void;
                getParentElem(): any;
                getParentHeight(): any;
                clearAll(silent: any): any;
                refreshData(): any;
                refreshStyle(): any;
                updateData(): any;
                handleTableData(force: any): any;
                loadTableData(datas: any, notRefresh: any): any;
                reloadData(datas: any): any;
                loadData(datas: any): Promise<any>;
                reloadRow(row: any, record: any, field: any): any;
                reloadColumn(columns: any): any;
                loadColumn(columns: any): Promise<any>;
                updateCache(source: any): void;
                modifyCache(): void;
                cacheColumnMap(): void;
                getRowNode(tr: any): any;
                getColumnNode(cell: any): any;
                getRowIndex(row: any): any;
                getColumnIndex(column: any): any;
                hasIndexColumn(column: any): any;
                defineField(row: any, copy: any): any;
                isTemporaryRow(row: any): any;
                createData(records: any, copy: any): Promise<unknown>;
                createRow(records: any): Promise<unknown>;
                clearData(rows: any, field: any): any;
                hasRowInsert(row: any): number;
                hasRowChange(row: any, field: any): boolean;
                getColumns(columnIndex: any): any;
                getColumnById(colid: any): any;
                getColumnByField(field: any): any;
                getTableColumn(): {
                    fullColumn: any;
                    visibleColumn: any;
                    tableColumn: any;
                    collectColumn: any;
                };
                getRecords(): any;
                getData(rowIndex: any): any;
                getAllRecords(): any;
                getSelectRecords(notCopy: any): any;
                handleLocalFilter(row: any, column: any): any;
                updateAfterFullData(): any;
                buildGroupData(): void;
                getRowById(rowid: any): any;
                getTableData(): {
                    visibleData: any;
                    footerData: any;
                    tableData: any;
                    fullData: any;
                };
                handleDefault(): void;
                mergeCustomColumn(customColumns: any, sort: any, colWidth: any): void;
                resetAll(): void;
                hideColumn(tableColumn: any): any;
                showColumn(tableColumn: any): any;
                resetCustoms(): any;
                handleVisibleColumn(tableColumn: any, visible: any): any;
                reloadCustoms(customColumns: any, sort: any, colWidth: any): any;
                watchColumn(value: any): void;
                refreshColumn(): any;
                analyColumnWidth(): void;
                recalculate(refull: any): any;
                autoCellWidth(headerEl: any, bodyEl: any, footerEl: any): void;
                resetResizable(): any;
                syncFixedTop(): void;
                updateStyle(): any;
                checkScrolling(): void;
                preventEvent(event: any, type: any, args: any, next: any, end: any): void;
                blurOutside({ row, args, column }: {
                    row: any;
                    args: any;
                    column: any;
                }, event: any): any;
                handleGlobalMousedownEvent: typeof import("./events").handleGlobalMousedownEvent;
                handleGlobalBlurEvent: typeof import("./events").handleGlobalBlurEvent;
                handleGlobalMousewheelEvent: typeof import("./events").handleGlobalMousewheelEvent;
                handleEscKeyDown: typeof import("./events").handleEscKeyDown;
                handleEnterKeyDown: typeof import("./events").handleEnterKeyDown;
                handleCtxMenu: typeof import("./events").handleCtxMenu;
                handleArrowKeyDown: typeof import("./events").handleArrowKeyDown;
                handleDelKeyDown: typeof import("./events").handleDelKeyDown;
                handleSpaceKeyDown: typeof import("./events").handleSpaceKeyDown;
                handleTabKeyDown: typeof import("./events").handleTabKeyDown;
                handleCopyKeyDown: typeof import("./events").handleCopyKeyDown;
                handleF2KeyDown: typeof import("./events").handleF2KeyDown;
                handleOtherKeyDown: typeof import("./events").handleOtherKeyDown;
                handleGlobalKeydownEvent: typeof import("./events").handleGlobalKeydownEvent;
                handleGlobalResizeEvent: typeof import("./events").handleGlobalResizeEvent;
                triggerHeaderTooltipEvent: typeof import("./events").triggerHeaderTooltipEvent;
                triggerFooterTooltipEvent: typeof import("./events").triggerFooterTooltipEvent;
                triggerTooltipEvent: typeof import("./events").triggerTooltipEvent;
                activateTooltip: any;
                activateTooltipValid: any;
                handleTooltip(event: any, column: any, row: any, showTip: any, isHeader: any): any;
                clostTooltip(): any;
                debounceClose: any;
                handleSelectionDefChecked(): void;
                setSelection(rows: any, value: any): any;
                handleSelectRow({ row }: {
                    row: any;
                }, value: any): void;
                handleToggleCheckRowEvent(params: any, event: any): void;
                triggerCheckRowEvent(event: any, params: any, value: any): void;
                toggleRowSelection(row: any): any;
                setAllSelection(value: any): void;
                checkSelectionStatus(): void;
                reserveCheckSelection(): void;
                triggerCheckAllEvent(event: any, value: any): void;
                toggleAllSelection(): any;
                clearSelection(): any;
                handleRadioDefChecked(): void;
                triggerRadioRowEvent(event: any, params: any): void;
                triggerCurrentRowEvent(event: any, params: any): void;
                setCurrentRow(row: any): any;
                setRadioRow(row: any): any;
                clearCurrentRow(): any;
                clearRadioRow(): any;
                getCurrentRow(): any;
                getRadioRow(): any;
                triggerHoverEvent(event: any, { row }: {
                    row: any;
                }): void;
                setHoverRow(row: any): void;
                clearHoverRow(): void;
                triggerHeaderCellClickEvent(event: any, params: any): any;
                setCurrentColumn(column: any): any;
                clearCurrentColumn(): any;
                handleChangeCell(event: any, params: any): void;
                triggerCellClickEvent(event: any, params: any): void;
                triggerCellDBLClickEvent(event: any, params: any): void;
                triggerSortEvent(event: any, column: any, order: any): void;
                sort(field: any, order: any): any;
                clearSort(): any;
                closeFilter(): any;
                toggleGroupExpansion(row: any): void;
                triggerRowExpandEvent(event: any, { row }: {
                    row: any;
                }): any;
                toggleRowExpansion(row: any): any;
                handleDefaultRowExpand(): void;
                setAllRowExpansion(expanded: any): any;
                setRowExpansion(rows: any, expanded: any): any;
                hasRowExpand(row: any): number;
                clearRowExpand(): any;
                triggerTreeExpandEvent(event: any, { row }: {
                    row: any;
                }): any;
                toggleTreeExpansion(row: any): any;
                handleDefaultTreeExpand(): void;
                setAllTreeExpansion(expanded: any): any;
                setTreeExpansion(rows: any, expanded: any): any;
                hasTreeExpand(row: any): number;
                clearTreeExpand(): any;
                getVirtualScroller(): {
                    scrollX: any;
                    scrollY: any;
                    scrollLeft: any;
                    scrollTop: any;
                };
                triggerScrollXEvent(event: any): void;
                debounceScrollX: any;
                loadScrollXData(): void;
                triggerScrollYEvent(event: any): void;
                debounceScrollY: any;
                debounceScrollLoad: any;
                loadScrollYData(event: any): void;
                getRowHeight(): any;
                computeScrollLoad(): any;
                updateScrollXData(): void;
                updateScrollXSpace(): void;
                updateScrollYData(): void;
                updateScrollYSpace(): void;
                updateScrollLoadBar(event: any): void;
                scrollTo(scrollLeft: any, scrollTop: any): any;
                scrollToRow(row: any, column: any, isDelay: any, move: any): any;
                scrollToTreeRow(row: any): any;
                scrollToColumn(column: any, isDelay: any, move: any): any;
                resetScrollTop(): void;
                clearScroll(): any;
                updateFooter(): any;
                updateStatus(scope: any, cellValue: any, renderOpts: any): any;
                updateScrollStatus: any;
                getAsyncColumnUniqueKey(property: any, row: any): string;
                getAsyncColumnName(property: any): string;
                collectAsyncColumn(tableData: any): any[];
                handleAsyncColumn(tableData: any): void;
                handleResolveColumn(tableData: any, fetchColumns: any): void;
                connect({ toolbar }: {
                    toolbar: any;
                }): void;
                getEventTargetNode: any;
                initMultipleHistory(): void;
                showSelectToolbar(): any;
                toggleSelectToolbarVisible(): any;
            };
        };
        $column: null;
    };
    inject: {
        $grid: {
            default: null;
        };
    };
    data(): any;
    computed: {
        bodyCtxMenu(): any;
        ctxMenuList(): any[];
        ctxMenuOpts(): any;
        hasFilter(): any;
        hasTip(): boolean;
        headerCtxMenu(): any;
        isCtxMenu(): number;
        isGroup(): any;
        isResizable(): any;
        optimizeOpts(): any;
        sortOpts(): any;
        tooltipContentOpts(): any;
        vSize(): any;
        vaildTipOpts(): any;
        validOpts(): any;
    };
    watch: {
        collectColumn(value: any): void;
        customs(value: any): void;
        data(value: any): void;
        height(): void;
        syncResize(value: any): void;
        tableColumn(): void;
    };
    created(): void;
    mounted(): void;
    activated(): void;
    setup(props: any, { slots, attrs, listeners }: {
        slots: any;
        attrs: any;
        listeners: any;
    }): {
        slots: any;
        tableListeners: any;
    };
    render(): any;
    methods: {
        columnDrop(): void;
        rowDrop(): void;
        getParentElem(): any;
        getParentHeight(): any;
        clearAll(silent: any): any;
        refreshData(): any;
        refreshStyle(): any;
        updateData(): any;
        handleTableData(force: any): any;
        loadTableData(datas: any, notRefresh: any): any;
        reloadData(datas: any): any;
        loadData(datas: any): Promise<any>;
        reloadRow(row: any, record: any, field: any): any;
        reloadColumn(columns: any): any;
        loadColumn(columns: any): Promise<any>;
        updateCache(source: any): void;
        modifyCache(): void;
        cacheColumnMap(): void;
        getRowNode(tr: any): any;
        getColumnNode(cell: any): any;
        getRowIndex(row: any): any;
        getColumnIndex(column: any): any;
        hasIndexColumn(column: any): any;
        defineField(row: any, copy: any): any;
        isTemporaryRow(row: any): any;
        createData(records: any, copy: any): Promise<unknown>;
        createRow(records: any): Promise<unknown>;
        clearData(rows: any, field: any): any;
        hasRowInsert(row: any): number;
        hasRowChange(row: any, field: any): boolean;
        getColumns(columnIndex: any): any;
        getColumnById(colid: any): any;
        getColumnByField(field: any): any;
        getTableColumn(): {
            fullColumn: any;
            visibleColumn: any;
            tableColumn: any;
            collectColumn: any;
        };
        getRecords(): any;
        getData(rowIndex: any): any;
        getAllRecords(): any;
        getSelectRecords(notCopy: any): any;
        handleLocalFilter(row: any, column: any): any;
        updateAfterFullData(): any;
        buildGroupData(): void;
        getRowById(rowid: any): any;
        getTableData(): {
            visibleData: any;
            footerData: any;
            tableData: any;
            fullData: any;
        };
        handleDefault(): void;
        mergeCustomColumn(customColumns: any, sort: any, colWidth: any): void;
        resetAll(): void;
        hideColumn(tableColumn: any): any;
        showColumn(tableColumn: any): any;
        resetCustoms(): any;
        handleVisibleColumn(tableColumn: any, visible: any): any;
        reloadCustoms(customColumns: any, sort: any, colWidth: any): any;
        watchColumn(value: any): void;
        refreshColumn(): any;
        analyColumnWidth(): void;
        recalculate(refull: any): any;
        autoCellWidth(headerEl: any, bodyEl: any, footerEl: any): void;
        resetResizable(): any;
        syncFixedTop(): void;
        updateStyle(): any;
        checkScrolling(): void;
        preventEvent(event: any, type: any, args: any, next: any, end: any): void;
        blurOutside({ row, args, column }: {
            row: any;
            args: any;
            column: any;
        }, event: any): any;
        handleGlobalMousedownEvent: typeof import("./events").handleGlobalMousedownEvent;
        handleGlobalBlurEvent: typeof import("./events").handleGlobalBlurEvent;
        handleGlobalMousewheelEvent: typeof import("./events").handleGlobalMousewheelEvent;
        handleEscKeyDown: typeof import("./events").handleEscKeyDown;
        handleEnterKeyDown: typeof import("./events").handleEnterKeyDown;
        handleCtxMenu: typeof import("./events").handleCtxMenu;
        handleArrowKeyDown: typeof import("./events").handleArrowKeyDown;
        handleDelKeyDown: typeof import("./events").handleDelKeyDown;
        handleSpaceKeyDown: typeof import("./events").handleSpaceKeyDown;
        handleTabKeyDown: typeof import("./events").handleTabKeyDown;
        handleCopyKeyDown: typeof import("./events").handleCopyKeyDown;
        handleF2KeyDown: typeof import("./events").handleF2KeyDown;
        handleOtherKeyDown: typeof import("./events").handleOtherKeyDown;
        handleGlobalKeydownEvent: typeof import("./events").handleGlobalKeydownEvent;
        handleGlobalResizeEvent: typeof import("./events").handleGlobalResizeEvent;
        triggerHeaderTooltipEvent: typeof import("./events").triggerHeaderTooltipEvent;
        triggerFooterTooltipEvent: typeof import("./events").triggerFooterTooltipEvent;
        triggerTooltipEvent: typeof import("./events").triggerTooltipEvent;
        activateTooltip: any;
        activateTooltipValid: any;
        handleTooltip(event: any, column: any, row: any, showTip: any, isHeader: any): any;
        clostTooltip(): any;
        debounceClose: any;
        handleSelectionDefChecked(): void;
        setSelection(rows: any, value: any): any;
        handleSelectRow({ row }: {
            row: any;
        }, value: any): void;
        handleToggleCheckRowEvent(params: any, event: any): void;
        triggerCheckRowEvent(event: any, params: any, value: any): void;
        toggleRowSelection(row: any): any;
        setAllSelection(value: any): void;
        checkSelectionStatus(): void;
        reserveCheckSelection(): void;
        triggerCheckAllEvent(event: any, value: any): void;
        toggleAllSelection(): any;
        clearSelection(): any;
        handleRadioDefChecked(): void;
        triggerRadioRowEvent(event: any, params: any): void;
        triggerCurrentRowEvent(event: any, params: any): void;
        setCurrentRow(row: any): any;
        setRadioRow(row: any): any;
        clearCurrentRow(): any;
        clearRadioRow(): any;
        getCurrentRow(): any;
        getRadioRow(): any;
        triggerHoverEvent(event: any, { row }: {
            row: any;
        }): void;
        setHoverRow(row: any): void;
        clearHoverRow(): void;
        triggerHeaderCellClickEvent(event: any, params: any): any;
        setCurrentColumn(column: any): any;
        clearCurrentColumn(): any;
        handleChangeCell(event: any, params: any): void;
        triggerCellClickEvent(event: any, params: any): void;
        triggerCellDBLClickEvent(event: any, params: any): void;
        triggerSortEvent(event: any, column: any, order: any): void;
        sort(field: any, order: any): any;
        clearSort(): any;
        closeFilter(): any;
        toggleGroupExpansion(row: any): void;
        triggerRowExpandEvent(event: any, { row }: {
            row: any;
        }): any;
        toggleRowExpansion(row: any): any;
        handleDefaultRowExpand(): void;
        setAllRowExpansion(expanded: any): any;
        setRowExpansion(rows: any, expanded: any): any;
        hasRowExpand(row: any): number;
        clearRowExpand(): any;
        triggerTreeExpandEvent(event: any, { row }: {
            row: any;
        }): any;
        toggleTreeExpansion(row: any): any;
        handleDefaultTreeExpand(): void;
        setAllTreeExpansion(expanded: any): any;
        setTreeExpansion(rows: any, expanded: any): any;
        hasTreeExpand(row: any): number;
        clearTreeExpand(): any;
        getVirtualScroller(): {
            scrollX: any;
            scrollY: any;
            scrollLeft: any;
            scrollTop: any;
        };
        triggerScrollXEvent(event: any): void;
        debounceScrollX: any;
        loadScrollXData(): void;
        triggerScrollYEvent(event: any): void;
        debounceScrollY: any;
        debounceScrollLoad: any;
        loadScrollYData(event: any): void;
        getRowHeight(): any;
        computeScrollLoad(): any;
        updateScrollXData(): void;
        updateScrollXSpace(): void;
        updateScrollYData(): void;
        updateScrollYSpace(): void;
        updateScrollLoadBar(event: any): void;
        scrollTo(scrollLeft: any, scrollTop: any): any;
        scrollToRow(row: any, column: any, isDelay: any, move: any): any;
        scrollToTreeRow(row: any): any;
        scrollToColumn(column: any, isDelay: any, move: any): any;
        resetScrollTop(): void;
        clearScroll(): any;
        updateFooter(): any;
        updateStatus(scope: any, cellValue: any, renderOpts: any): any;
        updateScrollStatus: any;
        getAsyncColumnUniqueKey(property: any, row: any): string;
        getAsyncColumnName(property: any): string;
        collectAsyncColumn(tableData: any): any[];
        handleAsyncColumn(tableData: any): void;
        handleResolveColumn(tableData: any, fetchColumns: any): void;
        connect({ toolbar }: {
            toolbar: any;
        }): void;
        getEventTargetNode: any;
        initMultipleHistory(): void;
        showSelectToolbar(): any;
        toggleSelectToolbarVisible(): any;
    };
};
export default _default;
