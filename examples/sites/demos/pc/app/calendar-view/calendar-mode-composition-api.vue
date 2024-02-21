<template>
  <tiny-calendar-view :events="eventslist" :year="2023" :month="6" :modes="['month', 'timeline', 'schedule']">
  </tiny-calendar-view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CalendarView as TinyCalendarView } from '@opentiny/vue'

const eventslist = ref([])
</script>
