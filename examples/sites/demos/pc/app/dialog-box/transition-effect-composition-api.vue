<template>
  <div>
    <tiny-button @click="boxVisibility = true"> 启动弹窗 </tiny-button>
    <tiny-dialog-box
      dialog-transition="enlarge"
      :visible="boxVisibility"
      @update:visible="boxVisibility = $event"
      title="消息"
      width="30%"
    >
      <span>启动弹窗动效</span>
      <template #footer>
        <tiny-button @click="boxVisibility = false">取消</tiny-button>
        <tiny-button type="primary" @click="boxVisibility = false"> 确定 </tiny-button>
      </template>
    </tiny-dialog-box>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Button as TinyButton, DialogBox as TinyDialogBox } from '@opentiny/vue'

const boxVisibility = ref(false)
</script>
