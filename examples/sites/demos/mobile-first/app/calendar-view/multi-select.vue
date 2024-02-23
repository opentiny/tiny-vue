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

<script>
import { CalendarView, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyCalendarView: CalendarView
  },
  data() {
    return {
      eventslist: []
    }
  },
  methods: {
    selectedDateChange(date) {
      Modal.message({ message: `当前选择${JSON.stringify(date)}`, status: 'info' })
    }
  }
}
</script>
