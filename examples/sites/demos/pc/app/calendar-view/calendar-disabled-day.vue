<template>
  <tiny-calendar-view :events="eventslist" :year="2023" :month="5" :disabled="disabled"> </tiny-calendar-view>
</template>

<script>
import { CalendarView } from '@opentiny/vue'

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
    disabled(date) {
      return date.split('-')[2] < 15
    }
  }
}
</script>
