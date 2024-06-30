import {
  optionMethod,
  watchModelValue,
  watchVisible,
  confirm,
  updateVisible,
  getTimePeriod,
  computedOptions,
  clear
} from './index'

export const api = ['state', 'confirm', 'updateVisible', 'clear']

export const renderless = (props, { reactive, watch, computed }, { emit, vm, dispatch }) => {
  const api = {}
  const state = reactive({
    visible: false,
    dateArr: [],
    seconds: null,
    options: computed(() => api.computedOptions()),
    value: computed(() =>
      !props.showSeconds && state.seconds !== null ? [...state.dateArr, state.seconds] : state.dateArr
    )
  })

  Object.assign(api, {
    state,
    watchModelValue: watchModelValue({ props, state }),
    watchVisible: watchVisible({ api, state }),
    confirm: confirm({ emit, state }),
    clear: clear({ state, emit, api, vm, dispatch }),
    updateVisible: updateVisible({ emit, state }),
    getTimePeriod: getTimePeriod({ state, props }),
    computedOptions: computedOptions({ state, api, props }),
    optionMethod
  })

  watch(() => props.visible, api.watchVisible)
  watch(() => props.modelValue, api.watchModelValue, { immediate: true })

  return api
}
