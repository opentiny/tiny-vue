import {
  computedGridColumns,
  queryGridData,
  multiGridSelectAll,
  multiGridSelectChange,
  selectedBoxInit,
  selectedBoxClear,
  selectedBoxDelete,
  selectedBoxDrag,
  doMultiTreeFilter,
  multiTreeAfterLoad,
  multiTreeFilterNode,
  multiTreeFilterPlain,
  multiTreeLeavePlain,
  multiTreeCheck,
  emitChange,
  onFooterCancel,
  onFooterConfirm,
  emitClose,
  setChecked,
  computedConfig,
  doAutoLookup,
  multiTreeRadio,
  multiGridRadioChange,
  watchMulti
} from './index'

export const api = [
  'state',
  'queryGridData',
  'multiGridSelectAll',
  'multiGridSelectChange',
  'selectedBoxClear',
  'selectedBoxDelete',
  'selectedBoxDrag',
  'doMultiTreeFilter',
  'multiTreeAfterLoad',
  'multiTreeFilterNode',
  'multiTreeFilterPlain',
  'multiTreeLeavePlain',
  'multiTreeCheck',
  'emitChange',
  'onFooterCancel',
  'onFooterConfirm',
  'multiTreeRadio',
  'multiGridRadioChange'
]

export const renderless = (props, { reactive, computed, watch }, { vm, nextTick, emit }) => {
  const state = reactive({
    splitValue: 0,
    gridColumns: computed(() => api.computedGridColumns()),
    selectedChanged: false,
    selectedDatas: [],
    selectedValues: [],
    multiGridStore: {
      selectConfig: computed(() => api.computedConfig()),
      radioConfig: computed(() => api.computedConfig()),
      inited: false,
      loading: false
    },
    multiTreeStore: {
      viewType: 'tree',
      expandedKeys: [],
      checkedKeys: [],
      highlight: null,
      filterText: '',
      inited: false
    },
    lookupStore: {
      datas: []
    }
  })

  state.temporary = {}

  const api = {
    state,
    computedGridColumns: computedGridColumns(props),
    selectedBoxInit: selectedBoxInit({ props, vm, nextTick }),
    selectedBoxClear: selectedBoxClear({ props, state, vm }),
    selectedBoxDelete: selectedBoxDelete({ props, state, vm }),
    selectedBoxDrag: selectedBoxDrag({ props, state }),
    doMultiTreeFilter: doMultiTreeFilter({ props, state, nextTick, vm }),
    multiTreeFilterNode: multiTreeFilterNode(props),
    multiTreeLeavePlain: multiTreeLeavePlain({ props, state }),
    emitChange: emitChange({ props, state, emit }),
    emitClose: emitClose(emit),
    computedConfig: computedConfig({ props, state }),
    doAutoLookup: doAutoLookup({ props, state, emit }),
    multiGridRadioChange: multiGridRadioChange({ props, state })
  }

  Object.assign(api, {
    multiGridSelectAll: multiGridSelectAll({ api, props, state }),
    multiGridSelectChange: multiGridSelectChange({ api, props, state }),
    multiTreeAfterLoad: multiTreeAfterLoad({ api, props, state, vm }),
    multiTreeCheck: multiTreeCheck({ api, props, state, vm, nextTick }),
    multiTreeFilterPlain: multiTreeFilterPlain({ api, props, state }),
    onFooterCancel: onFooterCancel({ api, props }),
    onFooterConfirm: onFooterConfirm({ api, props }),
    queryGridData: queryGridData({ api, props, state }),
    setChecked: setChecked({ api, props, state }),
    multiTreeRadio: multiTreeRadio({ api, props }),
    watchMulti: watchMulti({ api, state, props })
  })

  watch(
    () => props.visible,
    (value) => value && !state.multiGridStore.inited && api.queryGridData()
  )

  watch(
    () => props.multi,
    () => api.watchMulti(),
    { immediate: true }
  )

  return api
}
