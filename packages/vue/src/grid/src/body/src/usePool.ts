import { hooks } from '@opentiny/vue-common'

const difference = (arr, other) => arr.filter((i) => other.findIndex((j) => i.id === j.id) === -1)

let uid = 0

const createPool = (array) => {
  if (!Array.isArray(array)) {
    return
  }

  const context = {
    pool: [],
    idViewMap: new Map(),
    unusedViews: [],
    array
  }

  array.forEach((item) => {
    const view = { id: ++uid, used: true, item }
    context.pool.push(view)
    context.idViewMap.set(item.id, view)
  })

  return context
}

const updatePool = (array, context) => {
  if (!Array.isArray(array)) {
    return
  }

  const expires = difference(context.array, array)
  const indices = new WeakMap()

  expires.forEach((item) => {
    const view = context.idViewMap.get(item.id)

    view.used = false

    context.idViewMap.delete(item.id)
    context.unusedViews.push(view)
  })

  array.forEach((item, i) => {
    indices.set(item, i)

    let view = context.idViewMap.get(item.id)

    if (!view) {
      if (context.unusedViews.length > 0) {
        view = context.unusedViews.shift()
      } else {
        view = { id: ++uid, used: true, item }
        context.pool.push(view)
      }

      context.idViewMap.set(item.id, view)
    }

    view.used = true
    view.item = item
  })

  context.array = array
  context.pool.sort((a, b) => (a.used ? (b.used ? indices.get(a.item) - indices.get(b.item) : -1) : b.used ? 1 : 0))

  return context
}

export const usePool = (props) => {
  const columnPool = hooks.ref([])
  const rowPool = hooks.ref([])
  const isNoData = hooks.ref(true)

  let columnContext

  hooks.watch(
    () => props.tableColumn,
    () => {
      if (columnContext) {
        updatePool(props.tableColumn, columnContext)
      } else {
        columnContext = createPool(props.tableColumn)
      }

      columnPool.value = columnContext.pool
    }
  )

  let rowContext

  hooks.watch(
    () => props.tableNode,
    () => {
      if (rowContext) {
        updatePool(props.tableNode, rowContext)
      } else {
        rowContext = createPool(props.tableNode)
      }

      rowPool.value = rowContext?.pool || rowPool.value
      isNoData.value = !(props.tableNode?.length > 0)
    }
  )

  return { columnPool, rowPool, isNoData }
}
