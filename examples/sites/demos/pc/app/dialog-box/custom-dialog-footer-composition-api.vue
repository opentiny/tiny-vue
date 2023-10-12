<template>
  <div>
    <tiny-button @click="boxVisibility = true" :title="'弹出Dialog' + boxVisibility"
      >弹出Dialog{{ boxVisibility }}</tiny-button
    >
    <tiny-dialog-box v-model:visible="boxVisibility" title="消息" width="30%">
      <span>dialog-box内容</span>
      <template #footer>
        <div style="width: 100%; height: 100%; background: #dddddd">自定义footer区域</div>
      </template>
    </tiny-dialog-box>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Button as TinyButton, DialogBox as TinyDialogBox } from '@opentiny/vue'

const boxVisibility = ref(false)
</script>
