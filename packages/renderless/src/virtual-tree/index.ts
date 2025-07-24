const kebab = (key) =>
  String(key)
    .replace(/\B([A-Z])/g, '-$1')
    .toLowerCase()

const fromProps = (props) => {
  const treeOp = props.treeOp || {}

  const { nodeKey: treeNodeKey, props: treeProps, data = [], defaultExpandedKeys } = treeOp
  const { defaultExpandAll, events = {}, ...others } = treeOp

  const nodeKey = treeNodeKey || 'id'
  const childrenKey = (treeProps && treeProps.children) || 'children'

  return { data, nodeKey, childrenKey, defaultExpandedKeys, defaultExpandAll, events, others }
}

const flattenTreeData = ({ expandeds, data, nodeKey, childrenKey }) => {
  const chart = []
  const stack = []

  const flatChart = (treeData) => {
    if (Array.isArray(treeData) && treeData.length > 0) {
      treeData.forEach((item) => {
        chart.push([...stack, item])

        if (expandeds.includes(item[nodeKey])) {
          stack.push(item)
          flatChart(item[childrenKey])
          stack.pop(item)
        }
      })
    }
  }

  flatChart(data)

  return chart
}

const computeVsBoxOptions = ({ props, expandeds, data, nodeKey, childrenKey }) => {
  const width = +props.width
  const height = +props.height
  const rowHeight = +props.rowHeight
  const scrollbarSize = +props.scrollbarSize

  // 根据展开状态和树数据计算 rows
  const rows = flattenTreeData({ expandeds, data, nodeKey, childrenKey })
  const rowSizes = rows.map(() => rowHeight)

  const vsBoxOptions = {
    width,
    height,
    columns: ['c-1'],
    columnSizes: [width - scrollbarSize],
    rows,
    rowSizes,
    fixedColumns: [[], []],
    fixedRows: [[], []],
    spanConfig: [[]],
    scrollbarSize: props.scrollbarSize
  }

  return vsBoxOptions
}

export const computeState =
  ({ props, state }) =>
  () => {
    const { data, nodeKey, childrenKey, defaultExpandedKeys, defaultExpandAll, events, others } = fromProps(props)

    let expandeds = []

    if (!state._expandedsInited) {
      if (defaultExpandAll) {
        const traverse = (arr) => {
          arr.forEach((item) => {
            const key = item[nodeKey]
            const children = item[childrenKey]

            if (Array.isArray(children) && children.length) {
              expandeds.push(key)
              traverse(children)
            }
          })
        }

        if (Array.isArray(data) && data.length) {
          traverse(data)
        }
      } else if (Array.isArray(defaultExpandedKeys) && defaultExpandedKeys.length) {
        expandeds = [...defaultExpandedKeys]
      }
    }

    expandeds = state._expandedsInited ? state.expandeds : expandeds

    const defaultProps = { showCheckEasily: false, willChangeView: false }
    const treeOptions = { ...others, nodeKey, defaultExpandedKeys: expandeds, ...defaultProps }
    const treeEvents = {}

    for (let key in events) {
      const eventKey = kebab(key)
      treeEvents[eventKey] = events[key]
    }

    const vsBoxOptions = computeVsBoxOptions({ props, expandeds, data, nodeKey, childrenKey })

    state.expandeds = expandeds
    state.treeOptions = treeOptions
    state.treeEvents = treeEvents
    state.vsBoxOptions = vsBoxOptions

    if (!state._expandedsInited) {
      state._expandedsInited = true
    }
  }

export const shouldRender = (state) => (node) => {
  return node && node.data && state.renderRows.includes(node.data)
}

export const onVsBoxChange =
  ({ props, state }) =>
  ({ viewRows }) => {
    const rowHeight = +props.rowHeight
    const renderRows = []

    viewRows.forEach((viewRow) => {
      viewRow.info.raw.forEach((treeRow) => {
        if (!renderRows.includes(treeRow)) {
          renderRows.push(treeRow)
        }
      })
    })

    state.renderRows = renderRows

    const firstViewRow = viewRows[0]

    if (firstViewRow) {
      const translateYValue = firstViewRow.info.offset - (firstViewRow.info.raw.length - 1) * rowHeight

      state.treeStyle = { transform: `translateY(${translateYValue}px)` }
    }
  }

export const onTreeChange =
  ({ nextTick, props, state, vm }) =>
  () => {
    const vsBoxVm = vm.$refs.vsBox
    const treeVm = vm.$refs.tree
    const { data, nodeKey, childrenKey } = fromProps(props)

    nextTick(() => {
      const expandeds = []

      const traverse = (childNodes) => {
        if (Array.isArray(childNodes) && childNodes.length > 0) {
          childNodes.forEach((node) => {
            if (node.expanded) {
              expandeds.push(node.data[nodeKey])
              traverse(node.childNodes)
            }
          })
        }
      }

      traverse(treeVm.state.root.childNodes)

      state.expandeds = expandeds
      state.treeOptions = { ...state.treeOptions, defaultExpandedKeys: expandeds }
      state.vsBoxOptions = computeVsBoxOptions({ props, expandeds, data, nodeKey, childrenKey })

      // 在展开合起树时，默认保持之前的滚动位置
      setTimeout(() => vsBoxVm.refresh({ isKeepScrollTop: true }))
    })
  }

export const getTreeInstance = (vm) => () => vm.$refs.tree

// 在改变数据之前调用此方法，标记在下次刷新时保持展开状态。在刷新之后，此状态就失效。
export const keepExpandStatus = (state) => () => {
  state._keepExpandStatus = true
}

// 在改变数据之前调用此方法，标记在下次刷新时保持滚动位置。在刷新之后，此状态就失效。
export const keepScrollTop = (state) => () => {
  state._keepScrollTop = true
}

export const refresh =
  ({ api, state, vm }) =>
  () => {
    // 在刷新时，默认不保持之前的展开状态和滚动位置。但是如果用户有相应设置，则可以保持
    const isKeepExpandStatus = state._keepExpandStatus || false
    const isKeepScrollTop = state._keepScrollTop || false

    if (!isKeepExpandStatus) {
      state._expandedsInited = false
    }

    api.computeState()

    const vsBoxVm = vm.$refs.vsBox

    if (vsBoxVm) {
      setTimeout(() => vsBoxVm.refresh({ isKeepScrollTop }))
    }

    // 在消费状态后就使其失效
    if (state._keepExpandStatus) state._keepExpandStatus = false

    // 在消费状态后就使其失效
    if (state._keepScrollTop) state._keepScrollTop = false
  }
