import { callInterceptor } from '@opentiny/vue-renderless/common/function'
import debounce from '@opentiny/vue-renderless/common/deps/debounce'
import { hooks } from '@opentiny/vue-common'
import { initDrag } from './dnd'

// header th selector
const headerTh = 'th.tiny-grid-header__column:not(.col__gutter):not(.fixed__hidden)'

const groupKey = 'dndGroup'
const idKey = 'colid'
const pidKey = 'pColid'

let dndGroup = 0

const setDndAttribute = (ths, colidMap, isColumnGroupLevel) => {
  const pColidArr = []
  const groupArr = []

  ths.forEach((th) => {
    const pColid = colidMap.get(th.dataset.colid).pColid || ''

    th.setAttribute('draggable', true)
    th.setAttribute('data-p-colid', pColid)

    const index = pColidArr.indexOf(pColid)

    if (index === -1) {
      pColidArr.push(pColid)
      groupArr.push([th])
    } else {
      groupArr[index].push(th)
    }
  })

  let groupId

  if (!isColumnGroupLevel) {
    groupId = ++dndGroup
  }

  groupArr.forEach((group) => {
    if (isColumnGroupLevel) {
      groupId = ++dndGroup
    }

    group.forEach((th) => th.setAttribute('data-dnd-group', groupId))
  })
}

const getColidMap = (treeArray) => {
  const result = new Map()
  const parentMap = new WeakMap()
  const colidMap = new Map()

  const traverse = (children, parent) => {
    if (Array.isArray(children) && children.length > 0) {
      children.forEach((child) => {
        parentMap.set(child, parent)
        colidMap.set(child.id, child)
        traverse(child.children, child)
      })
    }
  }

  traverse(treeArray, null)

  for (const [colid, column] of colidMap) {
    const pCol = parentMap.get(column)
    const pColid = pCol ? pCol.id : ''
    result.set(colid, { pColid, pCol, column })
  }

  return result
}

const createDragHander = (state, $table) => {
  // 开始拖拽处理
  const dragStart = (dragTarget) => {
    const dragColid = dragTarget.dataset.colid
    // 记录被拖拽列位置信息
    const dragParentColumn = state.colidMap.get(dragColid).pCol
    const dragParentChildren = dragParentColumn ? dragParentColumn.children : state.collectColumn
    const dragColumn = state.colidMap.get(dragColid).column
    const dragIndex = dragParentChildren.indexOf(dragColumn)

    $table.$emit('column-drag-start', { dragParentChildren, dragColumn, dragIndex })
  }

  // 放置结束处理
  const drop = (_, dragTarget, dropTarget) => {
    const dragColid = dragTarget.dataset.colid
    const dropColid = dropTarget.dataset.colid
    // 记录被拖拽列位置信息
    const dragParentColumn = state.colidMap.get(dragColid).pCol
    const dragParentChildren = dragParentColumn ? dragParentColumn.children : state.collectColumn
    const dragColumn = state.colidMap.get(dragColid).column
    const dragIndex = dragParentChildren.indexOf(dragColumn)
    // 记录被放置列位置信息
    const dropParentColumn = state.colidMap.get(dropColid).pCol
    const dropParentChildren = dropParentColumn ? dropParentColumn.children : state.collectColumn
    const dropColumn = state.colidMap.get(dropColid).column
    const dropIndex = dropParentChildren.indexOf(dropColumn)
    // 拖拽信息参数
    const args = { dragParentChildren, dragColumn, dragIndex, dropParentChildren, dropColumn, dropIndex }
    // 放置前处理
    callInterceptor(state.dropConfig.columnBeforeDrop, {
      args: [args],
      done: () => {
        // 移除被拖拽列，并插入到被放置的位置
        dragParentChildren.splice(dragIndex, 1)
        dropParentChildren.splice(dropIndex, 0, dragColumn)

        const { lastScrollLeft, lastScrollTop, scrollXLoad, scrollYLoad } = $table

        // 刷新表格的收集列
        $table.loadColumn(state.collectColumn)
        $table.$emit('column-drop', args)

        setTimeout(() => {
          if (lastScrollLeft || lastScrollTop) {
            $table.scrollTo(lastScrollLeft, lastScrollTop)
            scrollXLoad && $table.triggerScrollXEvent()
            scrollYLoad && $table.triggerScrollYEvent({ target: { scrollTop: lastScrollTop } })
          }
        })
      }
    })
  }

  return { dragStart, drop }
}

const createTableColumnWatch = ($table, state, isColumnGroupLevel, stopHandlerMap) =>
  debounce(100, () => {
    const headers = ['table', 'left', 'right']

    headers.forEach((key) => {
      const headerVm = $table.$refs[`${key}Header`]

      if (headerVm) {
        const dndProxy = headerVm.$el

        if (dndProxy) {
          const dndThs = Array.from(dndProxy.querySelectorAll(headerTh))

          // 表头th渲染时已添加data-colid属性，这里额外增加draggable、data-p-colid和data-dnd-group属性
          setDndAttribute(dndThs, state.colidMap, isColumnGroupLevel)

          if (stopHandlerMap.has(dndProxy)) {
            stopHandlerMap.get(dndProxy).destroy()
            stopHandlerMap.delete(dndProxy)
          }

          const { dragStart, drop } = createDragHander(state, $table)
          const dropClass = state.dropConfig.columnDropClass || ''

          stopHandlerMap.set(
            dndProxy,
            initDrag(dndProxy, dndThs, { dragStart, drop, dropClass, groupKey, idKey, pidKey })
          )
        }
      }
    })
  })

const createUseDrag =
  ({ reactive, watch, getCurrentInstance, onBeforeUnmount }) =>
  ({ dropConfig, collectColumn, tableColumn }) => {
    const state = reactive({
      dropConfig,
      collectColumn,
      tableColumn,
      colidMap: null
    })

    // 在设置 scheme 标志位 v2 时，列拖拽使用新方案
    if (!state.dropConfig || (state.dropConfig && state.dropConfig.scheme !== 'v2')) return

    const $table = getCurrentInstance().proxy

    // 列拖拽处理
    if (state.dropConfig.column) {
      // 是否只允许同层级拖拽
      const isColumnGroupLevel = !state.dropConfig.columnGroup || state.dropConfig.columnGroup === 'level'
      const stopHandlerMap = new Map()
      const tableColumnWatch = createTableColumnWatch($table, state, isColumnGroupLevel, stopHandlerMap)

      watch(collectColumn, () => {
        state.colidMap = getColidMap(state.collectColumn)
      })

      watch(tableColumn, () => tableColumnWatch())

      onBeforeUnmount(() => {
        if (stopHandlerMap.size > 0) {
          const dndProxyList = []

          for (const [dndProxy, stopHander] of stopHandlerMap) {
            dndProxyList.push(dndProxy)
            stopHander.destroy()
          }

          dndProxyList.forEach((dndProxy) => stopHandlerMap.delete(dndProxy))
        }
      })
    }
  }

export const useDrag = createUseDrag(hooks)
