import {
  buildRadioConfig,
  buildSelectConfig,
  filter,
  getcheckedData,
  getPluginOption,
  handleVisibleChange,
  initQuery,
  mounted,
  radioChange,
  selectChange,
  syncGridSelection,
  watchValue
} from './index'

export const api = [
  'state',
  'buildRadioConfig',
  'buildSelectConfig',
  'filter',
  'radioChange',
  'selectChange',
  'getcheckedData',
  'getPluginOption',
  'initQuery',
  'mounted',
  'syncGridSelection',
  'watchValue',
  'handleVisibleChange'
]

export const renderless = (props, { reactive, computed, watch, onMounted, nextTick }, { vm, emit }) => {
  const api = {}

  // 初始化 gridData，支持 { data: [], columns: [] } 格式
  const initGridData = () => {
    if (props.gridOp) {
      if (props.gridOp.data) {
        return props.gridOp.data
      } else if (Array.isArray(props.gridOp)) {
        return props.gridOp
      } else {
        return props.gridOp
      }
    }
    return { data: [], columns: [] }
  }

  const state = reactive({
    value: props.modelValue,
    gridData: initGridData(),
    remoteData: [],
    selected: props.multiple ? [] : {},
    currentKey: props.multiple ? '' : props.modelValue,
    previousQuery: null,
    modelValue: props.multiple ? (Array.isArray(props.modelValue) ? [...props.modelValue] : []) : props.modelValue,
    isMounted: false
  })

  Object.assign(api, {
    state,
    buildRadioConfig: buildRadioConfig({ props, state }),
    buildSelectConfig: buildSelectConfig({ props, state }),
    filter: filter({ props, state, vm }),
    getcheckedData: getcheckedData({ props, state }),
    getPluginOption: getPluginOption({ api, props, state }),
    initQuery: initQuery({ props, state, vm }),
    mounted: mounted({ api, state, props, vm, nextTick }),
    radioChange: radioChange({ props, vm, emit, state }),
    selectChange: selectChange({ props, vm, emit, state, nextTick }),
    syncGridSelection: syncGridSelection({ props, vm, state, nextTick }),
    handleVisibleChange: handleVisibleChange({ api, state }),
    watchValue: watchValue({ api, props, vm, state })
  })

  // 计算属性：获取已选中的行 value 数组（需要在 api 对象创建之后）
  state.gridCheckedData = computed(() => api.getcheckedData())

  watch(
    () => props.gridOp,
    (gridOp) => {
      if (gridOp) {
        if (gridOp.data) {
          // 格式：{ data: [], columns: [] }
          state.gridData = gridOp.data
        } else if (Array.isArray(gridOp)) {
          // 格式：直接是数组
          state.gridData = gridOp
        } else {
          // 格式：{ data: [], columns: [] } 整体作为 gridData
          state.gridData = gridOp
        }
      }
    },
    { immediate: true, deep: true }
  )

  watch(
    () => props.modelValue,
    () => {
      if (props.multiple && Array.isArray(props.modelValue)) {
        state.modelValue = [...props.modelValue]
      } else {
        state.modelValue = props.modelValue
      }
    },
    { immediate: true, deep: true }
  )

  watch(
    () => state.modelValue,
    (newValue, oldValue) => {
      // 只有在组件挂载后才执行 watchValue，避免初始化时的错误
      if (state.isMounted) {
        api.watchValue(newValue, oldValue)
      }
    }
  )

  watch(
    () => props.extraQueryParams,
    () => {
      if (props.remote) {
        api.filter(state.previousQuery || '')
      }
    },
    { deep: true }
  )

  // 监听面板打开，同步表格选中状态（通过事件处理）
  // 注意：这里不直接 watch visible，而是通过 visible-change 事件处理

  onMounted(() => {
    api.mounted()
    state.isMounted = true
  })

  return api
}
