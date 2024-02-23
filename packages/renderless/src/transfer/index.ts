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
import type { ITransferProps, ITransferRenderlessParams } from '@/types'
import { copyArray } from '../common/object'

/** 生成全量数据对应的一个大对象 */
export const getObj = (props: ITransferProps) => () =>
  props.data.reduce((o, cur) => (o[cur[props.props.key]] = cur) && o, {})

/** 返回左边的数据项 */
export const getSourceData =
  ({ props, Tree }: Pick<ITransferRenderlessParams, 'props'> & { Tree: string }) =>
  () => {
    if (props.render && props.render.plugin.name === Tree) {
      return props.data
    }

    return props.data.filter((item: any) => !props.modelValue.includes(item[props.props.key]))
  }

export const getFlatData = (data, hasChildren) => {
  const nodes = []

  const getChild = (data) => {
    data.forEach((node) => {
      nodes.push(node)
      if (node.children && node.children.length > 0) {
        getChild(node.children)
      }
    })
  }

  getChild(data)

  if (hasChildren) {
    nodes.forEach((item) => {
      if (item.children) {
        delete item.children
      }
    })
  }

  return nodes
}

/** 返回右边的数据项 */
export const getTargetData =
  ({
    props,
    state,
    Tree,
    Table
  }: Pick<ITransferRenderlessParams, 'props' | 'state'> & { Tree: string; Table: string }) =>
  () => {
    if (props.render && props.render.plugin.name === Tree) {
      const nodes = getFlatData(copyArray(props.data), true)

      const rightData = nodes.filter((item) => props.modelValue.includes(item[props.props.key]))

      const sortAry = []

      props.modelValue.forEach((value) => {
        sortAry.push(rightData.filter((item) => item[props.props.key] === value)[0])
      })

      sortAry.flag = 'sort'

      return sortAry
    }

    if (props.targetOrder === 'original') {
      return props.data.filter((item) => props.modelValue.includes(item[props.props.key]))
    } else {
      const data = props.modelValue.reduce((arr, cur) => {
        const val = state.dataObj[cur]

        if (val) {
          arr.push(val)
        }

        return arr
      }, [])

      if (props.render && props.render.plugin.name === Table) {
        data.flag = 'table'
      }

      return data
    }
  }

export const onSourceCheckedChange =
  ({ emit, state }: Pick<ITransferRenderlessParams, 'emit' | 'state'>) =>
  (val: string[], movedKeys: string[]) => {
    state.leftChecked = val

    if (movedKeys === undefined) {
      return
    }

    emit('left-check-change', val, movedKeys)
  }

export const onTargetCheckedChange =
  ({ emit, state }: Pick<ITransferRenderlessParams, 'emit' | 'state'>) =>
  (val: string[], movedKeys: string[]) => {
    state.rightChecked = val

    if (movedKeys === undefined) {
      return
    }

    emit('right-check-change', val, movedKeys)
  }

export const addToLeft =
  ({ emit, props, state }: Pick<ITransferRenderlessParams, 'emit' | 'props' | 'state'>) =>
  (value: undefined | 'all') => {
    const change = () => {
      state.isToLeft = true

      let currentValue = props.modelValue.slice()

      if (value === 'all') {
        state.rightChecked = state.rightData.map((item) => item[props.props.key])
      }

      state.rightChecked.forEach((item) => {
        const index = currentValue.indexOf(item)

        if (index > -1) {
          currentValue.splice(index, 1)
        }
      })

      state.rightChecked = state.rightChecked.slice(0)

      emit('update:modelValue', currentValue)
      emit('change', currentValue, 'left', state.rightChecked)
    }

    props.beforeTransfer ? props.beforeTransfer(change) : change()
  }

