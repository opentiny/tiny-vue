import {
  handelIconClick,
  getSliceNum,
  getIconNum,
  handleChange,
  isGroup,
  getSize,
  isDisabled,
  getModel,
  setModel,
  computedStore,
  getItemChecked
} from './index'

export const api = ['state', 'handelIconClick', 'handleChange']

export const renderless = (
  props,
  { reactive, watch, computed },
  { vm, parent, emit, constants, nextTick, dispatch }
) => {
  const api = {}

  const state = reactive({
    cardGroup: {},
    selfModel: false,
    itemChecked: computed(() => api.getItemChecked()),
    sliceNum: computed(() => api.getSliceNum()),
    iconNum: computed(() => api.getIconNum()),
    effectOptions: computed(() => props.options.filter((item) => !item.hidden)),
    store: computed(() => api.computedStore()),
    customClass: computed(() => props.customClass || state.cardGroup.customClass || ''),
    autoWidth: computed(() => props.autoWidth || state.cardGroup.autoWidth),
    height: computed(() => props.height || state.cardGroup.height),
    status: computed(() => props.status || state.cardGroup.status || 'default'),
    checkType: computed(() => props.checkType || state.cardGroup.checkType),
    type: computed(() => props.type || state.cardGroup.type || 'text'),
    isCheckbox: computed(() => state.checkType === 'checkbox'),
    isGroup: computed(() => api.isGroup()),
    size: computed(() => api.getSize()),
    disabled: computed(() => api.isDisabled()),
    model: computed({
      get: () => api.getModel(),
      set: (val) => api.setModel(val)
    })
  })

  Object.assign(api, {
    state,
    getSize: getSize({ props, state }),
    getModel: getModel({ props, state }),
    isGroup: isGroup({ constants, parent, state }),
    isDisabled: isDisabled({ props, state }),
    setModel: setModel({ constants, dispatch, emit, props, vm, state }),
    handleChange: handleChange({ constants, dispatch, emit, state, nextTick }),
    getSliceNum: getSliceNum({ state, props }),
    getIconNum: getIconNum({ state, props }),
    computedStore: computedStore({ state, props }),
    handelIconClick: handelIconClick({ emit }),
    getItemChecked: getItemChecked({ state, props })
  })

  watch(
    () => state.disabled,
    () => {
      state.effectOptions.forEach((item) => {
        item.disabled = item.disabled || state.disabled
      })
    },
    { immediate: true }
  )

  return api
}
