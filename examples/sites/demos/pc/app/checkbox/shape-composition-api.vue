<template>
  <div>
    <tiny-checkbox v-model="checked" shape="filter">复选框1</tiny-checkbox>
    <tiny-checkbox-group v-model="checkedArr" shape="filter">
      <tiny-checkbox label="复选框1"></tiny-checkbox>
      <tiny-checkbox label="复选框2">复选框2复选框2复选框2复选框2复选框2复选框2</tiny-checkbox>
    </tiny-checkbox-group>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Checkbox as TinyCheckbox, CheckboxGroup as TinyCheckboxGroup } from '@opentiny/vue'

const checked = ref(true)
const checkedArr = ref(['复选框1'])
</script>

<style scoped>
.tiny-checkbox-group {
  margin-top: 20px;
}
</style>
