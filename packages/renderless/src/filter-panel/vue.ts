import { doDestroy, show, hide, popoverShow, popoverHide, handleClear, handleDocumentClick, togglePanel } from './index'
import { on, off } from '../common/deps/dom'

export const api = ['state', 'doDestroy', 'show', 'hide', 'popoverShow', 'popoverHide', 'handleClear', 'togglePanel']

export const renderless = (props, { reactive, onMounted, onBeforeUnmount }, { vm, emit }) => {
  const state = reactive({
    visible: false
  })

  const api = {}
  Object.assign(api, {
    state,
    show: show({ state }),
    hide: hide({ state }),
    togglePanel: togglePanel({ props, state }),
    popoverShow: popoverShow({ state, emit }),
    popoverHide: popoverHide({ state, emit }),
    handleClear: handleClear({ emit }),
    doDestroy: doDestroy({ vm }),
    handleDocumentClick: handleDocumentClick({ vm, state })
  })

  handleDocumentClick
  onMounted(() => {
    on(document, 'click', api.handleDocumentClick)
  })

  onBeforeUnmount(() => {
    off(document, 'click', api.handleDocumentClick)
  })

  return api
}
