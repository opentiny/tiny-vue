import {
  handelIconClick,
  handleChange,
  getIsGroup,
  getSize,
  isDisabled,
  getModel,
  setModel,
  computedStore
} from './index'

export const api = ['state', 'handelIconClick']

export const renderless = (
  props,
  { reactive, watch, computed },
  { vm, parent, emit, constants, nextTick, dispatch }
) => {
  const api = {}

  const state = reactive({
    columnGroup: {},
    itemChecked: props.modelValue,
    sliceNum: computed(() => (props.size === 'small' ? 1 : 2)),
    iconNum: computed(() => (props.size === 'small' ? 2 : 3)),
    effectOptions: computed(() => props.options.filter((item) => !item.hidden)),
    showCheckbox: computed(() => props.showCheckbox || state.columnGroup.showCheckbox),
    store: computed(() => api.computedStore()),
    getIsGroup: computed(() => api.getIsGroup()),
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
    getIsGroup: getIsGroup({ constants, parent, state }),
    isDisabled: isDisabled({ props, state }),
    setModel: setModel({ constants, dispatch, emit, props, vm, state }),
    handleChange: handleChange({ constants, dispatch, emit, state, nextTick }),
    computedStore: computedStore({ state, props }),
    handelIconClick: handelIconClick({ emit })
  })

  watch(() => state.model, api.handleChange, { deep: true })

  return api
}
