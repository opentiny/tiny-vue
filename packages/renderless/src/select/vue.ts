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
  resetFilter,
  computedGetIcon
} from './index'
import { BROWSER_NAME } from '../common'
import browserInfo from '../common/browser'
import debounce from '../common/deps/debounce'
import { isNumber, isNull } from '../common/type'

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
  'resetFilter'
]

const initStateAdd = ({ computed, props, api, parent, emitter }) => ({
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
  hoverIndex: -1,
  hoverOption: -1,
  inputLength: 20,
  optionsCount: 0,
  selectFiexd: {},
  isSilentBlur: false,
  cachedOptions: [],
  selectedLabel: '',
  previousQuery: null,
  inputHovering: false,
  createdLabel: null,
  createdSelected: false,
  isOnComposition: false,
  cachedPlaceHolder: props.placeholder,
  initialInputHeight: 0,
  currentPlaceholder: props.placeholder,
  filteredOptionsCount: 0,
  gridData: [],
  treeData: [],
  remoteData: [],
  currentKey: props.modelValue,
  updateId: '',
  popperElm: null,
  selectEmitter: emitter(),
  debounce: computed(() => (isNumber(props.queryDebounce) ? props.queryDebounce : props.remote ? 300 : 0)),
  emptyText: computed(() => api.emptyText()),
  formItemSize: computed(() => (parent.formItem || {}).formItemSize),
  selectDisabled: computed(() => props.disabled || (parent.form || {}).disabled),
  gridCheckedData: computed(() => api.getcheckedData()),
  isExpandAll: computed(() =>
    props.treeOp && props.treeOp.defaultExpandAll !== undefined ? props.treeOp.defaultExpandAll : true
  ),
  searchSingleCopy: computed(() => props.allowCopy && !props.multiple && props.filterable),
  filterOrSearch: computed(() => props.filterable || props.searchable)
})

const initState = ({ reactive, computed, props, api, emitter, parent, constants }) => {
  const stateAdd = initStateAdd({ computed, props, api, parent, emitter })
  const state = reactive({
    ...stateAdd,
    datas: [],
    query: '',
    options: [],
    visible: false,
    showCopy: computed(() => props.multiple && props.copyable && state.inputHovering && state.selected.length),
    showWarper: true, // 显示下拉外层控制
    selected: props.multiple ? [] : {},
    softFocus: false,
    hover: false,
    firstAutoSeach: props.remoteConfig.autoSeach,
    tagsStyle: computed(() => ({ 'max-width': state.inputWidth - 32 + 'px', width: '100%' })),

    readonly: computed(
      () =>
        props.readonly ||
        !props.filterable ||
        props.searchable ||
        props.multiple ||
        (browserInfo.name !== BROWSER_NAME.IE && browserInfo.name !== BROWSER_NAME.Edge && !state.visible)
    ),
    iconClass: computed(() => (state.visible ? '' : constants.CLASS.IsReverse)),
    showClose: computed(
      () =>
        props.clearable &&
        !state.selectDisabled &&
        state.inputHovering &&
        (props.multiple
          ? Array.isArray(props.modelValue) && props.modelValue.length > 0
          : !isNull(props.modelValue) && props.modelValue !== '')
    ),
    optionsAllDisabled: computed(() =>
      state.options.filter((option) => option.visible).every((option) => option.disabled)
    ),
    collapseTagSize: computed(() => state.selectSize),
    showNewOption: computed(
      () =>
        props.filterable &&
        props.allowCreate &&
        state.query !== '' &&
        !state.options.filter((option) => !option.created).some((option) => option.state.currentLabel === state.query)
    ),
    selectSize: computed(() => props.size || state.formItemSize),
    optimizeOpts: computed(() => api.computeOptimizeOpts()),
    optimizeStore: { flag: false, valueIndex: 0, startIndex: 0, viewStyle: '', datas: [] },
    collapseTags: computed(() => api.computeCollapseTags()),
    multipleLimit: computed(() => api.computeMultipleLimit()),
    isSelectAll: computed(() => state.selectCls === 'checked-sur'),
    isHalfSelect: computed(() => state.selectCls === 'halfselect'),
    getIcon: computed(() => api.computedGetIcon())
  })

  return state
}

