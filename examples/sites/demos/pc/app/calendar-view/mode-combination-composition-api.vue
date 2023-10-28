<template>
  <tiny-calendar-view :modes="['timeline', 'schedule']" mode="timeline"></tiny-calendar-view>
</template>

<script setup lang="ts">
import { CalendarView as TinyCalendarView } from '@opentiny/vue'
</script>
