<template>
  <tiny-calendar-view
    :events="eventslist"
    :year="2023"
    :month="5"
    @prev-week-click="prevWeekClick"
    @next-week-click="nextWeekClick"
    @week-change="weekChange"
    @year-change="yearChange"
    @month-change="monthChange"
  >
  </tiny-calendar-view>
</template>

<script>
import { CalendarView } from '@opentiny/vue'

export default {
  components: {
    TinyCalendarView: CalendarView
  },
  data() {
    return {
      eventslist: []
    }
  },
  methods: {
    prevWeekClick(date) {
      console.log(date)
    },
    nextWeekClick(date) {
      console.log(date)
    },
    weekChange(oldVal, newVal) {
      console.log(oldVal, newVal)
    },
    yearChange(oldVal, newVal) {
      console.log(oldVal, newVal)
    },
    monthChange(oldVal, newVal) {
      console.log(oldVal, newVal)
    }
  }
}
</script>
