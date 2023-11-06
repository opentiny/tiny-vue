import TreeStore from '../common/deps/tree-model/tree-store'

export const close = ({ state, emit }) => () => {
  state.search.show = false
  emit('update:visible', false)
  emit('close', false)
}

export const syncCheckStatus = ({ state, api }) => (value) => {
  value && state.store.setDefaultCheckedKey(value)
  state.checkList = api.getCheckedNodes()
}

export const watchModelValue = ({ props, state, emit }) => () => {
  const { textSplit } = props

  emit('update:text', state.checkLabels.join(textSplit))
}

export const watchVisible = ({ emit, state, props, api }) => (visible) => {
  const { modelValue } = props

  if (visible) {
    api.watchModelValue(modelValue)
    api.initTreeStore()
    api.searchBoxToggle(false)
  }

  emit('update:visible', visible)
  setTimeout(() => {
    state.toggle = visible
  }, 0)
}

const hasChildren = (option) => option && !option.isLeaf

export const selectOption = ({ emit, state, api }) => (option, deep = true) => {
  const isAdd = !option.checked || option.indeterminate

  if (option.disabled) {
    return
  }

  state.store.setChecked(option, isAdd, deep)
  state.checkList = api.getCheckedNodes()
  emit('click', option, isAdd)
}

export const nodeExpand = ({ emit, state, props, api }) => (option) => {
  if (option.isLeaf) {
    return
  }

  const { valueField } = props
  const { lazy, load } = api.getNodeConfig()
  const { navList, level, waitLoadCheckList } = state
  const len = navList.length

  const appendNavList = () => {
    const isSame = level < len && navList[level] === option

    if (hasChildren(option)) {
      state.level += 1

      if (!isSame) {
        state.navList = [...navList.slice(0, level), option]
      }
    }

    option.expand()
    emit('node-expand', option)
  }

  if (load && lazy && (option.selfWaitLoad || (!option.loaded && !option.isLeaf))) {
    state.loading = true
    option.loading = true
    load(option, (nodes) => {
      let index, node

      state.loading = false
      option.loading = false
      option.loaded = true
      nodes.map((data) => {
        index = -1
        state.store.append(data, option.data)
        waitLoadCheckList.some((item, i) => {
          if (item.data[valueField] === data[valueField]) {
            index = i
            return true
          }
          return false
        })
        node = state.store.getNode(data)

        if (index !== -1 && node) {
          state.waitLoadCheckList.splice(index, 1)
        }
      })

      option.checked && !state.store.checkStrictly && option.setChecked(true, !state.store.checkStrictly)
      state.checkList = api.getCheckedNodes()
      appendNavList()
    })
  } else {
    appendNavList()
  }
}

export const confirm = ({ emit, state, props }) => () => {
  const { emitPath, valueField } = props
  let value,
    data = []

  state.computedCheckList.forEach((node) => {
    if (node.waitLoad) {
      value = emitPath ? node.rawValue : node.data[valueField]
    } else {
      value = emitPath ? node.getPathData(valueField) : node.data[valueField]
    }
    data.push(value)
  })

  state.search.show = false
  emit('confirm', state)
  emit('update:visible', false)
  emit('update:modelValue', data)
}

export const loopSearchOption = ({ state, props, api }) => (param) => {
  const { options, prefixText = '', textSplit = '/', checkStrictly } = param || {}
  const { valueField, textField, childrenField } = props
  const { input } = state.search

  const list = []
  options.forEach((item) => {
    const text = item[textField]
    const textNavStr = prefixText ? prefixText + textSplit + text : text
    const value = item[valueField]
    const childNodes = item[childrenField]
    const len = childNodes && childNodes.length

    if ((checkStrictly || (!checkStrictly && !len)) && text.indexOf(input) > -1) {
      list.push({
        [valueField]: value,
        [textField]: textNavStr
      })
    }

    if (len) {
      const arr = api.loopSearchOption({
        options: childNodes,
        prefixText: textNavStr,
        textSplit,
        checkStrictly
      })
      list.push(...arr)
    }
  })

  return list
}

export const filterOptionsHandler = ({ state, props }) => (list) => {
  const { valueField } = props

  state.search.loaded = true
  state.search.filterOptions = list.map((item) => {
    return {
      data: item,
      node: state.store.getNode(item[valueField])
    }
  })
}

export const searchMethod = ({ state, props, api }) => () => {
  const { searchConfig } = props
  const { input, options } = state.search
  let list = []
  const { checkStrictly } = api.getNodeConfig()

  if (searchConfig && searchConfig.searchMethod) {
    list = searchConfig.searchMethod({ input, options, state }) || []
  } else if (input) {
    list = api.loopSearchOption({ options, checkStrictly })
  }

  if (typeof list.then === 'function') {
    list.then((data) => api.filterOptionsHandler(data))
  } else {
    api.filterOptionsHandler(list)
  }
}

export const searchBoxToggle = ({ state, props, api }) => (bool) => {
  const { searchConfig = {} } = props
  const { lazy } = api.getNodeConfig()
  state.search.show = bool
  state.search.loaded = false

  if (bool) {
    state.search.options =
      !lazy && searchConfig.options && searchConfig.options.length ? searchConfig.options : state.store.getAllData()
  } else {
    state.search.input = ''
    state.search.filterOptions = []
  }
}

