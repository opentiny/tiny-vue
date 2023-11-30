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

import {
  getObj,
  getSourceData,
  recursiveData,
  getLeftCheckedData,
  getRightCheckedData,
  getTargetData,
  logicFun,
  onSourceCheckedChange,
  onTargetCheckedChange,
  addToLeft,
  addToRight,
  clearQuery,
  sortableEvent
} from './index'

export const api = ['state', 'onSourceCheckedChange', 'onTargetCheckedChange', 'addToLeft', 'addToRight', 'clearQuery']

const initState = ({ reactive, computed, api, props, h, slots }) =>
  reactive({
    leftChecked: [],
    rightChecked: [],
    rightData: computed(() => api.getRightCheckedData()),
    leftData: computed(() => api.getLeftCheckedData()),
    dataObj: computed(() => api.getObj()),
    sourceData: computed(() => api.getSourceData()),
    targetData: computed(() => api.getTargetData()),
    hasButtonTexts: computed(() => props.buttonTexts.length === 2),
    treeData: [],
    sourceTreeData: [],
    isToLeft: false,
    optionRender: computed(() => (option) => {
      if (props.renderContent) {
        return props.renderContent(h, option)
      }

      if (slots.default) {
        return slots.default({ option })
      }

      return h('span', option[props.props.label] || option[props.props.key])
    })
  })

export const renderless = (props, { computed, onMounted, reactive, h }, { $prefix, emit, refs, parent, slots }) => {
  const api = {}
  const Tree = $prefix + 'Tree'
  const Table = $prefix + 'Table'
  const state = initState({ reactive, computed, api, props, h, slots })
  const { DROPPANEL, TRANSFERPANEL } = parent.$constants

  Object.assign(api, {
    state,
    $slots: parent.$slots,
    getObj: getObj(props),
    clearQuery: clearQuery(refs),
    getSourceData: getSourceData({ props, Tree }),
    addToLeft: addToLeft({ emit, props, state }),
    getLeftCheckedData: getLeftCheckedData({ props, state }),
    getRightCheckedData: getRightCheckedData({ props, state }),
    addToRight: addToRight({ emit, refs, props, state, Tree }),
    onTargetCheckedChange: onTargetCheckedChange({ emit, state }),
    onSourceCheckedChange: onSourceCheckedChange({ emit, state }),
    logicFun: logicFun({ props, emit, state }),
    getTargetData: getTargetData({ props, state, Tree, Table }),
    recursiveData: recursiveData({ api, props, state }),
    sortableEvent: sortableEvent({ api, droppanel: DROPPANEL, props, queryDom: TRANSFERPANEL, refs, state })
  })

  onMounted(api.sortableEvent)

  return api
}
