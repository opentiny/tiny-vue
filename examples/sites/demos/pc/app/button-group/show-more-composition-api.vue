<template>
  <div>
    <tiny-button-group :data="groupData" :show-more="3" v-model="checkedVal"></tiny-button-group>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ButtonGroup as TinyButtonGroup } from '@opentiny/vue'

const checkedVal = ref('Button1')
const groupData = ref([
  { text: 'Button1', value: 'Button1' },
  { text: 'Button2', value: 'Button2' },
  { text: 'Button3', value: 'Button3' },
  { text: 'Button4', value: 'Button4' },
  { text: 'Button5', value: 'Button5' }
])
</script>
