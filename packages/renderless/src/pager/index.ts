import type { IPagerRenderlessParams } from '@/types'
import { emitEvent } from '../common/event'

export const computedShowPager =
  ({ props, state }) =>
  () => {
    const hidePager = props.hideOnSinglePage && (!state.internalPageCount || state.internalPageCount === 1)
    return state.internalLayout.length > 0 && !hidePager
  }

export const computedInternalLayout =
  ({ props }) =>
  () => {
    let layout = ''

    if (props.mode && !props.layout) {
      props.mode === 'number' && (layout = 'total, sizes, prev, pager, next, jumper')
      props.mode === 'simple' && (layout = 'sizes, total, prev, current, next')
      props.mode === 'complete' && (layout = 'sizes, total, prev, pager, next, jumper')
      props.mode === 'fixed' && (layout = 'prev,pager,next')
    } else if ((!props.mode && props.layout) || (props.mode && props.layout)) {
      layout = props.layout
    } else {
      layout = 'total, prev, pager, next, jumper'
    }

    if (!layout) {
      return []
    } else {
      const components = layout.split(',').map((item) => item.trim())
      return components
    }
  }

export const computedTotalText =
  ({ props, t }) =>
  () => {
    if (typeof props.customTotal === 'string') return props.customTotal

    const totals = parseInt(props.total)

    if (isNaN(totals)) return 0

    const HUNDRED_THOUSAND = 100000
    const MILLION = 1000000
    const TEN_MILLION = 10000000
    if (totals <= HUNDRED_THOUSAND) {
      return totals
    } else if (totals <= MILLION) {
      return t('ui.page.hundredThousand')
    } else if (totals <= TEN_MILLION) {
      return t('ui.page.million')
    } else {
      return t('ui.page.tenMillion')
    }
  }

export const computedInternalPageCount =
  ({ props, state }) =>
  () => {
    if (typeof props.total === 'number') {
      return Math.max(1, Math.ceil(props.total / state.internalPageSize))
    } else if (typeof props.pageCount === 'number') {
      return Math.max(1, props.pageCount)
    }

    return null
  }

export const handleJumperFocus =
  ({ state }: Pick<IPagerRenderlessParams, 'state'>) =>
  (e) => {
    state.jumperBackup = e.target.value
  }

export const watchInternalCurrentPage =
  ({ state, emit }) =>
  (currentPage) => {
    const value = String(currentPage)

    if (state.jumperValue !== value) {
      state.jumperValue = value
    }
    emit('update:currentPage', currentPage)
    emit('current-change', currentPage)
    state.lastEmittedPage = -1
  }

export const watchPageSizes =
  ({ state, props }) =>
  (newVal) => {
    if (Array.isArray(newVal)) {
      state.internalPageSize = newVal.includes(props.pageSize) ? props.pageSize : props.pageSizes[0]
    }
  }

export const watchCurrentPage =
  ({ state, api }) =>
  (curPage) => {
    state.internalCurrentPage = api.getValidCurrentPage(curPage)
  }

export const watchInternalPageCount =
  ({ state, api }) =>
  (pageCount) => {
    const oldCurPage = state.internalCurrentPage

    if (pageCount > 0 && oldCurPage === 0) {
      state.internalCurrentPage = 1
    } else if (oldCurPage > pageCount) {
      state.internalCurrentPage = pageCount || 1
      state.userChangePageSize && api.emitChange()
    }

    state.userChangePageSize = false
  }

export const watchPageSize =
  ({ state }) =>
  (pageSize) => {
    state.internalPageSize = isNaN(pageSize) ? 10 : pageSize
  }

export const watchTotal =
  ({ state }) =>
  (total) => {
    state.internalTotal = total
  }

export const handleSizeChange =
  ({ props, state, api, emit, vm }: Pick<IPagerRenderlessParams, 'props' | 'state' | 'api' | 'emit' | 'vm'>) =>
  (val: string) => {
    if (val !== state.internalPageSize) {
      const callback = () => {
        if (!api.beforeChangeHandler()) {
          return false
        }

        state.internalPageSize = val = parseInt(val, 10)
        state.userChangePageSize = true
        state.showSizes = false
        emit('update:pageSize', val)
        emit('size-change', val)
        emit('page-change', {
          currentPage: state.internalCurrentPage,
          pageSize: val,
          total: state.internalTotal
        })
        vm.$refs.sizesList[0].state.showPopper = false
      }

      if (props.isBeforePageChange) {
        let newPageSize = val
        let currentPageSize = state.internalPageSize
        let params = { newPageSize, currentPageSize, callback }

        api.beforeSizeChangeHandler(params)
      } else {
        callback()
      }
    }
  }

export const handleJumperInput =
  ({ state }) =>
  (e) => {
    if (!e.target.value) {
      state.jumperValue = ''
    } else if (/^\d+$/.test(e.target.value)) {
      state.jumperValue = e.target.value || '1'
    }
    e.target.value = state.jumperValue
  }

export const handleJumperChange =
  ({ props, state, api }) =>
  () => {
    api.parseValueNumber()

    const callback = () => {
      api.handleJumperClick()
    }
    const rollback = () => {
      state.jumperValue = String(state.jumperBackup)
    }
    const newPage = state.jumperValue
    const currentPage = state.jumperBackup

    if (props.isBeforePageChange && newPage !== currentPage) {
      const params = { newPage, currentPage, callback, rollback }

      api.beforePagerChangeHandler(params)
    } else {
      callback()
    }
  }

export const handleJumperClick =
  ({ props, state, api }) =>
  () => {
    if (!api.canJumperGo() || props.disabled) return

    state.internalCurrentPage = api.getValidCurrentPage(state.jumperValue)
    api.emitChange()
  }

