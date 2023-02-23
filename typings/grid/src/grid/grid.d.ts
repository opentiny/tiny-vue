declare const _default: import('vue').DefineComponent<
  {
    isBeforePageChange: BooleanConstructor
    showSaveMsg: {
      type: BooleanConstructor
      default: boolean
    }
    isMultipleHistory: BooleanConstructor
    selectToolbar: (ObjectConstructor | BooleanConstructor)[]
    align: {
      type: StringConstructor
      default: () => any
    }
    autoResize: BooleanConstructor
    border: {
      type: BooleanConstructor
      default: () => any
    }
    cellClassName: (StringConstructor | FunctionConstructor)[]
    columnKey: BooleanConstructor
    columnMinWidth: (StringConstructor | NumberConstructor)[]
    columnWidth: (StringConstructor | NumberConstructor)[]
    contextMenu: ObjectConstructor
    customs: ArrayConstructor
    data: (ArrayConstructor | ObjectConstructor)[]
    dropConfig: ObjectConstructor
    editConfig: (ObjectConstructor | BooleanConstructor)[]
    editRules: ObjectConstructor
    expandConfig: ObjectConstructor
    fit: {
      type: BooleanConstructor
      default: () => boolean
    }
    footerAlign: {
      type: StringConstructor
      default: () => any
    }
    footerCellClassName: (StringConstructor | FunctionConstructor)[]
    footerMethod: FunctionConstructor
    footerRowClassName: (StringConstructor | FunctionConstructor)[]
    footerSpanMethod: FunctionConstructor
    headerAlign: {
      type: StringConstructor
      default: () => any
    }
    headerCellClassName: (StringConstructor | FunctionConstructor)[]
    headerRowClassName: (StringConstructor | FunctionConstructor)[]
    headerSuffixIconAbsolute: BooleanConstructor
    height: (StringConstructor | NumberConstructor)[]
    highlightCell: BooleanConstructor
    highlightCurrentColumn: {
      type: BooleanConstructor
      default: () => any
    }
    highlightCurrentRow: {
      type: BooleanConstructor
      default: () => any
    }
    highlightHoverColumn: {
      type: BooleanConstructor
      default: () => any
    }
    highlightHoverRow: {
      type: BooleanConstructor
      default: () => boolean
    }
    isAsyncColumn: BooleanConstructor
    isCenterEmpty: BooleanConstructor
    isDragHeaderSorting: BooleanConstructor
    keyboardConfig: ObjectConstructor
    loading: BooleanConstructor
    loadingComponent: ObjectConstructor
    maxHeight: (StringConstructor | NumberConstructor)[]
    minHeight: (StringConstructor | NumberConstructor)[]
    mouseConfig: ObjectConstructor
    optimization: ObjectConstructor
    params: ObjectConstructor
    radioConfig: ObjectConstructor
    remoteFilter: BooleanConstructor
    remoteSort: BooleanConstructor
    renderEmpty: FunctionConstructor
    renderRowAfter: FunctionConstructor
    resizable: {
      type: BooleanConstructor
      default: () => boolean
    }
    rowClassName: (StringConstructor | FunctionConstructor)[]
    rowGroup: ObjectConstructor
    rowId: {
      type: StringConstructor
      default: () => string
    }
    rowKey: BooleanConstructor
    rowSpan: ArrayConstructor
    scrollLoad: ObjectConstructor
    selectConfig: ObjectConstructor
    showFooter: BooleanConstructor
    showHeader: {
      type: BooleanConstructor
      default: () => boolean
    }
    showHeaderOverflow: {
      type: (StringConstructor | BooleanConstructor)[]
      default: () => any
    }
    showOverflow: {
      type: (StringConstructor | BooleanConstructor)[]
      default: () => any
    }
    size: {
      type: StringConstructor
      default: () => any
    }
    sortConfig: ObjectConstructor
    sortMethod: FunctionConstructor
    sortable: {
      type: BooleanConstructor
      default: boolean
    }
    spanMethod: FunctionConstructor
    startIndex: {
      type: NumberConstructor
      default: number
    }
    stripe: {
      type: BooleanConstructor
      default: () => boolean
    }
    summaryConfig: ObjectConstructor
    syncResize: BooleanConstructor
    tableLayout: StringConstructor
    tooltipConfig: {
      type: ObjectConstructor
      default: () => {}
    }
    treeConfig: ObjectConstructor
    validConfig: ObjectConstructor
    columns: ArrayConstructor
    proxyConfig: ObjectConstructor
    fetchData: ObjectConstructor
    saveData: ObjectConstructor
    deleteData: ObjectConstructor
    toolbar: ObjectConstructor
    pager: ObjectConstructor
    dataset: ObjectConstructor
    autoLoad: {
      type: BooleanConstructor
      default: boolean
    }
    seqSerial: {
      type: BooleanConstructor
      default: boolean
    }
    events: ObjectConstructor
  },
  {
    slots: Readonly<{
      [name: string]: import('vue').Slot | undefined
    }>
    tableListeners: any
  },
  {
    emitter: any
    fetchOption: null
    filterData: never[]
    listeners: {}
    pagerConfig: null
    pendingRecords: never[]
    seqIndex: number
    sortData: {}
    tableCustoms: never[]
    tableData: never[]
    tableLoading: boolean
    tablePage: {
      total: number
      pageSize: number
      currentPage: number
    }
    toolBarVm: null
  },
  {
    isMsg(): boolean
    tableProps(): {}
    proxyOpts(): any
    vSize(): any
  },
  {
    initPagerConfig(): any
    initFetchOption():
      | {
          api: any
          dataset: Record<string, any>
          fields: any
          loading: any
        }
      | undefined
    getParentHeight(): number
    handleRowClassName(params: any): string[]
    handleActiveMethod(params: any): any
    handleFetch(code: any, sortArg: any): any
    loadFetchData(rest: any): void
    handleSave(code: any, args: any): Promise<unknown> | undefined
    handleDelete(code: any, args: any): void
    handleFullScreen([show]: [any]): void
    commitProxy(code: any): Promise<void>
    handleDeleteRow(code: any, i18nKey: any, callback: any): void
    getPendingRecords(): never[]
    triggerToolbarBtnEvent(button: any, event: any): void
    triggerPendingEvent(code: any): void
    pageChangeEvent(params: any): void
    pageSizeChange(size: any, load: any): void
    pageCurrentChange(current: any): void
    beforePageChangeHandler(params: any): void
    sortChangeEvent(params: any): void
    filterChangeEvent(params: any): void
  },
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  (
    | 'header-cell-dblclick'
    | 'header-cell-click'
    | 'resizable-change'
    | 'footer-cell-dblclick'
    | 'footer-cell-click'
    | 'scroll'
    | 'filter-change'
    | 'context-menu-click'
    | 'select-change'
    | 'select-all'
    | 'radio-change'
    | 'current-change'
    | 'cell-click'
    | 'cell-dblclick'
    | 'sort-change'
    | 'toggle-expand-change'
    | 'toggle-tree-change'
    | 'page-change'
    | 'before-page-change'
    | 'toolbar-button-click'
    | 'cancel-page-change'
    | 'cell-context-menu'
    | 'cell-mouseenter'
    | 'cell-mouseleave'
    | 'edit-actived'
    | 'edit-closed'
    | 'edit-disabled'
    | 'footer-cell-context-menu'
    | 'header-cell-context-menu'
    | 'valid-error'
    | 'BeforeEdit'
    | 'CellClick'
    | 'fullscreen'
  )[],
  | 'header-cell-dblclick'
  | 'header-cell-click'
  | 'resizable-change'
  | 'footer-cell-dblclick'
  | 'footer-cell-click'
  | 'scroll'
  | 'filter-change'
  | 'context-menu-click'
  | 'select-change'
  | 'select-all'
  | 'radio-change'
  | 'current-change'
  | 'cell-click'
  | 'cell-dblclick'
  | 'sort-change'
  | 'toggle-expand-change'
  | 'toggle-tree-change'
  | 'page-change'
  | 'before-page-change'
  | 'toolbar-button-click'
  | 'cancel-page-change'
  | 'cell-context-menu'
  | 'cell-mouseenter'
  | 'cell-mouseleave'
  | 'edit-actived'
  | 'edit-closed'
  | 'edit-disabled'
  | 'footer-cell-context-menu'
  | 'header-cell-context-menu'
  | 'valid-error'
  | 'BeforeEdit'
  | 'CellClick'
  | 'fullscreen',
  import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps,
  Readonly<
    import('vue').ExtractPropTypes<{
      isBeforePageChange: BooleanConstructor
      showSaveMsg: {
        type: BooleanConstructor
        default: boolean
      }
      isMultipleHistory: BooleanConstructor
      selectToolbar: (ObjectConstructor | BooleanConstructor)[]
      align: {
        type: StringConstructor
        default: () => any
      }
      autoResize: BooleanConstructor
      border: {
        type: BooleanConstructor
        default: () => any
      }
      cellClassName: (StringConstructor | FunctionConstructor)[]
      columnKey: BooleanConstructor
      columnMinWidth: (StringConstructor | NumberConstructor)[]
      columnWidth: (StringConstructor | NumberConstructor)[]
      contextMenu: ObjectConstructor
      customs: ArrayConstructor
      data: (ArrayConstructor | ObjectConstructor)[]
      dropConfig: ObjectConstructor
      editConfig: (ObjectConstructor | BooleanConstructor)[]
      editRules: ObjectConstructor
      expandConfig: ObjectConstructor
      fit: {
        type: BooleanConstructor
        default: () => boolean
      }
      footerAlign: {
        type: StringConstructor
        default: () => any
      }
      footerCellClassName: (StringConstructor | FunctionConstructor)[]
      footerMethod: FunctionConstructor
      footerRowClassName: (StringConstructor | FunctionConstructor)[]
      footerSpanMethod: FunctionConstructor
      headerAlign: {
        type: StringConstructor
        default: () => any
      }
      headerCellClassName: (StringConstructor | FunctionConstructor)[]
      headerRowClassName: (StringConstructor | FunctionConstructor)[]
      headerSuffixIconAbsolute: BooleanConstructor
      height: (StringConstructor | NumberConstructor)[]
      highlightCell: BooleanConstructor
      highlightCurrentColumn: {
        type: BooleanConstructor
        default: () => any
      }
      highlightCurrentRow: {
        type: BooleanConstructor
        default: () => any
      }
      highlightHoverColumn: {
        type: BooleanConstructor
        default: () => any
      }
      highlightHoverRow: {
        type: BooleanConstructor
        default: () => boolean
      }
      isAsyncColumn: BooleanConstructor
      isCenterEmpty: BooleanConstructor
      isDragHeaderSorting: BooleanConstructor
      keyboardConfig: ObjectConstructor
      loading: BooleanConstructor
      loadingComponent: ObjectConstructor
      maxHeight: (StringConstructor | NumberConstructor)[]
      minHeight: (StringConstructor | NumberConstructor)[]
      mouseConfig: ObjectConstructor
      optimization: ObjectConstructor
      params: ObjectConstructor
      radioConfig: ObjectConstructor
      remoteFilter: BooleanConstructor
      remoteSort: BooleanConstructor
      renderEmpty: FunctionConstructor
      renderRowAfter: FunctionConstructor
      resizable: {
        type: BooleanConstructor
        default: () => boolean
      }
      rowClassName: (StringConstructor | FunctionConstructor)[]
      rowGroup: ObjectConstructor
      rowId: {
        type: StringConstructor
        default: () => string
      }
      rowKey: BooleanConstructor
      rowSpan: ArrayConstructor
      scrollLoad: ObjectConstructor
      selectConfig: ObjectConstructor
      showFooter: BooleanConstructor
      showHeader: {
        type: BooleanConstructor
        default: () => boolean
      }
      showHeaderOverflow: {
        type: (StringConstructor | BooleanConstructor)[]
        default: () => any
      }
      showOverflow: {
        type: (StringConstructor | BooleanConstructor)[]
        default: () => any
      }
      size: {
        type: StringConstructor
        default: () => any
      }
      sortConfig: ObjectConstructor
      sortMethod: FunctionConstructor
      sortable: {
        type: BooleanConstructor
        default: boolean
      }
      spanMethod: FunctionConstructor
      startIndex: {
        type: NumberConstructor
        default: number
      }
      stripe: {
        type: BooleanConstructor
        default: () => boolean
      }
      summaryConfig: ObjectConstructor
      syncResize: BooleanConstructor
      tableLayout: StringConstructor
      tooltipConfig: {
        type: ObjectConstructor
        default: () => {}
      }
      treeConfig: ObjectConstructor
      validConfig: ObjectConstructor
      columns: ArrayConstructor
      proxyConfig: ObjectConstructor
      fetchData: ObjectConstructor
      saveData: ObjectConstructor
      deleteData: ObjectConstructor
      toolbar: ObjectConstructor
      pager: ObjectConstructor
      dataset: ObjectConstructor
      autoLoad: {
        type: BooleanConstructor
        default: boolean
      }
      seqSerial: {
        type: BooleanConstructor
        default: boolean
      }
      events: ObjectConstructor
    }>
  > & {
    onBeforeEdit?: ((...args: any[]) => any) | undefined
    onCellClick?: ((...args: any[]) => any) | undefined
    'onHeader-cell-dblclick'?: ((...args: any[]) => any) | undefined
    'onHeader-cell-click'?: ((...args: any[]) => any) | undefined
    'onResizable-change'?: ((...args: any[]) => any) | undefined
    'onFooter-cell-dblclick'?: ((...args: any[]) => any) | undefined
    'onFooter-cell-click'?: ((...args: any[]) => any) | undefined
    onScroll?: ((...args: any[]) => any) | undefined
    'onFilter-change'?: ((...args: any[]) => any) | undefined
    'onContext-menu-click'?: ((...args: any[]) => any) | undefined
    'onSelect-change'?: ((...args: any[]) => any) | undefined
    'onSelect-all'?: ((...args: any[]) => any) | undefined
    'onRadio-change'?: ((...args: any[]) => any) | undefined
    'onCurrent-change'?: ((...args: any[]) => any) | undefined
    'onCell-click'?: ((...args: any[]) => any) | undefined
    'onCell-dblclick'?: ((...args: any[]) => any) | undefined
    'onSort-change'?: ((...args: any[]) => any) | undefined
    'onToggle-expand-change'?: ((...args: any[]) => any) | undefined
    'onToggle-tree-change'?: ((...args: any[]) => any) | undefined
    'onPage-change'?: ((...args: any[]) => any) | undefined
    'onBefore-page-change'?: ((...args: any[]) => any) | undefined
    'onToolbar-button-click'?: ((...args: any[]) => any) | undefined
    'onCancel-page-change'?: ((...args: any[]) => any) | undefined
    'onCell-context-menu'?: ((...args: any[]) => any) | undefined
    'onCell-mouseenter'?: ((...args: any[]) => any) | undefined
    'onCell-mouseleave'?: ((...args: any[]) => any) | undefined
    'onEdit-actived'?: ((...args: any[]) => any) | undefined
    'onEdit-closed'?: ((...args: any[]) => any) | undefined
    'onEdit-disabled'?: ((...args: any[]) => any) | undefined
    'onFooter-cell-context-menu'?: ((...args: any[]) => any) | undefined
    'onHeader-cell-context-menu'?: ((...args: any[]) => any) | undefined
    'onValid-error'?: ((...args: any[]) => any) | undefined
    onFullscreen?: ((...args: any[]) => any) | undefined
  },
  {
    startIndex: number
    highlightCurrentColumn: boolean
    columnKey: boolean
    isDragHeaderSorting: boolean
    border: boolean
    resizable: boolean
    headerSuffixIconAbsolute: boolean
    showHeaderOverflow: string | boolean
    headerAlign: string
    align: string
    footerAlign: string
    showOverflow: string | boolean
    remoteFilter: boolean
    sortable: boolean
    remoteSort: boolean
    showFooter: boolean
    highlightCurrentRow: boolean
    fit: boolean
    tooltipConfig: Record<string, any>
    isAsyncColumn: boolean
    rowId: string
    isMultipleHistory: boolean
    showHeader: boolean
    highlightCell: boolean
    stripe: boolean
    loading: boolean
    highlightHoverRow: boolean
    highlightHoverColumn: boolean
    size: string
    autoResize: boolean
    autoLoad: boolean
    seqSerial: boolean
    isBeforePageChange: boolean
    showSaveMsg: boolean
    isCenterEmpty: boolean
    rowKey: boolean
    syncResize: boolean
  }
>
export default _default
