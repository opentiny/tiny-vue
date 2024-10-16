import {
  debouncRquest,
  nodeCollapse,
  nodeExpand,
  getChildValue,
  nodeCheckClick,
  treeNodeClick,
  getTreeData,
  radioChange,
  getcheckedData,
  selectChange,
  calcOverFlow,
  toggleCheckAll,
  handleCopyClick,
  showTip,
  handleComposition,
  handleQueryChange,
  scrollToOption,
  handleMenuEnter,
  emitChange,
  directEmitChange,
  getOption,
  getSelectedOption,
  setSelected,
  handleFocus,
  focus,
  blur,
  handleBlur,
  handleClearClick,
  doDestroy,
  handleClose,
  toggleLastOptionHitState,
  deletePrevTag,
  managePlaceholder,
  resetInputState,
  resetInputHeight,
  resetHoverIndex,
  resetDatas,
  handleOptionSelect,
  setSoftFocus,
  getValueIndex,
  toggleMenu,
  selectOption,
  deleteSelected,
  deleteTag,
  onInputChange,
  onOptionDestroy,
  resetInputWidth,
  handleResize,
  checkDefaultFirstOption,
  setOptionHighlight,
  getValueKey,
  emptyText,
  emptyFlag,
  recycleScrollerHeight,
  watchValue,
  watchVisible,
  watchOptions,
  navigateOptions,
  getPluginOption,
  watchPropsOption,
  buildSelectConfig,
  buildRadioConfig,
  onMouseenterNative,
  onMouseleaveNative,
  onCopying,
  gridOnQueryChange,
  defaultOnQueryChange,
  queryChange,
  toVisible,
  toHide,
  mounted,
  unMount,
  watchHoverIndex,
  computeOptimizeOpts,
  watchOptimizeOpts,
  computeCollapseTags,
  computeMultipleLimit,
  handleDropdownClick,
  handleEnterTag,
  calcCollapseTags,
  initValue,
  watchInputHover,
  initQuery,
  updateModelValue,
  getLabelSlotValue,
  computedTagsStyle,
  computedReadonly,
  computedShowClose,
  computedCollapseTagSize,
  computedShowNewOption,
  computedShowCopy,
  computedOptionsAllDisabled,
  computedDisabledTooltipContent,
  computedSelectDisabled,
  computedIsExpandAll,
  watchInitValue,
  watchShowClose,
  loadTreeData,
  getOptionIndexArr,
  queryVisibleOptions,
  // tiny 新增
  computedGetIcon,
  computedGetTagType,
  clearSearchText,
  clearNoMatchValue,
  handleDebouncedQueryChange,
  onClickCollapseTag,
  computedIsExpand,
  computedShowTagText,
  isTagClosable
} from './index'
import debounce from '../common/deps/debounce'
import { isNumber } from '../common/type'

export const api = [
  'state',
  'nodeCollapse',
  'nodeExpand',
  'toggleCheckAll',
  'handleCopyClick',
  'focus',
  'blur',
  'showTip',
  'doDestroy',
  'getOption',
  'emitChange',
  'handleBlur',
  'toggleMenu',
  'getValueKey',
  'handleFocus',
  'handleClose',
  'setSoftFocus',
  'getValueIndex',
  'scrollToOption',
  'resetHoverIndex',
  'onOptionDestroy',
  'resetInputWidth',
  'resetInputHeight',
  'managePlaceholder',
  'checkDefaultFirstOption',
  'setOptionHighlight',
  'toggleLastOptionHitState',
  'deleteTag',
  'setSelected',
  'selectOption',
  'handleResize',
  'deletePrevTag',
  'onInputChange',
  'deleteSelected',
  'handleMenuEnter',
  'resetInputState',
  'handleClearClick',
  'handleComposition',
  'handleQueryChange',
  'handleOptionSelect',
  'debouncedOnInputChange',
  'debouncedQueryChange',
  'navigateOptions',
  'selectChange',
  'radioChange',
  'treeNodeClick',
  'nodeCheckClick',
  'buildSelectConfig',
  'buildRadioConfig',
  'onMouseenterNative',
  'onMouseleaveNative',
  'onCopying',
  'handleDropdownClick',
  'handleEnterTag',
  'getLabelSlotValue',
  'loadTreeData',
  'updateModelValue',
  'clearSearchText',
  'onClickCollapseTag',
  'computedShowTagText',
  'isTagClosable'
]

