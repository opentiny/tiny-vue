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

import { initData, dialogTitle, disabledParentNode, filterNode, getValue, hideDialog, showDialog, sureNodevalue, disabledTreeNode, initService } from './index'
import { copyArray } from '../common/object'
import { setMenuKey } from '../tree-menu'

export const api = ['state', 'initData', 'filterNode', 'getValue', 'hideDialog', 'setMenuKey', 'showDialog', 'sureNodevalue']

const initState = ({ reactive, computed, api }) => {
  const state = reactive({
    filterText: '',
    datas: [],
    disabled: false,
    alertShow: false,
    boxVisibility: false,
    listItem: [],
    getNodeValue: [],
    currentCheckNode: [],
    titles: computed(() => api.dialogTitle())
  })

  return state
}

const initWatch = ({ watch, state, props, nextTick, vm }) => {
  watch(
    () => state.filterText,
    (value) => nextTick(() => vm.$refs.tree.filter(value))
  )

  watch(
    () => props.data,
    (value) => {
      if (value) {
        const changeData = copyArray(value)

        changeData.forEach((item) => {
          if (!item.children) {
            item.disabled = false
          } else {
            item.children.forEach((item) => {
              item.disabled = false
            })
          }
        })

        state.datas = changeData
      }
    },
    { immediate: true }
  )
}

const initApi = ({ api, state, constants, props, t, service, vm }) => {
  Object.assign(api, {
    state,
    filterNode: filterNode(),
    showDialog: showDialog(state),
    sureNodevalue: sureNodevalue(state),
    disabledTreeNode: disabledTreeNode(state),
    disabledParentNode: disabledParentNode(state),
    dialogTitle: dialogTitle({ constants, props, t }),
    setMenuKey: setMenuKey(api),
    getValue: getValue({ api, state, props }),
    initData: initData({ state, props, service, api }),
    hideDialog: hideDialog({ api, state, vm, props })
  })
}

export const renderless = (props, { computed, onMounted, reactive, watch }, { t, vm, service, constants, nextTick }) => {
  service = initService({ props, service })

  const api = {}
  const state = initState({ reactive, computed, api })

  initWatch({ watch, state, props, nextTick, vm })

  onMounted(() => {
    api.initData()
    api.disabledParentNode(state)
  })

  initApi({ api, state, constants, props, t, service, vm })

  return api
}
