<template>
  <div style="width: 270px">
    <tiny-date-picker v-model="value" :picker-options="pickerOptions"></tiny-date-picker>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DatePicker as TinyDatePicker } from '@opentiny/vue'

const value = ref('')
const pickerOptions = ref({
  shortcuts: [
    {
      text: '今天',
      onClick(picker) {
        const date = new Date()
        picker.$emit('pick', date)
      }
    },
    {
      text: '昨天',
      onClick(picker) {
        const date = new Date()
        date.setTime(date.getTime() - 3600 * 1000 * 24)
        picker.$emit('pick', date)
      }
    },
    {
      text: '一周前',
      onClick(picker) {
        const date = new Date()
        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
        picker.$emit('pick', date)
      }
    }
  ]
})
</script>
