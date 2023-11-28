/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */

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
  getOption,
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
  getValueKey,
  emptyText,
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
  toVisible,
  toHide,
  mounted,
  unMount,
  watchHoverIndex,
  computeOptimizeOpts,
  watchOptimizeOpts,
  getScrollListener,
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
  resetFilter,
  computedGetIcon,
  computedGetTagType,
  computedShowDropdownIcon,
  clearNoMatchValue
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
  'resetFilter',
  'computedGetIcon'
]

const initStateAdd = ({ computed, props, api, parent }) => ({
  selectedTags: [],
  tips: '',
  showTip: false,
  tipHover: false,
  selectHover: false,
  tipTimer: null,
  selectCls: 'checked-sur',
  overflow: null,
  completed: false,
  inputWidth: 0,
  inputPaddingRight: 0,
  hoverIndex: -1,
  hoverOption: -1,
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
  initialInputHeight: 28,
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
  formItemSize: computed(() => (parent.formItem || {}).formItemSize),
  selectDisabled: computed(() => api.computedSelectDisabled()),
  isDisplayOnly: computed(() => props.displayOnly || (parent.form || {}).displayOnly),
  gridCheckedData: computed(() => api.getcheckedData()),
  isExpandAll: computed(() => api.computedIsExpandAll()),
  searchSingleCopy: computed(() => props.allowCopy && !props.multiple && props.filterable),
  tooltipContent: {},
  isHidden: false,
  defaultCheckedKeys: [],
  filterOrSearch: computed(() => props.filterable || props.searchable)
})

const initState = ({ reactive, computed, props, api, emitter, parent, constants, designConfig }) => {
  const stateAdd = initStateAdd({ computed, props, api, parent })
  const state = reactive({
    ...stateAdd,
    selectEmitter: emitter(),
    datas: [],
    query: '',
    options: [],
    visible: false,
    showCopy: computed(() => api.computedShowCopy()),
    showWarper: true, // 显示下拉外层控制
    selected: props.multiple ? [] : {},
    softFocus: false,
    hover: false,
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
    optimizeStore: { flag: false, valueIndex: 0, startIndex: 0, viewStyle: '', datas: [] },
    collapseTags: computed(() => api.computeCollapseTags()),
    multipleLimit: computed(() => api.computeMultipleLimit()),
    disabledTooltipContent: computed(() => api.computedDisabledTooltipContent()),
    collapseTagsLength: 0,
    initValue: [],
    key: 0,
    isSelectAll: computed(() => state.selectCls === 'checked-sur'),
    isHalfSelect: computed(() => state.selectCls === 'halfselect'),
    getIcon: computed(() => api.computedGetIcon((name = 'dropdownIcon'))),
    getTagType: computed(() => api.computedGetTagType()),
    isShowDropdownIcon: computed(() => api.computedShowDropdownIcon())
  })

  return state
}

