import type { ITagInputRenderlessParams } from '@/types'

export const addTag =
  ({ emit, props, state }: Pick<ITagInputRenderlessParams, 'emit' | 'props' | 'state'>) =>
  () => {
    const value = state.currentValue.trim()
    if (!value) {
      return
    }

    if (state.tagList.length >= props.max) {
      state.currentValue = ''
      return
    }

    const tags = [...(state.tagList || [])]
    let newTags = [value]
    if (props.separator !== undefined) {
      newTags = value.split(props.separator).filter((val) => val)
    }

    tags.push(...newTags)
    state.tagList = tags
    emit('update:modelValue', tags)
    state.currentValue = ''
  }

export const removeTag =
  ({ emit, props, state }: Pick<ITagInputRenderlessParams, 'emit' | 'props' | 'state'>) =>
  (index: number) => {
    state.tagList.splice(index, 1)
    emit('update:modelValue', state.tagList)
  }

export const handleBackspace =
  ({ emit, props, state }: Pick<ITagInputRenderlessParams, 'emit' | 'props' | 'state'>) =>
  () => {
    if (state.currentValue === '') {
      state.tagList.pop()
      emit('update:modelValue', state.tagList)
    }
  }

export const handleClear =
  ({ emit, props, state }: Pick<ITagInputRenderlessParams, 'emit' | 'props' | 'state'>) =>
  () => {
    state.tagList = []
    emit('update:modelValue', state.tagList)
    state.currentValue = ''
  }

export const handleMouseOver =
  ({ state }: Pick<ITagInputRenderlessParams, 'state'>) =>
  (event: MouseEvent) => {
    state.isHovering = true
  }

export const handleMouseLeave =
  ({ state }: Pick<ITagInputRenderlessParams, 'state'>) =>
  () => {
    state.isHovering = false
  }

export const handleInputFocus =
  ({ state }: Pick<ITagInputRenderlessParams, 'state'>) =>
  () => {
    state.isFocused = true
  }

export const handleInputBlur =
  ({ state }: Pick<ITagInputRenderlessParams, 'state'>) =>
  () => {
    state.isFocused = false
  }

export const handleDragStart =
  ({ state }: Pick<ITagInputRenderlessParams, 'state'>) =>
  (index: number, event: DragEvent) => {
    state.draggingIndex = index
    if (event.target) {
      event.dataTransfer?.setData('text/plain', event.target)
      event.dataTransfer!.effectAllowed = 'move'
    }
  }

export const handleDragOver = () => (index: number, event: DragEvent) => {
  event.preventDefault()
  event.dataTransfer!.dropEffect = 'move'
}

export const handleDragEnter =
  ({ state, emit }: Pick<ITagInputRenderlessParams, 'state' | 'emit'>) =>
  (index: number, event: DragEvent) => {
    event.preventDefault()
    if (index === state.draggingIndex) return
    state.dragTargetIndex = index
  }

export const handleDrop =
  ({ emit, props, state }: Pick<ITagInputRenderlessParams, 'emit' | 'props' | 'state'>) =>
  (index: number, event: DragEvent) => {
    event.preventDefault()
    const newTags = [...(state.tagList ?? [])]
    const draggingTag = newTags[state.draggingIndex]
    newTags.splice(state.draggingIndex, 1)
    newTags.splice(state.dragTargetIndex, 0, draggingTag)
    state.draggingIndex = null
    state.dragTargetIndex = null
    state.tagList = newTags
    emit('update:modelValue', newTags)
  }
