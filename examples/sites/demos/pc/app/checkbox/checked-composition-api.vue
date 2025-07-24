<template>
  <tiny-checkbox-group v-model="checkedData">
    <tiny-checkbox label="复选框 1" name="name1"></tiny-checkbox>
    <tiny-checkbox label="复选框 2" name="name2" checked></tiny-checkbox>
    <tiny-checkbox label="复选框 3" name="name3"></tiny-checkbox>
  </tiny-checkbox-group>
</template>

<script setup>
import { ref } from 'vue'
import { TinyCheckbox, TinyCheckboxGroup } from '@opentiny/vue'

const checkedData = ref(['复选框 1'])
</script>