export const isValueNumber =
  ({ state }) =>
  () => {
    return !isNaN(Number(state.jumperValue))
  }

export const parseValueNumber =
  ({ state }) =>
  () => {
    let value = Number(
      String(state.jumperValue)
        .split(/[^0-9-+.]/)
        .join('')
    )

    if (isNaN(value)) {
      value = 1
    }

    value = Number(value.toFixed(0))

    const min = 1
    const max = state.internalPageCount || 1

    if (value >= max) {
      state.jumperValue = String(max)
    } else if (value <= min) {
      state.jumperValue = String(min)
    } else {
      state.jumperValue = String(value)
    }
  }

export const handleSizeShowPopover =
  ({ state, props }) =>
  () => {
    if (props.disabled) {
      return (state.showSizes = false)
    }
    state.showSizes = true
  }

export const handleSizeHidePopover =
  ({ state }) =>
  () => {
    state.showSizes = false
  }

export const canJumperGo =
  ({ props, state, vm }) =>
  () => {
    const inputValue = Number(vm.$refs.jumperInput[0].value || 0)
    const currentPage = Number(state.internalCurrentPage || 0)
    return props.accurateJumper ? inputValue !== currentPage : true
  }
export const beforeSizeChangeHandler =
  ({ state, emit }) =>
  (params) => {
    const { newPageSize, currentPageSize, callback } = params
    const newPage = 1
    const currentPage = state.internalCurrentPage
    const temp = {
      newPage,
      newPageSize,
      currentPage,
      currentPageSize,
      callback
    }

    emit('before-page-change', temp)
  }

export const beforePagerChangeHandler =
  ({ state, emit }) =>
  (params) => {
    const { newPage, currentPage, callback, rollback } = params
    const newPageSize = state.internalPageSize
    const currentPageSize = state.internalPageSize
    const temp = {
      newPage,
      newPageSize,
      currentPage,
      currentPageSize,
      callback,
      rollback
    }

    emit('before-page-change', temp)
  }

export const beforeJumperChangeHandler =
  ({ state, emit }) =>
  (params) => {
    const { newPage, currentPage, callback, rollback } = params
    const newPageSize = state.internalPageSize
    const currentPageSize = state.internalPageSize
    const temp = {
      newPage,
      newPageSize,
      currentPage,
      currentPageSize,
      callback,
      rollback
    }

    emit('before-page-change', temp)
  }

export const copyEmit =
  ({ emit }) =>
  (...args) => {
    emit(args[0], ...args.slice(1))
  }

export const beforeChangeHandler =
  ({ state, api }) =>
  (val = -1) => {
    return emitEvent(api.copyEmit, 'before-change', state.internalCurrentPage, this, val)
  }
export const handleCurrentChange =
  ({ state, api }) =>
  (val) => {
    if (!api.beforeChangeHandler(val)) {
      return false
    }

    state.internalCurrentPage = api.getValidCurrentPage(val)
    state.userChangePageSize = true
    api.emitChange()
  }

export const prev =
  ({ state, props, api, emit }) =>
  () => {
    const callback = () => {
      if (props.disabled || !api.beforeChangeHandler(state.internalCurrentPage - 1)) {
        return false
      }

      const newVal = state.internalCurrentPage - 1

      state.internalCurrentPage = api.getValidCurrentPage(newVal)
      emit('prev-click', state.internalCurrentPage)
      api.emitChange()
    }

    if (props.isBeforePageChange) {
      const newPage = state.internalCurrentPage - 1
      const temp = api.buildBeforePageChangeParam({ newPage, callback })

      emit('before-page-change', temp)
    } else {
      callback()
    }
  }

export const next =
  ({ props, state, api, emit }) =>
  () => {
    const callback = () => {
      if (props.disabled || !api.beforeChangeHandler(state.internalCurrentPage + 1)) {
        return false
      }

      const newVal = state.internalCurrentPage + 1

      state.internalCurrentPage = api.getValidCurrentPage(newVal)
      emit('next-click', state.internalCurrentPage)
      api.emitChange()
    }

    if (props.isBeforePageChange) {
      const newPage = state.internalCurrentPage + 1
      const temp = api.buildBeforePageChangeParam({ newPage, callback })

      emit('before-page-change', temp)
    } else {
      callback()
    }
  }

export const buildBeforePageChangeParam =
  ({ state }) =>
  (param) => {
    const currentPage = state.internalCurrentPage
    const newPageSize = state.internalPageSize
    const currentPageSize = state.internalPageSize

    return { currentPage, newPageSize, currentPageSize, ...param }
  }

export const getValidCurrentPage =
  ({ state }) =>
  (val) => {
    val = parseInt(val, 10)

    const hasPageCount = typeof state.internalPageCount === 'number'

    let resetVal

    if (hasPageCount) {
      if (val < 1) {
        resetVal = 1
      } else if (val > state.internalPageCount) {
        resetVal = state.internalPageCount
      }
    } else {
      if (isNaN(val) || val < 1) {
        resetVal = 1
      }
    }

    if (resetVal === undefined && isNaN(val)) {
      resetVal = 1
    } else if (resetVal === 0) {
      resetVal = 1
    }

    return resetVal === undefined ? val : resetVal
  }

export const emitChange =
  ({ state, nextTick, emit }) =>
  () => {
    nextTick(() => {
      if (state.internalCurrentPage !== state.lastEmittedPage || state.userChangePageSize) {
        emit('update:current-page', state.internalCurrentPage)
        emit('page-change', {
          currentPage: state.internalCurrentPage,
          pageSize: state.internalPageSize,
          total: state.internalTotal
        })
        state.lastEmittedPage = state.internalCurrentPage
        state.userChangePageSize = false
      }
    })
  }

export const setTotal =
  ({ state }) =>
  (val) => {
    state.internalTotal = val
  }
