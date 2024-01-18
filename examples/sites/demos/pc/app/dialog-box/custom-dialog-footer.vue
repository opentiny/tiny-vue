<template>
  <div>
    <tiny-button @click="boxVisibility = true" :title="'弹出 Dialog' + boxVisibility"
      >弹出 Dialog{{ boxVisibility }}</tiny-button
    >
    <tiny-dialog-box v-model:visible="boxVisibility" title="消息" width="30%">
      <span>dialog-box 内容</span>
      <template #footer>
        <div style="width: 100%; height: 100%; background: #dddddd">自定义footer区域</div>
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
