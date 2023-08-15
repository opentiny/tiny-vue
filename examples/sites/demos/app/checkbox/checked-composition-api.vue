<template>
  <tiny-checkbox-group v-model="checked">
    <tiny-checkbox label="复选框1" name="name1"></tiny-checkbox>
    <tiny-checkbox label="复选框2" name="name2" disabled></tiny-checkbox>
    <tiny-checkbox label="复选框3" name="name3" disabled></tiny-checkbox>
  </tiny-checkbox-group>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Checkbox as TinyCheckbox, CheckboxGroup as TinyCheckboxGroup } from '@opentiny/vue'

const checked = ref(['复选框1', '复选框3'])
</script>
