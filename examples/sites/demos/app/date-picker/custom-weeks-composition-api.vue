<template>
  <div>
    {{ eachWeekFirstDay }}
    <tiny-date-picker
      v-model="value"
      :picker-options="pickerOptionsDateRange"
      show-week-number
      :format-weeks="formatWeeks"
    ></tiny-date-picker>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DatePicker as TinyDatePicker } from '@opentiny/vue'

const eachWeekFirstDay = ref([])
const value = ref('')
const pickerOptionsDateRange = ref({
  firstDayOfWeek: 7
})

function formatWeeks(customWeeks, weekFirstDays) {
  eachWeekFirstDay.value = weekFirstDays
  return customWeeks + 'w'
}
</script>
