<template>
  <div class="tiny-mobile-dialog-box-demo">
    <tiny-button @click="boxVisibility = true"
      >弹出Dialog {{ boxVisibility }}</tiny-button
    >
    <tiny-dialog-box
      :visible="boxVisibility"
      @update:visible="boxVisibility = $event"
      width="30%"
      append-to-body
    >
      <span>dialog-box内容</span>
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