const initState = ({ reactive, computed, props, api, emitter, parent, constants, useBreakpoint, vm, designConfig }) => {
  const stateAdd = initStateAdd({ computed, props, api, parent })
  const state = reactive({
    ...stateAdd,
    selectEmitter: emitter(),
    datas: [],
    initDatas: [],
    query: '',
    magicKey: 0,
    options: [],
    visible: false,
    showCopy: computed(() => api.computedShowCopy()),
    showWarper: true, // 显示下拉外层控制
    selected: props.multiple ? [] : {},
    softFocus: false,
    hover: false,
    triggerSearch: false,
    firstAutoSearch: props.remoteConfig.autoSearch,
    tagsStyle: computed(() => api.computedTagsStyle()),
    readonly: computed(() => api.computedReadonly()),
    iconClass: computed(() => (state.visible ? '' : constants.CLASS.IsReverse)),
    showClose: computed(() => api.computedShowClose()),
    optionsAllDisabled: computed(() => api.computedOptionsAllDisabled()),
    collapseTagSize: computed(() => api.computedCollapseTagSize()),
    showNewOption: computed(() => api.computedShowNewOption()),
    selectSize: computed(() => props.size || state.formItemSize),
    optimizeOpts: computed(() => api.computeOptimizeOpts()),
    optimizeStore: { valueIndex: 0, recycleScrollerHeight: computed(() => api.recycleScrollerHeight()) },

    collapseTags: computed(() => api.computeCollapseTags()),
    multipleLimit: computed(() => api.computeMultipleLimit()),
    disabledTooltipContent: computed(() => api.computedDisabledTooltipContent()),
    isExpand: computed(() => api.computedIsExpand()),
    collapseTagsLength: 0,
    initValue: [],
    key: 0,
    device: '',
    timer: null,
    modelValue: [],
    queryValue: '',
    selectedCopy: [],
    compareValue: null,
    selectedVal: computed(() =>
      state.device === 'mb' && props.multiple && state.visible ? state.selectedCopy : state.selected
    ),
    displayOnlyContent: computed(() =>
      props.multiple && Array.isArray(state.selected)
        ? state.selected.map((item) => (item.state ? item.state.currentLabel : item.currentLabel)).join('; ')
        : ''
    ),
    breakpoint: useBreakpoint ? useBreakpoint().current : '',
    isSaaSTheme: vm.theme === 'saas',
    disabledOptionHover: false,
    hasClearSelection: false,
    // tiny 新增
    getIcon: computed(() => api.computedGetIcon()),
    getTagType: computed(() => api.computedGetTagType()),
    isSelectAll: computed(() => state.selectCls === 'checked-sur'),
    autoHideDownIcon: (() => {
      if (designConfig?.state && 'autoHideDownIcon' in designConfig.state) {
        return designConfig.state.autoHideDownIcon
      }
      return true // tiny 默认为true
    })(),
    designConfig
  })

  return state
}

const initStateAdd = ({ computed, props, api, parent }) => {
  return {
    selectedTags: [],
    tips: '',
    showTip: false,
    tipHover: false,
    selectHover: false,
    tipTimer: null,
    selectCls: 'checked-sur',
    filteredSelectCls: 'checked-sur',
    overflow: null,
    completed: false,
    inputWidth: 0,
    inputPaddingRight: 0,
    hoverIndex: -1,
    hoverValue: -1,
    optionsIndex: -1,
    inputLength: 20,
    optionsCount: 0,
    selectFiexd: {},
    createdLabel: null,
    isSilentBlur: false,
    cachedOptions: [],
    selectedLabel: '',
    previousQuery: null,
    inputHovering: false,
    createdSelected: false,
    isOnComposition: false,
    cachedPlaceHolder: props.placeholder,
    inputHeight: 0,
    initialInputHeight: 0,
    currentPlaceholder: props.placeholder,
    filteredOptionsCount: 0,
    gridData: [],
    treeData: [],
    remoteData: [],
    currentKey: props.modelValue,
    updateId: '',
    popperElm: null,
    debounce: computed(() => (isNumber(props.queryDebounce) ? props.queryDebounce : props.remote ? 300 : 0)),
    emptyText: computed(() => api.emptyText()),
    emptyFlag: computed(() => api.emptyFlag()),
    formItemSize: computed(() => (parent.formItem || { state: {} }).state.formItemSize),
    selectDisabled: computed(() => api.computedSelectDisabled()),
    isDisplayOnly: computed(() => props.displayOnly || (parent.form || {}).displayOnly),
    isDisabled: computed(() => props.disabled || (parent.form || {}).disabled),
    isShowTagText: computed(() => api.computedShowTagText()),
    gridCheckedData: computed(() => api.getcheckedData()),
    isExpandAll: computed(() => api.computedIsExpandAll()),
    searchSingleCopy: computed(() => props.allowCopy && !props.multiple && (props.filterable || props.searchable)),
    childrenName: computed(() => (props.treeOp.props && props.treeOp.props.children) || 'children'),
    tooltipContent: {},
    isHidden: false,
    defaultCheckedKeys: [],
    optionIndexArr: [],
    showCollapseTag: false,
    exceedMaxVisibleRow: false, // 是否超出默认最大显示行数
    toHideIndex: Infinity // 第一个超出被隐藏的索引
  }
}

