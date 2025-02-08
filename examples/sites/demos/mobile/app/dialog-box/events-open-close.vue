<template>
  <div class="tiny-mobile-dialog-box-demo">
    <tiny-button @click="boxVisibility = true">弹出Dialog {{ boxVisibility }}</tiny-button>
    <tiny-dialog-box
      :visible="boxVisibility"
      @update:visible="boxVisibility = $event"
      :modal-append-to-body="false"
      title="标题"
      @open="open"
      @close="close"
    >
      <span>单行文本单行文本单行文本</span>
    </tiny-dialog-box>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyButton, TinyDialogBox } from '@opentiny/vue-mobile'

const boxVisibility = ref(false)

function open() {
  console.log('窗口弹出')
}

function close() {
  console.log('窗口关闭')
}

function getTime(now) {
  return [now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds()].join(':')
}
</script>
