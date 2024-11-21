import { find } from '../common/array'

/**
 * 树节点过滤事件
 */
export const filter =
  ({ vm }) =>
  (value) => {
    vm.$refs.treeRef.filter(value)
  }

/**
 * 单选，节点选择事件
 */
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

/**
 * 多选，勾选事件
 */
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
            value: node[props.valueField],
            isTree: true
          }
        })
      )

      emit('change', currentValue)
      emit('update:modelValue', currentValue)
    }
  }

/**
 * 嵌套树结构转成扁平树结构
 * @params data 嵌套树结构 示例：[{ children: [ { label: '二级 1-1', value: 4 }, ... ], label: '一级 1', value: 1 }, ...]
 * @return 扁平树结构 示例：[{ label: '一级 1', value: 1, pId: null }, { label: '二级 1-1', value: 4, pId: 1 }, ...]
 */
export const getTreeData =
  ({ props, state }) =>
  (data) => {
    const nodes = []
    const getChild = (data, pId) => {
      data.forEach((node) => {
        node.pId = pId
        nodes.push(node)

        if (node[state.childrenName] && node[state.childrenName].length > 0) {
          getChild(node[state.childrenName], node[props.valueField])
        }
      })
    }

    getChild(data, null)

    return nodes
  }

/**
 * 多选，获取匹配的树节点
 * @params value 树节点 value
 * @return 完整的树节点 示例：[{ label: "三级 1-1-2", value: 10, pId: 1, children: [...] }]
 */
export const getPluginOption =
  ({ api, props, state }) =>
  (value) => {
    const isRemote =
      (props.filterable || props.searchable) &&
      props.remote &&
      (typeof props.remoteMethod === 'function' || typeof props.initQuery === 'function')
    const { textField, valueField } = props
    const sourceData = isRemote ? state.remoteData : api.getTreeData(state.treeData)
    const selNode = find(sourceData, (item) => item[valueField] === value)
    const items = []

    if (selNode) {
      selNode.currentLabel = selNode[textField]
      items.push(selNode)
    }

    return items
  }

/**
 * 多选，获取选中的树节点 value 数组，用于初始化树节点的勾选状态
 * @return 示例：[9, 6]
 */
export const getCheckedData =
  ({ props, state }) =>
  () => {
    const checkedKey = []

    if (!Array.isArray(state.selected)) {
      return props.modelValue ? [props.modelValue] : [state.selected[props.valueField]]
    } else {
      state.selected.length > 0 &&
        state.selected.forEach((item) => {
          checkedKey.push(item[props.valueField])
        })

      return checkedKey
    }
  }

export const mounted =
  ({ api, state, props, vm }) =>
  () => {
    if (!state.value || state.value.length === 0) return

    if (props.multiple) {
      let initialNodes = []
      if (Array.isArray(state.value)) {
        state.value.forEach((value) => {
          const option = api.getPluginOption(value)
          initialNodes = initialNodes.concat(option)
        })
      }

      vm.$refs.baseSelectRef.updateSelectedData(
        initialNodes.map((node) => {
          return {
            ...node,
            currentLabel: node[props.textField],
            value: node[props.valueField],
            isTree: true
          }
        })
      )

      state.defaultCheckedKeys = api.getCheckedData()[0]
    } else {
      const data = api.getPluginOption(state.value)[0]
      vm.$refs.baseSelectRef.updateSelectedData({
        ...data,
        currentLabel: data[props.textField],
        value: data[props.valueField],
        state: {
          currentLabel: data[props.textField]
        }
      })

      state.currentKey = data[props.valueField]
    }
  }
