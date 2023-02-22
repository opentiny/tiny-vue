<template>
  <div>
    <tiny-button @click="boxVisibility = true">无关闭按钮</tiny-button>
    <tiny-dialog-box :show-close="false" v-model:visible="boxVisibility" title="消息" width="30%">
      <span>隐藏右上角的关闭按钮</span>
      <template #footer>
        <tiny-button type="primary" @click="boxVisibility = false">确 定</tiny-button>
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
