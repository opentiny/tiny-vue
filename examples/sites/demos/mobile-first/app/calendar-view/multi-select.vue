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
import { TinyCalendarView, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyCalendarView
  },
  data() {
    return {
      eventslist: []
    }
  },
  methods: {
    selectedDateChange(date) {
      TinyModal.message({ message: `当前选择${JSON.stringify(date)}`, status: 'info' })
    }
  }
}
</script>
