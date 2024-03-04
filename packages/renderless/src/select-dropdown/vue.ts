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
  mounted,
  closeModal,
  handleQueryChange,
  toggleSelectedBox,
  deleteSelected,
  selectedBoxConfirm,
  selectDropdownConfirm,
  cancelSearch,
  handleClear
} from './index'
import userPopper from '../common/deps/vue-popper'
import PopupManager from '../common/deps/popup-manager'
import debounce from '../common/deps/debounce'

export const api = [
  'state',
  'doDestroy',
  'closeModal',
  'debouncedQueryChange',
  'toggleSelectedBox',
  'deleteSelected',
  'selectedBoxConfirm',
  'selectDropdownConfirm',
  'cancelSearch',
  'handleClear'
]

const initState = ({ reactive, computed, popper, selectVm }) => {
  const { showPopper, currentPlacement, popperElm, referenceElm } = popper

  const state = reactive({
    showPopper,
    currentPlacement,
    popperElm,
    referenceElm,
    minWidth: '',
    query: '',
    showSelectedBox: false,
    debounce: 300,
    selectedArr: [],
    deletedArr: [],
    originValue: [],
    showClose: computed(() => selectVm.clearable && !selectVm.multiple && selectVm.modelValue !== ''),
    filterable: computed(() => selectVm.filterable),
    multiple: computed(() => selectVm.multiple),
    popperClass: computed(() => selectVm.popperClass),
    selected: computed(() =>
      selectVm.renderType === 'tree' && !selectVm.treeOp.checkStrictly
        ? selectVm.state.selected.filter((item) => !item.children)
        : selectVm.state.selected
    ),
    device: computed(() => selectVm.state.device),
    visible: false,
    windowScrollTop: 0,
    zIndex: 2000,
    valueField: computed(() => (selectVm.renderType === 'tree' ? 'id' : 'value'))
  })

  return state
}

const initApi = ({ api, popper, state, selectEmitter, constants, selectVm, parent, nextTick, props }) => {
  const { destroyPopper, doDestroy, updatePopper } = popper

  Object.assign(api, {
    state,
    doDestroy,
    handleQueryChange: handleQueryChange({ state, selectVm }),
    debouncedQueryChange: debounce(state.debounce, (value) => {
      api.handleQueryChange(value)
    }),
    toggleSelectedBox: toggleSelectedBox({ state }),
    deleteSelected: deleteSelected({ state }),
    selectedBoxConfirm: selectedBoxConfirm({ state, selectVm, nextTick }),
    selectDropdownConfirm: selectDropdownConfirm({ state, selectVm }),
    closeModal: closeModal({ state, selectVm, props }),
    cancelSearch: cancelSearch({ api, state, selectVm }),
    handleClear: handleClear({ state, selectVm }),
    mounted: mounted({ selectEmitter, constants, state, selectVm, updatePopper, destroyPopper, parent })
  })
}

const initWatch = ({ watch, selectVm, state, nextTick }) => {
  watch(
    () => selectVm.state.inputWidth,
    (val) => {
      nextTick(() => {
        state.minWidth = ((selectVm && selectVm.$el && selectVm.$el.getBoundingClientRect().width) || val) + 'px'
      })
    },
    { immediate: true }
  )

  watch(
    () => state.query,
    (val) => {
      selectVm.state.queryValue = val
    }
  )

  watch(
    () => selectVm.state.visible,
    (val) => {
      state.query = ''

      setTimeout(() => {
        state.visible = val
        state.zIndex = PopupManager.nextZIndex()
      }, 0)

      if (val && selectVm.multiple) {
        state.originValue = selectVm.modelValue.slice(0)
      }
    }
  )

  watch(
    () => selectVm.shape,
    () => {
      nextTick(() => {
        state.referenceElm = selectVm.$refs.reference && selectVm.$refs.reference.$el
      })
    }
  )
}

export const renderless = (
  props,
  { computed, onBeforeUnmount, onDeactivated, onMounted, reactive, toRefs, watch, inject },
  { vm, slots, parent, emit, nextTick, isMobileFirstMode }
) => {
  const api = {}
  const constants = parent.select._constants
  const selectEmitter = inject('selectEmitter')
  const selectVm = inject('selectVm')

  const popper = userPopper({
    emit,
    nextTick,
    onBeforeUnmount,
    onDeactivated,
    props,
    reactive,
    vm,
    slots,
    toRefs,
    watch
  })

  const state = initState({ reactive, computed, popper, props, selectVm })

  initApi({ api, popper, state, selectEmitter, constants, selectVm, parent, nextTick, props, isMobileFirstMode })
  initWatch({ watch, selectVm, state, nextTick, api })

  onBeforeUnmount(() => {
    popper.destroyPopper('remove')

    state.popperElm = null
    state.referenceElm = null
  })

  onMounted(api.mounted)

  return api
}
