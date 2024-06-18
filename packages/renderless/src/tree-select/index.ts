export const filter =
  ({ vm }) =>
  (value) => {
    vm.$refs.treeRef.filter(value)
  }

export const nodeClick =
  ({ props }) =>
  (data, { updateSelectedData, hidePanel }) => {
    if (!props.multiple) {
      updateSelectedData({
        ...data,
        currentLabel: data[props.textField],
        value: data[props.valueField],
        state: {
          currentLabel: data[props.textField]
        }
      })

      hidePanel()
    }
  }

export const check =
  ({ props }) =>
  (checkedNodes, { updateSelectedData }) => {
    if (props.multiple) {
      updateSelectedData(
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
