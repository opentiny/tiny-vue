import type {
  IPagerApi,
  IPagerProps,
  IPagerState,
  ISharedRenderlessParamHooks,
  IPagerRenderlessParamUtils
} from '@/types'
import {
  computedShowPager,
  computedInternalLayout,
  computedTotalText,
  computedInternalPageCount,
  computedSimplestPagerOption,
  computedSimplestPagerWidth,
  computedPageSizeText,
  getInternalPageSize,
  handleJumperFocus,
  handleSizeChange,
  handleJumperInput,
  handleJumperChange,
  handleJumperClick,
  isValueNumber,
  parseValueNumber,
  handleSizeShowPopover,
  handleSizeHidePopover,
  canJumperGo,
  beforeSizeChangeHandler,
  beforePagerChangeHandler,
  copyEmit,
  beforeChangeHandler,
  handleCurrentChange,
  prev,
  next,
  buildBeforePageChangeParam,
  getValidCurrentPage,
  emitChange,
  setTotal,
  clickSizes,
  watchInternalCurrentPage,
  watchCurrentPage,
  watchInternalPageCount,
  watchTotal,
  watchShowSizes,
  watchInternalPageSize
} from './index'

export const api = [
  'state',
  'handleJumperFocus',
  'handleSizeChange',
  'handleJumperInput',
  'handleJumperChange',
  'handleJumperClick',
  'isValueNumber',
  'parseValueNumber',
  'handleSizeShowPopover',
  'handleSizeHidePopover',
  'canJumperGo',
  'beforeSizeChangeHandler',
  'beforePagerChangeHandler',
  'beforeJumperChangeHandler',
  'beforeChangeHandler',
  'handleCurrentChange',
  'prev',
  'next',
  'buildBeforePageChangeParam',
  'getValidCurrentPage',
  'emitChange',
  'setTotal',
  'clickSizes'
]

export const renderless = (
  props: IPagerProps,
  { reactive, computed, watch }: ISharedRenderlessParamHooks,
  { emit, vm, nextTick, t, designConfig }: IPagerRenderlessParamUtils
): IPagerApi => {
  const api = {} as IPagerApi

  const state: IPagerState = reactive({
    showSizes: false,
    internalCurrentPage: 1,
    internalPageSize: 10,
    lastEmittedPage: -1,
    userChangePageSize: false,
    internalTotal: props.total,
    jumperValue: '1',
    jumperBackup: '1',
    simplestPagerOption: computed(() => api.computedSimplestPagerOption()),
    simplestPagerWidth: computed(() => api.computedSimplestPagerWidth()),
    showPager: computed(() => api.computedShowPager()),
    internalLayout: computed(() => api.computedInternalLayout()),
    totalText: computed(() => api.computedTotalText()),
    internalPageCount: computed(() => api.computedInternalPageCount()),
    showJumperSuffix: designConfig?.state?.showJumperSuffix ?? true,
    align: props.align || designConfig?.state?.align || 'right',
    totalI18n: designConfig?.state?.totalI18n || 'totals',
    totalFixedLeft: computed(
      () => props.totalFixedLeft ?? designConfig?.state?.totalFixedLeft ?? props.mode !== 'simplest' ?? true
    ),
    pageSizeText: computed(() => api.computedPageSizeText())
  })

  Object.assign(api, {
    state,
    computedShowPager: computedShowPager({ props, state }),
    computedInternalLayout: computedInternalLayout({ props }),
    computedTotalText: computedTotalText({ props, t }),
    computedInternalPageCount: computedInternalPageCount({ props, state }),
    computedSimplestPagerOption: computedSimplestPagerOption({ props, state }),
    computedSimplestPagerWidth: computedSimplestPagerWidth({ state }),
    computedPageSizeText: computedPageSizeText({ props, designConfig }),
    getValidCurrentPage: getValidCurrentPage({ state }),
    handleJumperFocus: handleJumperFocus({ state }),
    handleSizeChange: handleSizeChange({ props, state, api, emit, vm }),
    handleJumperInput: handleJumperInput({ state }),
    handleJumperChange: handleJumperChange({ props, state, api }),
    handleJumperClick: handleJumperClick({ props, state, api }),
    isValueNumber: isValueNumber({ state }),
    parseValueNumber: parseValueNumber({ state }),
    handleSizeShowPopover: handleSizeShowPopover({ state, props }),
    handleSizeHidePopover: handleSizeHidePopover({ state }),
    canJumperGo: canJumperGo({ props, state, vm }),
    beforeSizeChangeHandler: beforeSizeChangeHandler({ state, emit }),
    beforePagerChangeHandler: beforePagerChangeHandler({ state, emit }),
    copyEmit: copyEmit({ emit }),
    beforeChangeHandler: beforeChangeHandler({ state, api }),
    handleCurrentChange: handleCurrentChange({ state, api }),
    prev: prev({ state, props, api, emit }),
    next: next({ props, state, api, emit }),
    buildBeforePageChangeParam: buildBeforePageChangeParam({ state }),
    emitChange: emitChange({ state, nextTick, emit, props }),
    setTotal: setTotal({ state }),
    clickSizes: clickSizes(),
    // watch
    watchInternalCurrentPage: watchInternalCurrentPage({ state, emit, props }),
    getInternalPageSize: getInternalPageSize({ state, props }),
    watchCurrentPage: watchCurrentPage({ state, api }),
    watchInternalPageCount: watchInternalPageCount({ state, api }),
    watchTotal: watchTotal({ state }),
    watchShowSizes: watchShowSizes({ nextTick, vm }),
    watchInternalPageSize: watchInternalPageSize({ emit, props })
  })

  state.internalCurrentPage = api.getValidCurrentPage(props.currentPage)
  state.internalPageSize = api.getInternalPageSize()

  watch(() => state.internalCurrentPage, api.watchInternalCurrentPage)
  watch(() => state.internalPageSize, api.watchInternalPageSize)
  watch(() => props.currentPage, api.watchCurrentPage)
  watch(() => state.internalPageCount, api.watchInternalPageCount)
  watch(() => props.total, api.watchTotal)
  watch(() => state.showSizes, api.watchShowSizes)
  watch(
    () => props.pageSize,
    () => (state.internalPageSize = api.getInternalPageSize())
  )
  watch(
    () => props.pageSizes,
    () => (state.internalPageSize = api.getInternalPageSize())
  )

  return api
}
