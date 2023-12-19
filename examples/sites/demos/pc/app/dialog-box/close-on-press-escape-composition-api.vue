<template>
  <div>
    <tiny-button @click="boxVisibility = true" :title="'弹出 Dialog' + boxVisibility"
      >弹出 Dialog{{ boxVisibility }}</tiny-button
    >
    <tiny-dialog-box :visible="boxVisibility" :close-on-press-escape="false" title="消息" width="30%" @close="close">
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

const boxVisibility = ref(false)

function close() {
  boxVisibility.value = false
}
</script>
