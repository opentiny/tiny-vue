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

<script>
import { DatePicker } from '@opentiny/vue'

export default {
  components: {
    TinyDatePicker: DatePicker
  },
  data() {
    return {
      eachWeekFirstDay: [],
      value: '',
      pickerOptionsDateRange: {
        firstDayOfWeek: 7
      }
    }
  },
  methods: {
    formatWeeks(customWeeks, weekFirstDays) {
      this.eachWeekFirstDay = weekFirstDays
      return customWeeks + 'w'
    }
  }
}
</script>
