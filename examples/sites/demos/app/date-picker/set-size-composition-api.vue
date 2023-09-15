<template>
  <tiny-layout>
    <tiny-row>
      <tiny-col :span="4">
        <label>medium：</label>
        <tiny-date-picker v-model="value" size="medium"></tiny-date-picker>
      </tiny-col>
      <tiny-col :span="4">
        <label>small：</label>
        <tiny-date-picker v-model="value" size="small"></tiny-date-picker>
      </tiny-col>
      <tiny-col :span="4">
        <label>mini：</label>
        <tiny-date-picker v-model="value" size="mini"></tiny-date-picker>
      </tiny-col>
    </tiny-row>
  </tiny-layout>
</template>

<script setup>
import { ref } from 'vue'
import { Layout as TinyLayout, Row as TinyRow, Col as TinyCol, DatePicker as TinyDatePicker } from '@opentiny/vue'

const value = ref('')
</script>
