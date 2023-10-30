import { on, off } from '../common/deps/dom'

import {
  panelToggle,
  filterSelectOption,
  filterConfirm,
  labelListComputed,
  selectOption,
  confirm,
  cancel,
  resize,
  reset,
  selectOptionAll
} from './index'

export const api = [
  'state',
  'panelToggle',
  'filterSelectOption',
  'filterConfirm',
  'selectOption',
  'confirm',
  'cancel',
  'reset',
  'selectOptionAll'
]

export const renderless = (props, { reactive, computed, onMounted, onBeforeUnmount }, { emit, vm }) => {
  const api = {}
  const state = reactive({
    showPanelIndex: -1,
    filterPanel: {
      show: false,
      selected: []
    },
    selectPanel: {
      selected: [],
      config: computed(() => (state.showPanelIndex !== -1 ? props.data[state.showPanelIndex] : { options: [] }))
    },
    tagWidth: computed(() => (100 / props.columnNum).toFixed(1) + '%'),
    labelList: computed(() => api.labelListComputed()),
    showPanel: computed(() => state.showPanelIndex !== -1 || state.filterPanel.show),
    hasFilterValue: computed(() =>
      props.filterValue.find((item) =>
        Array.isArray(item) ? item.length > 0 : [undefined, null, ''].indexOf(item) === -1
      )
    )
  })

  Object.assign(api, {
    state,
    panelToggle: panelToggle({ state, props, api, emit }),
    filterSelectOption: filterSelectOption({ state, props, emit, api }),
    filterConfirm: filterConfirm({ state, props, emit }),
    selectOption: selectOption({ state, props, emit, api }),
    confirm: confirm({ state, props, emit, api }),
    cancel: cancel({ state, emit }),
    resize: resize({ state, vm, props }),
    reset: reset({ state, props }),
    selectOptionAll: selectOptionAll({ state }),
    labelListComputed: labelListComputed({ state, props })
  })

  onMounted(() => {
    on(window, 'scroll', api.resize)
    on(window, 'resize', api.resize)
  })

  onBeforeUnmount(() => {
    off(window, 'scroll', api.resize)
    off(window, 'resize', api.resize)
  })

  return api
}
