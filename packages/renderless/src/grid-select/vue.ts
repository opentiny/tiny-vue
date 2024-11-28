import { buildRadioConfig, buildSelectConfig, filter, radioChange, selectChange } from './index'

export const api = ['state', 'buildRadioConfig', 'buildSelectConfig', 'filter', 'radioChange', 'selectChange']

export const renderless = (props, { reactive, watch }, { vm, emit }) => {
  const api = {}

  const state = reactive({
    value: props.modelValue,
    gridData: props.gridOp.data,
    remoteData: [],
    selected: props.multiple ? [] : {}
  })

  Object.assign(api, {
    state,
    buildRadioConfig: buildRadioConfig({ props, state }),
    buildSelectConfig: buildSelectConfig({ props, state }),
    filter: filter({ props, state, vm }),
    radioChange: radioChange({ props, vm, emit }),
    selectChange: selectChange({ props, vm, emit })
  })

  watch(
    () => props.gridOp.data,
    (data) => data && (state.gridData = data),
    { immediate: true, deep: true }
  )

  return api
}
