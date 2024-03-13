<template>
  <tiny-calendar-view :events="eventslist" :year="2023" :month="5" :disabled="disabled"></tiny-calendar-view>
</template>

<script setup>
import { ref } from 'vue'
import { CalendarView as TinyCalendarView } from '@opentiny/vue'

const eventslist = ref([])

const disabled = (date) => {
  return date.split('-')[2] < 15
}
</script>
