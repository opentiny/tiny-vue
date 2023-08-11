<template>
  <tiny-layout>
    <tiny-row>
      <tiny-col :span="6">
        <span>年份单选：</span>
        <tiny-date-picker v-model="value1" type="year" placeholder="选择年份单选"></tiny-date-picker>
        值：{{ value1 }}
      </tiny-col>
      <tiny-col :span="6">
        <span>年份多选：</span>
        <tiny-date-picker v-model="value2" type="years" placeholder="选择年份多选"></tiny-date-picker>
        值：{{ value2 }}
      </tiny-col>
    </tiny-row>
    <br />
    <tiny-row>
      <tiny-col :span="6">
        <span>年份范围选择：</span>
        <tiny-date-picker v-model="value3" type="yearrange" placeholder="选择年份范围"></tiny-date-picker>
        值：{{ value3 }}
      </tiny-col>
      <tiny-col :span="6">
        月份范围选择：
        <tiny-date-picker v-model="value4" type="monthrange" style="width: 100%"></tiny-date-picker>
        值：{{ value4 }}
      </tiny-col>
    </tiny-row>
  </tiny-layout>
</template>

<script setup>
import { ref } from 'vue'
import { Layout as TinyLayout, Row as TinyRow, Col as TinyCol, DatePicker as TinyDatePicker } from '@opentiny/vue'

const value1 = ref('')
const value2 = ref(['2021-01-01T16:00:00.000Z', '2000-01-01T16:00:00.000Z'])
const value3 = ref('')
const value4 = ref('')
</script>
