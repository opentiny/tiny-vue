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

<script setup lang="ts">
import type { NodeViewProps } from '@tiptap/vue-3'
import { NodeViewWrapper } from '@tiptap/vue-3'
import { computed, defineProps, onMounted, reactive, ref } from 'vue'

const props = defineProps<NodeViewProps>()

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

const resizerState = reactive({
  x: 0,
  y: 0,
  w: 0,
  h: 0,
  dir: ''
})

const imageSize = ref<ImageSize>({
  minWidth: 100,
  minHeight: 100,
  maxWidth: 1000,
  maxHeight: 1000
})

// 选中图片
const handleSelectImg = (e: Event) => {
  editor.commands.setNodeSelection(getPos())
  const { offsetWidth, offsetHeight } = e.target as HTMLImageElement
  resizerState.w = offsetWidth
  resizerState.h = offsetHeight
}

const selectedVal = computed(() => props.selected)

const initResizerState = () => {
  const { width, height } = node.attrs
  resizerState.w = width
  resizerState.h = height
}

let isResizing = ref(false)
const imgRef = ref<HTMLImageElement | null>(null)
const lastX = ref(0)
const lastY = ref(0)
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
  // 根据鼠标的位置和方向调整图片的大小
  const dx = x - lastX.value
  const dy = y - lastY.value

  let newWidth = resizerState.w + (resizerState.dir.includes('r') ? dx : -dx)
  let newHeight = resizerState.h + (resizerState.dir.includes('b') ? dy : -dy)

  // 确保新的宽度和高度不超过设定的最大值和最小值
  newWidth = Math.max(imageSize.value.minWidth, Math.min(newWidth, imageSize.value.maxWidth))
  newHeight = Math.max(imageSize.value.minHeight, Math.min(newHeight, imageSize.value.maxHeight))

  resizerState.w = newWidth
  resizerState.h = newHeight

  // 更新上一次的鼠标位置
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
onMounted(() => {
  initResizerState()
})
</script>
