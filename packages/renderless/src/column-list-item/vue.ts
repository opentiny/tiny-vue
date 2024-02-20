import {
  getModel,
  setModel,
  handelIconClick,
  computedStore,
  getItemChecked,
  handleChange,
  getIsGroup,
  getSize,
  isDisabled,
  computedOptions,
  getType
} from './index'

export const api = ['state', 'handelIconClick', 'handleChange']

export const renderless = (props, { reactive, computed }, { vm, parent, emit, nextTick, dispatch, constants }) => {
  const api = {}

  const state = reactive({
    columnGroup: {},
    type: computed(() => api.getType()),
    size: computed(() => api.getSize()),
    disabled: computed(() => api.isDisabled()),
    itemChecked: computed(() => api.getItemChecked()),
    sliceNum: computed(() => (props.size === 'small' ? 1 : 2)),
    iconNum: computed(() => (props.size === 'small' ? 2 : 3)),
    showCheckbox: computed(() => props.showCheckbox || state.columnGroup.showCheckbox),
    showRadio: computed(() => props.showRadio || state.columnGroup.showRadio),
    store: computed(() => api.computedStore()),
    effectOptions: computed(() => api.computedOptions()),
    isGroup: computed(() => api.getIsGroup()),
    model: computed({
      get: () => api.getModel(),
      set: (val) => api.setModel(val)
    })
  })

  Object.assign(api, {
    state,
    getIsGroup: getIsGroup({ constants, parent, state }),
    isDisabled: isDisabled({ props, state }),
    setModel: setModel({ constants, dispatch, emit, props, vm, state }),
    getSize: getSize({ props, state }),
    getModel: getModel({ props, state }),
    handleChange: handleChange({ constants, dispatch, emit, state, nextTick }),
    computedStore: computedStore({ state, props }),
    handelIconClick: handelIconClick({ emit }),
    getItemChecked: getItemChecked({ state, props }),
    computedOptions: computedOptions({ props }),
    getType: getType({ props, state })
  })

  return api
}
