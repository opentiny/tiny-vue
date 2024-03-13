import {
  init,
  submitSelection,
  getSelection,
  i18nSelected,
  computedShowAuxi,
  textPrimary,
  textAuxi,
  handleMouseenter,
  handleMouseleave,
  handleClear,
  handleDelete,
  emitChange,
  keyOption,
  keyType,
  initDrag,
  unmount,
  arrayMinus,
  batchSubmit,
  getParams,
  coverSubmit,
  computedShowClear
} from './index'

export const api = [
  'state',
  'init',
  'submitSelection',
  'getSelection',
  'i18nSelected',
  'textPrimary',
  'textAuxi',
  'handleMouseenter',
  'handleMouseleave',
  'handleClear',
  'handleDelete',
  'keyOption',
  'keyType',
  'batchSubmit',
  'coverSubmit'
]

export const renderless = (
  props,
  { reactive, computed, onBeforeMount, onMounted, onBeforeUnmount, watch, markRaw },
  { emit, t, vm }
) => {
  const state = reactive({
    inverse: false,
    total: 0,
    select: [],
    refresh: 0,
    optionSelector: '[data-tag="tiny-selected-box-item"]',
    dragAnimation: 100,
    showAuxi: computed(() => api.computedShowAuxi()),
    popoverVisible: false,
    popoverContent: '',
    dragInstance: null,
    slotParams: computed(() => ({ inverse: state.inverse, total: state.total, select: state.select })),
    showClear: computed(() => api.computedShowClear())
  })

  const api = {
    state,
    init: init({ props, state }),
    i18nSelected: i18nSelected({ state, t }),
    computedShowAuxi: computedShowAuxi(props),
    textPrimary: textPrimary(props),
    textAuxi: textAuxi(props),
    handleMouseenter: handleMouseenter({ state, vm }),
    handleMouseleave: handleMouseleave(state),
    keyType: keyType(props),
    unmount: unmount(state),
    getParams: getParams(state),
    computedShowClear: computedShowClear(state)
  }

  Object.assign(api, {
    submitSelection: submitSelection({ api, state }),
    handleClear: handleClear({ api, emit, props, state }),
    handleDelete: handleDelete({ api, emit, state }),
    emitChange: emitChange({ api, emit }),
    initDrag: initDrag({ api, emit, markRaw, props, state, vm }),
    arrayMinus: arrayMinus(api),
    batchSubmit: batchSubmit({ api, state }),
    getSelection: getSelection({ api, state }),
    coverSubmit: coverSubmit({ api, props, state }),
    keyOption: keyOption({ api, props })
  })

  onBeforeMount(() => {
    api.init()
  })

  onMounted(() => {
    api.initDrag()
  })

  onBeforeUnmount(() => {
    api.unmount()
  })

  watch(
    () => props.inverse,
    () => api.init()
  )

  return api
}
