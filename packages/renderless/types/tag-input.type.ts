import type { ExtractPropTypes } from 'vue'
import type { tagInputProps } from '@/tag-input/src'
import type {
  addTag,
  removeTag,
  handleBackspace,
  handleClear,
  handleMouseLeave,
  handleMouseOver,
  handleInputBlur,
  handleInputFocus,
  handleDragStart,
  handleDragOver,
  handleDragEnter,
  handleDrop
} from '../src/tag-input'
import type { ISharedRenderlessFunctionParams } from './shared.type'

export interface ITagInputState {
  currentValue: string
  tagList: string[]
  disabled: boolean
  closeable: boolean
  showClearIcon: boolean
  showTagList: string[]
  collapsedTagList: string[]
  isHovering: boolean
  isFocused: boolean
  draggingIndex: null | number
  dragTargetIndex: null | number
}

export interface ITagInputApi {
  state: ITagInputState
  addTag: ReturnType<typeof addTag>
  removeTag: ReturnType<typeof removeTag>
  handleBackspace: ReturnType<typeof handleBackspace>
  handleClear: ReturnType<typeof handleClear>
  handleMouseLeave: ReturnType<typeof handleMouseLeave>
  handleMouseOver: ReturnType<typeof handleMouseOver>
  handleInputBlur: ReturnType<typeof handleInputBlur>
  handleInputFocus: ReturnType<typeof handleInputFocus>
  handleDragStart: ReturnType<typeof handleDragStart>
  handleDragOver: ReturnType<typeof handleDragOver>
  handleDragEnter: ReturnType<typeof handleDragEnter>
  handleDrop: ReturnType<typeof handleDrop>
}

export type ITagInputProps = ExtractPropTypes<typeof tagInputProps>

export type ITagInputRenderlessParams = ISharedRenderlessFunctionParams<never> & {
  state: ITagInputState
  props: ITagInputProps
  api: ITagInputApi
}
