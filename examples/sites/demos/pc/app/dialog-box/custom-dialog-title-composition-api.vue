<template>
  <div>
    <tiny-button @click="boxVisibility = true" :title="'弹出Dialog' + boxVisibility"
      >弹出Dialog{{ boxVisibility }}</tiny-button
    >
    <tiny-dialog-box v-model:visible="boxVisibility" width="30%">
      <template #title>
        <div style="width: 80%; height: 100%; background: #dddddd">自定义title区域</div>
      </template>
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
</script>
