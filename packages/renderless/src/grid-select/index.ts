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
