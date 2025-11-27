import { find } from '@opentiny/utils'

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
            value: node[props.valueField]
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
  (selected) => {
    const checkedKey = []

    if (!Array.isArray(selected)) {
      return props.modelValue ? [props.modelValue] : [selected[props.valueField]]
    } else {
      selected.length > 0 &&
        selected.forEach((item) => {
          checkedKey.push(item[props.valueField])
        })

      return checkedKey
    }
  }

/**
 * 递归获取树节点的所有子节点 id 数组
 * @params childNodes 树节点的子节点
 * @params key value 映射字段（valueField）
 * @return 示例：[{ value: 4, children: [{ value: 6 }, { value: 9 }] }] => [4, 6, 9]（其中 childNodes 的结构做了简化处理）
 */
export const getChildValue = () => (childNodes, key) => {
  const ids = []

  const getChild = (nodes) => {
    nodes.forEach((node) => {
      ids.push(node.data[key])

      if (node.childNodes.length > 0) {
        getChild(node.childNodes)
      }
    })
  }

  getChild(childNodes)

  return ids
}

export const mounted =
  ({ api, state, props, vm }) =>
  () => {
    if (!state.modelValue || (Array.isArray(state.modelValue) && state.modelValue.length === 0)) return

    if (props.multiple) {
      let initialNodes = []
      if (Array.isArray(state.modelValue)) {
        state.modelValue.forEach((value) => {
          const option = api.getPluginOption(value)
          if (option && option.length > 0) {
            initialNodes = initialNodes.concat(option)
          }
        })
      }

      // 如果没有找到任何节点（例如懒加载场景），直接返回
      if (initialNodes.length === 0) return

      const selected = initialNodes.map((node) => {
        return {
          ...node,
          currentLabel: node[props.textField],
          value: node[props.valueField]
        }
      })

      vm.$refs.baseSelectRef.updateSelectedData(selected)

      state.defaultCheckedKeys = api.getCheckedData(selected)
    } else {
      const options = api.getPluginOption(state.modelValue)
      const data = options && options.length > 0 ? options[0] : null

      // 如果没有找到节点（例如懒加载场景），直接返回
      if (!data) return

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

export const watchValue =
  ({ api, props, vm, state }) =>
  (newValue, oldValue) => {
    if (props.multiple) {
      // 取新旧值的差集，用来判断是否是删除标签的操作，如果差值只有一个值，说明是删除操作
      // 如果是删除操作，且不是父子严格模式，则需要将父节点的值也删除（严格模式下父子节点勾选相互独立，不会相互影响）
      const xorResult = oldValue.filter((item) => !newValue.includes(item))
      const tagId = xorResult[0]
      const treeIds = [tagId]
      let checkedKeys = newValue

      // 处理输入框中删除选中标签时，联动下拉面板的逻辑
      if (xorResult.length === 1 && !props.treeOp.checkStrictly) {
        let node = vm.$refs.treeRef.getNode(tagId)

        if (!node.isLeaf) {
          treeIds.push(...api.getChildValue(node.childNodes, props.valueField))
        }

        while (node.parent && !Array.isArray(node.parent.data)) {
          node.parent.data && treeIds.push(node.parent.data[props.valueField])
          node = node.parent
        }

        checkedKeys = newValue.filter((item) => !treeIds.includes(item))
      }

      let initialNodes = []
      if (Array.isArray(checkedKeys)) {
        checkedKeys.forEach((value) => {
          const option = api.getPluginOption(value)
          if (option && option.length > 0) {
            initialNodes = initialNodes.concat(option)
          }
        })
      }

      const selected = initialNodes.map((node) => {
        return {
          ...node,
          currentLabel: node[props.textField],
          value: node[props.valueField]
        }
      })

      // 更新输入框中选中的标签
      vm.$refs.baseSelectRef.updateSelectedData(selected)

      // 更新下拉面板中选中的树节点
      vm.$refs.treeRef.setCheckedKeys(checkedKeys)
    }
  }
