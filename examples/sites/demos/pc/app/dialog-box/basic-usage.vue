<template>
  <div>
    <tiny-button @click="boxVisibility = true" title="弹出 Dialog">弹出 Dialog</tiny-button>
    <tiny-dialog-box v-model:visible="boxVisibility" title="消息" width="30%">
      <span>dialog-box 内容</span>
      <template #footer>
        <tiny-button type="primary" @click="boxVisibility = false"> 确定 </tiny-button>
        <tiny-button @click="boxVisibility = false"> 取消 </tiny-button>
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
  }
}
</script>
