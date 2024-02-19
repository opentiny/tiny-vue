<template>
  <div>
    <div>
      <tiny-radio v-model="value" :label="true">关闭时销毁</tiny-radio>
      <tiny-radio v-model="value" :label="false">关闭时不销毁</tiny-radio>
    </div>
    <br />

    <tiny-button @click="boxVisibility = true">打开弹框</tiny-button>

    <tiny-dialog-box :visible="boxVisibility" @update:visible="boxVisibility = $event" :destroy-on-close="value">
      <span>对话框内容</span>
      <template #footer>
        <tiny-button type="primary" @click="boxVisibility = false"> 确定 </tiny-button>
      </template>
    </tiny-dialog-box>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Button as TinyButton, DialogBox as TinyDialogBox, Radio as TinyRadio } from '@opentiny/vue'

const value = ref(true)
const boxVisibility = ref(false)
</script>
