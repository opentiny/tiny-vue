<template>
  <div>
    <tiny-button @click="boxVisibility1 = true" type="info">显示在顶部</tiny-button>
    <tiny-button @click="boxVisibility2 = true">距离顶部 300px</tiny-button>
    <tiny-dialog-box top="0" v-model:visible="boxVisibility1" title="消息" width="30%">
      <span>dialog-box内容</span>
      <template #footer>
        <tiny-button type="primary" @click="boxVisibility1 = false">确 定</tiny-button>
      </template>
    </tiny-dialog-box>
    <tiny-dialog-box top="300px" v-model:visible="boxVisibility2" title="消息" width="30%">
      <span>dialog-box内容</span>
      <template #footer>
        <tiny-button type="primary" @click="boxVisibility2 = false">确 定</tiny-button>
      </template>
    </tiny-dialog-box>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Button as TinyButton, DialogBox as TinyDialogBox } from '@opentiny/vue'

const boxVisibility1 = ref(false)
const boxVisibility2 = ref(false)
</script>
