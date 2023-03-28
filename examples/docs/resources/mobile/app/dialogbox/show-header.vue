<template>
  <div class="tiny-mobile-dialog-box-demo">
    <tiny-button @click="boxVisibility1 = true">弹出Dialog {{ boxVisibility1 }}</tiny-button>
    <tiny-dialog-box :visible="boxVisibility1" @update:visible="boxVisibility1 = $event" :modal-append-to-body="false" title="标题" :show-header="false">
      <span>单行文本单行文本单行文本</span>
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
      boxVisibility1: false
    }
  }
}
</script>
