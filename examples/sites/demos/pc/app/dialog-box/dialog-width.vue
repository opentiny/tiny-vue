<template>
  <div>
    <tiny-button @click="boxVisibility1 = true" type="info">宽度 30%</tiny-button>
    <tiny-button @click="boxVisibility2 = true">宽度 60%</tiny-button>
    <tiny-dialog-box v-model:visible="boxVisibility1" title="消息" width="30%">
      <span>dialog-box 内容</span>
      <template #footer>
        <tiny-button type="primary" @click="boxVisibility1 = false">确 定</tiny-button>
      </template>
    </tiny-dialog-box>
    <tiny-dialog-box v-model:visible="boxVisibility2" title="消息" width="60%">
      <span>dialog-box 内容</span>
      <template #footer>
        <tiny-button type="primary" @click="boxVisibility2 = false">确 定</tiny-button>
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
