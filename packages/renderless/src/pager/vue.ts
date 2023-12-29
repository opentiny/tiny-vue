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
  watchInternalCurrentPage,
  watchPageSizes,
  watchCurrentPage,
  watchInternalPageCount,
  watchPageSize,
  watchTotal
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
  'setTotal'
]

export const renderless = (
  props: IPagerProps,
  { reactive, computed, watch }: ISharedRenderlessParamHooks,
  { emit, vm, nextTick, t }: IPagerRenderlessParamUtils
): IPagerApi => {
  const api = {} as IPagerApi

  const state: IPagerState = reactive({
    showSizes: false,
    internalCurrentPage: 1,
    internalPageSize: props.pageSize,
    lastEmittedPage: -1,
    userChangePageSize: false,
    internalTotal: props.total,
    jumperValue: '1',
    jumperBackup: '1',
    showPager: computed(() => api.computedShowPager()),
    internalLayout: computed(() => api.computedInternalLayout()),
    totalText: computed(() => api.computedTotalText()),
    internalPageCount: computed(() => api.computedInternalPageCount())
  })

  Object.assign(api, {
    state,
    computedShowPager: computedShowPager({ props, state }),
    computedInternalLayout: computedInternalLayout({ props }),
    computedTotalText: computedTotalText({ props, t }),
    computedInternalPageCount: computedInternalPageCount({ props, state }),
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
    emitChange: emitChange({ state, nextTick, emit }),
    setTotal: setTotal({ state }),
    // watch
    watchInternalCurrentPage: watchInternalCurrentPage({ state, emit }),
    watchPageSizes: watchPageSizes({ state, props }),
    watchCurrentPage: watchCurrentPage({ state, api }),
    watchInternalPageCount: watchInternalPageCount({ state, api }),
    watchPageSize: watchPageSize({ state }),
    watchTotal: watchTotal({ state })
  })

  state.internalCurrentPage = api.getValidCurrentPage(props.currentPage)

  watch(() => state.internalCurrentPage, api.watchInternalCurrentPage)
  watch(() => props.pageSizes, api.watchPageSizes, { immediate: true })
  watch(() => props.currentPage, api.watchCurrentPage)
  watch(() => state.internalPageCount, api.watchInternalPageCount)
  watch(() => props.pageSize, api.watchPageSize, { immediate: true })
  watch(() => props.total, api.watchTotal)

  return api
}