const addApi = ({ api, props, state, emit, constants, parent, nextTick, dispatch, vm, designConfig }) => {
  Object.assign(api, {
    resetInputHeight: resetInputHeight({ api, constants, nextTick, props, vm, state, designConfig }),
    calcOverFlow: calcOverFlow({ vm, props, state }),
    handleFocus: handleFocus({ api, emit, props, state }),
    deleteTag: deleteTag({ api, constants, emit, props, vm, nextTick, state }),
    watchValue: watchValue({ api, constants, dispatch, props, vm, state }),
    toHide: toHide({ constants, state, props, vm, api, nextTick }),
    toVisible: toVisible({ constants, state, props, vm, api, nextTick }),
    setSelected: setSelected({ api, constants, nextTick, props, vm, state }),
    selectOption: selectOption({ api, state, props }),
    handleResize: handleResize({ api, props, state }),
    watchOptions: watchOptions({ api, constants, nextTick, parent, props, state }),
    watchVisible: watchVisible({ api, constants, emit, state, vm, props }),
    deletePrevTag: deletePrevTag({ api, constants, props, state, vm }),
    onInputChange: onInputChange({ api, props, state, constants, nextTick }),
    deleteSelected: deleteSelected({ api, constants, emit, props, vm, state }),
    handleMenuEnter: handleMenuEnter({ api, nextTick, state }),
    resetInputState: resetInputState({ api, vm, state }),
    navigateOptions: navigateOptions({ api, nextTick, state }),
    handleClearClick: handleClearClick(api),
    handleComposition: handleComposition({ api, nextTick, state }),
    handleQueryChange: handleQueryChange({ api, constants, nextTick, props, vm, state }),
    handleOptionSelect: handleOptionSelect({ api, nextTick, props, vm, state }),
    getPluginOption: getPluginOption({ api, props, state }),
    toggleCheckAll: toggleCheckAll({ api, emit, state, props }),
    debouncedQueryChange: debounce(state.debounce, (event) => {
      api.handleQueryChange(props.shape ? event : event.target.value)
    }),
    debouncedOnInputChange: debounce(state.debounce, () => {
      api.onInputChange()
    }),
    debouncRquest: debouncRquest({ api, state, props }),
    defaultOnQueryChange: defaultOnQueryChange({ props, state, constants, api }),
    mounted: mounted({ api, parent, state, props, vm, constants }),
    unMount: unMount({ api, parent, vm, state }),
    watchOptimizeOpts: watchOptimizeOpts({ api, props, vm, state }),
    handleDropdownClick: handleDropdownClick({ emit }),
    handleEnterTag: handleEnterTag({ state }),
    calcCollapseTags: calcCollapseTags({ state, vm }),
    initValue: initValue({ state }),
    getLabelSlotValue: getLabelSlotValue({ props, state }),
    loadTreeData: loadTreeData({ state, vm, props, api }),
    resetFilter: resetFilter({ state, api }),
    computedGetIcon: computedGetIcon({ constants, designConfig, props }),
    computedGetTagType: computedGetTagType({ designConfig, props }),
    computedShowDropdownIcon: computedShowDropdownIcon({ props, state }),
    clearNoMatchValue: clearNoMatchValue({ props, emit })
  })
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
  designConfig
}) => {
  Object.assign(api, {
    state,
    maskState,
    doDestroy: doDestroy(vm),
    getTreeData: getTreeData(props),
    blur: blur({ vm, state }),
    focus: focus({ vm, state }),
    getValueKey: getValueKey(props),
    handleClose: handleClose(state),
    getValueIndex: getValueIndex(props),
    getChildValue: getChildValue(),
    getOption: getOption({ props, state }),
    emitChange: emitChange({ emit, props, state, constants }),
    toggleMenu: toggleMenu({ vm, state, props }),
    showTip: showTip({ props, state, vm }),
    onOptionDestroy: onOptionDestroy(state),
    setSoftFocus: setSoftFocus({ vm, state }),
    getcheckedData: getcheckedData({ props, state }),
    resetInputWidth: resetInputWidth({ vm, state }),
    resetHoverIndex: resetHoverIndex({ props, state }),
    scrollToOption: scrollToOption({ vm, constants }),
    selectChange: selectChange({ emit, props, vm, state, api }),
    radioChange: radioChange({ emit, props, state, api }),
    handleCopyClick: handleCopyClick({ parent, props, state }),
    treeNodeClick: treeNodeClick({ emit, props, state, api, vm }),
    managePlaceholder: managePlaceholder({ vm, state }),
    nodeCheckClick: nodeCheckClick({ emit, props, state, api }),
    checkDefaultFirstOption: checkDefaultFirstOption(state),
    nodeExpand: nodeExpand({ state, constants, nextTick }),
    nodeCollapse: nodeCollapse({ state, constants, nextTick }),
    handleBlur: handleBlur({ constants, dispatch, emit, state }),
    toggleLastOptionHitState: toggleLastOptionHitState({ state }),
    emptyText: emptyText({ I18N: constants.I18N, props, state, t }),
    watchPropsOption: watchPropsOption({ constants, parent, props, state }),
    buildSelectConfig: buildSelectConfig({ props, state }),
    buildRadioConfig: buildRadioConfig({ props, state }),
    onMouseenterNative: onMouseenterNative({ state }),
    onMouseleaveNative: onMouseleaveNative({ state }),
    onCopying: onCopying({ state, vm }),
    gridOnQueryChange: gridOnQueryChange({ props, vm, constants, state }),
    watchHoverIndex: watchHoverIndex({ state }),
    computeOptimizeOpts: computeOptimizeOpts({ props, state }),
    getScrollListener: getScrollListener({ props, vm, state }),
    computeCollapseTags: computeCollapseTags(props),
    computeMultipleLimit: computeMultipleLimit({ props, state }),
    watchInputHover: watchInputHover({ vm }),
    initQuery: initQuery({ props, state, constants, vm }),
    updateModelValue: updateModelValue({ emit, state }),
    computedTagsStyle: computedTagsStyle({ props, parent, state }),
    computedReadonly: computedReadonly({ props, state }),
    computedShowClose: computedShowClose({ props, state }),
    computedCollapseTagSize: computedCollapseTagSize(state),
    computedShowNewOption: computedShowNewOption({ props, state }),
    computedShowCopy: computedShowCopy({ props, state }),
    computedOptionsAllDisabled: computedOptionsAllDisabled(state),
    computedDisabledTooltipContent: computedDisabledTooltipContent(state),
    computedSelectDisabled: computedSelectDisabled({ props, parent }),
    computedIsExpandAll: computedIsExpandAll(props),
    watchInitValue: watchInitValue({ props, emit }),
    watchShowClose: watchShowClose({ nextTick, state, parent })
  })

  addApi({ api, props, state, emit, constants, parent, nextTick, dispatch, vm, designConfig })
}

