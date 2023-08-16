<template>
  <tiny-layout>
    <tiny-row>
      <tiny-col :span="6">
        <label>左对齐：</label>
        <tiny-date-picker v-model="value" align="left"></tiny-date-picker>
      </tiny-col>
      <tiny-col :span="6">
        <label>右对齐：</label>
        <tiny-date-picker v-model="value" align="right"></tiny-date-picker>
      </tiny-col>
      <tiny-col :span="6">
        <label>居中对齐：</label>
        <tiny-date-picker v-model="value" align="center"></tiny-date-picker>
      </tiny-col>
    </tiny-row>
  </tiny-layout>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Layout as TinyLayout, Row as TinyRow, Col as TinyCol, DatePicker as TinyDatePicker } from '@opentiny/vue'

const value = ref('')
</script>
