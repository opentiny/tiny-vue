<template>
  <div>
    <tiny-button @click="boxVisibility = true" :title="'弹出Dialog' + boxVisibility">弹出Dialog{{ boxVisibility }}</tiny-button>
    <tiny-dialog-box v-model:visible="boxVisibility" title="消息" width="30%">
      <tiny-alert description="内容是Alert组件"></tiny-alert>
      <template #footer>
        <tiny-button type="primary" @click="boxVisibility = false">确 定</tiny-button>
      </template>
    </tiny-dialog-box>
  </div>
</template>

<script lang="jsx">
import { Button, DialogBox, Alert } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button,
    TinyDialogBox: DialogBox,
    TinyAlert: Alert
  },
  data() {
    return {
      boxVisibility: false
    }
  }
}
</script>
