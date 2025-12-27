import type { ISharedRenderlessParamHooks } from '@/types'
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
): ITagApi => {
  const state: ITagState = reactive({
    currentValue: '',
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
      return (props.modelValue || []).slice(0, limit)
    }),
    collpasedTagList: computed(() => {
      const limit = props.minCollapsedNum < props.max ? props.minCollapsedNum : props.max
      return (props.modelValue || []).slice(limit)
    }),
    isHovering: false,
    isFocused: false,
    wrapperRef: ref('input-tag'),
    draggingIndex: null,
    draggingTag: null,
    dragTargetIndex: null
  })

  const api: ITagApi = {
    state,
    addTag: addTag({ emit, props, state }),
    removeTag: removeTag({ emit, props }),
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
