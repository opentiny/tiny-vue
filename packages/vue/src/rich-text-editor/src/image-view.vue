<template>
  <NodeViewWrapper class="node-view" :node="node">
    <div class="tiny-image__view">
      <img
        class="image-view-content"
        :src="node.attrs.src"
        :alt="node.attrs.alt"
        :title="node.attrs.title"
        :width="node.attrs.width"
        :height="node.attrs.height"
        @click="handleSelectImg"
        ref="imgRef"
      />

      <div
        class="tiny-image__resize"
        v-show="selectedVal"
        v-if="editor.isEditable"
        :style="{
          width: resizerState.w + 'px',
          height: resizerState.h + 'px',
          left: resizerState.x + 'px',
          top: resizerState.y + 'px'
        }"
      >
        <span
          v-for="direction in resizeDirection"
          :key="direction"
          :class="'tiny-image__resize__' + direction"
          class="tiny-image__handle"
          @mousedown="handleMouseDown($event, direction)"
        ></span>
      </div>
    </div>
  </NodeViewWrapper>
</template>

<script lang="ts">
import { NodeViewWrapper, nodeViewProps } from '@tiptap/vue-3'
import { defineComponent, hooks } from '@opentiny/vue-common'

export default defineComponent({
  name: 'ImageView',
  props: nodeViewProps,
  components: { NodeViewWrapper },
  setup(props) {
    const enum ResizeDirection {
      TOP_LEFT = 'tl',
      TOP_RIGHT = 'tr',
      BOTTOM_LEFT = 'bl',
      BOTTOM_RIGHT = 'br'
    }

    interface ImageSize {
      minWidth: number
      minHeight: number
      maxWidth: number
      maxHeight: number
    }

    const { node, editor, getPos } = props

    const resizeDirection = [
      ResizeDirection.TOP_LEFT,
      ResizeDirection.TOP_RIGHT,
      ResizeDirection.BOTTOM_LEFT,
      ResizeDirection.BOTTOM_RIGHT
    ]

    const resizerState = hooks.reactive({
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      dir: ''
    })

    const imageSize = hooks.ref<ImageSize>({
      minWidth: 100,
      minHeight: 100,
      maxWidth: 1000,
      maxHeight: 1000
    })

    const handleSelectImg = (e: Event) => {
      editor.commands.setNodeSelection(getPos())
      const { offsetWidth, offsetHeight } = e.target as HTMLImageElement
      resizerState.w = offsetWidth
      resizerState.h = offsetHeight
    }

    const selectedVal = hooks.computed(() => props.selected)

    const initResizerState = () => {
      const { width, height } = node.attrs
      resizerState.w = width
      resizerState.h = height
    }

    let isResizing = hooks.ref(false)
    const imgRef = hooks.ref<HTMLImageElement | null>(null)
    const lastX = hooks.ref(0)
    const lastY = hooks.ref(0)
    const handleMouseDown = (e: MouseEvent, direction: ResizeDirection) => {
      e.stopPropagation()
      e.preventDefault()
      resizerState.dir = direction
      lastX.value = e.clientX
      lastY.value = e.clientY
      isResizing.value = true
      window.addEventListener('mousemove', handleMouseMove, true)
      window.addEventListener('mouseup', handleMouseUp, true)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing.value || !imgRef.value) return
      e.preventDefault()
      e.stopPropagation()
      const x = e.clientX
      const y = e.clientY
      const dx = x - lastX.value
      const dy = y - lastY.value

      let newWidth = resizerState.w + (resizerState.dir.includes('r') ? dx : -dx)
      let newHeight = resizerState.h + (resizerState.dir.includes('b') ? dy : -dy)

      newWidth = Math.max(imageSize.value.minWidth, Math.min(newWidth, imageSize.value.maxWidth))
      newHeight = Math.max(imageSize.value.minHeight, Math.min(newHeight, imageSize.value.maxHeight))

      resizerState.w = newWidth
      resizerState.h = newHeight

      lastX.value = x
      lastY.value = y
      imgRef.value.style.width = resizerState.w + 'px'
      imgRef.value.style.height = resizerState.h + 'px'
    }

    const handleMouseUp = () => {
      isResizing.value = false
      window.removeEventListener('mousemove', handleMouseMove, true)
      window.removeEventListener('mouseup', handleMouseUp, true)
    }
    hooks.onMounted(() => {
      initResizerState()
    })
    return {
      imgRef,
      isResizing,
      resizerState,
      handleMouseDown,
      handleMouseMove,
      handleMouseUp,
      node,
      editor,
      resizeDirection,
      handleSelectImg,
      selectedVal
    }
  }
})
</script>
