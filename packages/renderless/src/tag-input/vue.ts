import type { ITagInputApi, ITagInputState, ISharedRenderlessParamUtils, ISharedRenderlessParamHooks } from '@/types'
import {
  addTag,
  removeTag,
  handleBackspace,
  handleClear,
  handleMouseLeave,
  handleMouseOver,
  handleInputFocus,
  handleInputBlur,
  handleDragEnter,
  handleDragStart,
  handleDragOver,
  handleDrop
} from './index'

export const api = [
  'addTag',
  'removeTag',
  'state',
  'handleBackspace',
  'handleClear',
  'handleMouseLeave',
  'handleMouseOver',
  'handleInputFocus',
  'handleInputBlur',
  'handleDragStart',
  'handleDragOver',
  'handleDragEnter',
  'handleDrop'
]

export const renderless = (
  props,
  { reactive, computed, ref }: ISharedRenderlessParamHooks,
  { emit, parent }: ISharedRenderlessParamUtils<never>
): ITagInputApi => {
  const state: ITagInputState = reactive({
    currentValue: '',
    tagList: props.modelValue || [],
    disabled: computed(() => props.disabled),
    closeable: computed(() => !props.readonly && !props.disabled),
    showClearIcon: computed(() => {
      return (
        props.clearable &&
        !props.readonly &&
        !props.disabled &&
        (state.isHovering || state.isFocused) &&
        ((props.modelValue || []).length > 0 || state.currentValue)
      )
    }),
    showTagList: computed(() => {
      const limit = props.minCollapsedNum < props.max ? props.minCollapsedNum : props.max
      return (state.tagList || []).slice(0, limit)
    }),
    collapsedTagList: computed(() => {
      return props.minCollapsedNum < props.max ? (state.tagList || []).slice(props.minCollapsedNum) : []
    }),
    isHovering: false,
    isFocused: false,
    draggingIndex: null,
    dragTargetIndex: null
  })

  const api: ITagInputApi = {
    state,
    addTag: addTag({ emit, props, state }),
    removeTag: removeTag({ emit, props, state }),
    handleBackspace: handleBackspace({ emit, props, state }),
    handleClear: handleClear({ emit, props, state }),
    handleMouseLeave: handleMouseLeave({ state }),
    handleMouseOver: handleMouseOver({ state }),
    handleInputBlur: handleInputBlur({ state }),
    handleInputFocus: handleInputFocus({ state }),
    handleDragStart: handleDragStart({ emit, props, state }),
    handleDragOver: handleDragOver(),
    handleDragEnter: handleDragEnter({ emit, state }),
    handleDrop: handleDrop({ emit, props, state })
  }

  return api
}
