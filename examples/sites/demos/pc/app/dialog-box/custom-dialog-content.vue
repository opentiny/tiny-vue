<template>
  <div>
    <tiny-button @click="boxVisibility = true" title="弹出 Dialog">弹出 Dialog</tiny-button>
    <tiny-dialog-box v-model:visible="boxVisibility" title="消息" width="30%">
      <tiny-alert description="内容是 Alert 组件"></tiny-alert>
      <template #footer>
        <tiny-button type="primary" @click="boxVisibility = false">确 定</tiny-button>
      </template>
    </tiny-dialog-box>
  </div>
</template>

<script lang="jsx">
import { TinyButton, TinyDialogBox, TinyAlert } from '@opentiny/vue'

export default {
  components: {
    TinyButton,
    TinyDialogBox,
    TinyAlert
  },
  data() {
    return {
      boxVisibility: false
    }
  }
}
</script>
