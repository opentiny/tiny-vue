import TreeStore from '../common/deps/tree-model/tree-store'

export const close =
  ({ state, emit }) =>
  () => {
    state.search.show = false
    emit('update:visible', false)
    emit('close', false)
  }

export const syncCheckStatus =
  ({ state, props, api }) =>
  (value) => {
    const { valueField, textField, modelValue: propsModelValue, visible } = props
    const { lazy, isLeaf: leafField } = api.getNodeConfig()
    let currentData,
      navList = [],
      modelValue = value || propsModelValue || [],
      len = modelValue.length,
      isLeaf

    if (!visible) {
      return
    }

    for (let i = 0; i < len; i++) {
      const id = modelValue[i]
      currentData = state.store.getNode(id)

      if (currentData) {
        navList.push(currentData)
      } else {
        isLeaf = i === len - 1
        navList.push({
          data: { [valueField]: id, [textField]: id, [leafField]: isLeaf },
          loaded: false,
          isLeaf,
          childNodes: [],
          level: i,
          loading: false,
          selfWaitLoad: true
        })
      }
    }

    state.isLeaf = !hasChildren(navList[len - 1])
    state.navList = navList
    state.level = lazy && state.waitLoadList.length ? 0 : Math.max(len - 1, 0)
  }

export const watchVisible =
  ({ emit, state, props, api }) =>
  (visible) => {
    const { modelValue } = props

    if (visible) {
      api.watchModelValue(modelValue)
      api.initTreeStore()
    }

    setTimeout(() => {
      state.toggle = visible
    }, 0)
    emit('update:visible', visible)
  }

export const watchModelValue =
  ({ props, state, emit }) =>
  () => {
    const { textSplit } = props

    emit('update:text', state.checkLabels.join(textSplit))
  }

const hasChildren = (option) => option && !option.isLeaf

export const selectOption =
  ({ emit, state, props, api }) =>
  (option) => {
    const { valueField } = props
    const { lazy, load } = api.getNodeConfig()
    const { navList, level, waitLoadList } = state
    const len = navList.length

    const appendNavList = () => {
      const isSame = level < len && navList[level] === option

      if (!isSame) {
        state.navList = [...navList.slice(0, level), option]
      }

      if (hasChildren(option)) {
        state.level += 1
      }

      state.isLeaf = !hasChildren(state.navList[state.navList.length - 1])
      emit('node-expand', option)
    }

    if (lazy && load && (option.selfWaitLoad || (!option.loaded && !option.isLeaf))) {
      option.loading = true
      state.loading = true
      load(option, (nodes) => {
        let index, node

        option.loading = false
        state.loading = false
        option.loaded = true
        nodes.map((data) => {
          state.store.append(data, option.data)
          index = waitLoadList.indexOf(data[valueField])
          if (index !== -1) {
            node = state.store.getNode(data)
            state.navList = state.navList.map((option) => {
              if (node && option.data[valueField] === data[valueField]) {
                option = node
              }
              return option
            })
          }
        })
        appendNavList()
      })
    } else {
      appendNavList()
    }

    emit('click', option)
  }

export const confirm =
  ({ emit, state, api }) =>
  () => {
    if (state.search.show) {
      api.searchBoxToggle(false)
    } else {
      emit('confirm', state)
      emit('update:visible', false)
      emit('update:modelValue', state.checkIds)
    }
  }

const loopSearchOption = ({
  options,
  input,
  childrenField,
  valueField,
  textField,
  prefixValue,
  prefixText,
  textSplit = '/'
}) => {
  const list = []
  options.forEach((item) => {
    const text = item[textField]
    const textNavStr = prefixText ? prefixText + textSplit + text : text
    const value = [...prefixValue, item[valueField]]
    const children = item[childrenField]

    if (text.includes(input)) {
      list.push({
        [valueField]: value,
        [textField]: textNavStr
      })
    }

    if (children && children.length) {
      const arr = loopSearchOption({
        options: children,
        input,
        childrenField,
        valueField,
        textField,
        prefixValue: value,
        prefixText: textNavStr,
        textSplit
      })
      list.push(...arr)
    }
  })

  return list
}

