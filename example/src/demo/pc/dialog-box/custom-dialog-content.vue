<template>
  <div>
    <tiny-button @click="boxVisibility = true"
      >弹出Dialog{{ boxVisibility }}</tiny-button
    >
    <tiny-dialog-box
      :visible="boxVisibility"
      @update:visible="boxVisibility = $event"
      title="消息"
      width="30%"
    >
      <tiny-alert description="内容是Alert组件"></tiny-alert>
      <template #footer>
        <tiny-button type="primary" @click="boxVisibility = false"
          >确 定</tiny-button
        >
      </template>
    </tiny-dialog-box>
  </div>
</template>

<script>
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
