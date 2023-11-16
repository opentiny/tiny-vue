<template>
  <div>
    <tiny-button @click="boxVisibility = true">无标题</tiny-button>
    <tiny-dialog-box :show-header="false" v-model:visible="boxVisibility" title="消息" width="30%">
      <span>隐藏弹窗的标题部分</span>
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
