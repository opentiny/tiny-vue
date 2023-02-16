<template>
  <div>
    <tiny-button @click="boxVisibility1 = true">宽度30%</tiny-button>
    <tiny-button @click="boxVisibility2 = true">宽度60%</tiny-button>
    <tiny-dialog-box
      :visible="boxVisibility1"
      @update:visible="boxVisibility1 = $event"
      title="消息"
      width="30%"
      dialog-class="mydialogBox"
    >
      <span>dialog-box内容</span>
      <template #footer>
        <tiny-button type="primary" @click="boxVisibility1 = false"
          >确 定</tiny-button
        >
      </template>
    </tiny-dialog-box>
    <tiny-dialog-box
      :visible="boxVisibility2"
      @update:visible="boxVisibility2 = $event"
      title="消息"
      width="60%"
    >
      <span>dialog-box内容</span>
      <template #footer>
        <tiny-button type="primary" @click="boxVisibility2 = false"
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
      boxVisibility1: false,
      boxVisibility2: false
    }
  }
}
</script>

<style scoped>
.mydialogBox {
  background: rgba(150, 137, 137, 0.8);
}
</style>
