import type { debounce } from 'src/common/runtime'
import type { ExtractPropTypes } from 'vue'
import type { tagGroupProps } from '@/tag-group/src'
import type { getHiddenTags, handelItemClick } from '../src/tag-group'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'

export interface ITagGroupDataItem {
  name: string
  type?: string
}

export interface ITagGroupState {
  showMore: boolean
  hiddenTags: ITagGroupDataItem[]
}

export type ITagGroupRenderlessParams = ISharedRenderlessFunctionParams<never> & {
  api: ITagGroupApi
  state: ITagGroupState
  props: ITagGroupProps
}

export type ITagGroupProps = ExtractPropTypes<typeof tagGroupProps>

export interface ITagGroupApi {
  state: ITagGroupState
  getHiddenTags: ReturnType<typeof getHiddenTags>
  handelItemClick: ReturnType<typeof handelItemClick>
  debouncedGetHiddenTags?: ReturnType<typeof debounce>
}

export type ITagGroupRenderlessParamUtils = ISharedRenderlessParamUtils<never>
