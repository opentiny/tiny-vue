import { optionMethod, watchModelValue, watchVisible, confirm, updateVisible } from './index'

export const api = ['state', 'confirm', 'updateVisible']

export const renderless = (props, { reactive, watch }, { emit }) => {
  const api = {}
  const state = reactive({
    visible: false,
    dateArr: [],
    optionList: [
      { range: [0, 23], optionMethod },
      { range: [0, 59], optionMethod },
      { range: [0, 59], optionMethod }
    ]
  })

  Object.assign(api, {
    state,
    watchModelValue: watchModelValue({ props, state }),
    watchVisible: watchVisible({ api, state }),
    confirm: confirm({ emit, state }),
    updateVisible: updateVisible({ emit, state }),
    optionMethod
  })

  watch(() => props.visible, api.watchVisible)
  watch(() => props.modelValue, api.watchModelValue, { immediate: true })

  return api
}
