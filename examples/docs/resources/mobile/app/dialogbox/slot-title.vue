<template>
  <div class="tiny-mobile-dialog-box-demo">
    <tiny-button @click="boxVisibility = true">弹出Dialog {{ boxVisibility }}</tiny-button>
    <tiny-dialog-box :visible="boxVisibility" @update:visible="boxVisibility = $event" :modal-append-to-body="false" :append-to-body="false">
      <template #title>
        <div style="width: 80%; height: 100%; background: #dddddd">自定义title区域</div>
      </template>
      <span>dialog-box内容</span>
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
