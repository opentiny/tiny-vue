import { watchActionSheetVisible, close, confirm, columnStyle } from './index'
import { usePicker } from './usePicker'

export const api = [
  'state',
  'close',
  'confirm',

  'columnsType',
  'columnsList',
  'columnFieldNames',
  'changeHandler',
  'defaultValues',
  'isDisabled',
  'selectedOptions',
  'columnStyle'
]

export const renderless = (props, { reactive, computed, watch, ref, toRefs }, { emit, vm }) => {
  const state = reactive({
    actionSheetVisible: false,
    visibleOptionNum: 5
  })
  const {
    changeHandler,
    defaultValues,
    columnsList,
    columnsType,
    columnFieldNames,
    selectedOptions,
    setValue,
    isDisabled
  } = usePicker({ ref, reactive, watch, computed, toRefs, props, emit })

  const api = {
    state
  }

  Object.assign(api, {
    close: close(state),
    confirm: confirm({ api, emit, props, state, defaultValues, selectedOptions, isDisabled, vm }),
    watchActionSheetVisible: watchActionSheetVisible({ emit, api, props }),

    columnsType,
    columnsList,
    columnFieldNames,
    changeHandler,
    defaultValues,
    selectedOptions,
    setValue,
    isDisabled,
    columnStyle: columnStyle({ props, computed })
  })

  watch(
    () => props.visible,
    (value) => (state.actionSheetVisible = value)
  )

  watch(
    () => state.actionSheetVisible,
    (value) => api.watchActionSheetVisible(value)
  )

  return api
}
