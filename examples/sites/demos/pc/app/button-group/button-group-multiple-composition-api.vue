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
  { text: 'Button01', value: 'Button01' },
  { text: 'Button02', value: 'Button02' },
  { text: 'Button03', value: 'Button03' },
  { text: 'Button04', value: 'Button04' },
  { text: 'Button05', value: 'Button05' },
  { text: 'Button06', value: 'Button06' },
  { text: 'Button07', value: 'Button07' },
  { text: 'Button08', value: 'Button08' },
  { text: 'Button09', value: 'Button09' },
  { text: 'Button10', value: 'Button10' },
  { text: 'Button11', value: 'Button11' },
  { text: 'Button12', value: 'Button12' }
])
</script>
