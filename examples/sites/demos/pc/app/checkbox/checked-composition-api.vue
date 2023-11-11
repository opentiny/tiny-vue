<template>
  <tiny-checkbox-group v-model="checkedData">
    <tiny-checkbox label="复选框1" name="name1"></tiny-checkbox>
    <tiny-checkbox label="复选框2" name="name2" checked></tiny-checkbox>
    <tiny-checkbox label="复选框3" name="name3"></tiny-checkbox>
  </tiny-checkbox-group>
</template>

<script setup>
import { ref } from 'vue'
import { Checkbox as TinyCheckbox, CheckboxGroup as TinyCheckboxGroup } from '@opentiny/vue'

const checkedData = ref(['复选框1'])
</script>
