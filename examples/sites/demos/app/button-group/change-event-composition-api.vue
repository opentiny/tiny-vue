<template>
  <div>
    <tiny-button-group :data="groupData" v-model="checkedVal" @change="handleChange"></tiny-button-group>
    <span>当前选中值：{{ checkedVal }}</span>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { ButtonGroup as TinyButtonGroup, Notify } from '@opentiny/vue'

const checkedVal = ref('Button1')
const groupData = ref([
  { text: 'Button1', value: 'Button1' },
  { text: 'Button2', value: 'Button2' },
  { text: 'Button3', value: 'Button3' }
])

function handleChange(val) {
  Notify({
    title: 'change事件',
    message: `触发change事件，当前选中的值为${val}`
  })
}
</script>
