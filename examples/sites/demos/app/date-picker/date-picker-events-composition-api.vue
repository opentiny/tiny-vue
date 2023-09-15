<template>
  <tiny-layout>
    <tiny-row>
      <tiny-col :span="4">
        <label>blur：</label>
        <tiny-date-picker v-model="value" @blur="handleBlur"></tiny-date-picker>
      </tiny-col>
      <tiny-col :span="4">
        <label>change：</label>
        <tiny-date-picker v-model="value" @change="handleChange"></tiny-date-picker>
      </tiny-col>
      <tiny-col :span="4">
        <label>focus：</label>
        <tiny-date-picker v-model="value" @focus="handleFocus"></tiny-date-picker>
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

const value = ref('')

function handleBlur() {
  Modal.message({ message: '可获取组件实例', status: 'info' })
}

function handleChange(value) {
  Modal.message({ message: '组件绑定值为：' + value, status: 'info' })
}

function handleFocus() {
  Modal.message({ message: '回调参数为组件实例', status: 'info' })
}
</script>
