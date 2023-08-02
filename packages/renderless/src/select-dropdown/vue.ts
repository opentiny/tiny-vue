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

import { mounted } from './index'
import userPopper from '../common/deps/vue-popper'

export const api = ['state', 'doDestroy']

const initState = ({ reactive, computed, popper, selectVm }) => {
  const { showPopper, currentPlacement, popperElm, referenceElm } = popper

  const state = reactive({
    showPopper,
    currentPlacement,
    popperElm,
    referenceElm,
    minWidth: '',
    multiple: computed(() => selectVm.multiple),
    popperClass: computed(() => selectVm.popperClass)
  })

  return state
}

const initApi = ({ api, popper, state, selectEmitter, constants, selectVm, parent }) => {
  const { destroyPopper, doDestroy, updatePopper } = popper

  Object.assign(api, {
    state,
    doDestroy,
    mounted: mounted({ selectEmitter, constants, state, selectVm, updatePopper, destroyPopper, parent })
  })
}

const initWatch = ({ watch, selectVm, state }) => {
  watch(
    () => selectVm.state.inputWidth,
    () => {
      state.minWidth = (selectVm && selectVm.$el && selectVm.$el.getBoundingClientRect().width) + 'px'
    },
    { immediate: true }
  )
}

export const renderless = (
  props,
  { computed, onBeforeUnmount, onDeactivated, onMounted, reactive, toRefs, watch, inject },
  { refs, slots, parent, emit, nextTick }
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
    refs,
    slots,
    toRefs,
    watch
  })

  const state = initState({ reactive, computed, popper, selectVm })

  initApi({ api, popper, state, selectEmitter, constants, selectVm, parent })
  initWatch({ watch, selectVm, state })

  onBeforeUnmount(() => {
    popper.destroyPopper('remove')

    state.popperElm = null
    state.referenceElm = null
  })

  onMounted(api.mounted)

  return api
}