const initApi = ({
  api,
  props,
  state,
  emit,
  maskState,
  constants,
  parent,
  nextTick,
  dispatch,
  t,
  vm,
  isMobileFirstMode,
  designConfig
}) => {
  Object.assign(api, {
    state,
    maskState,
    doDestroy: doDestroy(vm),
    getTreeData: getTreeData(props, state),
    blur: blur({ vm, state }),
    focus: focus({ vm, state }),
    getValueKey: getValueKey(props),
    handleClose: handleClose(state),
    getValueIndex: getValueIndex(props),
    getChildValue: getChildValue(),
    getOption: getOption({ props, state, api }),
    getSelectedOption: getSelectedOption({ props, state }),
    emitChange: emitChange({ emit, props, state, constants }),
    directEmitChange: directEmitChange({ emit, props, state, constants }),
    toggleMenu: toggleMenu({ vm, state, props, api, isMobileFirstMode }),
    showTip: showTip({ props, state, vm }),
    onOptionDestroy: onOptionDestroy(state),
    setSoftFocus: setSoftFocus({ vm, state }),
    getcheckedData: getcheckedData({ props, state }),
    resetInputWidth: resetInputWidth({ vm, state }),
    resetHoverIndex: resetHoverIndex({ props, state }),
    resetDatas: resetDatas({ props, state }),
    scrollToOption: scrollToOption({ vm, constants }),
    selectChange: selectChange({ emit, props, vm, state, api }),
    radioChange: radioChange({ emit, props, state, api, vm }),
    handleCopyClick: handleCopyClick({ parent, props, state }),
    treeNodeClick: treeNodeClick({ emit, props, state, api, vm }),
    managePlaceholder: managePlaceholder({ vm, state }),
    nodeCheckClick: nodeCheckClick({ emit, props, state, api }),
    checkDefaultFirstOption: checkDefaultFirstOption(state),

    setOptionHighlight: setOptionHighlight(state),
    nodeExpand: nodeExpand({ state, constants, nextTick }),
    nodeCollapse: nodeCollapse({ state, constants, nextTick }),
    handleBlur: handleBlur({ constants, dispatch, emit, state, designConfig }),
    toggleLastOptionHitState: toggleLastOptionHitState({ state }),
    emptyText: emptyText({ I18N: constants.I18N, props, state, t, isMobileFirstMode }),
    emptyFlag: emptyFlag({ props, state }),
    getOptionIndexArr: getOptionIndexArr({ props, state, api }),
    queryVisibleOptions: queryVisibleOptions({ props, vm, isMobileFirstMode }),
    recycleScrollerHeight: recycleScrollerHeight({ state, props, recycle: constants.RECYCLE }),
    watchPropsOption: watchPropsOption({ constants, parent, props, state }),
    buildSelectConfig: buildSelectConfig({ props, state }),
    buildRadioConfig: buildRadioConfig({ props, state }),
    onMouseenterNative: onMouseenterNative({ state }),
    onMouseleaveNative: onMouseleaveNative({ state }),
    onCopying: onCopying({ state, vm }),
    gridOnQueryChange: gridOnQueryChange({ props, vm, constants, state }),
    watchHoverIndex: watchHoverIndex({ state }),
    computeOptimizeOpts: computeOptimizeOpts({ props, designConfig }),
    computeCollapseTags: computeCollapseTags(props),
    computeMultipleLimit: computeMultipleLimit({ props, state }),
    watchInputHover: watchInputHover({ vm }),
    initQuery: initQuery({ props, state, constants, vm }),
    updateModelValue: updateModelValue({ props, emit, state }),
    computedTagsStyle: computedTagsStyle({ props, parent, state, vm }),
    computedReadonly: computedReadonly({ props, state }),
    computedShowClose: computedShowClose({ props, state }),
    computedCollapseTagSize: computedCollapseTagSize(state),
    computedShowNewOption: computedShowNewOption({ props, state }),
    computedShowCopy: computedShowCopy({ props, state }),
    computedOptionsAllDisabled: computedOptionsAllDisabled(state),
    computedDisabledTooltipContent: computedDisabledTooltipContent({ props, state }),

    computedSelectDisabled: computedSelectDisabled({ state }),
    computedIsExpand: computedIsExpand({ props, state }),
    computedIsExpandAll: computedIsExpandAll(props),
    watchInitValue: watchInitValue({ props, emit }),
    watchShowClose: watchShowClose({ nextTick, state, parent }),
    // tiny 新增
    computedGetIcon: computedGetIcon({ designConfig, props }),
    computedGetTagType: computedGetTagType({ designConfig, props }),
    clearSearchText: clearSearchText({ state, api }),
    clearNoMatchValue: clearNoMatchValue({ props, emit }),
    computedShowTagText: computedShowTagText({ state }),
    isTagClosable: isTagClosable()
  })

  addApi({ api, props, state, emit, constants, parent, nextTick, dispatch, vm, isMobileFirstMode, designConfig })
}

