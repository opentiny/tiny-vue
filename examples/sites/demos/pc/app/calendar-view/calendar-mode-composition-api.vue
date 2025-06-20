<template>
  <tiny-calendar-view
    :events="eventslist"
    :year="2023"
    :month="6"
    :modes="['month', 'timeline', 'schedule']"
    :show-back-today="false"
  >
  </tiny-calendar-view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TinyCalendarView } from '@opentiny/vue'

const eventslist = ref([])
</script>
