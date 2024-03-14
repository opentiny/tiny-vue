import type { ExtractPropTypes } from 'vue'
import type { tagProps } from '@/tag/src'
import type { ISharedRenderlessFunctionParams } from './shared.type'

export interface ITagState {
  type: string | undefined
  show: boolean
  selected: boolean
  text: string
  color: string
  mini: boolean
  maxWidth: string | number
  cycleColor: string
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
  api: ITagApi
}
