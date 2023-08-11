<template>
  <div>
    <tiny-button @click="boxVisibility1 = true">宽度30%</tiny-button>
    <tiny-button @click="boxVisibility2 = true">宽度60%</tiny-button>
    <tiny-dialog-box v-model:visible="boxVisibility1" title="消息" width="30%" dialog-class="mydialogBox">
      <span>dialog-box内容</span>
      <template #footer>
        <tiny-button type="primary" @click="boxVisibility1 = false">确 定</tiny-button>
      </template>
    </tiny-dialog-box>
    <tiny-dialog-box v-model:visible="boxVisibility2" title="消息" width="60%">
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

<style scoped>
.mydialogBox {
  background: rgba(150, 137, 137, 0.8);
}
</style>
