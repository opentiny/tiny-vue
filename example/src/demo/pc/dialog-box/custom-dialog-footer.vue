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
      <span>dialog-box内容</span>
      <template #footer>
        <div style="width: 100%; height: 100%; background: #dddddd">
          自定义footer区域
        </div>
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
