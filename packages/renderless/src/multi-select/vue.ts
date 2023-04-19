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
  created,
  handleClick,
  confirm,
  reset,
  wheelChange,
  clickWheelItem,
  loadDefault
} from './index'

export const api = [
  'state',
  'created',
  'handleClick',
  'confirm',
  'reset',
  'wheelChange',
  'clickWheelItem',
  'loadDefault'
]

const initState = ({ computed, reactive }) => {
  const state = reactive({
    dataSource: [],
    wheelData: [],
    headerIndex: -1,
    showWheel: false,
    labelLevelsInfo: [],
    labelsStyle: [],
    wheelIndex: [],
    wheelText: '',
    headerInfo: [],
    defaultSelectedIndexs: [],
    defaultSelectedArray: [],
    isActive: computed(() => state.headerInfo.some(item => item.isUP))
  })

  return state
}

const initApi = ({ api, props, state, emit, nextTick, refs }) => {
  Object.assign(api, {
    state,
    created: created({ props, state, refs, nextTick }),
    handleClick: handleClick({ api, props, state }),
    confirm: confirm({ state, emit }),
    reset: reset({ api, props, state, emit }),
    wheelChange: wheelChange(state),
    clickWheelItem: clickWheelItem({ state, emit }),
    loadDefault: loadDefault({ props, state }),
  })
}

const initWatch = ({ watch, props, state, refs, nextTick }) => {
  watch(
    () => props.dataSource,
    () => {
      api.created({ props, state, refs, nextTick })
    }
  )
  watch(
    () => props.defaultSelectedArray,
    () => {
      api.created({ props, state, refs, nextTick })
    }
  )
}

export const renderless = (props, { computed, onMounted, reactive, watch }, { emit, nextTick, refs }) => {
  const api = {}
  const state = initState({ computed, reactive })

  initApi({ api, props, state, emit, nextTick, refs })

  initWatch({ watch, props, state, refs, nextTick })

  onMounted(() => {
    api.created({ props, state, refs, nextTick })
  })

  return api
}
