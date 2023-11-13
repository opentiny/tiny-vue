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
import { IWizardRenderlessParams, IWizardPropsDataNode, IWizardNodesItem } from '@/types'

import { format } from '../common/date'
import { copyArray, extend } from '../common/object'
import { isObject } from '../common/type'

export const lastStepHandle =
  ({ state, emit }: Pick<IWizardRenderlessParams, 'state' | 'emit'>) =>
  () => {
    if (state.datas[0].status === state.doing) {
      return
    }

    for (let i = 0; i < state.datas.length; i++) {
      if (state.datas[i].status === state.doing) {
        state.datas[i].status = state.wait
        state.datas[i - 1].status = state.doing
        state.submitShow = false
      }
    }

    emit('btnPrev', state.datas)
  }

export const nextStepHandle =
  ({ state, emit }: Pick<IWizardRenderlessParams, 'state' | 'emit'>) =>
  () => {
    for (let i = 0; i < state.datas.length; i++) {
      if (state.datas[state.datas.length - 1].status === state.doing) {
        return
      }

      if (state.datas[i].status === state.doing) {
        state.datas[i].status = state.ready
        state.datas[i + 1].status = state.doing
        state.submitShow = i + 2 === state.datas.length
        break
      }
    }

    emit('btnNext', state.datas)
  }

export const btnSaveHandle =
  ({ state, emit }: Pick<IWizardRenderlessParams, 'state' | 'emit'>) =>
  () => {
    emit('btnSave', state.datas)
  }

export const submitHandle =
  ({ state, emit }: Pick<IWizardRenderlessParams, 'state' | 'emit'>) =>
  () => {
    emit('btnSubmit', state.datas)
  }

export const showNode =
  (emit: IWizardRenderlessParams['emit']) => (node: IWizardPropsDataNode, index: number, event: Event) => {
    node.showNode = !node.showNode
    emit('node-click', node, index, event)
  }

export const nodeClick =
  (emit: IWizardRenderlessParams['emit']) => (node: IWizardPropsDataNode, index: number, event: Event) => {
    emit('node-click', node, index, event)
  }

export const cloneDeep = (data) => {
  if (isObject(data)) {
    return extend(true, data)
  } else if (Array.isArray(data)) {
    return copyArray(data)
  } else {
    return data
  }
}

export const timelineflowData =
  ({ state, props, api }: Pick<IWizardRenderlessParams, 'state' | 'props' | 'api'>) =>
  () => {
    if (!props.timeLineFlow) {
      return
    }

    let timelineData = cloneDeep(state.datas)
      .map((item) => {
        item._dateTime = new Date(typeof item.date === 'string' ? item.date.replace(/-/g, '/') : item.date)
        return item
      })
      .sort((a, b) => a._dateTime.getTime() - b._dateTime.getTime())
      .map((item) => {
        item.date = format(
          item._dateTime,
          typeof state.datas[0].date === 'string' && ~state.datas[0].date.indexOf('/') ? 'yyyy/MM/dd' : 'yyyy-MM-dd'
        )
        item.time = format(item._dateTime, 'hh:mm')
        delete item._dateTime

        return item
      })

    let newArr = []

    timelineData.forEach((item, i) => {
      if (i > 0 && item.date === timelineData[i - 1].date) {
        newArr[newArr.length - 1].value.push(item)
      } else {
        newArr.push({
          showNode: true,
          value: [item],
          date: item.date
        })
      }
    })

    api.setTimelineflowNodeStatus(newArr)

    state.datas = newArr
  }

export const setTimelineflowNodeStatus = (state: IWizardRenderlessParams['state']) => (nodes: IWizardNodesItem[]) => {
  const isNormalArray = (arr) => Array.isArray(arr) && arr.length

  if (isNormalArray(nodes)) {
    nodes.forEach((node) => {
      if (isNormalArray(node.value)) {
        node.nodeStatus = node.value[0].status
      } else {
        node.nodeStatus = state.wait
      }
    })
  }
}
