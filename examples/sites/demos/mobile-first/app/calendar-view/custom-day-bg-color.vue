<template>
  <tiny-calendar-view :events="eventslist" :year="2023" :month="5" :set-day-bg-color="setDayBgColor">
  </tiny-calendar-view>
</template>

<script>
import { TinyCalendarView } from '@opentiny/vue'

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
    setDayBgColor(date) {
      if (date.split('-')[2] === '10') {
        return 'red'
      }
      return ''
    }
  }
}
</script>
