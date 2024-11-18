export const filter =
  ({ vm }) =>
  (value) => {
    vm.$refs.treeRef.filter(value)
  }

export const nodeClick =
  ({ props, vm, emit }) =>
  (data) => {
    if (!props.multiple) {
      vm.$refs.baseSelectRef.updateSelectedData({
        ...data,
        currentLabel: data[props.textField],
        value: data[props.valueField],
        state: {
          currentLabel: data[props.textField]
        }
      })

      emit('change', data[props.valueField])
      emit('update:modelValue', data[props.valueField])

      vm.$refs.baseSelectRef.hidePanel()
    }
  }

export const check =
  ({ props, vm, emit }) =>
  (data, { checkedNodes }) => {
    if (props.multiple) {
      const currentValue = []

      vm.$refs.baseSelectRef.updateSelectedData(
        checkedNodes.map((node) => {
          currentValue.push(node[props.valueField])

          return {
            ...node,
            currentLabel: node[props.textField],
            value: node[props.valueField]
          }
        })
      )

      emit('change', currentValue)
      emit('update:modelValue', currentValue)
    }
  }
