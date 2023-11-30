<template>
  <tiny-checkbox-group v-model="checked">
    <tiny-checkbox label="复选框1"></tiny-checkbox>
    <tiny-checkbox label="复选框2" text="复选框2文本"></tiny-checkbox>
    <tiny-checkbox label="复选框3" text="复选框3">复选框3文本</tiny-checkbox>
  </tiny-checkbox-group>
</template>

<script setup>
import { ref } from 'vue'
import { Checkbox as TinyCheckbox, CheckboxGroup as TinyCheckboxGroup } from '@opentiny/vue'

const checked = ref(['复选框1', '复选框2', '复选框3'])
</script>