const addApi = ({
  api,
  props,
  state,
  emit,
  constants,
  parent,
  nextTick,
  dispatch,
  vm,
  isMobileFirstMode,
  designConfig
}) => {
  Object.assign(api, {
    resetInputHeight: resetInputHeight({ api, constants, nextTick, props, vm, state, designConfig }),
    calcOverFlow: calcOverFlow({ vm, props, state }),
    handleFocus: handleFocus({ api, emit, props, state }),
    deleteTag: deleteTag({ api, constants, emit, props, vm, nextTick, state }),
    watchValue: watchValue({ api, constants, dispatch, props, vm, state }),
    toHide: toHide({ constants, state, props, vm, api }),
    toVisible: toVisible({ constants, state, props, vm, api, nextTick }),
    setSelected: setSelected({ api, constants, nextTick, props, vm, state }),
    selectOption: selectOption({ api, state, props }),
    handleResize: handleResize({ api, props, state }),
    watchOptions: watchOptions({ api, constants, nextTick, parent, props, state, vm }),
    watchVisible: watchVisible({ api, constants, emit, state, vm, props, isMobileFirstMode }),
    deletePrevTag: deletePrevTag({ api, constants, props, state, vm }),
    onInputChange: onInputChange({ api, props, state, constants, nextTick }),
    deleteSelected: deleteSelected({ api, constants, emit, props, vm, state }),
    handleMenuEnter: handleMenuEnter({ api, nextTick, state, props }),
    resetInputState: resetInputState({ api, vm, state }),
    navigateOptions: navigateOptions({ api, state, props, nextTick }),
    handleClearClick: handleClearClick(api),
    handleComposition: handleComposition({ api, nextTick, state }),
    handleQueryChange: handleQueryChange({ api, constants, nextTick, props, vm, state }),
    handleOptionSelect: handleOptionSelect({ api, nextTick, props, vm, state }),
    getPluginOption: getPluginOption({ api, props, state }),
    toggleCheckAll: toggleCheckAll({ api, emit, state, props }),
    handleDebouncedQueryChange: handleDebouncedQueryChange({ state, api }),
    debouncedQueryChange: (event) => {
      // 解决无界下的异常
      const value = props.shape ? event : event.target.value
      api.handleDebouncedQueryChange(value)
    },
    debouncedOnInputChange: debounce(state.debounce, () => {
      api.onInputChange()
    }),
    debouncRquest: debouncRquest({ api, state, props }),
    defaultOnQueryChange: defaultOnQueryChange({ props, state, constants, api, nextTick, vm }),
    queryChange: queryChange({ props, state, constants, api, nextTick, vm }),
    mounted: mounted({ api, parent, state, props, vm, designConfig }),
    unMount: unMount({ api, parent, vm, state }),
    watchOptimizeOpts: watchOptimizeOpts({ props, state }),
    handleDropdownClick: handleDropdownClick({ props, vm, state, emit }),
    handleEnterTag: handleEnterTag({ state }),
    calcCollapseTags: calcCollapseTags({ state, vm, props }),
    initValue: initValue({ state }),
    getLabelSlotValue: getLabelSlotValue({ props, state }),
    loadTreeData: loadTreeData({ state, vm, props, api }),
    onClickCollapseTag: onClickCollapseTag({ state, props, nextTick, api })
  })
}

