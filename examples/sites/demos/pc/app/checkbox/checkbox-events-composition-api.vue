<template>
  <div>
    <tiny-checkbox-group v-model="checked" @change="valueChange">
      <tiny-checkbox-button label="复选框1"></tiny-checkbox-button>
      <tiny-checkbox-button label="复选框2"></tiny-checkbox-button>
    </tiny-checkbox-group>
    {{ logger }}
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CheckboxButton as TinyCheckboxButton, CheckboxGroup as TinyCheckboxGroup } from '@opentiny/vue'

const checked = ref(['复选框1'])
const logger = ref('')

function valueChange(val) {
  logger.value = `当前选择：${JSON.stringify(val)}`
}
</script>
