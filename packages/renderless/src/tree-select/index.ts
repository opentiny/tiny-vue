export const filter =
  ({ vm }) =>
  (value) => {
    vm.$refs.treeRef.filter(value)
  }

export const nodeClick =
  ({ props, vm }) =>
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

      vm.$refs.baseSelectRef.hidePanel()
    }
  }

export const check =
  ({ props, vm }) =>
  (data, { checkedNodes }) => {
    if (props.multiple) {
      vm.$refs.baseSelectRef.updateSelectedData(
        checkedNodes.map((node) => {
          return {
            ...node,
            currentLabel: node[props.textField],
            value: node[props.valueField]
          }
        })
      )
    }
  }
