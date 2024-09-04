<template>
  <tiny-checkbox-group v-model="checked" size="default">
    <tiny-checkbox-button label="复选框1"></tiny-checkbox-button>
    <tiny-checkbox-button label="复选框2"></tiny-checkbox-button>
  </tiny-checkbox-group>
</template>

<script setup>
import { ref } from 'vue'
import { CheckboxButton as TinyCheckboxButton, CheckboxGroup as TinyCheckboxGroup } from '@opentiny/vue'

const checked = ref(['复选框1'])
</script>
