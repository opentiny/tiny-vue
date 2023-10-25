<template>
  <tiny-calendar-view
    ref="calendar"
    :multi-select="true"
    :year="2023"
    :month="5"
    :modes="[]"
    :set-day-bg-color="setDayBgColor"
    @selected-date-change="selectedDateChange"
  >
    <template #tool>
      <tiny-button type="primary" @click="setDays('workingDays')" class="mr-2">工作日</tiny-button>
      <tiny-button type="success" @click="setDays('offDays')" class="mr-2">休息日</tiny-button>
      <tiny-button type="warning" @click="setDays('holidays')">节假日</tiny-button>
    </template>
  </tiny-calendar-view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  CalendarView as TinyCalendarView,
  Button as TinyButton,
  Modal
} from '@opentiny/vue'

const workingDays = ref([])
const offDays = ref([])
const holidays = ref([])
const selectedDate = ref([])

const map = {
  workingDays,
  offDays,
  holidays
}

const setDays = (type) => {
  if (!selectedDate.value.length) {
    Modal.message('请选择日期')
    return
  }
  map[type].value.push(...selectedDate.value)
  selectedDate.value = []
}

const setDayBgColor = (date) => {
  if (workingDays.value.includes(date)) {
    return 'blue'
  }
  if (offDays.value.includes(date)) {
    return 'green'
  }
  if (holidays.value.includes(date)) {
    return 'yellow'
  }

  return ''
}

const selectedDateChange = (date) => {
  selectedDate.value = date
}
</script>
