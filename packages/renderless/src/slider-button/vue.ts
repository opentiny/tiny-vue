import { handleChange, getValue, setValue, getGroup, mounted, unMounted, customEvents } from './index'

export const api = ['state', 'handleChange']

export const renderless = (
  props,
  { computed, reactive, onMounted, inject, onBeforeUnmount, watch },
  { emit, parent, dispatch, constants, nextTick, vm }
) => {
  const state = reactive({
    disabled: inject('disabled', null) || props.disabled,
    type: inject('sliderType', null),
    value: computed({
      get: () => api.getValue(),
      set: (val) => api.setValue(val)
    }),
    label: computed(() => props.label || props.text),
    sliderButtonGroup: computed(() => api.getGroup()),
    size: inject('sliderSize', null),
    tabIndex: computed(() => (state.sliderButtonGroup && state.value !== (props.label || props.text) ? -1 : 0))
  })

  const api = {}

  Object.assign(api, {
    state,
    mounted: mounted({ vm, props, dispatch, constants, state, nextTick }),
    unMounted: unMounted({ props, dispatch, constants }),
    getValue: getValue(state),
    setValue: setValue({ emit, state }),
    getGroup: getGroup({ constants, parent }),
    handleChange: handleChange({ constants, dispatch, nextTick, state })
  })

  onMounted(() => {
    api.mounted()
    customEvents({ props, vm, type: 'add' })
  })

  onBeforeUnmount(() => {
    api.unMounted()
    customEvents({ props, vm, type: 'remove' })
  })

  watch(() => state.label, api.mounted)

  return api
}
