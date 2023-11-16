<template>
  <div>
    <tiny-button-group :data="groupData" v-model="checkedVal"></tiny-button-group>
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
  { text: 'Button5', value: 'Button5' },
  { text: 'Button6', value: 'Button6' },
  { text: 'Button7', value: 'Button7' },
  { text: 'Button8', value: 'Button8' },
  { text: 'Button9', value: 'Button9' },
  { text: 'Button10', value: 'Button10' },
  { text: 'Button11', value: 'Button11' },
  { text: 'Button12', value: 'Button12' }
])
</script>
