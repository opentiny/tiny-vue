<template>
  <div>
    <tiny-checkbox v-model="checked" text="复选框" true-label="真文本" false-label="假文本"></tiny-checkbox>
    <tiny-button @click="getValue">获取文本</tiny-button>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Checkbox as TinyCheckbox, Modal, Button as TinyButton } from '@opentiny/vue'

const checked = ref('')

function getValue() {
  Modal.message({
    message: 'change 事件，当前选中的值为:' + checked.value,
    status: 'info'
  })
}
</script>
