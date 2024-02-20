<template>
  <div>
    <tiny-button @click="boxVisibility = true"> 可拖拽弹窗 </tiny-button>
    <tiny-button @click="boxVisibility = true"> 可编辑拖拽弹窗 </tiny-button>
    <tiny-dialog-box
      draggable
      v-model:visible="boxVisibility"
      title="鼠标移入标题区域单击拖拽"
      :drag-outside-window="true"
      width="30%"
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
      <span>dialog-box内容</span>
      <template #footer>
        <tiny-button type="primary" @click="boxVisibility = false"> 确 定 </tiny-button>
      </template>
    </tiny-dialog-box>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Button as TinyButton, DialogBox as TinyDialogBox, Notify, Input as TinyInput, Modal } from '@opentiny/vue'

const boxVisibility = ref(false)
const isNotifyMoving = ref(false)
const input = ref('鼠标移入标题区域单击拖拽')

function dragStart() {
  Notify({
    message: '拖拽开始',
    position: 'top-right'
  })
}

function dragEnd() {
  Notify({
    message: '拖拽结束',
    position: 'top-right'
  })
}

function dragMove() {
  if (!isNotifyMoving.value) {
    Notify({
      message: '拖拽移动',
      position: 'top-right'
    })
    isNotifyMoving.value = true
  }
}
function beforeClose() {
  Modal.message({ message: 'before-close', status: 'info' })
}
</script>
