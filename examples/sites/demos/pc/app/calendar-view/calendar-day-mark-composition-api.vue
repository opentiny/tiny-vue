<template>
  <tiny-calendar-view
    :events="eventslist"
    :year="2023"
    :month="5"
    mode="timeline"
    :show-mark="showMark"
    mark-color="red"
  >
  </tiny-calendar-view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CalendarView as TinyCalendarView } from '@opentiny/vue'

const eventslist = ref([])

const showMark = (date) => {
  return date.split('-')[2] < 10
}
</script>
