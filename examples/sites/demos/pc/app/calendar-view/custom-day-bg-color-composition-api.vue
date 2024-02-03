<template>
  <tiny-calendar-view :events="eventslist" :year="2023" :month="5" :set-day-bg-color="setDayBgColor">
  </tiny-calendar-view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CalendarView as TinyCalendarView } from '@opentiny/vue'

const eventslist = ref([])

const setDayBgColor = (date) => {
  if (date.split('-')[2] === '10') {
    return 'red'
  }
  return ''
}
</script>
