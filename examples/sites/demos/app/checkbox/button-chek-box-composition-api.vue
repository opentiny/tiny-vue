<template>
  <div>
    <tiny-checkbox-button
      v-model="checked"
      text="复选框"
      true-label="真文本"
      false-label="假文本"
    ></tiny-checkbox-button>
    <button @click="getValue">获取文本</button>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { CheckboxButton as TinyCheckboxButton, Modal } from '@opentiny/vue'

const checked = ref('')

function getValue() {
  Modal.message({
    message: 'change 事件，当前选中的值为:' + checked.value,
    status: 'info'
  })
}
</script>
