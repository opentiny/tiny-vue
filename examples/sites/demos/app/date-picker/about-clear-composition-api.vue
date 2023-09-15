<template>
  <tiny-layout>
    <tiny-row>
      <tiny-col :span="6">
        <label>不可清除：</label>
        <tiny-date-picker v-model="value1" :clearable="false"></tiny-date-picker>
      </tiny-col>
      <tiny-col :span="6">
        <label>自定义清除图标：</label>
        <tiny-date-picker v-model="value2" :clear-icon="IconMinus"></tiny-date-picker>
      </tiny-col>
    </tiny-row>
  </tiny-layout>
</template>

<script setup>
import { ref } from 'vue'
import { Layout as TinyLayout, Row as TinyRow, Col as TinyCol, DatePicker as TinyDatePicker } from '@opentiny/vue'
import { iconMinus } from '@opentiny/vue-icon'

const value1 = ref(new Date())
const value2 = ref(new Date('2023-05-24'))
const IconMinus = iconMinus()
</script>
