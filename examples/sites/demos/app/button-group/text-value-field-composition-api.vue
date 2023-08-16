<template>
  <tiny-button-group :data="groupData" :text-field="textField" :value-field="valueField"></tiny-button-group>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { ButtonGroup as TinyButtonGroup } from '@opentiny/vue'

const textField = ref('text-key')
const valueField = ref('value-key')
const groupData = ref([
  { 'text-key': 'Button1', 'value-key': 1 },
  { 'text-key': 'Button2', 'value-key': 2 },
  { 'text-key': 'Button3', 'value-key': 3 }
])
</script>