const initWatch = ({ watch, props, api, state, nextTick }) => {
  watch(
    () => props.treeOp.data,
    (data) => data && (state.treeData = data),
    { immediate: true, deep: true }
  )

  watch(
    () => props.gridOp.data,
    (data) => data && (state.gridData = data),
    { immediate: true, deep: true }
  )

  watch(
    () => state.selectDisabled,
    () => nextTick(api.resetInputHeight)
  )

  watch(
    () => props.placeholder,
    (value) => {
      state.cachedPlaceHolder = state.currentPlaceholder = value
    }
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

  watch(() => state.modelValue, api.watchValue)

  watch(
    () => state.selectedLabel,
    () => {
      if (props.trim) {
        state.selectedLabel = state.selectedLabel.trim()
      }
    }
  )

  watch(
    () => props.extraQueryParams,
    () => api.handleQueryChange(state.previousQuery, true),
    { deep: true }
  )

  watch(
    () => state.breakpoint,
    (val) => {
      if (val === 'default') {
        state.device = 'mb'
      } else {
        state.device = 'pc'
      }
    },
    { immediate: true, deep: true }
  )

  watch(
    () => state.device,
    (newVal, oldVal) => {
      if (oldVal !== '' && state.visible) {
        api.updateModelValue(state.modelValue, true)
      }
    }
  )

  watch(() => state.visible, api.watchVisible)

  watch(() => state.initValue, api.watchInitValue, { deep: true })

  addWatch({ watch, props, api, state, nextTick })
}

const addWatch = ({ watch, props, api, state, nextTick }) => {
  watch(() => [...state.options], api.watchOptions)

  // tiny 新增renderType的2个判断
  if (props.renderType === 'grid' && !props.optimization) {
    watch(() => state.gridData, api.setSelected, { immediate: true })
  }

  if (props.renderType === 'tree' && !props.optimization) {
    watch(() => state.treeData, api.setSelected, { immediate: true })
  }

  watch(() => state.hoverIndex, api.watchHoverIndex)

  props.options && watch(() => props.options, api.watchPropsOption, { immediate: true, deep: true })

  props.optimization && watch(() => state.optimizeOpts, api.watchOptimizeOpts, { immediate: true })

  watch([() => state.inputHovering, () => state.visible], api.watchInputHover)

  watch(() => state.showClose, api.watchShowClose, { immediate: true })

  watch(
    () => state.selectHover,
    () => props.hoverExpand && !props.disabled && !state.isDisplayOnly && nextTick(api.resetInputHeight)
  )
}

export const renderless = (
  props,
  { computed, onBeforeUnmount, onMounted, reactive, watch, provide, inject },
  { vm, parent, emit, constants, nextTick, dispatch, t, emitter, isMobileFirstMode, useBreakpoint, designConfig }
) => {
  const api: any = {}
  const state = initState({
    reactive,
    computed,
    props,
    api,
    emitter,
    parent,
    constants,
    useBreakpoint,
    vm,
    designConfig
  })
  const dialog = inject('dialog', null)

  provide('selectEmitter', state.selectEmitter)
  provide('selectVm', vm)

  const maskState = reactive({ width: '', height: '', top: '' })

  initApi({
    api,
    props,
    state,
    emit,
    maskState,
    constants,
    parent,
    nextTick,
    dispatch,
    t,
    vm,
    isMobileFirstMode,
    designConfig
  })

  parent.$on('handle-clear', (event) => {
    api.handleClearClick(event)
  })

  if (props.multiple && !Array.isArray(props.modelValue)) {
    emit('update:modelValue', [])
  }

  if (!props.multiple && Array.isArray(props.modelValue)) {
    emit('update:modelValue', '')
  }

  dialog && dialog.state.emitter.on('handleSelectClose', api.handleClose)
  state.selectEmitter.on(constants.EVENT_NAME.handleOptionClick, api.handleOptionSelect)
  state.selectEmitter.on(constants.EVENT_NAME.setSelected, api.setSelected)
  state.selectEmitter.on(constants.EVENT_NAME.initValue, api.initValue)

  initWatch({ watch, props, api, state, nextTick })

  onMounted(api.mounted)

  onBeforeUnmount(() => {
    api.unMount()
    dialog && dialog.state.emitter.off('handleSelectClose', api.handleClose)
  })

  return api
}
