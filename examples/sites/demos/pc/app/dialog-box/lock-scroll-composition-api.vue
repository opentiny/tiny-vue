<template>
  <div>
    <tiny-button @click="openDlg(true)" type="info">允许滚动背景</tiny-button>
    <tiny-button @click="openDlg(false)">不允许滚动背景</tiny-button>
    <tiny-dialog-box :lock-scroll="false" v-model:visible="visible1" title="消息" width="30%">
      <span>允许被遮罩内容的滚动</span>
      <template #footer>
        <tiny-button type="primary" @click="closeDlg(true)">确 定</tiny-button>
      </template>
    </tiny-dialog-box>
    <tiny-dialog-box :lock-scroll="true" v-model:visible="visible2" title="消息" width="30%">
      <span>不允许被遮罩内容的滚动</span>
      <template #footer>
        <tiny-button type="primary" @click="closeDlg(false)">确 定</tiny-button>
      </template>
    </tiny-dialog-box>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Button as TinyButton, DialogBox as TinyDialogBox } from '@opentiny/vue'

const visible1 = ref(false)
const visible2 = ref(false)

function openDlg(isScroll) {
  if (isScroll) {
    document.body.style.overflow = 'auto'
    document.body.style.height = '200vh'
    visible1.value = true
  } else {
    document.body.style.height = '200vh'
    visible2.value = true
  }
}

function closeDlg(isScroll) {
  if (isScroll) {
    document.body.style.overflow = 'hidden'
    document.body.style.height = '100vh'
    visible1.value = false
  } else {
    document.body.style.height = '100vh'
    visible2.value = false
  }
}
</script>
