<template>
  <tiny-button-group :data="groupData" :border="false" v-model="checkedVal"></tiny-button-group>
</template>

<script setup>
import { ref } from 'vue'
import { ButtonGroup as TinyButtonGroup } from '@opentiny/vue'

const checkedVal = ref('Button4')
const groupData = ref([
  { text: 'Button4', value: 'Button4' },
  { text: 'Button5', value: 'Button5' },
  { text: 'Button6', value: 'Button6' }
])
</script>