export const addToRight =
  ({
    emit,
    refs,
    props,
    state,
    Tree
  }: Pick<ITransferRenderlessParams, 'emit' | 'props' | 'state' | 'refs'> & { Tree: string }) =>
  (value: undefined | 'all') => {
    const change = () => {
      state.isToLeft = false

      let currentValue = props.modelValue.slice()
      const itemsToBeMoved = []
      const key = props.props.key

      if (props.render && props.render.plugin.name === Tree) {
        if (!props.treeOp.checkStrictly) {
          currentValue = refs.leftPanel.$refs.plugin.getCheckedKeys()
        } else {
          state.leftChecked.forEach((item) => !currentValue.includes(item) && currentValue.push(item))
        }
      } else {
        if (value === 'all') {
          state.leftData.forEach((item) => {
            const itemKey = item[key]

            if (!props.modelValue.includes(itemKey)) {
              itemsToBeMoved.push(itemKey)
            }
          })

          state.leftChecked = itemsToBeMoved.slice()
        } else {
          props.data.forEach((item) => {
            const itemKey = item[key]

            if (state.leftChecked.includes(itemKey) && !props.modelValue.includes(itemKey)) {
              itemsToBeMoved.push(itemKey)
            }
          })
        }

        currentValue =
          props.targetOrder === 'unshift' ? itemsToBeMoved.concat(currentValue) : currentValue.concat(itemsToBeMoved)
      }

      state.rightDisabled = false

      emit('update:modelValue', currentValue)
      emit('change', currentValue, 'right', state.leftChecked)
    }

    props.beforeTransfer ? props.beforeTransfer(change) : change()
  }

export const clearQuery = (refs: ITransferRenderlessParams['refs']) => (which: 'left' | 'right') => {
  if (which === 'left') {
    refs.leftPanel.state.query = ''
  } else if (which === 'right') {
    refs.rightPanel.state.query = ''
  }
}

/** SortableJs 插件的回调逻辑， 添加，删除，更新事件后，触发本函数 */
export const logicFun =
  ({ props, emit, state }: Pick<ITransferRenderlessParams, 'emit' | 'props' | 'state'>) =>
  ({ event, isAdd, pullMode }: { event: any; isAdd?: boolean; pullMode?: 'sort' }) => {
    let currentValue = props.modelValue.slice()
    let movedKeys = []

    if (pullMode) {
      currentValue.splice(event.newIndex, 0, currentValue.splice(event.oldIndex, 1)[0])
    } else {
      const key = isAdd
        ? state.targetData[event.oldIndex][props.props.key]
        : state.sourceData[event.oldIndex][props.props.key]
      const index = isAdd ? state.rightChecked.indexOf(key) : state.leftChecked.indexOf(key)
      const valueIndex = currentValue.indexOf(key)

      if (isAdd) {
        ~valueIndex && currentValue.splice(valueIndex, 1)
      } else {
        !~valueIndex && currentValue.splice(event.newIndex, 0, key)
      }

      if (~index) {
        isAdd ? state.rightChecked.splice(index, 1) : state.leftChecked.splice(index, 1)
      }

      movedKeys = [key]
    }

    state.rightChecked = state.rightChecked.slice(0)

    emit('update:modelValue', currentValue)
    emit('change', currentValue, 'left', movedKeys)
  }

/** 组件加载后，给左右面板初始化Sortable的功能 */
export const sortableEvent =
  ({
    api,
    droppanel,
    props,
    queryDom,
    refs
  }: Pick<ITransferRenderlessParams, 'api' | 'props' | 'refs'> & { droppanel: string; queryDom: string }) =>
  () => {
    if (props.dropConfig) {
      const leftPanel = refs.leftPanel.$el.querySelector(droppanel)
      const Sortable = props.dropConfig.plugin

      // eslint-disable-next-line no-new
      new Sortable(leftPanel, {
        group: 'sorting',
        handle: queryDom,
        sort: false,
        filter: '.is-disabled',
        onAdd(event) {
          api.logicFun({ event, isAdd: true })
        },
        onRemove(event) {
          api.logicFun({ event, isAdd: false })
        }
      })

      const rightPanle = refs.rightPanel.$el.querySelector(droppanel)

      // eslint-disable-next-line no-new
      new Sortable(rightPanle, {
        group: 'sorting',
        handle: queryDom,
        sort: true,
        filter: '.is-disabled',
        onUpdate(event) {
          if (event.pullMode) {
            return
          }

          api.logicFun({ event, pullMode: 'sort' })
        }
      })
    }
  }

export const getLeftCheckedData =
  ({ props, state }: Pick<ITransferRenderlessParams, 'state' | 'props'>) =>
  () =>
    state.sourceData.filter((item) => !item[props.props.disabled])

export const getRightCheckedData =
  ({ props, state }: Pick<ITransferRenderlessParams, 'state' | 'props'>) =>
  () =>
    state.targetData.filter((item) => !item[props.props.disabled])
