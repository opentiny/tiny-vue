<template>
  <div>
    <tiny-button @click="boxVisibility = true" title="弹出 Dialog">弹出 Dialog</tiny-button>
    <tiny-dialog-box v-model:visible="boxVisibility" title="消息" width="30%">
      <span>dialog-box 内容</span>
      <template #footer>
        <tiny-button @click="boxVisibility = false" round>取 消</tiny-button>
        <tiny-button type="primary" @click="boxVisibility = false" round>确 定</tiny-button>
      </template>
    </tiny-dialog-box>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyButton, TinyDialogBox } from '@opentiny/vue'

const boxVisibility = ref(false)
</script>
