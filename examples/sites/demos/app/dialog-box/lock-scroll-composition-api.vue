<template>
  <div>
    <tiny-button @click="boxVisibility = true">允许滚动背景</tiny-button>
    <tiny-dialog-box :lock-scroll="false" v-model:visible="boxVisibility" title="消息" width="30%">
      <span>不锁定被遮罩内容的滚动</span>
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
