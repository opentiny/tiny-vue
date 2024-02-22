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

<script setup lang="ts">
import { ref } from 'vue'
import { CalendarView as TinyCalendarView } from '@opentiny/vue'

const eventslist = ref([])

const prevWeekClick = (date) => {
  console.log(date)
}

const nextWeekClick = (date) => {
  console.log(date)
}

const weekChange = (oldVal, newVal) => {
  console.log(oldVal, newVal)
}

const yearChange = (oldVal, newVal) => {
  console.log(oldVal, newVal)
}

const monthChange = (oldVal, newVal) => {
  console.log(oldVal, newVal)
}
</script>
