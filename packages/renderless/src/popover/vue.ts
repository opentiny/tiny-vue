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
  computedTooltipId,
  destroyed,
  doToggle,
  doShow,
  doClose,
  handleFocus,
  handleClick,
  handleBlur,
  handleKeydown,
  handleAfterEnter,
  handleAfterLeave,
  handleMouseEnter,
  handleMouseLeave,
  handleDocumentClick,
  cleanup,
  wrapMounted,
  handleItemClick
} from './index'
import userPopper from '@opentiny/vue-renderless/common/deps/vue-popper'

export const api = ['state', 'handleAfterEnter', 'handleAfterLeave', 'handleItemClick']

const initState = ({ reactive, computed, api, popperElm, showPopper, referenceElm }) => {
  const state = reactive({
    popperElm,
    showPopper,
    timer: null,
    mounted: false,
    referenceElm,
    tooltipId: computed(() => api.computedTooltipId())
  })
  return state
}

const initApi = ({ api, props, state, refs, emit, doDestroy, constants, nextTick }) => {
  Object.assign(api, {
    state,
    mounted: mounted({ api, state, constants, props, nextTick }),
    cleanup: cleanup({ state, props }),
    destroyed: destroyed({ state, api }),
    doDestroy,
    computedTooltipId: computedTooltipId(constants),
    doShow: doShow(state),
    doClose: doClose(state),
    doToggle: doToggle(state),
    handleClick: handleClick(state),
    handleAfterEnter: handleAfterEnter(emit),
    handleBlur: handleBlur({ props, state }),
    handleFocus: handleFocus({ props, state }),
    handleKeydown: handleKeydown({ api, props }),
    handleMouseLeave: handleMouseLeave({ props, state }),
    handleAfterLeave: handleAfterLeave(emit),
    handleMouseEnter: handleMouseEnter({ props, state }),
    handleDocumentClick: handleDocumentClick({ refs, state }),
    wrapMounted: wrapMounted({ api, props, refs, state }),
    handleItemClick: handleItemClick({ emit, state }),
  })
}

const initWatch = ({ watch, props, state, emit }) => {
  watch(
    () => state.showPopper,
    (val) => {
      if (props.disabled) {
        return
      }

      val ? emit('show') : emit('hide')
    },
    { immediate: true }
  )
}

export const renderless = (
  props,
  { reactive, computed, watch, toRefs, onBeforeUnmount, onMounted, onUnmounted, onActivated, onDeactivated },
  { $prefix, emit, refs, slots, nextTick }
) => {
  const api = {}
  const constants = { IDPREFIX: `${$prefix.toLowerCase()}-popover` }
  const options = { emit, onBeforeUnmount, nextTick, reactive, props, watch, onDeactivated, refs, slots, toRefs }
  const { showPopper, popperElm, referenceElm, doDestroy } = userPopper(options)
  const state = initState({ reactive, computed, api, popperElm, showPopper, referenceElm })

  initApi({ api, constants, props, state, refs, emit, doDestroy, nextTick })

  onDeactivated(() => {
    api.destroyed()
    api.cleanup()
  })

  // 注册生命周期函数必须要在（watch）异步函数/组件之前，否则会 Vue3 警告
  onMounted(api.wrapMounted)
  onActivated(api.mounted)
  onUnmounted(api.destroyed)
  onBeforeUnmount(api.cleanup)

  initWatch({ watch, props, state, emit })

  return api
}
