export const addTag =
  ({ emit, props, state }: Pick<ITagRenderlessParams, 'emit' | 'props' | 'state'>) =>
  () => {
    const value = state.currentValue.trim()
    if (!value) {
      return
    }

    const tags = props.modelValue || []
    let newTags = [value]
    if (props.separator !== undefined) {
      newTags = value.split(props.separator).filter((val) => val)
    }

    tags.push(...newTags)
    emit('updated:modelValue', tags)
    state.currentValue = ''
  }

export const removeTag =
  ({ emit, props }: Pick<ITagRenderlessParams, 'emit' | 'props'>) =>
  (index: number) => {
    const tags = props.modelValue || []
    tags.splice(index, 1)
    emit('updated:modelValue', tags)
  }

export const handleBackspace =
  ({ emit, props, state }: Pick<ITagRenderlessParams, 'emit' | 'props' | 'state'>) =>
  () => {
    if (state.currentValue === '') {
      const tags = props.modelValue || []
      tags.pop()
      emit('onUpdated:modelValue', tags)
    }
  }

export const handleClear =
  ({ emit, props, state }: Pick<ITagRenderlessParams, 'emit' | 'props' | 'state'>) =>
  () => {
    emit('updated:modelValue', props.modelValue.splice(0, props.modelValue.length))
    state.currentValue = ''
  }

export const handleMouseOver =
  ({ state }: Pick<ITagRenderlessParams, 'state'>) =>
  (event: MouseEvent) => {
    state.isHovering = true
  }

export const handleMouseLeave =
  ({ state }: Pick<ITagRenderlessParams, 'state'>) =>
  () => {
    state.isHovering = false
  }

export const handleInputFocus =
  ({ state }: Pick<ITagRenderlessParams, 'state'>) =>
  () => {
    state.isFocused = true
  }

export const handleInputBlur =
  ({ state }: Pick<ITagRenderlessParams, 'state'>) =>
  () => {
    state.isFocused = false
  }

export const handleDragStart =
  ({ state }: Pick<ITagRenderlessParams, 'state'>) =>
  (index: number, event: DragEvent) => {
    state.draggingIndex = index
    state.draggingTag = event.target
    if (state.draggingTag) {
      event.dataTransfer?.setData('text/plain', state.draggingTag)
      event.dataTransfer!.effectAllowed = 'move'
    }
  }

export const handleDragOver = () => (index: number, event: DragEvent) => {
  event.preventDefault()
  event.dataTransfer!.dropEffect = 'move'
}

export const handleDragEnter =
  ({ state, emit }: Pick<ITagRenderlessParams, 'state' | 'emit'>) =>
  (index: number, event: DragEvent) => {
    event.preventDefault()
    if (index === state.draggingIndex) return
    state.dragTargetIndex = index
  }

export const handleDrop =
  ({ emit, props, state }: Pick<ITagRenderlessParams, 'emit' | 'props' | 'state'>) =>
  (index: number, event: DragEvent) => {
    event.preventDefault()
    const newTags = props.modelValue || []
    const draggingTag = newTags[state.draggingIndex]
    newTags.splice(state.draggingIndex, 1)
    newTags.splice(state.dragTargetIndex, 0, draggingTag)
    state.draggingIndex = null
    state.dragTargetIndex = null
    emit('updated:modelValue', newTags)
  }