const addApi = ({ api, props, state, refs, emit, constants, parent, nextTick, dispatch, vm, designConfig }) => {
  Object.assign(api, {
    resetInputHeight: resetInputHeight({ constants, nextTick, props, refs, state }),
    calcOverFlow: calcOverFlow({ refs, props, state }),
    handleFocus: handleFocus({ api, emit, props, state }),
    deleteTag: deleteTag({ api, constants, emit, props, vm, state }),
    watchValue: watchValue({ api, constants, dispatch, props, refs, state }),
    toHide: toHide({ constants, state, props, vm, api }),
    toVisible: toVisible({ constants, state, props, vm, api, nextTick }),
    setSelected: setSelected({ api, constants, nextTick, props, vm, state }),
    selectOption: selectOption({ api, state, props }),
    handleResize: handleResize({ api, props }),
    watchOptions: watchOptions({ api, constants, nextTick, parent, props, state }),
    watchVisible: watchVisible({ api, constants, emit, state, refs }),
    deletePrevTag: deletePrevTag({ api, constants, emit, props, state, vm }),
    onInputChange: onInputChange({ api, props, state, constants, nextTick }),
    deleteSelected: deleteSelected({ api, constants, emit, props, vm, state }),
    handleMenuEnter: handleMenuEnter({ api, nextTick, state }),
    resetInputState: resetInputState({ api, refs, state }),
    navigateOptions: navigateOptions({ api, nextTick, state }),
    handleClearClick: handleClearClick(api),
    handleComposition: handleComposition({ api, nextTick, state }),
    handleQueryChange: handleQueryChange({ api, constants, nextTick, props, vm, state }),
    handleOptionSelect: handleOptionSelect({ api, emit, nextTick, props, refs, state }),
    getPluginOption: getPluginOption({ api, props, state }),
    toggleCheckAll: toggleCheckAll({ api, emit, state }),
    debouncedQueryChange: debounce(state.debounce, (event) => {
      api.handleQueryChange(event.target.value)
    }),
    debouncedOnInputChange: debounce(state.debounce, () => {
      api.onInputChange()
    }),
    debouncRquest: debouncRquest({ api, state, props }),
    defaultOnQueryChange: defaultOnQueryChange({ props, state, constants, api }),
    mounted: mounted({ api, parent, state, props, refs }),
    unMount: unMount({ api, parent, refs, state }),
    watchOptimizeOpts: watchOptimizeOpts({ api, props, refs, state }),
    resetFilter: resetFilter({ state, api }),
    computedGetIcon: computedGetIcon({ constants, designConfig })
  })
}

const initApi = ({
  api,
  props,
  state,
  refs,
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
    doDestroy: doDestroy(refs),
    getTreeData: getTreeData(props),
    blur: blur({ refs, state }),
    focus: focus({ refs, state }),
    getValueKey: getValueKey(props),
    handleClose: handleClose(state),
    getValueIndex: getValueIndex(props),
    getChildValue: getChildValue(),
    getOption: getOption({ props, state }),
    emitChange: emitChange({ emit, props, state, constants }),
    toggleMenu: toggleMenu({ refs, state, props }),
    showTip: showTip({ props, state, refs }),
    onOptionDestroy: onOptionDestroy(state),
    setSoftFocus: setSoftFocus({ refs, state }),
    getcheckedData: getcheckedData({ props, state }),
    resetInputWidth: resetInputWidth({ refs, state }),
    resetHoverIndex: resetHoverIndex({ props, state }),
    scrollToOption: scrollToOption({ refs, constants }),
    selectChange: selectChange({ emit, props, refs, state }),
    radioChange: radioChange({ emit, props, state }),
    handleCopyClick: handleCopyClick({ parent, props, state }),
    treeNodeClick: treeNodeClick({ emit, props, state }),
    managePlaceholder: managePlaceholder({ refs, state }),
    nodeCheckClick: nodeCheckClick({ emit, props, state }),
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
    onCopying: onCopying({ state, refs }),
    gridOnQueryChange: gridOnQueryChange({ props, refs, constants, state }),
    watchHoverIndex: watchHoverIndex({ state }),
    computeOptimizeOpts: computeOptimizeOpts({ props, state }),
    getScrollListener: getScrollListener({ props, refs, state }),
    computeCollapseTags: computeCollapseTags(props),
    computeMultipleLimit: computeMultipleLimit({ props, state })
  })

  addApi({ api, props, state, refs, emit, constants, parent, nextTick, dispatch, vm, designConfig })
}

const addWatch = ({ watch, props, api, state }) => {
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
}

const initWatch = ({ watch, props, api, state, nextTick, refs }) => {
  if (props.renderType === 'tree' && props.treeOp.data) {
    watch(
      () => props.treeOp.data,
      (data) => {
        state.treeData = data
      },
      { immediate: true, deep: true }
    )
  }

  if (props.renderType === 'grid' && props.gridOp.data) {
    watch(
      () => props.gridOp.data,
      (data) => {
        state.gridData = data
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
    () => state.visible,
    (value) => {
      if ((state.filterOrSearch || props.remote) && !value) {
        refs.reference?.blur()
      }

      api.watchVisible(value)
    }
  )

  addWatch({ watch, props, api, state })
}

export const renderless = (
  props,
  { computed, onBeforeUnmount, onMounted, reactive, watch, provide },
  { vm, refs, parent, emit, constants, nextTick, dispatch, t, emitter, designConfig }
) => {
  const api = {}
  const state = initState({ reactive, computed, props, api, emitter, parent, constants })

  provide('selectEmitter', state.selectEmitter)
  provide('selectVm', vm)

  const maskState = reactive({ width: '', height: '', top: '' })

  initApi({ api, props, state, refs, emit, maskState, constants, parent, nextTick, dispatch, t, vm, designConfig })
  initWatch({ watch, props, api, state, nextTick, refs })

  onMounted(api.mounted)
  onBeforeUnmount(api.unMount)

  if (props.multiple && !Array.isArray(props.modelValue)) {
    emit('update:modelValue', [])
  }

  if (!props.multiple && Array.isArray(props.modelValue)) {
    emit('update:modelValue', '')
  }

  state.selectEmitter.on(constants.EVENT_NAME.handleOptionClick, api.handleOptionSelect)
  state.selectEmitter.on(constants.EVENT_NAME.setSelected, api.setSelected)

  return api
}
