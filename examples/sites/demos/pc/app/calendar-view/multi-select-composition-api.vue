<template>
  <tiny-calendar-view
    :events="eventslist"
    :year="2023"
    :month="5"
    :multi-select="true"
    mode="month"
    :modes="[]"
    @selected-date-change="selectedDateChange"
  >
  </tiny-calendar-view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CalendarView as TinyCalendarView, Modal } from '@opentiny/vue'

const eventslist = ref([])

const selectedDateChange = (date) => {
  Modal.message(`当前选择${JSON.stringify(date)}`)
}
</script>
