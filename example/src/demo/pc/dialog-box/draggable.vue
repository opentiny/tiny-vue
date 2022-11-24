<template>
  <div>
    <tiny-button @click="boxVisibility = true">可拖拽弹窗</tiny-button>
    <tiny-dialog-box
      draggable
      :visible="boxVisibility"
      @update:visible="boxVisibility = $event"
      title="鼠标移入标题区域单击拖拽"
      width="30%"
      @drag-start="dragStart"
      @drag-end="dragEnd"
      @drag-move="dragMove"
    >
      <span>dialog-box内容</span>
      <template #footer>
        <tiny-button type="primary" @click="boxVisibility = false"
          >确 定</tiny-button
        >
      </template>
    </tiny-dialog-box>
  </div>
</template>

<script>
import { Button, DialogBox, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button,
    TinyDialogBox: DialogBox
  },
  data() {
    return {
      boxVisibility: false
    }
  },
  methods: {
    dragStart() {
      Modal.message({ message: '拖拽开始', status: 'info' })
    },
    dragEnd() {
      Modal.message({ message: '拖拽结束', status: 'info' })
    },
    dragMove() {
      Modal.message({ message: '拖拽移动', status: 'info' })
    }
  }
}
</script>
