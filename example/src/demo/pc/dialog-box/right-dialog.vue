<template>
  <div>
    <tiny-button @click="boxVisibility = true">右侧弹窗</tiny-button>
    <tiny-dialog-box
      right-slide
      :visible="boxVisibility"
      @update:visible="boxVisibility = $event"
      title="消息"
      width="30%"
      modal-append-to-body
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
  }
}
</script>
