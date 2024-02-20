<template>
  <div>
    <span>单选组实现只读：</span>
    <tiny-radio-group display-only v-model="value1" :options="options"></tiny-radio-group>
    <br />
    <br />
    <span>每个单选项实现只读：</span>
    <tiny-radio display-only v-model="value" label="1">选项一</tiny-radio>
    <tiny-radio display-only v-model="value" label="2" text="选项二"></tiny-radio>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Radio as TinyRadio, RadioGroup as TinyRadioGroup } from '@opentiny/vue'

const value = ref('1')
const value1 = ref('B')
const options = ref([
  { label: 'A', text: '很好' },
  { label: 'B', text: '一般' }
])
</script>
