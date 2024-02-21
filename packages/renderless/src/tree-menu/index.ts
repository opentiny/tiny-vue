/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import type { ITreeMenuApi, ITreeMenuState, ITreeMenuProps, ITreeMenuData, ITreeMenuNewData } from '@/types'

export const initData =
  ({ state, props, service, api }: { state: ITreeMenuState; props: ITreeMenuProps; service: any; api: ITreeMenuApi }) =>
  async () => {
    if (props.data) {
      state.data = props.data
      return
    }

    if (typeof service.getMenuDataSync === 'function') {
      const menuData = await service.getMenuDataSync()

      state.data = api.setMenuKey({ newData: [], menuData })
    }
  }

export const setMenuKey =
  (api: ITreeMenuApi) =>
  ({ newData, menuData }: { newData: ITreeMenuNewData[]; menuData: ITreeMenuData[] }) => {
    Array.isArray(menuData) &&
      menuData.forEach((data) => {
        const item: Partial<ITreeMenuNewData> = {}

        Object.keys(data).forEach((key) => {
          if (key === 'name') {
            item.label = data[key]
          } else if (key === 'siteNodeId') {
            item.id = data[key]
          } else if (key === 'url' && data[key]) {
            if (!data[key].includes('#')) {
              item[key] = '#/' + data[key]
            } else {
              item[key] = data[key]
            }
          } else if (key === 'children' && data[key]) {
            item.children = api.setMenuKey({
              newData: [] as ITreeMenuNewData[],
              menuData: data.children
            })
          } else {
            item[key] = data[key]
          }
        })

        newData.push({ ...data, ...item } as ITreeMenuNewData)
      })

    return newData
  }

export const filterNode = () => (value, data) => {
  if (!value) {
    return true
  }
  return data.label.includes(value)
}

export const watchFilterText =
  ({ vm }) =>
  (value) => {
    vm.$refs.tree.filter(value)
  }

export const nodeDragStart = (emit) => (node, event) => {
  emit('node-drag-start', node, event)
}

export const nodeDragEnter = (emit) => (dragNode, dropNode, event) => {
  emit('node-drag-enter', dragNode, dropNode, event)
}

export const nodeDragOver = (emit) => (dragNode, dropNode, event) => {
  emit('node-drag-over', dragNode, dropNode, event)
}

export const nodeDragEnd = (emit) => (dragNode, dropNode, dropType, event) => {
  emit('node-drag-end', dragNode, dropNode, dropType, event)
}

export const nodeDrop = (emit) => (dragNode, dropNode, dropType, event) => {
  emit('node-drop', dragNode, dropNode, dropType, event)
}

export const nodeExpand = (emit) => (nodeData, node) => {
  emit('node-expand', nodeData, node)
}

export const nodeCollapse = (emit) => (nodeData, node) => {
  emit('node-collapse', nodeData, node)
}

export const nodeClick =
  ({ emit, props, state }) =>
  (nodeData, node) => {
    emit('node-click', nodeData, node)
    if (props.showExpand && state.isExpand) {
      state.isExpand = false
    }
  }
export const checkChange = (emit) => (data, checked, indeterminate) => {
  emit('check-change', data, checked, indeterminate)
}

export const check = (emit) => (data, checkedStatus) => {
  emit('check', data, checkedStatus)
}

export const currentChange = (emit) => (data, node) => {
  emit('current-change', data, node)
}

export const getTitle = (props) => (label) => (props.showTitle ? label : '')

export const collapseChange =
  ({ state, props, emit }) =>
  () => {
    if (props.menuCollapsible) {
      state.isCollapsed = !state.isCollapsed
      emit('collapse-change', state.isCollapsed)
    }
  }

export const collapseMenu =
  ({ state, props, api }) =>
  () => {
    if (props.menuCollapsible && !state.isCollapsed) {
      api.collapseChange()
    }
  }

export const expandMenu =
  ({ state, props, api }: { state: ITreeMenuState; props: ITreeMenuProps; api: ITreeMenuApi }) =>
  () => {
    if (props.menuCollapsible && state.isCollapsed) {
      api.collapseChange()
    }
  }

export const setCurrentKey =
  ({ vm }) =>
  (key: string) => {
    vm.$refs.tree.setCurrentKey(key)
  }

export const getCurrentKey =
  ({ vm }) =>
  () => {
    return vm.$refs.tree.getCurrentKey()
  }

export const setCurrentNode =
  ({ vm }) =>
  (key: string) => {
    vm.$refs.tree.setCurrentKey(key)
  }

export const getCurrentNode =
  ({ vm }) =>
  () => {
    return vm.$refs.tree.getCurrentNode()
  }

export const handleToggleMenu =
  ({ state, vm }) =>
  (type) => {
    state.isExpand = !state.isExpand
    if (type === 'expand') {
      state.currentKey = state.nodeKey !== null ? [state.nodeKey] : []
    } else {
      state.nodeKey = vm.$refs.tree.getCurrentKey()
      vm.$refs.tree.expandAllNodes(false)
    }
  }
export const computedTreeStyle =
  ({ props }) =>
  () => {
    let minusHeight = 0
    if (props.showExpand) {
      minusHeight += 64
    }
    if (props.showFilter) {
      minusHeight += 42
    }
    return { 'height': `calc(100% - ${minusHeight}px)` }
  }
