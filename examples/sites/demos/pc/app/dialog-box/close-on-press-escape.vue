<template>
  <div>
    <tiny-button @click="boxVisibility = true" title="弹出 Dialog">弹出 Dialog</tiny-button>
    <tiny-dialog-box :visible="boxVisibility" :close-on-press-escape="false" title="消息" width="30%" @close="close">
      <span>dialog-box内容</span>
      <template #footer>
        <tiny-button type="primary" @click="boxVisibility = false">确 定</tiny-button>
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
  },
  methods: {
    close() {
      this.boxVisibility = false
    }
  }
}
</script>
