<template>
  <div>
    <tiny-button @click="boxVisibility = true">全屏弹窗</tiny-button>
    <tiny-dialog-box fullscreen v-model:visible="boxVisibility" title="消息">
      <span>弹窗适应整个窗口大小</span>
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
</script>
