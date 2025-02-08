<template>
  <div class="tiny-mobile-dialog-box-demo">
    <tiny-button @click="boxVisibility = true">弹出Dialog {{ boxVisibility }}</tiny-button>
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

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyButton, TinyDialogBox } from '@opentiny/vue-mobile'

const boxVisibility = ref(false)

function cancel() {
  console.log('取消按钮的回调')
}

function confirm() {
  console.log('确定按钮的回调')
}

function getTime(now) {
  return [now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds()].join(':')
}
</script>
