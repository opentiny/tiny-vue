import type { ExtractPropTypes } from 'vue'
import type { pagerProps } from '@/pager/src'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'
import type {
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
  clickSizes,
  watchInternalCurrentPage,
  watchPageSizes,
  watchCurrentPage,
  watchInternalPageCount,
  watchPageSize,
  watchTotal,
  watchShowSizes
} from '../src/pager'

export type IPagerProps = ExtractPropTypes<typeof pagerProps>

export interface IPagerState {
  showPager: boolean
  showSizes: boolean
  internalCurrentPage: number
  internalPageSize: number
  lastEmittedPage: number
  userChangePageSize: boolean
  internalTotal: number | undefined
  jumperValue: string
  jumperBackup: string
  internalLayout: string[]
  totalText: string
  internalPageCount: number | null
  showJumperSufix: boolean
  align: 'left' | 'center' | 'right'
  totalI18n: 'total' | 'totals'
  totalFixedLeft: boolean
  pageSizeText: string
}

export interface IPagerApi {
  state: IPagerState
  t: IPagerRenderlessParamUtils['t']
  computedShowPager: ReturnType<typeof computedShowPager>
  computedInternalLayout: ReturnType<typeof computedInternalLayout>
  computedTotalText: ReturnType<typeof computedTotalText>
  computedInternalPageCount: ReturnType<typeof computedInternalPageCount>
  handleJumperFocus: ReturnType<typeof handleJumperFocus>
  handleSizeChange: ReturnType<typeof handleSizeChange>
  handleJumperInput: ReturnType<typeof handleJumperInput>
  handleJumperChange: ReturnType<typeof handleJumperChange>
  handleJumperClick: ReturnType<typeof handleJumperClick>
  isValueNumber: ReturnType<typeof isValueNumber>
  parseValueNumber: ReturnType<typeof parseValueNumber>
  handleSizeShowPopover: ReturnType<typeof handleSizeShowPopover>
  handleSizeHidePopover: ReturnType<typeof handleSizeHidePopover>
  canJumperGo: ReturnType<typeof canJumperGo>
  beforeSizeChangeHandler: ReturnType<typeof beforeSizeChangeHandler>
  beforePagerChangeHandler: ReturnType<typeof beforePagerChangeHandler>
  copyEmit: ReturnType<typeof copyEmit>
  beforeChangeHandler: ReturnType<typeof beforeChangeHandler>
  handleCurrentChange: ReturnType<typeof handleCurrentChange>
  prev: ReturnType<typeof prev>
  next: ReturnType<typeof next>
  buildBeforePageChangeParam: ReturnType<typeof buildBeforePageChangeParam>
  getValidCurrentPage: ReturnType<typeof getValidCurrentPage>
  emitChange: ReturnType<typeof emitChange>
  setTotal: ReturnType<typeof setTotal>
  clickSizes: ReturnType<typeof clickSizes>
  watchInternalCurrentPage: ReturnType<typeof watchInternalCurrentPage>
  watchPageSizes: ReturnType<typeof watchPageSizes>
  watchCurrentPage: ReturnType<typeof watchCurrentPage>
  watchInternalPageCount: ReturnType<typeof watchInternalPageCount>
  watchPageSize: ReturnType<typeof watchPageSize>
  watchTotal: ReturnType<typeof watchTotal>
  watchShowSizes: ReturnType<typeof watchShowSizes>
}
export type IPagerRenderlessParams = ISharedRenderlessFunctionParams<never> & {
  api: IPagerApi
  state: IPagerState
  props: IPagerProps
}

export type IPagerRenderlessParamUtils = ISharedRenderlessParamUtils<never>
