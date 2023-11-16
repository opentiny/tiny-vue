<template>
  <tiny-checkbox-group v-model="checked">
    <tiny-checkbox label="复选框1">
      <template #default>
        <span style="color: red">复选框1</span>
      </template>
    </tiny-checkbox>
    <tiny-checkbox label="复选框2">
      <template #default>
        <span style="color: blue">复选框2</span>
      </template>
    </tiny-checkbox>
  </tiny-checkbox-group>
</template>

<script setup>
import { ref } from 'vue'
import { Checkbox as TinyCheckbox, CheckboxGroup as TinyCheckboxGroup } from '@opentiny/vue'

const checked = ref(['复选框1'])
</script>
