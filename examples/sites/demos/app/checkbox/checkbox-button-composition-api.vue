<template>
  <div>
    <tiny-checkbox-group v-model="checked" fill="#409EFF">
      <tiny-checkbox-button label="复选框1" checked true-label="真文本" false-label="假文本"></tiny-checkbox-button>
    </tiny-checkbox-group>
    <tiny-button @click="getValue">获取文本</tiny-button>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import {
  CheckboxButton as TinyCheckboxButton,
  CheckboxGroup as TinyCheckboxGroup,
  Modal,
  Button as TinyButton
} from '@opentiny/vue'

const checked = ref('')

function getValue() {
  Modal.message({
    message: 'change 事件，当前选中的值为:' + checked.value,
    status: 'info'
  })
}
</script>
