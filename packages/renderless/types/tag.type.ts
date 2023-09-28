import type { ExtractPropTypes } from 'vue'
import { tagProps } from '@/tag/src'
import { ISharedRenderlessFunctionParams } from './shared.type'

export interface ITagState {
  type: string
  show: boolean
  selected: boolean
}

export interface ITagApi {
  state: ITagState
  handleClose: (event: Event) => void
  handleClick: (event: Event) => void
}

export type ITagProps = ExtractPropTypes<typeof tagProps>

export type ITagRenderlessParams = ISharedRenderlessFunctionParams<never> & {
  state: ITagState
  props: ITagProps
}