export const searchMethod =
  ({ state, props, api }) =>
  () => {
    const { searchConfig, valueField, textField } = props
    const { children: childrenField } = api.getNodeConfig()
    const { input, options } = state.search
    let list = []

    if (searchConfig && searchConfig.searchMethod) {
      list = searchConfig.searchMethod({ input, options, state }) || []
    } else if (input) {
      list = loopSearchOption({
        options,
        input,
        childrenField,
        valueField,
        textField,
        prefixValue: [],
        prefixText: ''
      })
    }

    if (typeof list.then === 'function') {
      list.then((data) => (state.search.filterOptions = data))
    } else {
      state.search.filterOptions = list
    }
  }

export const searchBoxToggle =
  ({ state, props, api }) =>
  (bool) => {
    const { searchConfig = {} } = props
    const { lazy } = api.getNodeConfig()

    state.search.show = bool
    state.search.input = ''

    if (bool) {
      state.search.options =
        !lazy && searchConfig.options && searchConfig.options.length ? searchConfig.options : state.store.getAllData()
      api.searchMethod()
    }
  }

export const searchSelectHandler =
  ({ emit, api, props }) =>
  (option) => {
    const { valueField } = props

    api.searchBoxToggle(false)
    api.syncCheckStatus(option[valueField])
    emit('search-click', option)
  }

export const isSelected =
  ({ state }) =>
  (option) => {
    const { navList } = state

    return navList.includes(option)
  }

export const setLevel =
  ({ state, api }) =>
  (level, option) => {
    if (!api.disabledNavOption(level, option)) {
      state.level = level
    }
  }

export const created =
  ({ api }) =>
  () => {
    api.initTreeStore()
  }

export const loadData =
  ({ props, state }) =>
  (data) => {
    const { visible } = props

    if (!visible) {
      return
    }

    state.store.setData(data)
  }

export const renderSearchOption =
  ({ state }) =>
  (text) => {
    return (text || '').split(state.search.input)
  }

export const computedNavListHandler =
  ({ state, props }) =>
  () => {
    const { textField, placeholder } = props
    const { isLeaf, navList } = state
    const placeholderArr = []
    const len = navList.length

    if (!Array.isArray(placeholder)) {
      placeholderArr.push({ data: { [textField]: placeholder }, selfWaitLoad: true })
    } else if (len < placeholder.length) {
      for (let i = len; i < placeholder.length; i++) {
        placeholderArr.push({ data: { [textField]: placeholder[i] }, selfWaitLoad: true })
      }
    }

    return isLeaf && len ? state.navList : [...state.navList, ...placeholderArr]
  }

export const disabledNavOption =
  ({ state }) =>
  (level, option) => {
    const node = state.navList[level - 1]

    return option.selfWaitLoad && (!node || !node.childNodes.length)
  }

export const getNodeConfig =
  ({ constants, props }) =>
  () => {
    const { nodeConfig, valueField } = props

    return Object.assign({ nodeKey: valueField }, constants.defaultNodeConfig, nodeConfig)
  }

export const initTreeStore =
  ({ props, state, api }) =>
  () => {
    const { data, textField, visible } = props
    const {
      nodeKey,
      lazy,
      load,
      afterLoad,
      children,
      isLeaf,
      checkStrictly,
      currentNodeKey,
      checkDescendants,
      defaultCheckedKeys,
      defaultExpandedKeys,
      autoExpandParent,
      defaultExpandAll,
      filterNodeMethod
    } = api.getNodeConfig()

    if (!visible || state.store) {
      api.syncCheckStatus()
      return
    }

    state.store = new TreeStore({
      key: nodeKey,
      data,
      lazy,
      props: {
        children,
        label: textField,
        isLeaf
      },
      load,
      afterLoad: () => {
        state.rootData = state.root.childNodes || []
        api.syncCheckStatus()
        afterLoad && afterLoad()
      },
      currentNodeKey,
      checkStrictly,
      checkDescendants,
      defaultCheckedKeys,
      defaultExpandedKeys,
      autoExpandParent,
      defaultExpandAll,
      filterNodeMethod
    })

    state.root = state.store.root

    if (!lazy) {
      state.rootData = state.root.childNodes || []
      api.syncCheckStatus()
    }
  }
