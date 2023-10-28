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

<script>
import { CalendarView, Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyCalendarView: CalendarView,
    TinyButton: Button
  },
  data() {
    return {
      workingDays: [],
      offDays: [],
      holidays: [],
      selectedDate: []
    }
  },
  methods: {
    setDays(type) {
      if (!this.selectedDate.length) {
        Modal.message('请选择日期')
        return
      }
      this[type].push(...this.selectedDate)
      this.selectedDate = []
    },
    setDayBgColor(date) {
      if (this.workingDays.includes(date)) {
        return 'blue'
      }
      if (this.offDays.includes(date)) {
        return 'green'
      }
      if (this.holidays.includes(date)) {
        return 'yellow'
      }

      return ''
    },
    selectedDateChange(date) {
      this.selectedDate = date
    }
  }
}
</script>
