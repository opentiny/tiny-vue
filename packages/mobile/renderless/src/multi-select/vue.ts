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
  initValue,
  handleClick,
  confirm,
  reset,
  wheelChange,
  clickWheelItem,
  loadDefault,
  handleSearchBtnClick,
  handleOptionSelect,
  handleClose,
  toggleItemExpand,
  computedCurrentOptions,
  updateValue,
  handleSearchInput,
  updateTitle
} from './index'

export const api = [
  'state',
  'created',
  'handleClick',
  'confirm',
  'reset',
  'wheelChange',
  'clickWheelItem',
  'loadDefault',
  'handleSearchBtnClick',
  'handleClose',
  'handleSearchInput'
]

const initState = ({ emitter, reactive, computed, api, props }) => {
  const state = reactive({
    dataSource: [],
    wheelData: [],
    isSearching: false,
    headerIndex: -1,
    showOptions: false,
    labelLevelsInfo: [],
    labelsStyle: [],
    wheelIndex: [],
    wheelText: '',
    headerInfo: [],
    defaultSelectedIndexs: [],
    defaultSelectedArray: [],
    multiSelectEmitter: emitter(),
    searchValue: '',
    optionMap: [],
    currentOptions: computed(() => api.computedCurrentOptions()),
    showMask: computed(() => props.mask && state.showOptions)
  })

  return state
}

const initApi = ({ api, props, state, emit, nextTick, refs, vm }) => {
  Object.assign(api, {
    state,
    created: created({ api, emit, props, state, refs, nextTick }),
    initValue: initValue({ props, emit }),
    handleClick: handleClick({ api, props, state }),
    confirm: confirm({ state, emit }),
    reset: reset({ api, props, state, emit }),
    wheelChange: wheelChange(state),
    clickWheelItem: clickWheelItem({ state, emit }),
    loadDefault: loadDefault({ props, state }),
    handleSearchBtnClick: handleSearchBtnClick({ props, state, nextTick, vm }),
    handleOptionSelect: handleOptionSelect({ api, state, emit }),
    handleClose: handleClose(state),
    toggleItemExpand: toggleItemExpand({ state }),
    computedCurrentOptions: computedCurrentOptions({ state, props }),
    updateValue: updateValue({ state, props, emit }),
    updateTitle: updateTitle({ props, state }),
    handleSearchInput: handleSearchInput({ state, emit })
  })
}

const initWatch = ({ api, watch, props, state, refs, nextTick }) => {
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
  watch(
    () => props.modelValue,
    () => {
      api.updateTitle()
    },
    { deep: true }
  )
}

export const renderless = (
  props,
  { onMounted, reactive, watch, provide, computed },
  { emit, nextTick, refs, vm, emitter }
) => {
  const api = {}
  const state = initState({ emitter, reactive, computed, api, props })

  provide('multiSelect', vm)

  initApi({ api, props, state, emit, nextTick, refs, vm })

  initWatch({ api, watch, props, state, refs, nextTick })

  onMounted(() => {
    api.created({ props, state, refs, nextTick })
  })

  state.multiSelectEmitter.on('multiSelectItemClick', api.handleOptionSelect)
  state.multiSelectEmitter.on('toggleItemExpand', api.toggleItemExpand)

  return api
}