const addWatch = ({ watch, props, api, state, nextTick }) => {
  watch(() => [...state.options], api.watchOptions)

  if (props.renderType === 'grid') {
    watch(() => state.gridData, api.setSelected, { immediate: true })
  }

  if (props.renderType === 'tree') {
    watch(() => state.treeData, api.setSelected, { immediate: true })
  }

  watch(() => state.hoverIndex, api.watchHoverIndex)

  if (props.options) {
    watch(() => props.options, api.watchPropsOption, { immediate: true, deep: true })
  }

  watch(() => state.optimizeOpts, api.watchOptimizeOpts)

  watch([() => state.inputHovering, () => state.visible], api.watchInputHover)

  watch(() => state.showClose, api.watchShowClose, { immediate: true })

  watch(
    () => state.selectHover,
    () => props.hoverExpand && !props.disabled && !state.isDisplayOnly && nextTick(api.resetInputHeight)
  )
}

const initWatch = ({ watch, props, api, state, nextTick }) => {
  if (props.renderType === 'tree' && props.treeOp.data) {
    watch(
      () => props.treeOp.data,
      (data) => {
        data && (state.treeData = data)
      },
      { immediate: true, deep: true }
    )
  }

  if (props.renderType === 'grid' && props.gridOp.data) {
    watch(
      () => props.gridOp.data,
      (data) => {
        data && (state.gridData = data)
      },
      { immediate: true, deep: true }
    )
  }

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

  watch(() => props.modelValue, api.watchValue)

  watch(
    () => props.extraQueryParams,
    () => api.handleQueryChange(state.previousQuery, true),
    { deep: true }
  )

  watch(() => state.visible, api.watchVisible)

  watch(() => state.initValue, api.watchInitValue, { deep: true })

  addWatch({ watch, props, api, state, nextTick })
}

export const renderless = (
  props,
  { computed, onBeforeUnmount, onMounted, reactive, watch, provide },
  { vm, parent, emit, constants, nextTick, dispatch, t, emitter, designConfig }
) => {
  const api = {}
  const state = initState({ reactive, computed, props, api, emitter, parent, constants, designConfig })

  provide('selectEmitter', state.selectEmitter)
  provide('selectVm', vm)

  const maskState = reactive({ width: '', height: '', top: '' })

  initApi({ api, props, state, emit, maskState, constants, parent, nextTick, dispatch, t, vm, designConfig })
  initWatch({ watch, props, api, state, nextTick })

  onMounted(api.mounted)
  onBeforeUnmount(api.unMount)

  parent.$on('handle-clear', (event) => {
    api.handleClearClick(event)
  })

  if (props.multiple && !Array.isArray(props.modelValue)) {
    emit('update:modelValue', [])
  }

  if (!props.multiple && Array.isArray(props.modelValue)) {
    emit('update:modelValue', '')
  }

  state.selectEmitter.on(constants.EVENT_NAME.handleOptionClick, api.handleOptionSelect)
  state.selectEmitter.on(constants.EVENT_NAME.setSelected, api.setSelected)
  state.selectEmitter.on(constants.EVENT_NAME.initValue, api.initValue)

  return api
}
