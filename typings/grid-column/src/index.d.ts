declare const _default: import('vue').DefineComponent<
  {
    align: StringConstructor
    className: (StringConstructor | FunctionConstructor)[]
    editor: (ObjectConstructor | FunctionConstructor)[]
    field: StringConstructor
    filter: {}
    filterMethod: FunctionConstructor
    filterMultiple: {
      type: BooleanConstructor
      default: boolean
    }
    filterRender: ObjectConstructor
    filters: ArrayConstructor
    fixed: StringConstructor
    footerAlign: StringConstructor
    footerClassName: (StringConstructor | FunctionConstructor)[]
    formatConfig: {
      type: ObjectConstructor
      default: () => {
        data: never[]
      }
    }
    formatText: (StringConstructor | FunctionConstructor)[]
    formatValue: FunctionConstructor
    group: {
      type: BooleanConstructor
      default: boolean
    }
    headerAlign: StringConstructor
    headerClassName: (StringConstructor | FunctionConstructor)[]
    indexMethod: FunctionConstructor
    label: StringConstructor
    minWidth: (StringConstructor | NumberConstructor)[]
    params: ObjectConstructor
    prop: StringConstructor
    remoteSort: {
      type: BooleanConstructor
      default: null
    }
    renderer: (ObjectConstructor | FunctionConstructor)[]
    required: {
      type: BooleanConstructor
      default: boolean
    }
    resizable: {
      type: BooleanConstructor
      default: null
    }
    rules: ObjectConstructor
    showHeaderOverflow: {
      type: (StringConstructor | BooleanConstructor)[]
      default: null
    }
    showHeaderTip: {
      type: BooleanConstructor
      default: null
    }
    showIcon: {
      type: BooleanConstructor
      default: boolean
    }
    showOverflow: {
      type: (StringConstructor | BooleanConstructor)[]
      default: null
    }
    showTip: {
      type: BooleanConstructor
      default: null
    }
    sortBy: (ArrayConstructor | StringConstructor)[]
    sortMethod: FunctionConstructor
    sortable: {
      type: BooleanConstructor
      default: boolean
    }
    title: (StringConstructor | FunctionConstructor)[]
    treeNode: BooleanConstructor
    type: StringConstructor
    width: (StringConstructor | NumberConstructor)[]
  },
  any,
  unknown,
  {},
  {
    createColumn($table: any, colProps: any): any
    renderHeader(h: any, params: any): any
    renderCell(h: any, params: any): any
    renderTreeCell(h: any, params: any): any[]
    renderTreeIcon(h: any, params: any): any[]
    renderIndexHeader(h: any, params: any): any
    renderTreeIndexCell(h: any, params: any): any[]
    renderIndexCell(h: any, params: any): any
    renderRadioHeader(h: any, params: any): any
    renderRadioCell(h: any, params: any): any
    renderTreeRadioCell(h: any, params: any): any[]
    renderSelectionHeader(h: any, params: any): any
    renderSelectionCell(h: any, params: any): any
    renderTreeSelectionCell(h: any, params: any): any[]
    renderSelectionCellByProp(h: any, params: any): any
    renderTreeSelectionCellByProp(h: any, params: any): any[]
    renderExpandCell(h: any, params: any): any[]
    renderExpandData(h: any, params: any): any
    renderSortAndFilterHeader(h: any, params: any): any
    renderSortHeader(h: any, params: any): any
    renderSortIcon(h: any, params: any): any[]
    renderFilterHeader(h: any, params: any): any
    renderFilterIcon(h: any, params: any, cls?: string): any[]
    renderEditHeader(h: any, params: any): any[]
    renderTreeRowEdit(h: any, params: any): any[]
    renderRowEdit(h: any, params: any): any
    renderTreeCellEdit(h: any, params: any): any[]
    renderCellEdit(h: any, params: any): any
    runRenderer(h: any, params: any, _vm: any, isEdit: any): any
    getSuffixCls(params: any): string[]
  },
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  {},
  string,
  import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps,
  Readonly<
    import('vue').ExtractPropTypes<{
      align: StringConstructor
      className: (StringConstructor | FunctionConstructor)[]
      editor: (ObjectConstructor | FunctionConstructor)[]
      field: StringConstructor
      filter: {}
      filterMethod: FunctionConstructor
      filterMultiple: {
        type: BooleanConstructor
        default: boolean
      }
      filterRender: ObjectConstructor
      filters: ArrayConstructor
      fixed: StringConstructor
      footerAlign: StringConstructor
      footerClassName: (StringConstructor | FunctionConstructor)[]
      formatConfig: {
        type: ObjectConstructor
        default: () => {
          data: never[]
        }
      }
      formatText: (StringConstructor | FunctionConstructor)[]
      formatValue: FunctionConstructor
      group: {
        type: BooleanConstructor
        default: boolean
      }
      headerAlign: StringConstructor
      headerClassName: (StringConstructor | FunctionConstructor)[]
      indexMethod: FunctionConstructor
      label: StringConstructor
      minWidth: (StringConstructor | NumberConstructor)[]
      params: ObjectConstructor
      prop: StringConstructor
      remoteSort: {
        type: BooleanConstructor
        default: null
      }
      renderer: (ObjectConstructor | FunctionConstructor)[]
      required: {
        type: BooleanConstructor
        default: boolean
      }
      resizable: {
        type: BooleanConstructor
        default: null
      }
      rules: ObjectConstructor
      showHeaderOverflow: {
        type: (StringConstructor | BooleanConstructor)[]
        default: null
      }
      showHeaderTip: {
        type: BooleanConstructor
        default: null
      }
      showIcon: {
        type: BooleanConstructor
        default: boolean
      }
      showOverflow: {
        type: (StringConstructor | BooleanConstructor)[]
        default: null
      }
      showTip: {
        type: BooleanConstructor
        default: null
      }
      sortBy: (ArrayConstructor | StringConstructor)[]
      sortMethod: FunctionConstructor
      sortable: {
        type: BooleanConstructor
        default: boolean
      }
      title: (StringConstructor | FunctionConstructor)[]
      treeNode: BooleanConstructor
      type: StringConstructor
      width: (StringConstructor | NumberConstructor)[]
    }>
  >,
  {
    formatConfig: Record<string, any>
    showHeaderTip: boolean
    resizable: boolean
    showHeaderOverflow: string | boolean
    showOverflow: string | boolean
    sortable: boolean
    remoteSort: boolean
    treeNode: boolean
    showTip: boolean
    filterMultiple: boolean
    group: boolean
    required: boolean
    showIcon: boolean
  }
>
export default _default
