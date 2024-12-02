export const buildSelectConfig =
  ({ props, state }) =>
  () => {
    const checkRowKeys = state.gridCheckedData
    const selectConfig = props.selectConfig

    return Object.assign({}, selectConfig, { checkRowKeys })
  }

export const buildRadioConfig =
  ({ props, state }) =>
  () => {
    const checkRowKey = state.currentKey
    const highlight = true
    const radioConfig = props.radioConfig

    return Object.assign({}, radioConfig, { checkRowKey, highlight })
  }

export const filter =
  ({ props, state, vm }) =>
  (value) => {
    const { multiple, valueField, filterMethod, remote, remoteMethod } = props

    if ((props.filterable || props.searchable) && typeof filterMethod === 'function') {
      const table = vm.$refs.gridRef.$refs.tinyTable
      const fullData = table.afterFullData

      vm.$refs.gridRef.scrollTo(null, 0)

      table.afterFullData = filterMethod(value, fullData) || []

      vm.$refs.gridRef.handleTableData(!value)

      state.previousQuery = value
    } else if (remote && typeof remoteMethod === 'function') {
      state.previousQuery = value
      remoteMethod(value, props.extraQueryParams).then((data) => {
        // 多选时取远端数据与当前已选数据的并集
        if (multiple) {
          const selectedIds = state.selected.map((sel) => sel[valueField])
          vm.$refs.gridRef.clearSelection()
          vm.$refs.gridRef.setSelection(
            data.filter((row) => ~selectedIds.indexOf(row[valueField])),
            true
          )
          state.remoteData = data.filter((row) => !~selectedIds.indexOf(row[valueField])).concat(state.selected)
        } else {
          vm.$refs.gridRef.clearRadioRow()
          vm.$refs.gridRef.setRadioRow(find(data, (item) => props.modelValue === item[props.valueField]))
          state.remoteData = data
        }

        vm.$refs.gridRef.$refs.tinyTable.lastScrollTop = 0
        vm.$refs.gridRef.loadData(data)
        vm.$refs.gridRef.handleTableData(!value)
      })
    }
  }

export const radioChange =
  ({ props, vm, emit }) =>
  ({ row }) => {
    if (!props.multiple) {
      vm.$refs.baseSelectRef.updateSelectedData({
        ...row,
        currentLabel: row[props.textField],
        value: row[props.valueField],
        state: {
          currentLabel: row[props.textField]
        }
      })

      vm.$refs.baseSelectRef.hidePanel()

      emit('update:modelValue', row)
      emit('change', row)
    }
  }

export const selectChange =
  ({ props, vm, emit }) =>
  ({ $table, selection, checked, row }) => {
    if (props.multiple) {
      vm.$refs.baseSelectRef.updateSelectedData(
        selection.map((node) => {
          return {
            ...node,
            currentLabel: node[props.textField],
            value: node[props.valueField],
            isGrid: true
          }
        })
      )

      emit('update:modelValue', selection)
      emit('change', selection)
    }
  }
