<template>
  <div>
    <tiny-button-group size="mini" :data="miniGroupData" :border="false" v-model="miniCheckedVal"></tiny-button-group>
    <span>当前选中值：{{ miniCheckedVal }}</span>
  </div>
  <div style="margin-top: 20px">
    <tiny-button-group :data="groupData" :border="false" v-model="checkedVal"></tiny-button-group>
    <span>当前选中值：{{ checkedVal }}</span>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { ButtonGroup as TinyButtonGroup } from '@opentiny/vue'

const miniCheckedVal = ref('Button1')
const checkedVal = ref('Button4')
const miniGroupData = ref([
  { text: 'Button1', value: 'Button1' },
  { text: 'Button2', value: 'Button2' },
  { text: 'Button3', value: 'Button3' }
])
const groupData = ref([
  { text: 'Button4', value: 'Button4' },
  { text: 'Button5', value: 'Button5' },
  { text: 'Button6', value: 'Button6' }
])
</script>
