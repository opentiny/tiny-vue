<template>
  <div>
    <tiny-button-group :data="groupData" v-model="checkedVal" @change="handleChange"></tiny-button-group>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ButtonGroup as TinyButtonGroup, Modal } from '@opentiny/vue'

const checkedVal = ref('Button1')
const groupData = ref([
  { text: 'Button1', value: 'Button1' },
  { text: 'Button2', value: 'Button2' },
  { text: 'Button3', value: 'Button3' }
])

function handleChange(val) {
  Modal.message('change事件触发了')
}
</script>
