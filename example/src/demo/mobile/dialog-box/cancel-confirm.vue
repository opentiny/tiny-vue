<template>
  <div class="tiny-mobile-dialog-box-demo">
    <tiny-button @click="boxVisibility = true"
      >弹出Dialog {{ boxVisibility }}</tiny-button
    >
    <tiny-dialog-box
      :visible="boxVisibility"
      @update:visible="boxVisibility = $event"
      :modal-append-to-body="false"
      title="标题"
      @cancel="cancel"
      @confirm="confirm"
    >
      <span>单行文本单行文本单行文本</span>
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
  },
  methods: {
    cancel() {
      console.log('取消按钮的回调')
    },
    confirm() {
      console.log('确定按钮的回调')
    },
    getTime(now) {
      return [
        now.getHours(),
        now.getMinutes(),
        now.getSeconds(),
        now.getMilliseconds()
      ].join(':')
    }
  }
}
</script>
