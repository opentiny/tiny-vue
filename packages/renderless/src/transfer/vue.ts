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
import type {
  ITransferApi,
  ITransferProps,
  ITransferState,
  ISharedRenderlessParamHooks,
  ITransferRenderlessParamUtils
} from '@/types'

import {
  getObj,
  getSourceData,
  getLeftCheckedData,
  getRightCheckedData,
  getTargetData,
  logicFun,
  onSourceCheckedChange,
  onTargetCheckedChange,
  addToLeft,
  addToRight,
  clearQuery,
  sortableEvent,
  recurseTreeDataToFlagInitDisabled,
  recurseTreeDataToDisabled,
  setCheckedOnMounted
} from './index'

export const api = ['state', 'onSourceCheckedChange', 'onTargetCheckedChange', 'addToLeft', 'addToRight', 'clearQuery']

const initState = ({ reactive, computed, api, props, h, slots, Tree }): ITransferState => {
  const state = reactive({
    leftChecked: [],
    rightChecked: [],
    rightData: computed(() => api.getRightCheckedData()),
    leftData: computed(() => api.getLeftCheckedData()),
    dataObj: computed(() => api.getObj()),
    sourceData: computed(() => api.getSourceData()),
    targetData: computed(() => api.getTargetData()),
    hasButtonTexts: computed(() => props.buttonTexts.length === 2),
    isToLeft: false,
    optionRender: computed(() => (option) => {
      if (props.renderContent) {
        return props.renderContent(h, option)
      }

      if (slots.default) {
        return slots.default({ option })
      }

      return h('span', option[props.props.label] || option[props.props.key])
    }),
    isToLeftBtnDisabled: computed(() => {
      if (props.render?.plugin?.name === Tree) {
        // 树模式下，已经选中的节点会勾选，所以要判断勾选的数量是否大于modelValue的数量
        return props.toLeftDisable && state.leftChecked.length <= props.modelValue.length
      }
      return props.toLeftDisable && state.leftChecked.length === 0
    })
  })

  return state
}

export const renderless = (
  props: ITransferProps,
  { computed, onMounted, reactive, h, watch }: ISharedRenderlessParamHooks,
  { $prefix, emit, refs, parent, slots, vm }: ITransferRenderlessParamUtils
) => {
  const api = {} as ITransferApi
  const Tree = $prefix + 'Tree'
  const Table = $prefix + 'Table'
  const state = initState({ reactive, computed, api, props, h, slots, Tree })
  const { DROPPANEL, TRANSFERPANEL } = parent.$constants

  Object.assign(api, {
    state,
    getObj: getObj(props),
    clearQuery: clearQuery(refs),
    getSourceData: getSourceData({ props, Tree }),
    addToLeft: addToLeft({ emit, props, state }),
    getLeftCheckedData: getLeftCheckedData({ props, state }),
    getRightCheckedData: getRightCheckedData({ props, state }),
    addToRight: addToRight({ emit, refs, props, state, Tree }),
    onTargetCheckedChange: onTargetCheckedChange({ emit, state }),
    onSourceCheckedChange: onSourceCheckedChange({ emit, state }),
    logicFun: logicFun({ props, emit, state, vm }),
    getTargetData: getTargetData({ props, state, Tree, Table }),
    sortableEvent: sortableEvent({ api, droppanel: DROPPANEL, props, queryDom: TRANSFERPANEL, refs }),
    setCheckedOnMounted: setCheckedOnMounted({ props, vm, Tree })
  })

  // 树模式禁用已经选中的节点
  if (props.render?.plugin?.name === Tree) {
    watch(
      props.data,
      (value) => {
        recurseTreeDataToFlagInitDisabled(
          value,
          props.props.children || 'children',
          props.props.key || 'key',
          props.modelValue
        )
      },
      { immediate: true }
    )

    watch(
      () => props.modelValue,
      (value) => {
        if (props.render?.plugin?.name === Tree) {
          recurseTreeDataToDisabled(props.data, props.props.children || 'children', props.props.key || 'key', value)
          api.setCheckedOnMounted()
        }
      }
    )
  }
  onMounted(api.sortableEvent)
  onMounted(api.setCheckedOnMounted)

  return api
}
