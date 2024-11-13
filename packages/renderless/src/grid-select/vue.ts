import { buildRadioConfig, buildSelectConfig, radioChange, selectChange } from './index'

export const api = ['state', 'buildRadioConfig', 'buildSelectConfig', 'radioChange', 'selectChange']

export const renderless = (props, { reactive }, { vm, emit }) => {
  const api = {}

  const state = reactive({
    value: props.modelValue,
    gridData: props.gridOp
  })

  Object.assign(api, {
    state,
    buildRadioConfig: buildRadioConfig({ props, state }),
    buildSelectConfig: buildSelectConfig({ props, state }),
    radioChange: radioChange({ props, vm, emit }),
    selectChange: selectChange({ props, vm, emit })
  })

  return api
}
