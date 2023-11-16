<template>
  <tiny-layout>
    <tiny-row>
      <tiny-col :span="4">
        <label class="demo-date-picker-label">focus:</label>
        <tiny-date-picker v-model="valueFocus" @focus="handleFocus"></tiny-date-picker>
      </tiny-col>
      <tiny-col :span="4">
        <label class="demo-date-picker-label">blur:</label>
        <tiny-date-picker v-model="valueBlur" @blur="handleBlur"></tiny-date-picker>
      </tiny-col>
      <tiny-col :span="4">
        <label class="demo-date-picker-label">change:</label>
        <tiny-date-picker v-model="valueChange" @change="handleChange"></tiny-date-picker>
      </tiny-col>
    </tiny-row>
    <tiny-row>
      <tiny-col :span="12">
        <label class="demo-date-picker-label">onPick:</label>
        <tiny-date-picker v-model="valueOnPick" type="daterange" :picker-options="pickerOptions"></tiny-date-picker>
      </tiny-col>
    </tiny-row>
  </tiny-layout>
</template>

<script setup>
import { ref } from 'vue'
import {
  Layout as TinyLayout,
  Row as TinyRow,
  Col as TinyCol,
  DatePicker as TinyDatePicker,
  Modal
} from '@opentiny/vue'

const valueFocus = ref('')
const valueBlur = ref('')
const valueChange = ref('')
const valueOnPick = ref('')

function handleFocus() {
  Modal.message({ message: '触发 focus 事件', status: 'info' })
}

function handleBlur() {
  Modal.message({ message: '触发 blur 事件', status: 'info' })
}

function handleChange(value) {
  Modal.message({ message: '触发 change 事件，组件绑定值为：' + value, status: 'info' })
}

const pickerOptions = {
  onPick: ({ minDate, maxDate }) => {
    Modal.message({ message: `触发 onPick 事件，开始日期为：${minDate}，结束日期为：${maxDate}`, status: 'info' })
  }
}
</script>

<style scoped>
.demo-date-picker-label {
  display: inline-block;
  margin: 12px 0;
}
</style>
