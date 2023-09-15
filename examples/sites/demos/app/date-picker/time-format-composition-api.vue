<template>
  <tiny-layout>
    <tiny-row>
      <tiny-col :span="4">
        <tiny-date-picker
          v-model="value"
          type="datetime"
          format="yyyy 年 MM 月 dd 日"
          time-format="HH 时 mm 分 ss 秒"
        ></tiny-date-picker>
      </tiny-col>
      <tiny-col :span="4">
        <tiny-date-picker
          v-model="value"
          type="datetime"
          format="yyyy 年 MM 月 dd 日"
          time-format="HH - mm - ss"
        ></tiny-date-picker>
      </tiny-col>
    </tiny-row>
  </tiny-layout>
</template>

<script setup>
import { ref } from 'vue'
import { DatePicker as TinyDatePicker, Layout as TinyLayout, Row as TinyRow, Col as TinyCol } from '@opentiny/vue'

const value = ref(new Date())
</script>
