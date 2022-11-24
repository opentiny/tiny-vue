<template>
  <div>
    <tiny-button @click="boxVisibility1 = true">显示在顶部</tiny-button>
    <tiny-button @click="boxVisibility2 = true">距离顶部33%</tiny-button>
    <tiny-dialog-box
      top="0"
      :visible="boxVisibility1"
      @update:visible="boxVisibility1 = $event"
      title="消息"
      width="30%"
    >
      <span>dialog-box内容</span>
      <template #footer>
        <tiny-button type="primary" @click="boxVisibility1 = false"
          >确 定</tiny-button
        >
      </template>
    </tiny-dialog-box>
    <tiny-dialog-box
      top="33vh"
      :visible="boxVisibility2"
      @update:visible="boxVisibility2 = $event"
      title="消息"
      width="30%"
    >
      <span>dialog-box内容</span>
      <template #footer>
        <tiny-button type="primary" @click="boxVisibility2 = false"
          >确 定</tiny-button
        >
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
      boxVisibility1: false,
      boxVisibility2: false
    }
  }
}
</script>
