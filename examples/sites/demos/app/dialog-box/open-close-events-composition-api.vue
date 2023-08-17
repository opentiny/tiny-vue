<template>
  <div>
    <tiny-button @click="boxVisibility = true" title="弹出与关闭事件">弹出与关闭事件</tiny-button>
    <tiny-dialog-box
      v-model:visible="boxVisibility"
      title="消息"
      width="30%"
      @open="open"
      @close="close"
      @opened="opened"
      @closed="closed"
    >
      <span>dialog-box内容</span>
      <template #footer>
        <tiny-button type="primary" @click="boxVisibility = false">确 定</tiny-button>
      </template>
    </tiny-dialog-box>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Button as TinyButton, DialogBox as TinyDialogBox } from '@opentiny/vue'
import Notify from '@opentiny/vue-notify'

const boxVisibility = ref(false)

function open() {
  Notify({
    title: '窗口弹出',
    message: getTime(new Date()),
    offset: 0
  })
}

function opened() {
  Notify({
    title: '窗口弹出动画完成',
    message: getTime(new Date()),
    offset: 0
  })
}

function close() {
  Notify({
    title: '窗口关闭',
    message: getTime(new Date()),
    offset: 0
  })
}

function closed() {
  Notify({
    title: '窗口关闭动画完成',
    message: getTime(new Date()),
    offset: 0
  })
}

function getTime(now) {
  return [now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds()].join(':')
}
</script>
