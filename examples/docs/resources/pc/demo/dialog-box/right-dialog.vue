<template>
  <div>
    <tiny-button @click="boxVisibility = true">右侧弹窗</tiny-button>
    <tiny-dialog-box right-slide v-model:visible="boxVisibility" title="消息" width="30%" modal-append-to-body>
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
  }
}
</script>
