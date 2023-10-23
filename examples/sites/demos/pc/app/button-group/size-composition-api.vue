<template>
  <div>
    <div>
      <tiny-button-group size="mini" :data="groupData" v-model="checkedVal"></tiny-button-group>
      <span>当前选中值：{{ checkedVal }}</span>
    </div>
    <div style="margin-top: 20px">
      <tiny-button-group size="small" :data="groupData" v-model="checkedVal"></tiny-button-group>
      <span>当前选中值：{{ checkedVal }}</span>
    </div>
    <div style="margin-top: 20px">
      <tiny-button-group size="medium" :data="groupData" v-model="checkedVal"></tiny-button-group>
      <span>当前选中值：{{ checkedVal }}</span>
    </div>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { ButtonGroup as TinyButtonGroup } from '@opentiny/vue'

const checkedVal = ref('Button1')
const groupData = ref([
  { text: 'Button1', value: 'Button1' },
  { text: 'Button2', value: 'Button2' },
  { text: 'Button3', value: 'Button3' }
])
</script>
