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

<script setup>
import { ref } from 'vue'
import { TinyCalendarView, TinyModal } from '@opentiny/vue'

const eventslist = ref([])

const selectedDateChange = (date) => {
  TinyModal.message({ message: `当前选择${JSON.stringify(date)}`, status: 'info' })
}
</script>
