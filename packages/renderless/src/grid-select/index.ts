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
    const { filterMethod } = props

    const table = vm.$refs.gridRef.$refs.tinyTable
    const fullData = table.afterFullData

    vm.$refs.gridRef.scrollTo(null, 0)

    table.afterFullData = filterMethod(value, fullData) || []

    vm.$refs.gridRef.handleTableData(!value)

    state.previousQuery = value
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
            value: node[props.valueField]
          }
        })
      )

      emit('update:modelValue', selection)
      emit('change', selection)
    }
  }
