<template>
  <div>
    <tiny-button-group
      v-model="checkedVal"
      :data="groupData"
      :text-field="textField"
      :value-field="valueField"
    ></tiny-button-group>
    <div class="mt-12">当前选中值：{{ checkedVal }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ButtonGroup as TinyButtonGroup } from '@opentiny/vue'

const checkedVal = ref(1)
const textField = ref('text-key')
const valueField = ref('value-key')
const groupData = ref([
  { 'text-key': 'Button1', 'value-key': 1 },
  { 'text-key': 'Button2', 'value-key': 2 },
  { 'text-key': 'Button3', 'value-key': 3 }
])
</script>

<style scoped>
.mt-12 {
  margin-top: 12px;
}
</style>
