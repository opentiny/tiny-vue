<template>
  <tiny-radio-group v-model="value">
    <tiny-radio :label="1">选项一</tiny-radio>
    <tiny-radio :label="2">选项二</tiny-radio>
    <tiny-radio :label="3">选项三</tiny-radio>
  </tiny-radio-group>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Radio as TinyRadio, RadioGroup as TinyRadioGroup } from '@opentiny/vue'

const value = ref(1)
</script>
