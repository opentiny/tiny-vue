<template>
  <div>
    <tiny-checkbox-group v-model="checked" @change="valueChange">
      <tiny-checkbox-button label="复选框1"></tiny-checkbox-button>
      <tiny-checkbox-button label="复选框2"></tiny-checkbox-button>
    </tiny-checkbox-group>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CheckboxButton as TinyCheckboxButton, CheckboxGroup as TinyCheckboxGroup, Modal } from '@opentiny/vue'

const checked = ref(['复选框1'])

function valueChange(val) {
  Modal.message({ message: `change 事件触发了，选中值为：${val}`, status: 'info' })
}
</script>
