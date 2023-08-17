<template>
  <tiny-layout>
    <tiny-row>
      <tiny-col :span="6">
        <span>周：</span>
        <tiny-date-picker v-model="value1" type="week" placeholder="选择周" format="WW"></tiny-date-picker>
      </tiny-col>
      <tiny-col :span="6">
        <span>年：</span>
        <tiny-date-picker v-model="value2" type="year" placeholder="选择年" format="yyyy"></tiny-date-picker>
      </tiny-col>
    </tiny-row>
    <tiny-row>
      <tiny-col :span="6">
        <span>月：</span>
        <tiny-date-picker v-model="value3" type="month" placeholder="选择月" format="MM"></tiny-date-picker>
      </tiny-col>
      <tiny-col :span="6">
        <span>日：</span>
        <tiny-date-picker v-model="value4" type="date" placeholder="选择日期" format="dd"></tiny-date-picker>
      </tiny-col>
    </tiny-row>
  </tiny-layout>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Layout as TinyLayout, Row as TinyRow, Col as TinyCol, DatePicker as TinyDatePicker } from '@opentiny/vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
</script>
