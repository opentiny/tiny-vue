<template>
  <tiny-calendar-view
    ref="calendar"
    v-model="selectedDates"
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
import { TinyCalendarView, TinyButton, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyCalendarView,
    TinyButton
  },
  data() {
    return {
      selectedDates: [],
      workingDays: [],
      offDays: [],
      holidays: [],
      selectedDate: []
    }
  },
  methods: {
    setDays(type) {
      if (!this.selectedDate.length) {
        TinyModal.message({ message: '请选择日期', status: 'info' })
        return
      }
      this[type].push(...this.selectedDate)

      this.selectedDate.forEach((date) => {
        if (type === 'workingDays') {
          this.removeFromArray(this.offDays, date)
          this.removeFromArray(this.holidays, date)
        } else if (type === 'offDays') {
          this.removeFromArray(this.holidays, date)
          this.removeFromArray(this.workingDays, date)
        } else {
          this.removeFromArray(this.offDays, date)
          this.removeFromArray(this.workingDays, date)
        }
      })
      this.selectedDates = []
      this.selectedDate = []
    },
    removeFromArray(array, item) {
      const index = array.indexOf(item)
      if (index !== -1) {
        array.splice(index, 1)
      }
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