export const isSelected = ({ state }) => (option) => {
  const { navList } = state

  return navList.some((item) => item === option)
}

export const created = ({ api }) => () => {
  api.initTreeStore()
}

export const setLevel = ({ state, api }) => (level, option) => {
  if (!api.disabledNavOption(level, option)) {
    state.level = level
  }
}

export const searchSelectHandler = ({ emit, api }) => (option) => {
  api.selectOption(option)
  emit('search-click', option)
}

export const renderSearchOption = ({ state }) => (text) => {
  return (text || '').split(state.search.input)
}

export const loadData = ({ props, state }) => (data) => {
  props.visible && state.store.setData(data)
}

export const computedNavListHandler = ({ state, props, t }) => () => {
  const { textField } = props
  return [{ data: { [textField]: t('ui.base.all') } }, ...state.navList]
}

export const disabledNavOption = ({ state }) => (level, option) => {
  const node = state.navList[level]

  return option.selfWaitLoad && (!node || !node.childNodes.length)
}

export const getNodeConfig = ({ constants, props }) => () => {
  const { nodeConfig, valueField, childrenField } = props

  return Object.assign({ nodeKey: valueField, children: childrenField }, constants.defaultNodeConfig, nodeConfig)
}

export const initTreeStore = ({ props, state, api }) => () => {
  const { data, valueField, textField, visible, modelValue } = props
  const {
    lazy,
    nodeKey,
    load,
    children,
    afterLoad,
    isLeaf,
    currentNodeKey,
    checkStrictly,
    checkDescendants,
    defaultExpandedKeys,
    defaultCheckedKeys,
    defaultExpandAll,
    autoExpandParent,
    filterNodeMethod
  } = api.getNodeConfig()

  if (!visible) {
    return
  }

  const defaultValue = (defaultCheckedKeys || modelValue).map((data) => {
    if (Array.isArray(data)) {
      data = data[data.length - 1]
    }

    return data
  })

  if (state.store) {
    api.syncCheckStatus(defaultValue)
    return
  }

  state.store = new TreeStore({
    data,
    lazy,
    load,
    key: nodeKey,
    props: {
      label: textField,
      children,
      isLeaf
    },
    afterLoad: () => {
      state.rootData = state.root.childNodes || []
      api.syncCheckStatus()
      afterLoad && afterLoad()
    },
    checkStrictly,
    currentNodeKey,
    checkDescendants,
    defaultExpandedKeys,
    defaultCheckedKeys: defaultValue,
    defaultExpandAll,
    autoExpandParent,
    filterNodeMethod
  })

  state.root = state.store.root

  if (!lazy) {
    state.rootData = state.root.childNodes || []
    api.syncCheckStatus()
  } else {
    state.waitLoadCheckList = defaultValue.map((item, index) => {
      return {
        data: {
          [textField]: item,
          [valueField]: item
        },
        rawValue: (defaultCheckedKeys || modelValue)[index],
        waitLoad: true
      }
    })
  }
}

export const clean = ({ state }) => () => {
  const { options, waitLoadList } = state.selected

  state.selected.removeList = [...waitLoadList, ...options]
  state.selected.options = []
  state.selected.waitLoadList = []
}

export const getCheckedNodes = ({ state }) => () => {
  return state.store.getCheckedNodes(!state.store.checkStrictly, false, true)
}

export const toggleCheckList = ({ state, props, api }) => (show) => {
  const { valueField } = props

  if (!state.computedCheckList.length) {
    return
  }

  state.selected.show = show

  if (show) {
    state.selected.options = state.checkList.slice()
    state.selected.waitLoadList = state.waitLoadCheckList.slice()
  } else {
    let index
    state.selected.removeList.forEach((option) => {
      if (option.waitLoad) {
        index = state.store.defaultCheckedKeys.indexOf(option.data[valueField])
        if (index !== -1) {
          state.store.defaultCheckedKeys.splice(index, 1)
        }
      } else {
        state.store.setChecked(option, false, false)
      }
    })
    state.checkList = api.getCheckedNodes()
    state.selected.removeList = []
    state.waitLoadCheckList = state.selected.waitLoadList.slice()
  }
}

export const removeOption = ({ state }) => (option) => {
  const { options, waitLoadList } = state.selected
  let index

  if ((index = options.indexOf(option)) > -1) {
    state.selected.options.splice(index, 1)
    state.selected.removeList.push(option)
  } else if ((index = waitLoadList.indexOf(option)) > -1) {
    state.selected.waitLoadList.splice(index, 1)
    state.selected.removeList.push(option)
  }
}

export const computedSelectedListHandler = ({ state }) => () => {
  const { options, waitLoadList } = state.selected

  return [...waitLoadList, ...options]
}

export const inputKeyword = ({ state, api }) => () => {
  const { search } = state
  const show = !!search.input
  if (search.show !== show) {
    api.searchBoxToggle(show)
  }
}
