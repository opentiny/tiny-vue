<template>
  <div>
    <tiny-button @click="dragDialog"> 可拖拽弹窗 </tiny-button>
    <tiny-button @click="dragDialogOutSide"> 可拖拽出窗口弹窗 </tiny-button>
    <tiny-dialog-box
      v-if="boxVisibility"
      draggable
      v-model:visible="boxVisibility"
      title="鼠标移入标题区域单击拖拽"
      width="30%"
      :drag-outside-window="isDragOutSideFlag"
      @drag-start="dragStart"
      @drag-end="dragEnd"
      @drag-move="dragMove"
      @before-close="beforeClose"
    >
      <!-- 自定义标题需要在外层元素配置 @mousedown.stop 阻止事件冒泡 -->
      <template #title>
        <div style="width: 80%; height: 100%; background: #dddddd" @mousedown.stop>
          <tiny-input v-model="input" clearable></tiny-input>
        </div>
      </template>
      <span>dialog-box 内容</span>
      <template #footer>
        <tiny-button type="primary" @click="boxVisibility = false"> 确 定 </tiny-button>
      </template>
    </tiny-dialog-box>
  </div>
</template>

<script lang="jsx">
import { Button, DialogBox, Notify, Input, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button,
    TinyDialogBox: DialogBox,
    TinyInput: Input
  },
  data() {
    return {
      input: '鼠标移入标题区域单击拖拽',
      boxVisibility: false,
      isNotifyMoving: false,
      isDragOutSideFlag: false
    }
  },
  methods: {
    dragStart() {
      Notify({
        message: '拖拽开始',
        position: 'top-right'
      })
    },
    dragEnd() {
      Notify({
        message: '拖拽结束',
        position: 'top-right'
      })
    },
    dragMove() {
      if (!this.isNotifyMoving) {
        Notify({
          message: '拖拽移动',
          position: 'top-right'
        })
        this.isNotifyMoving = true
      }
    },
    beforeClose() {
      Modal.message({ message: 'before-close', status: 'info' })
    },
    dragDialog() {
      this.boxVisibility = true
      this.isDragOutSideFlag = false
    },
    dragDialogOutSide() {
      this.boxVisibility = true
      this.isDragOutSideFlag = true
    }
  }
}
</script>
