<template>
  <div>
    <tiny-button @click="boxVisibility = true">可拖拽弹窗</tiny-button>
    <tiny-dialog-box
      draggable
      v-model:visible="boxVisibility"
      title="鼠标移入标题区域单击拖拽"
      width="30%"
      @drag-start="dragStart"
      @drag-end="dragEnd"
      @drag-move="dragMove"
    >
      <span>dialog-box内容</span>
      <template #footer>
        <tiny-button type="primary" @click="boxVisibility = false">确 定</tiny-button>
      </template>
    </tiny-dialog-box>
  </div>
</template>

<script lang="jsx">
import { Button, DialogBox } from '@opentiny/vue'

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
      window.tinyLog('拖拽开始')
    },
    dragEnd() {
      window.tinyLog('拖拽结束')
    },
    dragMove() {
      window.tinyLog('拖拽移动')
    }
  }
}
</script>
